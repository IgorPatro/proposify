import React, { useMemo } from "react";
import { type Control, Controller } from "react-hook-form";

import { Select } from "@/components/base/select";
import { CustomerCreateForm } from "@/components/customer/customer-create-dialog/customer-create-form";
import { Button } from "@/components/ui/button";
import { type Customer } from "@/server/api/customer/types";
import { type CreateOfferInput } from "@/server/api/offer/create-offer";
import { api } from "@/utils/api";

import { useOfferCreateFormContext } from "../hooks";
import { Separator } from "@/components/ui/separator";

interface OfferCreateDialogCustomerSectionProps {
  control?: Control<CreateOfferInput>;
}

export const OfferCreateDialogCustomerSection =
  ({}: OfferCreateDialogCustomerSectionProps) => {
    const [mode, setMode] = React.useState<"create" | "select">("select");

    const {
      control,
      formState: { errors },
      setValue,
    } = useOfferCreateFormContext();

    const { data: customers } = api.customer.getAllCustomersMinified.useQuery();

    const customersOptions = useMemo(() => {
      if (!customers) {
        return [];
      }

      return customers?.map((customer) => ({
        label: `${customer.firstName} ${customer.lastName} <${customer.email ?? customer.phone}>`,
        value: customer.uuid,
      }));
    }, [customers]);

    const toggleMode = () => {
      setMode((prev) => (prev === "create" ? "select" : "create"));
    };

    const onCreateNewCustomer = (customer: Customer) => {
      setMode("select");
      setValue("customerUuid", customer.uuid);
    };

    const renderBody = () => {
      if (mode === "select") {
        return (
          <>
            <Controller
              control={control}
              name="customerUuid"
              render={({ field }) => (
                <Select
                  error={errors.customerUuid?.message}
                  label="Klient"
                  name="customerUuid"
                  options={customersOptions}
                  placeholder="Wybierz klienta"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            <Button
              className="w-fit self-end"
              variant="outline"
              onClick={toggleMode}
            >
              Stwórz nowego klienta
            </Button>
          </>
        );
      }

      return (
        <div className="rounded-lg border border-primary bg-accent p-4">
          <CustomerCreateForm
            onCreateCustomerCallback={onCreateNewCustomer}
            footerClassName="flex gap-2"
            footer={
              <Button
                className="w-fit self-end underline"
                variant="link"
                onClick={toggleMode}
              >
                Wróć
              </Button>
            }
          />
        </div>
      );
    };

    return <div className="flex flex-col gap-2">{renderBody()}</div>;
  };
