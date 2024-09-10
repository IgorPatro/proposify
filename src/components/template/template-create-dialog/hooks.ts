import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { type SubmitHandler, useForm } from "react-hook-form";

import { type CreateTemplateInput } from "@/server/api/template/create-empty";
import { getEditorTemplateHref } from "@/utils/hrefs/editor";

import { TemplateCreateFormValidationResolver } from "./utils";
import { api } from "@/server/trpc";

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
