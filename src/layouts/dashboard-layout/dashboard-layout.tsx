import React, { type ReactNode } from "react";

import { DashboardNavigation } from "@/components/navigation/dashboard-navigation";
import { DashboardSidebar } from "@/components/sidebar/dashboard-sidebar";

export const DashboardLayout = (page: ReactNode) => {
  return (
    <>
      <DashboardSidebar />
      <div className="ml-64">
        <DashboardNavigation />
        <div className="p-10">{page}</div>
      </div>
    </>
  );
};
