import Link from "next/link";
import React from "react";
import { HiPlus } from "react-icons/hi";

import { CustomerCreateDialog } from "@/components/customer/customer-create-dialog/customer-create-dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToggle } from "@/hooks/use-toggle";
import { api } from "@/utils/api";
import { getDashboardOffersHref } from "@/utils/hrefs/dashboard";

import { CustomersTable } from "../customers-table/customers-table";

export const PageCustomers = () => {
  const { data: customers } = api.customer.getAllCustomersMinified.useQuery();

  const [isCreateDialogOpen, toggleCreateDialog] = useToggle();

  return (
    <Card>
      <CardHeader>
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col gap-2">
            <CardTitle>Klienci</CardTitle>
            <CardDescription className="max-w-3/4">
              Stwórz klienta, którego będziesz mógł przypisać do{" "}
              <Link className="underline" href={getDashboardOffersHref()}>
                oferty
              </Link>
              .
            </CardDescription>
          </div>
          <Button className="w-fit" onClick={toggleCreateDialog}>
            <HiPlus className="mr-2 h-5 w-5" />
            Nowy klient
          </Button>
        </div>
      </CardHeader>
      <CustomerCreateDialog
        isOpen={isCreateDialogOpen}
        onClose={toggleCreateDialog}
      />
      <CardContent>
        <CustomersTable customers={customers} />
      </CardContent>
    </Card>
  );
};
