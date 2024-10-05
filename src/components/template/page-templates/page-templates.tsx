import React from "react";

import { Button } from "@/components/ui/button";
import { useToggle } from "@/hooks/use-toggle";
import { api } from "@/utils/api";

import { TemplateCreateDialog } from "../template-create-dialog";
import { TemplatesTable } from "../templates-table/templates-table";

export const PageTemplates = () => {
  const { data: templates } = api.template.getAll.useQuery();

  const [isCreateDialogOpen, toggleCreateDialog] = useToggle();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Templates</h1>
      <TemplateCreateDialog
        isOpen={isCreateDialogOpen}
        onClose={toggleCreateDialog}
      />
      {templates && templates.length >= 1 ? (
        <TemplatesTable templates={templates} />
      ) : null}
      <div className="flex w-full justify-end">
        <Button className="w-fit" onClick={toggleCreateDialog}>
          Create template
        </Button>
      </div>
    </div>
  );
};
