"use client";

import { useState } from "react";

interface ApplyFormProps {
  jobTitle: string;
}

const ApplyForm = ({ jobTitle }: ApplyFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: "",
    coverNote: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // You can replace this with your API POST call
    console.log("Application submitted:", { jobTitle, ...formData });

    setSubmitted(true);
    setFormData({ name: "", email: "", resume: "", coverNote: "" });
  };

  return (
    <div>
      {submitted && (
        <p className="text-green-600 mb-4">Your application has been submitted!</p>
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
            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Resume Link (URL)</label>
          <input
            type="url"
            name="resume"
            value={formData.resume}
            onChange={handleChange}
            required
            placeholder="https://example.com/resume.pdf"
            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyForm;