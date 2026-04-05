"use client";

import { LatestJob } from "@/app/types/latestJobs";
import { useEffect, useState } from "react";
import LatestJobsCard from "./LatestJobsCard";

const LatestJobs = () => {
  const [latestJobs, setLatestJobs] = useState<LatestJob[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestJobs = async () => {
      try {
        const response = await fetch("/latestJobs.json");
        const data = await response.json();
        setLatestJobs(data);
      } catch (error) {
        console.error("Error fetching latest jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLatestJobs();
  }, []);
  return (
    <div className="container mx-auto">
      <div className="w-full  px-4 md:px-0">
        <div className="flex justify-between items-center mt-10">
          <h2 className="text-3xl md:text-5xl font-semibold mb-8">
            Latest<span className="text-blue-500">Jobs Open</span>
          </h2>
          <p className="text-blue-500 text-[16px] hidden md:block">
            Show all jobs
          </p>
        </div>

        {/* latest jobs card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {loading ? (
            <p>Loading categories...</p>
          ) : (
            latestJobs?.map((job, index) => (
              <LatestJobsCard key={index} job={job} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default LatestJobs;
