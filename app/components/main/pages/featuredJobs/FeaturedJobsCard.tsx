import { FeaturedJob } from "@/app/types/featuredJobs";


interface Props {
  job: FeaturedJob;
}

const FeaturedJobsCard = ({ job }: Props) => {
  return (
    <div className="border  p-5 hover:shadow-md transition bg-white">
      {/* Top */}
      <div className="flex justify-between items-start mb-4">
        <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-md font-bold">
          {job.logo}
        </div>

        <span className="text-xs border px-2 py-1 rounded-md text-blue-500 border-blue-200">
          {job.type}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-semibold text-lg mb-1">{job.title}</h3>

      {/* Company */}
      <p className="text-sm text-gray-500 mb-3">
        {job.company} • {job.location}
      </p>

      {/* Description */}
      <p className="text-sm text-gray-400 mb-4 line-clamp-2">
        {job.description}
      </p>

      {/* Tags */}
      <div className="flex gap-2 flex-wrap">
        {job.tags.map((tag, index) => (
          <span
            key={index}
            className={`text-xs px-2 py-1 rounded-full ${
              tag === "Design"
                ? "bg-green-100 text-green-600"
                : tag === "Marketing"
                ? "bg-yellow-100 text-yellow-600"
                : tag === "Business"
                ? "bg-purple-100 text-purple-600"
                : "bg-blue-100 text-blue-600"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobsCard;