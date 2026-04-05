"use client";
import MobileNav from "../components/main/navigations/MobileNav";
import PublicNav from "../components/main/navigations/PublicNav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="max-w-[1440px] mx-auto bg-[#F8F8FD]">
      <PublicNav  />
      <MobileNav />
      <main>{children}</main>
    </div>
  );
}
