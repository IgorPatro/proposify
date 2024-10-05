import React from "react";

import { CustomerCreateDialog } from "@/components/customer/customer-create-dialog/customer-create-dialog";
import { Button } from "@/components/ui/button";
import { useToggle } from "@/hooks/use-toggle";
import { api } from "@/server/trpc";

import { CustomersTable } from "../customers-table/customers-table";

export const PageCustomers = () => {
  const customers = api.customer.getAllCustomersMinified.useQuery();

  const [isCreateDialogOpen, toggleCreateDialog] = useToggle();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Klienci</h1>
      <CustomersTable customers={customers} />
      <CustomerCreateDialog
        isOpen={isCreateDialogOpen}
        onClose={toggleCreateDialog}
      />
      <div className="flex w-full justify-end">
        <Button className="w-fit" onClick={toggleCreateDialog}>
          Dodaj klienta
        </Button>
      </div>
    </div>
  );
};
