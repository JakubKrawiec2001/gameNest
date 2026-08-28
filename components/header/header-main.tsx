import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import { MobileNav } from "@/components/header/mobile-nav";
import { NavLink } from "@/components/header/nav-link";
import { SearchInput } from "@/components/header/search-input";
import { UserMenu } from "@/components/header/user-menu";
import { navLinks } from "@/lib/nav-links";

export const HeaderMain = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-bg-dark/85 backdrop-blur">
      <div className="container flex h-18 items-center justify-between gap-6">
        <div className="flex items-center gap-10">
          <Link href="/" className="shrink-0">
            <Image src={logo} alt="GameNest" priority className="h-6 w-auto" />
          </Link>
          <nav className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <SearchInput className="hidden w-64 sm:block" />
          <UserMenu />
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
