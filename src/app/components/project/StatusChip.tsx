type StatusChipProps = {
  status: string;
};

export default function StatusChip({ status }: StatusChipProps) {
  const baseClasses = "text-xs font-medium px-2 py-1 rounded-full";
  let statusClasses = "";

  switch (status) {
    case "published":
      statusClasses =
        "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100";
      break;
    case "in-progress":
      statusClasses =
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100";
      break;
    default:
      statusClasses =
        "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100";
  }

  return (
    <span className={`${baseClasses} ${statusClasses}`}>
      {status.replace("-", " ")}
    </span>
  );
}
