"use client"
import PublicNav from "../components/main/navigations/PublicNav";
import MobileNav from "../components/main/navigations/MobileNav";
import HomeComponents from "../components/main/home-components/HomeComponents";

export default function HomePage() {
  return (
    <div className="container mx-auto">
      <div >
        <PublicNav />
        <MobileNav />
      </div>
     <HomeComponents />
    </div>
  );
}

