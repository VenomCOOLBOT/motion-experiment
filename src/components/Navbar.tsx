"use client";
import Image from "next/image";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "./ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
} from "./ui/sheet";

interface NavLink {
  text: string;
  href: string;
}

interface NavbarProps {
  navLinks: NavLink[];
  image: string;
}

export default function Navbar({ navLinks, image }: NavbarProps) {
  return (
    <header className="flex h-28 w-full border-b items-center justify-between px-5">
      <div className="flex items-center gap-5">
        <div className="block lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={"ghost"}>
                <svg
                  className="w-6 h-6"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <div className="flex items-center justify-center">
                  <Link href={"/"}>
                    <Image
                      src={image}
                      className="lg:h-auto lg:w-64 h-auto w-52"
                      alt="Navigation Logo"
                      width={2885}
                      height={822}
                      priority={true}
                      quality={1}
                    />
                  </Link>
                </div>
              </SheetHeader>
              <div className="grid gap-2 py-6">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="flex w-full items-center py-2 text-lg font-semibold"
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <Link href={"/"}>
          <Image
            src={image}
            className="lg:h-auto lg:w-64 h-auto w-52"
            alt="Navigation Logo"
            width={2885}
            height={822}
            priority={true}
            quality={1}
          />
        </Link>
      </div>
      <nav className="hidden lg:block">
        <NavigationMenu className="flex items-center ">
          <NavigationMenuItem className="list-none">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {link.text}
                </NavigationMenuLink>
              </Link>
            ))}
          </NavigationMenuItem>
        </NavigationMenu>
      </nav>
    </header>
  );
}
