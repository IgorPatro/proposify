import { db } from "@/server/db";
import { getTimeSpentPerBlock } from "@/utils/observation-event";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const visitSessionsUuidsToRemove: string[] = [];
  const observationEventsUuidsToRemove: string[] = [];

  try {
    const THIRTY_MINUTES_AGO = new Date(Date.now() - 30 * 60 * 1000);

    const visitSessionsToCheck = await db.visitSession.findMany({
      where: {
        updatedAt: {
          lt: THIRTY_MINUTES_AGO,
        },
      },
    });

    for (const visitSession of visitSessionsToCheck) {
      const observationEvents = await db.observationEvent.findMany({
        where: {
          visitSession: {
            uuid: visitSession.uuid,
          },
        },
      });

      const timeSpentPerBlock = getTimeSpentPerBlock(observationEvents);
      const totalTimeSpent = Object.values(timeSpentPerBlock).reduce(
        (acc, timeSpent) => acc + timeSpent,
        0,
      );

      visitSessionsUuidsToRemove.push(visitSession.uuid);
      observationEventsUuidsToRemove.push(
        ...observationEvents.map((o) => o.uuid),
      );

      // NOTE: Skip visits smaller than 10 seconds
      if (totalTimeSpent < 10) {
        continue;
      }

      await db.visit.create({
        data: {
          offerId: visitSession.offerId,
          timeReport: timeSpentPerBlock,
          totalTime: totalTimeSpent,
        },
      });
    }

    await db.observationEvent.deleteMany({
      where: {
        uuid: {
          in: observationEventsUuidsToRemove,
        },
      },
    });
    await db.visitSession.deleteMany({
      where: {
        uuid: {
          in: visitSessionsUuidsToRemove,
        },
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "BAD_REQUEST" });
  }

  return res.status(200).json({ message: "SUCCESS" });
}
