"use client";

import { LogOut, Settings, User } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/button";
import { UserAvatar } from "@/components/header/user-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Atrapa sesji na potrzeby UI — do podmiany na sesję Supabase.
const session: boolean = true;

export const UserMenu = () => {
  if (!session) {
    return (
      <div className="flex items-center gap-2">
        <Button
          asChild
          variant="ghost"
          size="lg"
          className="text-muted-foreground hover:text-foreground"
        >
          <Link href="/sign-in">Zaloguj się</Link>
        </Button>
        <Button asChild size="lg">
          <Link href="/sign-up">Zarejestruj się</Link>
        </Button>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Menu użytkownika"
          className="size-10 rounded-full"
        >
          <UserAvatar />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56 p-1.5" sideOffset={12}>
        <DropdownMenuItem asChild className="px-2 py-2">
          <Link href="/account">
            <User />
            Moje konto
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="px-2 py-2">
          <Link href="/settings">
            <Settings />
            Ustawienia
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem variant="destructive" className="px-2 py-2">
          <LogOut />
          Wyloguj się
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
