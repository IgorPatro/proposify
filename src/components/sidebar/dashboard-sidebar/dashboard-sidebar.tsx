import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { twMerge } from "tailwind-merge";

import { getDashboardHref } from "@/utils/hrefs/dashboard";

import { DASHBOARD_NAVIGATION } from "./constants";

export const DashboardSidebar = () => {
  const { pathname } = useRouter();

  return (
    <aside className="fixed left-0 top-0 z-20 h-full w-64 border-r bg-white p-4">
      <Link href={getDashboardHref()}>
        <Image
          className="bg-transparent"
          src="/logo.svg"
          alt="Logo"
          width={100}
          height={30}
          objectFit="contain"
        />
      </Link>
      <ul className="mt-8 flex flex-col gap-2 text-sm text-gray-700">
        {DASHBOARD_NAVIGATION.map((item) => (
          <li key={item.name}>
            <Link
              className={twMerge(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-gray-100 hover:text-primary",
                pathname === item.href ? "bg-gray-100 text-primary" : "",
              )}
              href={item.href}
            >
              <item.icon className="h-4 w-4 text-gray-500" />
              {item.content}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
