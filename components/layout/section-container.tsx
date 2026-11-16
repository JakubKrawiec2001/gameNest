type Props = {
  children: React.ReactNode;
  heading: string;
  customAction?: React.ReactNode;
};

export const SectionContainer = ({
  children,
  heading,
  customAction,
}: Props) => {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">{heading}</h2>
        {customAction && <div>{customAction}</div>}
      </div>
      {children}
    </section>
  );
};
