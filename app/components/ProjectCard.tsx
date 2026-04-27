interface ProjectCardProps {
  title: string;
  status: "ongoing" | "upcoming" | "completed";
  description: string;
  date?: string;
}

export default function ProjectCard({ title, status, description, date }: ProjectCardProps) {
  const statusColor =
    status === "ongoing"
      ? "bg-green-500"
      : status === "upcoming"
      ? "bg-blue-500"
      : "bg-gray-500";

  return (
    <div className="flex flex-col border rounded-lg shadow-md p-4 bg-white dark:bg-zinc-900">
      <div className="flex items-center gap-2 mb-2">
        <span className={`h-3 w-3 rounded-full ${statusColor}`} />
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      {date && <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>}
      <p className="text-gray-700 dark:text-gray-300 mt-2">{description}</p>
    </div>
  );
}
