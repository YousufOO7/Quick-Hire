"use client";

import { useJobsApplicationsMutation } from "@/app/redux/features/jobs/jobsApi";
import { useState } from "react";
import toast from "react-hot-toast";

interface ApplyFormProps {
  jobTitle: string;
  jobId: string; // 👈 IMPORTANT (you need job_id)
}

const ApplyForm = ({ jobId }: ApplyFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: "",
    coverNote: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const [jobsApplications, { isLoading }] = useJobsApplicationsMutation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
  // required fields
  if (!formData.name || !formData.email || !formData.resume || !formData.coverNote) {
    return "All fields are required";
  }

  // email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    return "Invalid email format";
  }

  // URL validation
  try {
    new URL(formData.resume);
  } catch {
    return "Invalid resume link (must be a valid URL)";
  }

  return null;
};

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

  const errorMsg = validateForm();

  if (errorMsg) {
    toast.error(errorMsg); 
    return;
  }

    try {
      const payload = {
        job_id: jobId, // 👈 must send
        name: formData.name,
        email: formData.email,
        resume_link: formData.resume,
        cover_note: formData.coverNote,
        created_at: new Date().toISOString(),
      };

       await jobsApplications(payload).unwrap();

      toast.success("Application submitted successfully!");

      setSubmitted(true);
      setFormData({ name: "", email: "", resume: "", coverNote: "" });
    } catch (error) {
      console.error("Application failed:", error);
    }
  };

  return (
    <div>
      {submitted && (
        <p className="text-green-600 mb-4">
          Your application has been submitted!
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border rounded-md p-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded-md p-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Resume Link</label>
          <input
            type="url"
            name="resume"
            value={formData.resume}
            onChange={handleChange}
            required
            className="w-full border rounded-md p-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Cover Note</label>
          <textarea
            name="coverNote"
            value={formData.coverNote}
            onChange={handleChange}
            required
            rows={4}
            className="w-full border rounded-md p-2"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-600 text-white px-6 py-2 rounded-md"
        >
          {isLoading ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
};

export default ApplyForm;