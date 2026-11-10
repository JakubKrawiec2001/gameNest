import { HeaderMain } from "@/components/header/header-main";
import { HomePage } from "@/features/home/components/home-page";

export default async function Home() {
  return (
    <div>
      <HeaderMain />
      <HomePage />
    </div>
  );
}
