import Link from "next/link";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { HiSearch } from "react-icons/hi";
import { HiBellAlert, HiChevronDown } from "react-icons/hi2";

import { Input } from "@/components/base/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  getDashboardHref,
  getDashboardUserSettingsHref,
} from "@/utils/hrefs/dashboard";

export const DashboardNavigation = () => {
  const { push } = useRouter();
  const { data: session } = useSession();

  return (
    <nav className="flex h-16 items-center justify-between px-10 py-4">
      <Breadcrumb className="hidden md:flex">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={getDashboardHref()}>Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="#">Products</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>All Products</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex items-center justify-center gap-4">
        <div className="relative">
          <HiSearch className="absolute left-2.5 top-2.5 z-10 h-4 w-4 text-gray-500" />
          <Input
            value=""
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg pl-8 md:w-52 lg:w-80"
          />
        </div>
        <HiBellAlert className="h-5 w-5 cursor-pointer text-gray-500" />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex cursor-pointer items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span>Jan Kowalski</span>
              <HiChevronDown className="h-4 w-4" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-52">
            <DropdownMenuLabel>Konto</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => push(getDashboardUserSettingsHref())}
            >
              Ustawienia
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => push(getDashboardUserSettingsHref())}
            >
              Pomoc
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {!session ? (
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => signIn()}
              >
                Log in
              </DropdownMenuItem>
            ) : (
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => signOut()}
              >
                Log out
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};
