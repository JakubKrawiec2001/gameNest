"use client";

import { LogOut, Settings, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/button";
import { UserAvatar } from "@/components/header/user-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { UserProfile } from "@/features/auth/types/auth.types";
import { createClient } from "@/lib/supabase/client";

type Props = {
  userProfile: UserProfile | null;
};

export const UserMenu = ({ userProfile }: Props) => {
  const supabase = createClient();
  const router = useRouter();
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      router.push("/sign-in");
    }
  };

  if (!userProfile) {
    return (
      <div className="flex items-center gap-2">
        <Button
          asChild
          variant="ghost"
          size="lg"
          className="text-muted-foreground hover:text-foreground"
        >
          <Link href="/sign-in">Sign In</Link>
        </Button>
        <Button asChild size="lg">
          <Link href="/sign-up">Sign Up</Link>
        </Button>
      </div>
    );
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="User menu"
          className="size-10 rounded-full"
        >
          <UserAvatar avatar={userProfile.avatar_url ?? ""} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56 p-1.5" sideOffset={12}>
        <DropdownMenuItem asChild className="px-2 py-2">
          <Link href="/account">
            <User />
            My Account
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="px-2 py-2">
          <Link href="/settings">
            <Settings />
            Settings
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          variant="destructive"
          className="px-2 py-2 cursor-pointer"
          onClick={handleSignOut}
        >
          <LogOut />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
