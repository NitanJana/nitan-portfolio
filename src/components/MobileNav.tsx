"use client";

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/constants";

const MobileNav = () => {
  const currentPath = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        <div className="my-20 text-center text-2xl">
          <Link href="/">
            <div className="font-semibold flex gap-6 items-center justify-center">
              <Link href="/">
                <div className="text-3xl font-semibold flex gap-2">
                  <span className="text-accent">~/</span>Nitan
                </div>
              </Link>
            </div>
          </Link>
        </div>

        <nav className="flex flex-col justify-center items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <SheetClose
                className={clsx(
                  currentPath === item.href &&
                    "text-accent border-b-2 border-accent",
                  "hover:text-accent capitalize font-medium text-lg transition-all"
                )}
              >
                {item.name}
              </SheetClose>
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
