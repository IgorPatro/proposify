"use client";

import Image from "next/image";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import React from "react";

import { DASHBOARD_NAVIGATION } from "./constants";

export const DashboardNavigation = () => {
  return (
    <nav className="flex items-center justify-between border-b border-gray-300 px-4 py-2">
      <Image src="/logo.jpg" alt="Logo" width={100} height={100} />
      <ul className="flex gap-4 text-sm text-gray-700">
        {DASHBOARD_NAVIGATION.map((item) => (
          <li key={item.name}>
            <Link href={item.href}>{item.content}</Link>
          </li>
        ))}
      </ul>
      <div>
        <span>User</span>
        <button onClick={() => signIn()}>Log in</button>
        <button onClick={() => signOut()}>Log out</button>
      </div>
    </nav>
  );
};
