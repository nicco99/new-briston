import { timeDiff } from "@/dateFunctions";
import Link from "next/link";
const Job = ({ job }) => {
  return (
    <div className="p-3 flex flex-col border border-grey-200 mb-5 rounded-[5px]">
      <Link  href={`/jobs/${job.id}`}><h2 className="text-black font-[500] hover:underline">{job.title}</h2></Link>
      <p>{`${job.description.split(" ").splice(0, 50).join(" ")}.....`} </p>
      <div className="w-full flex items-end">
        <div className="ml-auto">{timeDiff(job.created_at)}</div>
      </div>
    </div>
  );
};

export default Job;
