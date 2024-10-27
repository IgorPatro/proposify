import { z } from "zod";

import { db } from "@/server/db";

import type { NextApiRequest, NextApiResponse } from "next";

export const CreateVisitBodySchema = z.object({
  device: z.string().nullish(),
  browser: z.string().nullish(),
  os: z.string().nullish(),
  ip: z.string().nullish(),
  city: z.string().nullish(),
  country: z.string().nullish(),
  latitude: z.number().nullish(),
  longitude: z.number().nullish(),
  postal: z.string().nullish(),
  state: z.string().nullish(),
  offerUuid: z.string().min(1),
  guestUuid: z.string().nullish(),
});

export type CreateVisitBody = z.infer<typeof CreateVisitBodySchema>;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const body = CreateVisitBodySchema.parse(JSON.parse(req.body));
    const { offerUuid, guestUuid, ...data } = body;

    const offer = await db.offer.findUnique({
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
      where: {
        uuid: offerUuid,
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

    const newVisit = await db.visit.create({
      data: {
        ...data,
        offer: {
          connect: {
            uuid: offerUuid,
          },
        },
      },
    });
    return res.status(200).json(newVisit);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
}
