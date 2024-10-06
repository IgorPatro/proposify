import React from "react";
import { twMerge } from "tailwind-merge";

import { TextField } from "@/_fields/text-field";
import { getTheme } from "@/_hooks/use-theme";

import { type BlockProps } from "../../types";

import { type FooterOneFields } from "./config";

export const FooterOne = ({ fields, themeEnum }: BlockProps) => {
  const { description, heading } = fields as FooterOneFields;
  const theme = getTheme(themeEnum);

  return (
    <footer
      className="min-h-block p-4"
      style={{
        backgroundColor: theme.background,
      }}
    >
      <TextField
        config={heading}
        as="h1"
        className={twMerge("text-5xl")}
        style={{
          color: theme.text,
        }}
      />
      <TextField
        config={description}
        as="p"
        className={twMerge("text-2xl")}
        style={{
          color: theme.text,
        }}
      />
      <div>
        <div>
          <div>
            <h2>Logo</h2>
            <p>Company</p>
            <p>Address</p>
            <p>Phone</p>
            <p>Email</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
