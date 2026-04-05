"use client";
import vector from "@/app/assets/Vector.png";
import vodafone from "@/app/assets/vodafone.png";
import tesla from "@/app/assets/TESLA.png";
import talkit from "@/app/assets/Talkit.png";
import group from "@/app/assets/Group.png";
import Image from "next/image";

const Marquee = () => {
  const logos = [vodafone, vector, tesla, group, talkit];

  return (
    <div className="w-full py-2 bg-white mt-5">
    <div className="container mx-auto px-4 md:px-0 overflow-hidden">
      {/* Title */}
      <p className="text-left text-gray-400 text-sm mb-6">
        Companies we helped grow
      </p>

      {/* Logo Row */}
      <div className="grid grid-cols-2  md:grid-cols-5 gap-8 md:gap-20 scrollbar-hide py-4">
        {logos?.map((logo, index) => (
          <div key={index} className="flex-shrink-0 opacity-60 hover:opacity-100 ">
            <Image
              src={logo}
              alt="company logo"
              width={160}
              height={60}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Marquee;