"use client";

import { FeaturedJob } from "@/app/types/featuredJobs";
import { useEffect, useState } from "react";
import FeaturedJobsCard from "./FeaturedJobsCard";

const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState<FeaturedJob[]>([]);
     const [loading, setLoading] = useState(true);
   
     useEffect(() => {
       const fetchFeaturedJobs = async () => {
         try {
           const response = await fetch("/featuredJobs.json");
           const data = await response.json();
           setFeaturedJobs(data);
         } catch (error) {
           console.error("Error fetching featured jobs:", error);
         } finally {
           setLoading(false);
         }
       };
       fetchFeaturedJobs();
     }, []);
  return (
    <div className="container mx-auto">
    <div className="w-full bg-white px-4 md:px-0">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl md:text-5xl font-semibold mb-8 mt-5">
          Featured<span className="text-blue-500">Jobs</span>
        </h2>
        <p className="text-blue-500 text-[16px] hidden md:block">Show all jobs</p>
      </div>

      {/* featured jobs card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-10">
        {loading ? (
          <p>Loading categories...</p>
        ) : (
          featuredJobs?.map((job, index) => (
            <FeaturedJobsCard key={index} job={job} />
          ))
        )}
      </div>
        <p className="text-blue-500 text-[16px]  md:hidden">Show all jobs</p>
    </div>
    </div>
  );
};

export default FeaturedJobs;
