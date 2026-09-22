import { User } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type UserAvatarProps = {
  className?: string;
  avatar: string | null;
};

// Placeholder — do zaimplementowania (docelowo avatar użytkownika)
export const UserAvatar = ({ className, avatar }: UserAvatarProps) => {
  if (avatar) {
    return (
      <Image
        src={avatar}
        alt="User Avatar"
        className="w-full h-full rounded-full"
      />
    );
  }
  return (
    <div
      aria-hidden
      className={cn(
        "size-10 shrink-0 rounded-full border border-border bg-surface-3 relative overflow-hidden",
        className,
      )}
    >
      <User
        strokeWidth={1.5}
        className="size-8 absolute -bottom-0.5 left-1/2 -translate-x-1/2"
      />
    </div>
  );
};
