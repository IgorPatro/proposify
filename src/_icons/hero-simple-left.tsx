import React from "react";
import { twMerge } from "tailwind-merge";
import { BlockIconProps } from "./types";

export const HeroSimpleLeftIcon = ({ className }: BlockIconProps) => {
  return (
    <svg
      width="160"
      height="90"
      viewBox="0 0 160 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge(className)}
    >
      <rect
        x="10.5"
        y="10.5"
        width="20"
        height="5"
        rx="0.5"
        fill="currentColor"
        stroke="currentColor"
      />
      <rect
        x="10.5"
        y="36.5"
        width="63"
        height="8"
        rx="0.5"
        fill="currentColor"
        stroke="currentColor"
      />
      <rect
        x="10.5"
        y="49.5"
        width="48"
        height="5"
        rx="0.5"
        fill="currentColor"
        stroke="currentColor"
      />
      <rect
        x="10.5"
        y="75.5"
        width="25"
        height="4"
        rx="0.5"
        fill="currentColor"
        stroke="currentColor"
      />
      <rect
        x="39.5"
        y="75.5"
        width="25"
        height="4"
        rx="0.5"
        fill="currentColor"
        stroke="currentColor"
      />
      <rect
        x="68.5"
        y="75.5"
        width="25"
        height="4"
        rx="0.5"
        fill="currentColor"
        stroke="currentColor"
      />
    </svg>
  );
};
