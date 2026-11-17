"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const Breadcrumbs = () => {
  const pathname = usePathname();

  const pathSegment = pathname.split("/").filter(Boolean);

  const isLastSegment = (index: number) => index === pathSegment.length - 1;

  if (pathSegment.length === 0) return null;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {pathSegment.map((segment, index) => {
          return isLastSegment(index) ? (
            <BreadcrumbItem key={segment}>
              <BreadcrumbPage className="capitalize">{segment}</BreadcrumbPage>
            </BreadcrumbItem>
          ) : (
            <>
              <BreadcrumbItem key={segment}>
                <BreadcrumbLink className="capitalize">
                  {segment}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
