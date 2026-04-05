import { LatestJob } from "@/app/types/latestJobs";

interface Props {
  job: LatestJob;
}

const LatestJobsCard = ({ job }: Props) => {
  return (
    <div className="flex items-start gap-4 bg-white rounded-xl p-4 hover:shadow-sm transition">
      
      {/* Logo */}
      <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg font-bold text-gray-700">
        {job.logo}
      </div>

      {/* Content */}
      <div className="flex flex-col">
        {/* Title */}
        <h3 className="font-semibold text-[15px] mb-1">
          {job.title}
        </h3>

        {/* Company + Location */}
        <p className="text-xs text-gray-500 mb-2">
          {job.company} • {job.location}
        </p>

        {/* Tags */}
        <div className="flex items-center gap-2 flex-wrap">
          
          {/* Job Type */}
          <span className="text-xs px-2 py-[2px] rounded-full bg-green-100 text-green-600">
            {job.type}
          </span>

          {/* Other Tags */}
          {job.tags.map((tag, index) => (
            <span
              key={index}
              className={`text-xs px-2 py-[2px] rounded-full ${
                tag === "Marketing"
                  ? "bg-yellow-100 text-yellow-600"
                  : tag === "Design"
                  ? "border border-blue-500 text-blue-500"
                  : "bg-blue-100 text-blue-600"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestJobsCard;