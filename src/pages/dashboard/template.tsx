import React from "react";

import { Seo } from "@/components/base/seo";
import { PageTemplates } from "@/components/template/page-templates";
import { DashboardLayout } from "@/layouts/dashboard-layout";

const TemplatePage = () => {
  return (
    <>
      <Seo title="Szablony | Proposify" />
      <PageTemplates />
    </>
  );
};

TemplatePage.getLayout = DashboardLayout;

export default TemplatePage;
