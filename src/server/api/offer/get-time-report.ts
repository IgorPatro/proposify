import { z } from "zod";

import { protectedProcedure } from "../trpc";
import { VisitSchema } from "../visit/types";

import { generateTimeReportFromVisits } from "./utils";

export const getTimeReport = protectedProcedure
  .input(z.object({ offerUuid: z.string().min(1) }))
  .query(async ({ ctx, input }) => {
    const offer = await ctx.db.offer.findUnique({
      include: {
        Visit: true,
      },
      where: { uuid: input.offerUuid },
    });

    if (!offer) {
      throw new Error("Offer not found");
    }

    const visits = z.array(VisitSchema).safeParse(offer.Visit);

    if (!visits.success) {
      throw new Error("Invalid visit data");
    }

    const blocksReport = generateTimeReportFromVisits(visits.data);
    const totalTimeSpent = Object.values(blocksReport).reduce(
      (acc, value) => acc + value,
      0,
    );

    return {
      blocks: blocksReport,
      total: totalTimeSpent,
    };
  });
