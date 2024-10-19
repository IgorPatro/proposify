import { z } from "zod";

export const VisitSchema = z.object({
  createdAt: z.date(),
  tracking: z.record(z.number()),
  uuid: z.string(),
});

export type Visit = z.infer<typeof VisitSchema>;
