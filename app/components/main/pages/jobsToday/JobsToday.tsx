"use client";

import Image from "next/image";
import bgLogo from "@/app/assets/Rectangle.png";
import dashboardImage from "@/app/assets/Content.png";
import { Button } from "@/components/ui/button";

const JobsToday = () => {
  return (
    <div
      className="w-full overflow-hidden my-20"
      style={{
        backgroundImage: `url(${bgLogo.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between px-20  py-16 gap-10">
        
        {/* LEFT CONTENT */}
        <div className="text-white max-w-xl">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Start posting <br /> jobs today
          </h1>

          <p className="mt-4 text-white/80 text-lg">
            Start posting jobs for only $10.
          </p>

          <Button variant={"outline"} size={"lg"} className="mt-6 bg-white text-blue-600 font-semibold ">
            Sign Up For Free
          </Button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <Image
            src={dashboardImage}
            alt="dashboard"
            className="w-full bg-white max-w-[520px] h-auto object-contain"
            priority
          />
        </div>

      </div>
    </div>
  );
};

export default JobsToday;