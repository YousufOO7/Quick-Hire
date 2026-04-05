"use client"

import MobileNav from "@/app/components/main/navigations/MobileNav";
import PublicNav from "@/app/components/main/navigations/PublicNav";


export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PublicNav  />
      <MobileNav />
      <main>{children}</main>
    </>
  );
}


