"use client";

import { ThemeSwitcher } from "@/components";
import { menuItems } from "@/constants";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaCamera } from "react-icons/fa6";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();
  const { data, status } = useSession();
  const { image, name, email } = data?.user || {};

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image
            src="/assets/images/logo.svg"
            width={108}
            height={44}
            alt="Home"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-7 sm:flex" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link
              as={NextLink}
              color={
                path.includes(item.toLowerCase()) ? "default" : "foreground"
              }
              href="#"
            >
              {item !== "Log Out" && item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <ThemeSwitcher />
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              fallback={
                <FaCamera
                  className="h-6 w-6 animate-pulse text-default-500"
                  fill="currentColor"
                  size={16}
                />
              }
              isBordered
              as="button"
              className="transition-transform"
              name="Jason Hughes"
              src={image}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p>
                Welcome{" "}
                <span className="font-semibold">{name?.split(" ", 1)}</span>!
              </p>
              <p className="text-gray-400">{email}</p>
            </DropdownItem>
            <DropdownItem onPress={() => signOut()} key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
