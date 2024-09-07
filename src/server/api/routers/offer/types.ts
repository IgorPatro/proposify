import { z } from "zod";

import { BlockSchema } from "@/_blocks/types";

import { ThemeSchema } from "../template/types";

export const OfferSchema = z.object({
  blocks: z.array(BlockSchema),
  name: z.string(),
  theme: ThemeSchema,
});

export type Offer = z.infer<typeof OfferSchema>;
