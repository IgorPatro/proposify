import React from "react";

import { Seo } from "@/components/base/seo";
import { Button } from "@/components/ui/button";
import { DashboardLayout } from "@/layouts/dashboard-layout";

const DashboardPage = () => {
  return (
    <>
      <Seo title="Dashboard | Proposify" />
      <div>
        <Button>Click me</Button>
      </div>
    </>
  );
};

DashboardPage.getLayout = DashboardLayout;

export default DashboardPage;
