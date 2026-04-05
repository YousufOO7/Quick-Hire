"use client";
import Image from "next/image";
import bannerLogo from "@/app/assets/banner-image.png";
import { Search, MapPin } from "lucide-react";

const Banner = () => {
  return (
    <div className="lg:h-[800px] container mx-auto">
    <section className="w-full md:pt-5 px-4 md:px-0">
      <div className="flex relative">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-2/3 mt-2 md:mt-20">
          <div className="max-w-lg">
            <h1 className="text-5xl md:text-7xl font-semibold text-gray-800 leading-tight">
              Discover <br />
              more than{" "}
              <span className="text-blue-500 border-b-4 border-blue-500 inline-block pb-1">
                5000+ Jobs
              </span>
            </h1>

            <p className="mt-4 text-gray-500 text-[18px] md:text-[20px] font-normal leading-relaxed">
              Great platform for the job seeker that searching for new career
              heights and passionate about startups.
            </p>
          </div>

          {/* SEARCH BOX */}
          <div className="mt-8 bg-white shadow-md flex flex-col sm:flex-row items-start sm:items-center p-2 w-full relative z-10 gap-2 sm:gap-0">
        {/* Job Input */}
        <div className="flex items-center flex-1 px-3 w-full">
          <Search className="text-gray-400 w-4 h-4 mr-2" />
          <input
            type="text"
            placeholder="Job title or keyword"
            className="w-full outline-none text-sm"
          />
        </div>

        {/* Divider */}
        <div className="h-6 w-[1px] bg-gray-200 hidden sm:block"></div>

        {/* Location */}
        <div className="flex items-center px-3 w-full sm:w-auto">
          <MapPin className="text-gray-400 w-4 h-4 mr-2" />
          <select className="outline-none text-sm text-gray-600 w-full sm:w-auto">
            <option>Florence, Italy</option>
          </select>
        </div>

            {/* Button */}
             <button className="bg-blue-600 text-white px-5 py-2 text-sm font-medium hover:bg-blue-700 transition w-full sm:w-auto">
          Search my job
        </button>
          </div>

          {/* Popular Tags */}
          <p className="mt-4 text-[16px] font-normal text-gray-400">
            Popular : UI Designer, UX Researcher, Android, Admin
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="absolute right-0 top-0 hidden lg:block">
          <Image
            src={bannerLogo}
            alt="banner"
            width={501}
            className="object-contain"
          />
        </div>
      </div>
    </section>
    </div>
  );
};

export default Banner;
