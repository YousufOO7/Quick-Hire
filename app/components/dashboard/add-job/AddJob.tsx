/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";
import { useCreateJobsMutation } from "@/app/redux/features/jobs/jobsApi";
import Label from "@/app/utils/common/Label";

interface Props {
  open: boolean;
  onClose: () => void;
  refetch: () => void;
}

const AddJob = ({ open, onClose, refetch }: Props) => {
  const [createJob, { isLoading }] = useCreateJobsMutation();

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    type: "",
    description: "",
    tags: "",
    logo: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      if (!formData.title || !formData.company) {
        toast.error("Title & Company required");
        return;
      }

      const payload = {
        title: formData.title,
        company: formData.company,
        location: formData.location,
        type: formData.type,
        description: formData.description, // HTML supported
        tags: formData.tags
          ? formData.tags.split(",").map((t) => t.trim())
          : [],
        logo: formData.logo,
        created_at: new Date().toISOString(),
      };

      await createJob(payload).unwrap();

      toast.success("Job created successfully");
      refetch();
      onClose();

      // reset
      setFormData({
        title: "",
        company: "",
        location: "",
        type: "",
        description: "",
        tags: "",
        logo: "",
      });
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to create job");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Job</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Title */}
          <div>
            <Label text="Job Title" required />
            <Input name="title" value={formData.title} onChange={handleChange} />
          </div>

          {/* Company */}
          <div>
            <Label text="Company" required />
            <Input name="company" value={formData.company} onChange={handleChange} />
          </div>

          {/* Location */}
          <div>
            <Label text="Location" required />
            <Input name="location" value={formData.location} onChange={handleChange} />
          </div>

          {/* Type */}
          <div>
            <Label text="Job Type" required />
            <Input
              name="type"
              placeholder="Full Time / Remote"
              value={formData.type}
              onChange={handleChange}
            />
          </div>

          {/* Logo */}
          <div>
            <Label text="Company Logo URL" required />
            <Input
              name="logo"
              placeholder="https://..."
              value={formData.logo}
              onChange={handleChange}
            />
          </div>

          {/* Tags */}
          <div>
            <Label text="Tags (comma separated)" required />
            <Input
              name="tags"
              placeholder="Marketing, Design"
              value={formData.tags}
              onChange={handleChange}
            />
          </div>

          {/* Description (HTML) */}
          <div>
            <Label text="Description (HTML supported)" required />
            <Textarea
              name="description"
              rows={10}
              placeholder="<p><strong>About Us:</strong></p>..."
              value={formData.description}
              onChange={handleChange}
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>

          <Button onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? "Saving..." : "Create Job"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddJob;