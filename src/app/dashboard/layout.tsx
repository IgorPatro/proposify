import React, { type ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="p-8">
      <nav>
        <ul className="flex gap-2">
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/dashboard/templates">Templates</a>
          </li>
        </ul>
      </nav>
      <div className="pt-8">{children}</div>
    </div>
  );
};

export default DashboardLayout;
