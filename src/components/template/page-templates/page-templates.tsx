import Link from "next/link";
import React from "react";
import { HiPlus } from "react-icons/hi2";

import { Button } from "@/components/ui/button";
import { useToggle } from "@/hooks/use-toggle";
import { api } from "@/utils/api";
import { getDashboardOffersHref } from "@/utils/hrefs/dashboard";

import { TemplateCreateDialog } from "../template-create-dialog";
import { TemplatesTable } from "../templates-table";

export const PageTemplates = () => {
  const { data: templates } = api.template.getAll.useQuery();

  const [isCreateDialogOpen, toggleCreateDialog] = useToggle();

  return (
    <div className="flex flex-col">
      <header className="mb-10 flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold">Szablony</h1>
          <p className="">
            Twórz powatrzalne struktury, z których szybko możesz stworzyć{" "}
            <Link className="underline" href={getDashboardOffersHref()}>
              ofertę
            </Link>
            .
          </p>
        </div>
        <Button className="w-fit" onClick={toggleCreateDialog}>
          <HiPlus className="mr-2 h-5 w-5" />
          Nowy szablon
        </Button>
      </header>
      <TemplateCreateDialog
        isOpen={isCreateDialogOpen}
        onClose={toggleCreateDialog}
      />
      <TemplatesTable templates={templates} />
    </div>
  );
};
