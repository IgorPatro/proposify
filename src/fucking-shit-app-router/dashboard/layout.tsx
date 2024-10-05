import React, { type ReactNode } from "react";

import { DashboardNavigation } from "@/components/navigation/dashboard-navigation";
import { DashboardSidebar } from "@/components/sidebar/dashboard-sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <main>
      <DashboardSidebar />
      <div className="ml-64">
        <DashboardNavigation />
        <div className="p-10">{children}</div>
      </div>
    </main>
  );
};

export default DashboardLayout;
