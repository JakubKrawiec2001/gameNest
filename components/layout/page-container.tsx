type Props = {
  children: React.ReactNode;
};

export const PageContainer = ({ children }: Props) => {
  return <main className="flex flex-col gap-10">{children}</main>;
};
