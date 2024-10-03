import { getServerSession } from "next-auth";

import { db } from "@/server/db";

import { type MinifiedCustomer } from "./types";

export const getAllCustomersMinifiedSsr = async () => {
  const session = await getServerSession();

  if (!session) {
    throw new Error("User is not authenticated");
  }

  const company = await db.user.findUnique({
    select: {
      companyId: true,
    },
    where: {
      email: session.user.email,
    },
  });

  if (!company?.companyId) {
    throw new Error("User does not have a company");
  }

  const customers = await db.customer.findMany({
    orderBy: { updatedAt: "desc" },
    where: {
      companyId: company.companyId,
    },
  });

  return customers.map((customer) => ({
    createdAt: customer.createdAt,
    email: customer.email,
    firstName: customer.firstName,
    lastName: customer.lastName,
    phone: customer.phone,
    updatedAt: customer.updatedAt,
    uuid: customer.uuid,
  })) as MinifiedCustomer[];
};
