import React from "react";

import { PageTemplates } from "@/components/template/page-templates";
import { getAllTemplatesMinifiedSsr } from "@/server/api/template/get-all-templates-minified-ssr";

const TemplatePage = async () => {
  const templates = await getAllTemplatesMinifiedSsr();

  return <PageTemplates templates={templates} />;
};

export default TemplatePage;
