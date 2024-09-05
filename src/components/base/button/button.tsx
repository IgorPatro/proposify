import Link from "next/link";
import React, { type ReactNode } from "react";

interface ButtonProps {
  isLoading?: boolean;
  children: ReactNode;
  onClick?: () => void;
  href?: string;
}

export const Button = ({ children, href, isLoading, onClick }: ButtonProps) => {
  if (href) {
    return (
      <Link
        className="block rounded-md bg-gray-900 px-8 py-2 text-base text-white transition-colors hover:bg-gray-800"
        href={href}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      type="button"
      className="rounded-md bg-gray-900 px-8 py-2 text-base text-white transition-colors hover:bg-gray-800 disabled:bg-gray-500"
      disabled={isLoading}
    >
      {/* TODO: Loading should as absolute to not change button width */}
      {isLoading ? "Loading..." : children}
    </button>
  );
};
