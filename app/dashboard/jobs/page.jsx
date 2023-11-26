"use client";
import JobCard from "@/components/DataDisplay/Jobcard";
import Link from "next/link";
import { useState, useEffect } from "react";
import ProtectedRoute from "@/components/layout/protectedRoute";
const Jobs = ({ jobList }) => {
  const [jobs, setJobs] = useState(jobList);

  useEffect(() => {
    fetch("https://bristol.onrender.com/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data.job));
  }, []);

  return (
    <ProtectedRoute>
      <div className="lg:w-9/12 lg:mx-auto">
        <div className="flex flex-row justify-between mt-12 mb-20">
          <h2 className="font-[600] ">Briston Jobs</h2>
          <Link href="/dashboard">
            <button className="bg-blue-500 px-3 py-2  rounded-md text-[#ffffff]  mr-4">
              Dashboard
            </button>
          </Link>
        </div>

        <div className="">
          {jobs?.map((job) => (
            <JobCard {...job} />
          ))}
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Jobs;
