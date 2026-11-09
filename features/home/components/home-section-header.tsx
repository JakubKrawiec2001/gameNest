import { Button } from "@/components/button";

type HomeSectionHeaderProps = {
  title: string;
  actionLabel: string;
};

export const HomeSectionHeader = ({
  title,
  actionLabel,
}: HomeSectionHeaderProps) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <h2 className="text-lg font-semibold uppercase">{title}</h2>
      <Button
        type="button"
        variant="link"
        size="xs"
        className="px-0 font-semibold uppercase"
      >
        {actionLabel}
      </Button>
    </div>
  );
};
