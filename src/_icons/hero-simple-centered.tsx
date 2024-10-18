import React from "react";
import { twMerge } from "tailwind-merge";

import { type BlockIconProps } from "./types";

export const HeroSimpleCenteredIcon = ({ className }: BlockIconProps) => {
  return (
    <svg
      className={twMerge(className)}
      fill="none"
      height="90"
      viewBox="0 0 160 90"
      width="160"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        fill="currentColor"
        height="5"
        rx="0.5"
        stroke="currentColor"
        width="20"
        x="70"
        y="10.5"
      />
      <rect
        fill="currentColor"
        height="8"
        rx="0.5"
        stroke="currentColor"
        width="63"
        x="48.5"
        y="36.5"
      />
      <rect
        fill="currentColor"
        height="5"
        rx="0.5"
        stroke="currentColor"
        width="48"
        x="56"
        y="49.5"
      />
      <rect
        fill="currentColor"
        height="4"
        rx="0.5"
        stroke="currentColor"
        width="25"
        x="38.5"
        y="75.5"
      />
      <rect
        fill="currentColor"
        height="4"
        rx="0.5"
        stroke="currentColor"
        width="25"
        x="67.5"
        y="75.5"
      />
      <rect
        fill="currentColor"
        height="4"
        rx="0.5"
        stroke="currentColor"
        width="25"
        x="96.5"
        y="75.5"
      />
    </svg>
  );
};
