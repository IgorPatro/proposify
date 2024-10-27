import React from "react";
import { Logo } from "../logo";
import { BlockResourceData } from "@/_blocks/types";

interface PageDetailsWrapperProps {
  resource: BlockResourceData;
  children: React.ReactNode;
}

export const PageDetailsWrapper = ({
  children,
  resource,
}: PageDetailsWrapperProps) => {
  return (
    <div className="flex h-full w-full flex-col justify-between">
      <div className="flex w-full items-start justify-between text-xs">
        <span>Oferta</span>
        <span>24 października 2024</span>
      </div>
      {children}
      <div className="flex w-full items-end justify-between text-xs">
        <Logo src={resource.logoUrl} wrapperClassName="h-5 w-24" />
        <span>6/7</span>
      </div>
    </div>
  );
};
