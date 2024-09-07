import React, { type ReactNode } from "react";

import { DashboardNavigation } from "@/components/navigation/dashboard-navigation";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div>
      <DashboardNavigation />
      <div className="p-10">{children}</div>
    </div>
  );
};

export default DashboardLayout;
