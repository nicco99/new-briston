"use client";
import ProtectedRoute from "@/components/layout/protectedRoute";
import Link from "next/link";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import image from "../../public/linkedin_job_posting2x-1.png";
const Dashboard = () => {
  // const router = useRouter();
  const handlePost = () => {
    router.push("/dashboard/job-post");
  };

  return (
    <ProtectedRoute>
      <div className="w-full p-3">
        <div className="flex flex-row justify-between mt-12 mb-10 lg:w-9/12 mx-auto">
          <h2 className="font-[600] ">
            Welcome Briston Admin, We are happy to serve you
          </h2>
          <Link href="/dashboard/jobs">
            <button className="bg-blue-500 px-3 py-2  rounded-md text-[#ffffff]  mr-4">
              Jobs
            </button>
          </Link>
        </div>
        <div className="h-full  flex flex-col lg:flex-row justify-center items-center mx-8">
          <div className="">
            <Image
              height={300}
              className="mx-auto mb-5 "
              width={400}
              src={image}
              alt="pic"
            />
          </div>
          <div className="gap-5 flex flex-col mx-4  ">
            <h2 className="text-3xl">Job board for posting jobs</h2>
            <p>
              Dribbble is the heart of the work community and the best resource
              to discover and connect with work and jobs worldwide.
            </p>
            <Link className="mb-5" href="/dashboard/job-post">
              <button
                onClick={handlePost}
                className="rounded-[20px] mx-auto items-center justify-center gap-1 flex p-2 bg-[#000000] font-bold text-[#ffffff]">
                <AiOutlinePlus className="text-[#ffffff]" />{" "}
                <span>Post a job</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
