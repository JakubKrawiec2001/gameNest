import { Star } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageContainer } from "@/components/layout/page-container";

export default async function Reviews() {
  return (
    <PageContainer
      withHeading
      h1="Reviews"
      subheading="Discover, track, and manage reviews"
      headingIcon={<Star className="text-brand size-12" />}
      breadcrumbsComponent={<Breadcrumbs />}
    >
      Reviews
    </PageContainer>
  );
}
