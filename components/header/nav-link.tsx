"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/button";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: string;
  label: string;
  className?: string;
  onNavigate?: () => void;
};

export const NavLink = ({
  href,
  label,
  className,
  onNavigate,
}: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Button
      asChild
      variant="ghost"
      size="lg"
      className={cn(
        isActive
          ? "text-primary hover:text-primary"
          : "text-muted-foreground hover:text-foreground",
        className,
      )}
    >
      <Link
        href={href}
        aria-current={isActive ? "page" : undefined}
        onClick={onNavigate}
      >
        {label}
      </Link>
    </Button>
  );
};
