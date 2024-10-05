import React from "react";

import { CustomerCreateDialog } from "@/components/customer/customer-create-dialog/customer-create-dialog";
import { Button } from "@/components/ui/button";
import { useToggle } from "@/hooks/use-toggle";
import { api } from "@/utils/api";

import { CustomersTable } from "../customers-table/customers-table";

export const PageCustomers = () => {
  const { data: customers } = api.customer.getAllCustomersMinified.useQuery();

  const [isCreateDialogOpen, toggleCreateDialog] = useToggle();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Klienci</h1>
      {customers && customers.length >= 1 ? (
        <CustomersTable customers={customers} />
      ) : null}
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
