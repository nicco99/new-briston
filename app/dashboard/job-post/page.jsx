"use client";
import ProtectedRoute from "@/components/layout/protectedRoute";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import Layout from "@/components/layout/Layout";
import { useState } from "react";

const schema = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
  responsibilities: yup.string().required(),
  requirements: yup.string().required(),
  deadline: yup.string().required(),
});

const PostJob = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    setLoading(true);
    fetch("https://bristol.onrender.com/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        router.push("/dashboard/jobs");
      });
  };

  return (
    <ProtectedRoute>
      <Layout headerStyle={1} footerStyle={1} wrapperCls="home_1">
        <div className="mb-2">
          <div className="flex flex-row justify-between mt-12 mb-8 lg:w-9/12 mx-auto">
            <h2 className="font-[600] ml-5">Post Jobs</h2>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-3 flex mx-auto flex-col  lg:w-2/3  bg-[#ffffff] rounded-md lg:shadow-lg py-5">
            <div className="w-full mb-2">
              <p className="mb-2 font-[700] text-[20px]">Job title</p>
              <input
                {...register("title")}
                className="border  border-blue-900  bottom-1 w-full rounded-sm p-2 placeholder-blue-900 "
                placeholder="job title"
              />
              <p className="text-red-500">{errors.title?.message}</p>
            </div>
            <div className="w-full  mb-2">
              <p className="mb-2 font-[700] text-[20px]">Job description</p>
              <textarea
                {...register("description")}
                className="border bottom-1 w-full p-2 placeholder-blue-900"
                placeholder="job description"
              />
              <p className="text-red-500">{errors.description?.message}</p>
            </div>
            <div className="w-full  mb-2">
              <p className="mb-2 font-[700] text-[20px]">Job Requirements</p>
              <textarea
                {...register("requirements")}
                className="border bottom-1 w-full p-2 placeholder-blue-900"
                placeholder="Write job requirements separated by a commas"
              />
              <p className="text-red-500">{errors.requirements?.message}</p>
            </div>
            <div className="w-full  mb-2">
              <p className="mb-2 font-[700] text-[20px]">Job Responsibilities</p>
              <textarea
                {...register("responsibilities")}
                className="border bottom-1 w-full p-2 placeholder-blue-900"
                placeholder="Write job responsibilities separated by a commas"
              />
              <p className="text-red-500">{errors.responsibilities?.message}</p>
            </div>
            <div className="w-full">
              <p className="mb-2 font-[700] text-[20px]">Deadline</p>
              <input
                {...register("deadline")}
                type="date"
                className="border bottom-1 w-full p-2 placeholder-blue-900"
              />
              <p className="text-red-500">{errors.deadline?.message}</p>
            </div>
            <div className="w-full">
              <button className="p-2 w-full bg-blue-500 rounded-md text-sm text-[#ffffff] mt-4">
                {loading ? "posting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </Layout>
    </ProtectedRoute>
  );
};

export default PostJob;
