import { Gamepad2 } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageContainer } from "@/components/layout/page-container";

export default async function Games({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  return (
    <PageContainer
      withHeading
      h1="Games"
      subheading="Discover, track, and manage games"
      headingIcon={<Gamepad2 className="text-brand size-12" />}
      breadcrumbsComponent={<Breadcrumbs />}
    >
      Games
    </PageContainer>
  );
}
