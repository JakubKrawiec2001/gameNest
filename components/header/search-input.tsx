import { Search } from "lucide-react";
import { Input } from "@/components/input";
import { cn } from "@/lib/utils";

type SearchInputProps = {
  className?: string;
};

export const SearchInput = ({ className }: SearchInputProps) => {
  return (
    <div className={cn("relative", className)}>
      <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-fg-dimmed" />
      <Input
        type="search"
        placeholder="Search games"
        aria-label="Search games"
        className="h-10 border-border bg-surface-2! pl-9 text-foreground placeholder:text-fg-dimmed"
      />
    </div>
  );
};
