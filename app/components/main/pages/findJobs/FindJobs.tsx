"use client";

import { useState, useEffect } from "react";
import { useGetAllJobsQuery } from "@/app/redux/features/bookings/jobsApi";
import FindJobsCard from "./FindJobsCard";
import { FindJob } from "@/app/types/findJobs";

const FindJobs = () => {
  const [searchInput, setSearchInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  const [locations, setLocations] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const {
    data: jobsData,
    isLoading,
    error,
  } = useGetAllJobsQuery({
    per_page: 100, 
    page: 1,
  });

  console.log("Jobs Data:", jobsData);

  // Extract unique locations and categories from the API data
  useEffect(() => {
    if (jobsData && jobsData.length > 0) {
      const uniqueLocations = [
        ...new Set(jobsData?.map((job: FindJob) => job.location as string)),
      ] as string[];
      setLocations(uniqueLocations);

      // Extract unique categories (tags)
      const uniqueCategories = [
        ...new Set(jobsData?.flatMap((job: FindJob) => job.tags as string[])),
      ] as string[];
      setCategories(uniqueCategories);
    }
  }, [jobsData]);

  const handleSearch = () => {
    setSearch(searchInput);
    setLocation(locationInput);
    setCategory(categoryInput);
  };

  const handleClear = () => {
    // reset inputs
    setSearchInput("");
    setLocationInput("");
    setCategoryInput("");

    // reset filters
    setSearch("");
    setLocation("");
    setCategory("");
  };

  // Filter jobs based on search criteria
  const filteredJobs = jobsData?.filter((job: FindJob) => {
    const matchesSearch =
      search === "" ||
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.description.toLowerCase().includes(search.toLowerCase());

    const matchesLocation =
      location === "" || job.location.toLowerCase() === location.toLowerCase();

    const matchesCategory =
      category === "" ||
      job.tags.some((tag) => tag.toLowerCase() === category.toLowerCase());

    return matchesSearch && matchesLocation && matchesCategory;
  });

  if (isLoading) {
    return (
      <div className="py-10">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold mb-4">Find Your Dream Job</h1>
          <p className="text-gray-600 mb-8">Loading jobs...</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="border p-5 bg-white animate-pulse">
              <div className="h-10 w-10 bg-gray-200 rounded mb-4"></div>
              <div className="h-6 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-3"></div>
              <div className="h-20 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-10">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold mb-4">Find Your Dream Job</h1>
          <p className="text-red-600 mb-8">
            Error loading jobs. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10">
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold mb-4">Find Your Dream Job</h1>
        <p className="text-gray-600 mb-8">
          Explore thousands of job listings from top companies.
        </p>
      </div>

      {/* Search Section */}
      <div className="bg-white shadow-md rounded-xl p-4 flex flex-col md:flex-row gap-4 mb-10">
        <input
          type="text"
          placeholder="Job title or keyword"
          className="border p-3 rounded w-full"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />

        {/* Location */}
        <select
          className="border p-3 rounded w-full"
          value={locationInput}
          onChange={(e) => setLocationInput(e.target.value)}
        >
          <option value="">All Locations</option>
          {locations.map((loc, index) => (
            <option key={index} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        {/* Category */}
        <select
          className="border p-3 rounded w-full"
          value={categoryInput}
          onChange={(e) => setCategoryInput(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Buttons */}
        <div className="flex gap-2 w-full md:w-auto">
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition w-full md:w-auto"
          >
            Search
          </button>
          <button
            onClick={handleClear}
            className="bg-gray-300 text-gray-700 px-6 py-3 rounded hover:bg-gray-400 transition w-full md:w-auto"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-4">
        <p className="text-gray-600">
          Found {filteredJobs?.length || 0} job
          {filteredJobs?.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredJobs && filteredJobs.length > 0 ? (
          filteredJobs.map((job: FindJob) => (
            <FindJobsCard key={job._id} job={job} />
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p className="text-gray-500 text-lg">
              No jobs found matching your criteria.
            </p>
            <button
              onClick={handleClear}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindJobs;
