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
});

export type CreateVisitBody = z.infer<typeof CreateVisitBodySchema>;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const body = CreateVisitBodySchema.parse(JSON.parse(req.body));
    const { offerUuid, ...data } = body;

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
