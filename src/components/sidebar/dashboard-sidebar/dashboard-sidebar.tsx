import Image from "next/image";
import Link from "next/link";
import React from "react";

import { DASHBOARD_NAVIGATION } from "./constants";

export const DashboardSidebar = () => {
  return (
    <aside className="fixed left-0 top-0 z-20 h-full w-64 bg-orange-300 p-4">
      <Image
        className="bg-transparent"
        src="/logo.svg"
        alt="Logo"
        width={100}
        height={30}
        objectFit="contain"
      />
      <ul className="flex flex-col gap-4 text-sm text-gray-700">
        {DASHBOARD_NAVIGATION.map((item) => (
          <li key={item.name}>
            <Link
              className="flex items-center gap-2 text-base"
              href={item.href}
            >
              <item.icon className="h-5 w-5" />
              {item.content}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
