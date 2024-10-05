import React from "react";

import { PageTemplates } from "@/components/template/page-templates";
import { DashboardLayout } from "@/layouts/dashboard-layout";

const TemplatePage = () => {
  return <PageTemplates />;
};

TemplatePage.getLayout = DashboardLayout;

export default TemplatePage;
