import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { type SubmitHandler, useForm } from "react-hook-form";

import { type CreateOfferInput } from "@/server/api/routers/offer/create-offer";
import { api } from "@/trpc/react";
import { getEditorOfferHref } from "@/utils/hrefs/editor";

import { OfferCreateFormValidationResolver } from "./utils";

export const useOfferCreateForm = () => {
  const router = useRouter();
  const { mutateAsync: createOffer } = api.offer.createOffer.useMutation();

  const form = useForm<CreateOfferInput>({
    resolver: zodResolver(OfferCreateFormValidationResolver),
  });

  const onSubmit: SubmitHandler<CreateOfferInput> = async (data) => {
    try {
      const newOffer = await createOffer(data);
      router.push(getEditorOfferHref(newOffer.uuid));
    } catch (error) {
      console.log(error);
    }
  };

  return { form, onSubmit: form.handleSubmit(onSubmit) };
};
