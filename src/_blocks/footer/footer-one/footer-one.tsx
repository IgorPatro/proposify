import React from "react";
import { twMerge } from "tailwind-merge";

import { TextField } from "@/_fields/text-field";

import { type BlockProps } from "../../types";

import { type FooterOneFields } from "./config";

export const FooterOne = ({ fields, theme }: BlockProps) => {
  const { description, heading } = fields as FooterOneFields;

  return (
    <footer
      className="p-4"
      style={{
        backgroundColor: theme.bgSecondary,
      }}
    >
      <TextField
        config={heading}
        as="h1"
        className={twMerge("text-5xl")}
        style={{
          color: theme.textPrimary,
        }}
      />
      <TextField
        config={description}
        as="p"
        className={twMerge("text-2xl")}
        style={{
          color: theme.textPrimary,
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
