import Link from "next/link";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

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
        <div className="hidden xl:flex">
          <Nav />
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
