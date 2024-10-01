import get from "lodash.get";
import { z } from "zod";

import { CustomerSchema } from "@/server/api/customer/types";

const CUSTOMER_PROPAGATION_KEYS = [
  "customer.firstName",
  "customer.lastName",
  "customer.email",
  "customer.phone",
] as const;

export const PropagationDataSchema = z.object({
  customer: CustomerSchema,
});

export type PropagationData = z.infer<typeof PropagationDataSchema>;

// Note: Blocks are stringified JSON
export const getFullyDataPropagatedBlocks = async (
  blocks: string,
  data: PropagationData,
) => {
  CUSTOMER_PROPAGATION_KEYS.forEach((key) => {
    const value = get(data, key);

    if (!value) return;

    const placeholder = `{{${key}}}`;
    blocks = blocks.replace(new RegExp(placeholder, "g"), value);
  });

  return (await JSON.parse(blocks)) as string;
};
