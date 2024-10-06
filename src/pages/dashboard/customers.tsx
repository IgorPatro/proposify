import React from "react";

import { Seo } from "@/components/base/seo";
import { PageCustomers } from "@/components/customer/page-customers/page-customers";
import { DashboardLayout } from "@/layouts/dashboard-layout";

const CustomersPage = () => {
  return (
    <>
      <Seo title="Klienci | Proposify" />
      <PageCustomers />
    </>
  );
};

CustomersPage.getLayout = DashboardLayout;

export default CustomersPage;
