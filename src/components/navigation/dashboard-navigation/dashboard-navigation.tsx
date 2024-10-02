"use client";

import { signIn, signOut } from "next-auth/react";
import React from "react";
import { HiBellAlert, HiChevronDown } from "react-icons/hi2";

import { Input } from "@/components/base/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";

export const DashboardNavigation = () => {
  return (
    <nav className="flex items-center justify-between border-b border-gray-300 px-4 py-2">
      <Input placeholder="Search" />
      <div className="flex items-center justify-center gap-4">
        <HiBellAlert className="h-5 w-5 cursor-pointer text-gray-500" />
        <Separator orientation="vertical" className="h-6" />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex cursor-pointer items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span>John Cook</span>
              <HiChevronDown className="h-4 w-4" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-52">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => signIn()}
            >
              Log in
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => signOut()}
            >
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};
