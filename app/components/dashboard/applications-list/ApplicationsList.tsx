/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useState } from "react";
import Table from "@/components/ui/table";
import { useGetAllJobsApplicationsQuery } from "@/app/redux/features/jobs/jobsApi";
import Pagination from "@/app/utils/common/Pagination";

const ApplicationsList = () => {
  const [page, setPage] = useState(1);
  const perPage = 10;

  const {
    data: ApplicationsData,
    isLoading,
    error,
  } = useGetAllJobsApplicationsQuery({
    page,
    per_page: perPage,
  });

  const jobs = ApplicationsData || [];
  const currentPage = ApplicationsData?.current_page || 1;
  const lastPage = ApplicationsData?.last_page || 1;

  if (isLoading) {
    return <div className="text-center py-10">Loading applications...</div>;
  }

  if (error) {
    return (
      <div className="text-red-500 text-center py-10">
        Error loading applications
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Applications List</h1>
          <p className="text-gray-500">Manage all applications</p>
        </div>
      </div>

      {/* TABLE */}
      <div className="border rounded-lg overflow-x-auto">
        <Table
          headers={[
            "SL",
            "Name",
            "Email",
            "Resume",
            "Cover Note",
            "Applied At",
          ]}
          data={jobs}
          renderRow={(app: any, idx: number) => (
            <>
              <td className="px-6 py-4">{idx + 1}</td>
              <td className="px-6 py-4 font-medium">{app.name}</td>
              <td className="px-6 py-4">{app.email}</td>
              <td className="px-6 py-4">
                <a
                  href={app.resume_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Resume
                </a>
              </td>
              <td className="px-6 py-4">{app.cover_note}</td>
              <td className="px-6 py-4">
                {new Date(app.created_at).toLocaleString()}
              </td>
            </>
          )}
        />
      </div>

      {/* PAGINATION */}
      {lastPage > 1 && (
        <Pagination
          currentPage={currentPage}
          lastPage={lastPage}
          onPageChange={setPage}
        />
      )}
    </div>
  );
};

export default ApplicationsList;
