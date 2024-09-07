"use client";

import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";
import { useToggle } from "@/hooks/use-toggle";
import { type MinifiedTemplate } from "@/query/get-all-templates";

import { TemplateCreateDialog } from "../template-create-dialog";

interface PageTemplatesProps {
  templates: MinifiedTemplate[];
}

export const PageTemplates = ({ templates }: PageTemplatesProps) => {
  const [isCreateDialogOpen, toggleCreateDialog] = useToggle();

  return (
    <div>
      <TemplateCreateDialog
        isOpen={isCreateDialogOpen}
        onClose={toggleCreateDialog}
      />
      <Button onClick={toggleCreateDialog}>Create template</Button>
      {templates?.map((template) => (
        <Link href={`/home/templates/${template.uuid}`} key={template.uuid}>
          {template.name}
        </Link>
      ))}
    </div>
  );
};
