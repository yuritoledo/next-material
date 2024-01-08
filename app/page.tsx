"use client";

import Link from "next/link";

export default function Home() {
  return (
    <Link href="/login" className="underline text-blue-600">
      go to login
    </Link>
  );
}
