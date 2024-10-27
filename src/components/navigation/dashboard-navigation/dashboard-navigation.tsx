import Link from "next/link";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import React, { useMemo } from "react";
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
import { generateBreadcrumbItems } from "./utils";

export const DashboardNavigation = () => {
  const { push, asPath } = useRouter();
  const { data: session } = useSession();

  const BREADCRUMB_ITEMS = useMemo(() => {
    return generateBreadcrumbItems(asPath);
  }, [asPath]);

  return (
    <header className="flex h-16 items-center justify-between gap-10 px-10 py-4">
      <Breadcrumb className="hidden max-w-[40%] md:flex">
        <BreadcrumbList className="flex-nowrap text-nowrap">
          {BREADCRUMB_ITEMS.map((item, index) => (
            <>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={item.href}>{item.label}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index < BREADCRUMB_ITEMS.length - 1 && <BreadcrumbSeparator />}
            </>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex items-center justify-center gap-4">
        <div className="relative">
          <HiSearch className="absolute left-2.5 top-2.5 z-10 size-4 text-gray-500" />
          <Input
            className="w-full rounded-lg pl-8 md:w-52 lg:w-80"
            placeholder="Search..."
            type="search"
            value=""
          />
        </div>
        <HiBellAlert className="size-5 cursor-pointer text-gray-500" />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex cursor-pointer items-center gap-2">
              <Avatar className="size-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span>Jan Kowalski</span>
              <HiChevronDown className="size-4" />
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
    </header>
  );
};
