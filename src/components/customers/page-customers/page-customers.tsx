"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { useToggle } from "@/hooks/use-toggle";
import { type MinifiedCustomer } from "@/server/api/customer/types";

import { CustomersTable } from "../customers-table/customers-table";

interface PageCustomersProps {
  customers: MinifiedCustomer[];
}

export const PageCustomers = ({ customers }: PageCustomersProps) => {
  const [isCreateDialogOpen, toggleCreateDialog] = useToggle();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Klienci</h1>
      <CustomersTable customers={customers} />
      <div className="flex w-full justify-end">
        <Button className="w-fit" onClick={toggleCreateDialog}>
          Create template
        </Button>
      </div>
    </div>
  );
};
