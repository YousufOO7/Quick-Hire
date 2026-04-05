"use client";
import { motion } from "framer-motion";
import vector from "@/app/assets/Vector.png";
import vodafone from "@/app/assets/vodafone.png";
import tesla from "@/app/assets/TESLA.png";
import talkit from "@/app/assets/Talkit.png";
import group from "@/app/assets/Group.png";
import Image from "next/image";

const Marquee = () => {
  const logos = [vodafone, vector, tesla, group, talkit];

  return (
    <div className="w-full mb-20 mt-40 overflow-hidden">
      
      {/* Title */}
      <p className="text-left text-gray-400 text-sm mb-6">
        Companies we helped grow
      </p>

      {/* Marquee Wrapper */}
      <div className="relative overflow-hidden">
        
        {/* Gradient fade (left) */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#F5F5F5] to-transparent z-10" />
        
        {/* Gradient fade (right) */}
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#F5F5F5] to-transparent z-10" />

        <motion.div
          className="flex gap-20 items-center"
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {/* First set */}
          {logos?.map((logo, index) => (
            <div key={index} className="opacity-60 hover:opacity-100 transition">
              <Image
                src={logo}
                alt="company logo"
                width={480}
                height={180}
                className=" grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}

          {/* Duplicate set for smooth loop */}
          {logos?.map((logo, index) => (
            <div key={`dup-${index}`} className="opacity-60 hover:opacity-100 transition">
              <Image
                src={logo}
                alt="company logo"
                width={480}
                height={180}
                className=" grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;