"use client";
import JobCard from "@/components/DataDisplay/Jobcard";
import Link from "next/link";
import { useState, useEffect } from "react";
import ProtectedRoute from "@/components/layout/protectedRoute";
import Layout from "@/components/layout/Layout";
const Jobs = ({ jobList }) => {
  const [jobs, setJobs] = useState(jobList);
 
  const updateState = (job) => {
    const newJobs = jobs.filter((j) => j.id !== job.id);
    setJobs(newJobs);
  };

  useEffect(() => {
    fetch("https://bristol.onrender.com/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data.job));
  }, []);

  return (
    <Layout headerStyle={1} footerStyle={1} wrapperCls="home_1">
      <div className="lg:w-9/12 lg:mx-auto">
        <div className="flex flex-row justify-between mt-12 mb-20">
          <h2 className="font-[600]">Briston Jobs</h2>
        </div>

        <div className="">
          <div>
            {jobs ? (
              jobs?.map((job) => (
                <JobCard job={job} updateState={updateState} {...job} />
              ))
            ) : (
              <p>Loading..</p>
            )}
          </div>
          
        </div>
      </div>
    </Layout>
  );
};

export default Jobs;
