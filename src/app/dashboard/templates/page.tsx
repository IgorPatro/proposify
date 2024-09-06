import Link from "next/link";
import React from "react";

import { getAllTemplatesMinified } from "@/query/get-all-templates";

const TemplatesPage = async () => {
  const templates = await getAllTemplatesMinified();

  if (templates.length === 0) {
    return <div>No templates found</div>;
  }

  return (
    <div>
      {templates?.map((template) => (
        <Link href={`/home/templates/${template.uuid}`} key={template.uuid}>
          {template.name}
        </Link>
      ))}
    </div>
  );
};

export default TemplatesPage;
