"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/button";
import { NavLink } from "@/components/header/nav-link";
import { SearchInput } from "@/components/header/search-input";
import { navLinks } from "@/lib/nav-links";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon-lg"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="text-muted-foreground md:hidden"
      >
        {isOpen ? <X /> : <Menu />}
      </Button>

      {isOpen && (
        <div className="absolute inset-x-0 top-full border-b border-border bg-bg-dark md:hidden">
          <nav className="container flex flex-col gap-1 py-4">
            <SearchInput className="mb-3 sm:hidden" />
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                className="justify-start"
                onNavigate={() => setIsOpen(false)}
              />
            ))}
          </nav>
        </div>
      )}
    </>
  );
};
