"use client";

import { useParams } from "next/navigation";
import ApplyForm from "./ApplyForm";
import { useGetJobByIdQuery } from "@/app/redux/features/jobs/jobsApi";
import Image from "next/image";

const SingleJobDetails = () => {
  const params = useParams();
  const jobId = params.id as string;

  const { data: job, isLoading, error } = useGetJobByIdQuery(jobId);

  if (isLoading)
    return (
      <p className="text-center mt-10 text-gray-500">Loading job details...</p>
    );
  if (error)
    return (
      <p className="text-center mt-10 text-red-500">
        Failed to load job details.
      </p>
    );
  if (!job) return <p className="text-center mt-10">Job not found.</p>;

  return (
    <div className="max-w-5xl mx-auto p-3 md:p-6 space-y-8">
      {/* Job Info */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-white p-6 rounded-lg shadow-md">
        <Image
          width={96}
          height={96}
          src={job.logo}
          alt={job.company}
          className="w-24 h-24 object-contain rounded-md border"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{job.title}</h1>
          <p className="text-gray-600 mt-1">
            {job.company} - {job.location}
          </p>
          <p className="text-sm text-gray-500 mt-1">{job.type}</p>
          {job.tags && (
            <div className="mt-2 flex flex-wrap gap-2">
              {job.tags.map((tag: string, idx: number) => (
                <span
                  key={idx}
                  className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Job Description */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Job Description</h2>
        <div
          className="text-gray-700"
          dangerouslySetInnerHTML={{ __html: job.description }}
        ></div>
      </div>

      {/* Apply Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-8">
        <h2 className="text-2xl font-semibold mb-4">Apply Now</h2>
        <ApplyForm jobTitle={job.title} jobId={job._id} />
      </div>
    </div>
  );
};

export default SingleJobDetails;
