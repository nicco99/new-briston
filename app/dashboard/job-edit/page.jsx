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
  deadline: yup.string().required(),
});

const PostEdit = () => {
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
          <div className="flex flex-row justify-between mt-12 mb-20 lg:w-9/12 mx-auto">
            <h2 className="font-[600] ">Post Jobs</h2>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-3 flex mx-auto flex-col  lg:w-2/3  bg-[#ffffff] rounded-md lg:shadow-lg py-5">
            <div className="w-full mb-2">
              <p className="mb-2">Job title</p>
              <input
                {...register("title")}
                className="border bottom-1 w-full rounded-sm p-2"
                placeholder="job title"
              />
              <p>{errors.title?.message}</p>
            </div>
            <div className="w-full  mb-2">
              <p className="mb-2">Job description</p>
              <textarea
                {...register("description")}
                className="border bottom-1 w-full p-2"
                placeholder="job description"
              />
              <p>{errors.description?.message}</p>
            </div>
            <div className="w-full">
              <p className="mb-2">Deadline</p>
              <input
                {...register("deadline")}
                type="date"
                className="border bottom-1 w-full p-2"
              />
              <p>{errors.deadline?.message}</p>
            </div>
            <div className="w-full">
              <button className="p-2 hover:bg-blue-500 m-2 outline outline-1 rounded-md text-sm text-[#ffffff] mt-3">
                back
              </button>
              <button className="p-2 bg-blue-500 m-2 rounded-md text-sm text-[#ffffff] mt-3">
                {loading ? "posting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </Layout>
    </ProtectedRoute>
  );
};

export default PostEdit;
