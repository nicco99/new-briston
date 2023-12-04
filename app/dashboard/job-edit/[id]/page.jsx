"use client";
import Layout from "@/components/layout/Layout";
import { useState, useEffect } from "react";
import { parseJSON } from "date-fns";
import { format } from "date-fns-tz";

import { useRouter } from "next/navigation";
import ProtectedRoute from "@/components/layout/protectedRoute";

export async function generateStaticParams() {
  const jobs = await fetch("https://bristol.onrender.com/jobs").then((res) =>
    res.json()
  );

  return jobs.map((job) => ({
    id: job.id,
  }));
}

// export function getLocalTime(date) {
//   const dateTime = new Date(date);
//   return format(
//     parseJSON(new Date()), // parse string and date types
//     "yyyy-MM-dd HH:mm:ss"
//   );
// }
const Edit = ({ params }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const router = useRouter();

  useEffect(() => {
    fetch(`https://bristol.onrender.com/jobs/${params.id}`)
      .then((res) => res.json())
      .then((data) => setFormData(data.data));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(`https://bristol.onrender.com/jobs/${params.id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        title: formData.title,
        description: formData.description,
        deadline: formData.deadline,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        router.push("/dashboard/jobs");
      });
    setLoading(false);
  };

  return (
    <ProtectedRoute>
      <Layout headerStyle={1} footerStyle={1} wrapperCls="home_1">
        <div className="mb-2">
          <div className="flex flex-row justify-between mt-12 mb-10 lg:w-9/12 mx-auto">
            <h2 className="font-[600] ">Edit Job</h2>
          </div>
          <form
            onSubmit={handleSubmit}
            className="p-3 flex mx-auto flex-col  lg:w-2/3  bg-[#ffffff] rounded-md lg:shadow-lg py-5">
            <div className="w-full mb-2">
              <p className="mb-2 font-[700] text-[20px]">Job title</p>
              <input
                value={formData?.title}
                name="title"
                onChange={(e) => handleChange(e)}
                className="border bottom-1 w-full rounded-sm p-2"
                placeholder="job title"
              />
            </div>
            <div className="w-full  mb-2">
              <p className="mb-2 font-[700] text-[20px]">Job description</p>
              <textarea
                value={formData?.description}
                name="description"
                onChange={(e) => handleChange(e)}
                className="border bottom-1 w-full p-2"
                placeholder="job description"
              />
            </div>
            <div className="w-full">
              <p className="mb-2 font-[700] text-[20px]">Deadline</p>
              <input
                name="deadline"
                onChange={(e) => handleChange(e)}
                type="date"
                className="border bottom-1 w-full p-2"
              />
            </div>
            <div className="w-full">
              <button className="p-2 bg-blue-500 rounded-md text-sm text-[#ffffff] mt-3">
                {loading ? "updating..." : "Update"}
              </button>
            </div>
          </form>
        </div>
      </Layout>
    </ProtectedRoute>
  );
};
export default Edit;
