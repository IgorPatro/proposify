import React, { useMemo } from "react";
import { type Control, Controller } from "react-hook-form";

import { Select } from "@/components/base/select";
import { CustomerCreateForm } from "@/components/customer/customer-create-dialog/customer-create-form";
import { Button } from "@/components/ui/button";
import { type Customer } from "@/server/api/customer/types";
import { type CreateOfferInput } from "@/server/api/offer/create-offer";
import { api } from "@/utils/api";

import { useOfferCreateFormContext } from "../hooks";

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
                  label="Customer"
                  name="customerUuid"
                  options={customersOptions}
                  placeholder="Select customer"
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
              Add new customer
            </Button>
          </>
        );
      }

      return (
        <>
          <Button
            className="w-fit self-end"
            variant="link"
            onClick={toggleMode}
          >
            Back
          </Button>
          <CustomerCreateForm
            formClassName="bg-red-200 p-4"
            onCreateCustomerCallback={onCreateNewCustomer}
          />
        </>
      );
    };

    return <div className="flex flex-col gap-2">{renderBody()}</div>;
  };
