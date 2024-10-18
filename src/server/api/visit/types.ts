import { z } from "zod";

export const VisitSchema = z.object({
  createdAt: z.date(),
  uuid: z.string(),
  tracking: z.record(z.number()),
});

export type Visit = z.infer<typeof VisitSchema>;
