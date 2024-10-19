import { z } from "zod";

import { SUBMIT_OBSERVATION_EVENT_URL } from "@/hooks/use-submit-observation-event";
import { db } from "@/server/db";

import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export const ObservationEventBodySchema = z.object({
  blockUuid: z.string(),
  guestUuid: z.string().nullish(),
  offerUuid: z.string(),
  timeSpent: z.number(),
  visitSessionUuid: z.string(),
});

export type ObservationEventBody = z.infer<typeof ObservationEventBodySchema>;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  try {
    const body = ObservationEventBodySchema.parse(JSON.parse(req.body));
    const { blockUuid, guestUuid, offerUuid, timeSpent, visitSessionUuid } =
      body;

    if (!offerUuid || !blockUuid || !timeSpent || !visitSessionUuid) {
      throw new Error("No offerUuid or tracking provided");
    }

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

    const timeSpentInSeconds = Math.floor(timeSpent / 1000);

    // Note: Create an ObservationEvent and update the VisitSession
    await db.visitSession.upsert({
      create: {
        offer: {
          connect: {
            uuid: offerUuid,
          },
        },
        uuid: visitSessionUuid,
      },
      update: {
        updatedAt: new Date(),
        uuid: visitSessionUuid,
      },
      where: {
        uuid: visitSessionUuid,
      },
    });
    await db.observationEvent.create({
      data: {
        blockUuid: blockUuid,
        timeSpent: timeSpentInSeconds,
        visitSession: {
          connect: {
            uuid: visitSessionUuid,
          },
        },
      },
    });
  } catch (error) {
    console.error(SUBMIT_OBSERVATION_EVENT_URL, error);
    return res.status(400).json({ message: "BAD_REQUEST" });
  }

  return res.status(200).json({ message: "SUCCESS" });
}
