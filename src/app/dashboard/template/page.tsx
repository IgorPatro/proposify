import React from "react";

import { PageTemplates } from "@/components/template/page-templates";
import { getAllTemplatesMinified } from "@/query/get-all-templates-minified";

const TemplatePage = async () => {
  const templates = await getAllTemplatesMinified();

  return <PageTemplates templates={templates} />;
};

export default TemplatePage;
