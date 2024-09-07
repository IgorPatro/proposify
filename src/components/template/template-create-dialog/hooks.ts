import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { type SubmitHandler, useForm } from "react-hook-form";

import { type CreateTemplateInput } from "@/server/api/routers/template/create-empty";
import { api } from "@/trpc/react";
import { getDashboardHref } from "@/utils/hrefs/dashboard";
import { getEditorTemplateHref } from "@/utils/hrefs/editor";

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
      const newTemplate = await createTemplate(data);
      router.push(getEditorTemplateHref(newTemplate.uuid));
    } catch (error) {
      console.log(error);
    }
  };

  return { form, onSubmit: form.handleSubmit(onSubmit) };
};
