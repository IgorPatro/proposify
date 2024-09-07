import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { type SubmitHandler, useForm } from "react-hook-form";

import { type CreateTemplateInput } from "@/server/api/routers/template/create-empty";
import { api } from "@/trpc/react";
import { getDashboardHref } from "@/utils/hrefs/dashboard";

import { TemplateCreateFormValidationResolver } from "./utils";

export const useTemplateCreateForm = () => {
  const router = useRouter();
  const { mutateAsync: createTemplate } =
    api.template.createEmpty.useMutation();

  const form = useForm<CreateTemplateInput>({
    resolver: zodResolver(TemplateCreateFormValidationResolver),
  });

  const onSubmit: SubmitHandler<CreateTemplateInput> = async (data) => {
    try {
      const result = await createTemplate(data);
    } catch (error) {
      console.log(error);
    }
  };

  return { form, onSubmit: form.handleSubmit(onSubmit) };
};
