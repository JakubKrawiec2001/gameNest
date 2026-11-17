type Props = {
  children: React.ReactNode;
  withHeading?: boolean;
  h1?: React.ReactNode;
  subheading?: React.ReactNode;
  headingIcon?: React.ReactNode;
  breadcrumbsComponent?: React.ReactNode;
};

export const PageContainer = ({
  children,
  withHeading,
  h1,
  subheading,
  headingIcon,
  breadcrumbsComponent,
}: Props) => {
  return (
    <main className="flex flex-col gap-10">
      {breadcrumbsComponent}
      {withHeading && (
        <div>
          <span className="flex items-center gap-2">
            {headingIcon && <span>{headingIcon}</span>}
            {h1 && <h1 className="text-4xl">{h1}</h1>}
          </span>
          {subheading && <p className="text-muted-foreground">{subheading}</p>}
        </div>
      )}
      {children}
    </main>
  );
};
