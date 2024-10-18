import { db } from "@/server/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

type ResponseData = {
  message: string;
};

export const TrackingBodySchema = z.object({
  tracking: z.record(z.number()),
  offerUuid: z.string(),
  guestUuid: z.string().nullish(),
});

export type TrackingBody = z.infer<typeof TrackingBodySchema>;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  try {
    const body = TrackingBodySchema.parse(JSON.parse(req.body));
    const { offerUuid, tracking, guestUuid } = body;

    if (!offerUuid || !tracking) {
      throw new Error("No offerUuid or tracking provided");
    }

    const offer = await db.offer.findUnique({
      where: {
        uuid: offerUuid,
      },
      include: {
        company: {
          select: {
            User: {
              select: {
                uuid: true,
              },
            },
          },
        },
      },
    });

    if (!offer) {
      throw new Error("Offer not found");
    }

    const companyUserUuids = offer.company.User.map((user) => user.uuid);

    // Note: Skip tracking if the guest works for the company that owns the offer
    if (guestUuid && companyUserUuids?.includes(guestUuid)) {
      throw new Error("Guest works for the company that owns the offer");
    }

    await db.visit.create({
      data: {
        offer: {
          connect: {
            uuid: offerUuid,
          },
        },
        tracking,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "BAD_REQUEST" });
  }

  return res.status(200).json({ message: "SUCCESS" });
}
