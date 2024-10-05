import React from "react";

import { PageCustomers } from "@/components/customer/page-customers/page-customers";
import { DashboardLayout } from "@/layouts/dashboard-layout";

const CustomersPage = () => {
  return <PageCustomers />;
};

CustomersPage.getLayout = DashboardLayout;

export default CustomersPage;
