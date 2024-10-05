import Link from "next/link";

import { getDashboardHref } from "@/utils/hrefs/dashboard";

export default function Home() {
  return (
    <main>
      <h1>Here will be the landing page in the future</h1>
      <Link href={getDashboardHref()}>Dashboard</Link>
    </main>
  );
}
