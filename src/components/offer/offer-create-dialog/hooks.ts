import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { type SubmitHandler, useForm, useFormContext } from "react-hook-form";

import { toast } from "@/hooks/use-toast";
import { type CreateOfferInput } from "@/server/api/offer/create-offer";
import { api } from "@/server/trpc";
import { isAPIError } from "@/utils/error";
import { getEditorOfferHref } from "@/utils/hrefs/editor";

import { OfferCreateFormValidationResolver } from "./utils";

export const useOfferCreateForm = () => {
  const router = useRouter();
  const { mutateAsync: createOffer } = api.offer.createOffer.useMutation();

  const form = useForm<CreateOfferInput>({
    defaultValues: {
      customerUuid: "",
      name: "",
      templateUuid: "",
    },
    resolver: zodResolver(OfferCreateFormValidationResolver),
  });

  const onSubmit: SubmitHandler<CreateOfferInput> = async (data) => {
    try {
      const newOffer = await createOffer(data);
      router.push(getEditorOfferHref(newOffer.uuid));
    } catch (error) {
      if (isAPIError(error)) {
        toast({
          description: error.message,
          variant: "destructive",
        });
      }
    }
  };

  return { form, onSubmit: form.handleSubmit(onSubmit) };
};

export const useOfferCreateFormContext = () =>
  useFormContext<CreateOfferInput>();
