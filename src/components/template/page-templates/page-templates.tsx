import Link from "next/link";
import React from "react";
import { HiPlus } from "react-icons/hi2";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToggle } from "@/hooks/use-toggle";
import { getDashboardOffersHref } from "@/utils/hrefs/dashboard";

import { TemplateCreateDialog } from "../template-create-dialog";
import { TemplatesTable } from "../templates-table";

export const PageTemplates = () => {
  const [isCreateDialogOpen, toggleCreateDialog] = useToggle();

  return (
    <Card>
      <CardHeader>
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col gap-2">
            <CardTitle>Szablony</CardTitle>
            <CardDescription className="max-w-3/4">
              Twórz powatrzalne struktury, z których szybko możesz stworzyć{" "}
              <Link className="underline" href={getDashboardOffersHref()}>
                ofertę
              </Link>
              .
            </CardDescription>
          </div>
          <Button className="w-fit" onClick={toggleCreateDialog}>
            <HiPlus className="mr-2 h-5 w-5" />
            Nowy szablon
          </Button>
        </div>
      </CardHeader>
      <TemplateCreateDialog
        isOpen={isCreateDialogOpen}
        onClose={toggleCreateDialog}
      />
      <CardContent>
        <TemplatesTable />
      </CardContent>
    </Card>
  );
};
