import React, { useMemo } from "react";
import { Controller, FormProvider } from "react-hook-form";

import { Dialog } from "@/components/base/dialog";
import { Input } from "@/components/base/input";
import { Button } from "@/components/ui/button";
import { api } from "@/utils/api";

import { useOfferCreateForm } from "./hooks";
import { OfferCreateDialogCustomerSection } from "./offer-create-dialog-customer-section";
import { Select } from "@/components/base/select";

interface OfferCreateDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OfferCreateDialog = ({
  isOpen,
  onClose,
}: OfferCreateDialogProps) => {
  const { form, onSubmit } = useOfferCreateForm();
  const {
    control,
    formState: { errors, isSubmitting },
  } = form;

  const { data: templates } = api.template.getAll.useQuery();

  const TEMPLATE_OPTIONS = useMemo(() => {
    if (!templates) {
      return [];
    }

    return templates.map((template) => ({
      label: template.name,
      value: template.uuid,
    }));
  }, []);

  return (
    <Dialog
      header="Stwórz ofertę"
      footer={
        <Button
          className="self-end"
          isLoading={isSubmitting}
          type="button"
          onClick={onSubmit}
        >
          Dodaj
        </Button>
      }
      isOpen={isOpen}
      onClose={onClose}
    >
      <FormProvider {...form}>
        <div className="flex flex-col gap-4">
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <Input
                error={errors.name?.message}
                label="Nazwa"
                placeholder="OFF/5/2024 - Jan Kowalski"
                {...field}
              />
            )}
          />
          <OfferCreateDialogCustomerSection />
          <Controller
            control={control}
            name="templateUuid"
            render={({ field }) => (
              <Select
                name="templateUuid"
                label="Szablon"
                value={field.value}
                onChange={field.onChange}
                placeholder="Wybierz szablon"
                options={TEMPLATE_OPTIONS}
              />
            )}
          />
        </div>
      </FormProvider>
    </Dialog>
  );
};
