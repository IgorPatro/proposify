import { createContext, useContext, type ReactNode } from "react";

import { type Template } from "@/server/api/template/types";

export const OfferDefaultState: Template = {
  blocks: [],
  name: "",
  theme: {
    bgPrimary: "",
    bgSecondary: "",
    textPrimary: "",
    textSecondary: "",
  },
};

interface OfferContext {
  offer: Template;
}

export const OfferContext = createContext<OfferContext>({
  offer: OfferDefaultState,
});

interface OfferContextProviderProps {
  children: ReactNode;
  offer: Template;
}

export const OfferContextProvider = ({
  children,
  offer,
}: OfferContextProviderProps) => {
  return (
    <OfferContext.Provider value={{ offer }}>{children}</OfferContext.Provider>
  );
};

export const useOfferContext = () => {
  return useContext(OfferContext);
};
