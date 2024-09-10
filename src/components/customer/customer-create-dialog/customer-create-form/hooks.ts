import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { type SubmitHandler, useForm } from "react-hook-form";

import { useToast } from "@/hooks/use-toast";
import { type CreateCustomerInput } from "@/server/api/customer/create-customer";
import { api } from "@/server/trpc";

import { CustomerCreateFormValidationResolver } from "./utils";

export const useCustomerCreateForm = () => {
  const { toast } = useToast();
  const router = useRouter();
  const { mutateAsync: createCustomer } =
    api.customer.createCustomer.useMutation();

  const form = useForm<CreateCustomerInput>({
    defaultValues: {
      city: "",
      country: "",
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      street: "",
      zipCode: "",
    },
    resolver: zodResolver(CustomerCreateFormValidationResolver),
  });

  const onSubmit: SubmitHandler<CreateCustomerInput> = async (data) => {
    try {
      const newCustomer = await createCustomer(data);
    } catch (error) {
      toast({
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return { form, onSubmit: form.handleSubmit(onSubmit) };
};
