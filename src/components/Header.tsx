import Link from "next/link";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center gap-8">
        {/* Logo */}
        <Link href="/">
          <div className="text-4xl font-semibold flex gap-2">
            <span className="text-accent">~/</span>Nitan
          </div>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <div className="relative">
              <div className="absolute inset-0.5 bg-accent rounded-full blur opacity-75"></div>
              <Button className="relative">Hire me</Button>
            </div>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
