import { cn } from "@/lib/utils";

type UserAvatarProps = {
  className?: string;
};

// Placeholder — do zaimplementowania (docelowo avatar użytkownika)
export const UserAvatar = ({ className }: UserAvatarProps) => {
  return (
    <div
      aria-hidden
      className={cn(
        "size-10 shrink-0 rounded-full border border-border bg-surface-3",
        className,
      )}
    />
  );
};
