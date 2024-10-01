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

// Note: blocks will be strigified JSON
export const getFullyDataPropagatedResource = async (
  blocks: string,
  data: PropagationData,
) => {
  let result = "";

  for (const key of CUSTOMER_PROPAGATION_KEYS) {
    result = blocks.replace(new RegExp(`{{${key}}}`, "g"), get(data, key));
  }

  return result;
};
