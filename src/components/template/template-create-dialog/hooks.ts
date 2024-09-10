import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { type SubmitHandler, useForm } from "react-hook-form";

import { useToast } from "@/hooks/use-toast";
import { type CreateTemplateInput } from "@/server/api/template/create-empty";
import { api } from "@/server/trpc";
import { getEditorTemplateHref } from "@/utils/hrefs/editor";

import { TemplateCreateFormValidationResolver } from "./utils";

export const useTemplateCreateForm = () => {
  const { toast } = useToast();
  const router = useRouter();
  const { mutateAsync: createTemplate } =
    api.template.createEmpty.useMutation();

  const form = useForm<CreateTemplateInput>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(TemplateCreateFormValidationResolver),
  });

  const onSubmit: SubmitHandler<CreateTemplateInput> = async (data) => {
    try {
      const newTemplate = await createTemplate(data);
      router.push(getEditorTemplateHref(newTemplate.uuid));
    } catch (error) {
      toast({
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return { form, onSubmit: form.handleSubmit(onSubmit) };
};
