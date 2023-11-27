"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const JobCard = ({
  updateState,
  job,
  id,
  title,
  description,
  created_at,
  deadline,
}) => {
  const token = localStorage.getItem("token");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleDelete = (id) => {
    setLoading(true);
    fetch(`https://bristol.onrender.com/jobs/${parseInt(id)}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => {
      updateState(job);
      setLoading(false);
    });
  };

  const handleEdit = (id) => {
    router.push(`/dashboard/job-edit/${id}`);
  };

  return (
    <div className="bg-[#ffffff] lg:shadow-md p-3">
      <p className="font-[600]">{title}</p>
      <p>{description}</p>

      <p className="text-right mb-5">
        Post date: <span className="font-[700]">{created_at}</span>
      </p>
      <p className="text-left mb-5">
        Application deadline: <span className="font-[700]">{deadline}</span>
      </p>
      <button className="bg-blue-500 p-2 mt-3 rounded-md text-[#ffffff]">
        Easy apply
      </button>
      {token && (
        <div className="lg:w-2/3 mx-auto flex justify-between">
          <button
            onClick={() => handleDelete(id)}
            className="bg-red-500 px-2 rounded-sm text-[#ffffff]">
            {loading ? "Deleting..." : "Delete"}
          </button>
          <button
            onClick={() => handleEdit(id)}
            className="bg-green-600 px-2 rounded-sm text-[#ffffff]">
            Edit
          </button>
        </div>
      )}
      <hr></hr>
    </div>
  );
};

export default JobCard;
