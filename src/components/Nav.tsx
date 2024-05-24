"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/constants";

const Nav = () => {
  const currentPath = usePathname();

  return (
    <nav className="flex gap-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={clsx(
            currentPath === item.href && "text-accent border-b-2 border-accent",
            "capitalize font-medium hover:text-accent transition"
          )}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
