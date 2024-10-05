import React from "react";

import { Button } from "@/components/ui/button";
import { DashboardLayout } from "@/layouts/dashboard-layout";

const DashboardPage = () => {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
};

DashboardPage.getLayout = DashboardLayout;

export default DashboardPage;
