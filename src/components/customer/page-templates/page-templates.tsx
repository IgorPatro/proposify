"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { useToggle } from "@/hooks/use-toggle";
import { type MinifiedTemplate } from "@/server/api/template/types";

import { TemplateCreateDialog } from "../template-create-dialog";
import { TemplatesTable } from "../customers-table/templates-table";

interface PageTemplatesProps {
  templates: MinifiedTemplate[];
}

export const PageTemplates = ({ templates }: PageTemplatesProps) => {
  const [isCreateDialogOpen, toggleCreateDialog] = useToggle();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Templates</h1>
      <TemplateCreateDialog
        isOpen={isCreateDialogOpen}
        onClose={toggleCreateDialog}
      />
      <TemplatesTable templates={templates} />
      <div className="flex w-full justify-end">
        <Button className="w-fit" onClick={toggleCreateDialog}>
          Create template
        </Button>
      </div>
    </div>
  );
};
