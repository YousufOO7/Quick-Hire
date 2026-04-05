/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Table from "@/components/ui/table";
import toast from "react-hot-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { FiTrash2 } from "react-icons/fi";
import { useDeleteJobMutation, useGetAllJobsQuery } from "@/app/redux/features/jobs/jobsApi";
import ButtonLoader from "@/app/utils/common/ButtonLoader";
import Pagination from "@/app/utils/common/Pagination";
import AddJob from "./AddJob";

const JobList = () => {
  const [page, setPage] = useState(1);
  const perPage = 10;

  const {
    data: jobsData,
    isLoading,
    error,
    refetch,
  } = useGetAllJobsQuery({
    page,
    per_page: perPage,
  });

  const [deleteJob, { isLoading: deleteLoading }] =
    useDeleteJobMutation();

  const [open, setOpen] = useState(false);

  const jobs = jobsData || [];
  const currentPage = jobsData?.current_page || 1;
  const lastPage = jobsData?.last_page || 1;

  const handleDelete = async (id: number) => {
    try {
      await deleteJob(id).unwrap();
      toast.success("Job deleted successfully");
      refetch();
    } catch (err) {
      toast.error("Failed to delete job");
    }
  };

  if (isLoading) {
    return <div className="text-center py-10">Loading jobs...</div>;
  }

  if (error) {
    return (
      <div className="text-red-500 text-center py-10">
        Error loading jobs
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Job List</h1>
          <p className="text-gray-500">Manage all jobs</p>
        </div>

        <Button onClick={() => setOpen(true)}>
          + Add Job
        </Button>
      </div>

      {/* TABLE */}
      <div className="border rounded-lg overflow-x-auto">
        <Table
          headers={[
            "SL",
            "Title",
            "Company",
            "Location",
            "Type",
            "Tags",
            "Actions",
          ]}
          data={jobs}
          renderRow={(job: any, idx: number) => (
            <>
              <td className="px-6 py-4">{idx + 1}</td>

              <td className="px-6 py-4 font-medium">
                {job.title}
              </td>

              <td className="px-6 py-4">
                {job.company}
              </td>

              <td className="px-6 py-4">
                {job.location}
              </td>

              <td className="px-6 py-4">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                  {job.type}
                </span>
              </td>

              <td className="px-6 py-4">
                <div className="flex flex-wrap gap-1">
                  {job.tags?.map((tag: string, i: number) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </td>

              <td className="px-6 py-4">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <button className="text-red-600">
                      <FiTrash2 />
                    </button>
                  </AlertDialogTrigger>

                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This will permanently delete the job.
                      </AlertDialogDescription>
                    </AlertDialogHeader>

                    <AlertDialogFooter>
                      <AlertDialogCancel>
                        Cancel
                      </AlertDialogCancel>

                      <AlertDialogAction
                        onClick={() => handleDelete(job._id)}
                      >
                        {deleteLoading && <ButtonLoader />}
                        Confirm
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
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

      {/* ADD MODAL */}
      <AddJob
        open={open}
        onClose={() => setOpen(false)}
        refetch={refetch}
      />
    </div>
  );
};

export default JobList;