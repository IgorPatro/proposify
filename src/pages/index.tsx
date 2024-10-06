import Link from "next/link";

import { Seo } from "@/components/base/seo";
import { getDashboardHref } from "@/utils/hrefs/dashboard";

export default function Home() {
  return (
    <>
      <Seo
        description="Dowiedz się więcej o Proposify"
        title="Proposify - Twoje nowoczesne oferty"
      />
      <main>
        <h1>Here will be the landing page in the future</h1>
        <Link href={getDashboardHref()}>Dashboard</Link>
      </main>
    </>
  );
}
