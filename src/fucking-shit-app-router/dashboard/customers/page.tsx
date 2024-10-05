import React from "react";

import { PageCustomers } from "@/components/customers/page-customers/page-customers";
import { getAllCustomersMinifiedSsr } from "@/server/api/customer/get-all-customers-minified-ssr";

const CustomersPage = async () => {
  const customers = await getAllCustomersMinifiedSsr();

  return <PageCustomers customers={customers} />;
};

export default CustomersPage;
