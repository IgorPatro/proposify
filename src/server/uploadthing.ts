import { createUploadthing, type FileRouter } from "uploadthing/next-legacy";

import { getServerAuthSession } from "./auth";
import { db } from "./db";

const f = createUploadthing();

export const fileRouter = {
  editor: f({ image: { maxFileSize: "16MB" } })
    .middleware(async (ctx) => {
      const session = await getServerAuthSession(ctx);

      if (!session) throw new Error("Unauthorized");

      return { userEmail: session.user.email };
    })
    .onUploadComplete(async ({ file, metadata }) => {
      try {
        const user = await db.user.findUnique({
          include: {
            company: true,
          },
          where: {
            email: metadata.userEmail,
          },
        });

        if (!user) throw new Error("User not found");
        if (!user.companyId) throw new Error("User does not have a company");

        const asset = await db.asset.create({
          data: {
            companyId: user.companyId,
            type: "image",
            url: file.url,
            userId: user.id,
          },
        });

        if (!asset) throw new Error("Error creating asset");

        return { assetId: asset.id, uploadedBy: metadata.userEmail };
      } catch (error) {
        console.error(error);
      }
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof fileRouter;
