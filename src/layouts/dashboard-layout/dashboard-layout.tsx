import React, { type ReactNode } from "react";

import { DashboardNavigation } from "@/components/navigation/dashboard-navigation";
import { DashboardSidebar } from "@/components/sidebar/dashboard-sidebar";

export const DashboardLayout = (page: ReactNode) => {
  return (
    <>
      <DashboardSidebar />
      <main className="ml-64 min-h-screen bg-gray-50">
        <DashboardNavigation />
        <div className="px-10 py-6">{page}</div>
      </main>
    </>
  );
};
