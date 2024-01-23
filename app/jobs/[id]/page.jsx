"use client";
import Layout from "@/components/layout/Layout";
import React from "react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { timeDiff } from "@/dateFunctions";

const JobPage = ({ params: { id } }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://bristol.onrender.com/jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data.data));
  });

  // const token = localStorage.getItem("token");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
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

  const responsibilityList = data?.responsibilities?.split(",");
  const requirementsList = data?.requirements?.split(",");
  const handleEdit = (id) => {
    router.push(`/dashboard/job-edit/${id}`);
  };

  return (
    <Layout headerStyle={1} footerStyle={1} wrapperCls="home_1">
      <div className="bg-[#ffffff] lg:shadow-md p-3">
        <div className="hover:underline cursor-pointer ml-auto w-auto">
          {" "}
          <button className="p-1 mb-3 bg-[blue] text-[#ffffff] rounded-[5px]">
            Back
          </button>
        </div>
        <p className="font-[600] text-3xl mb-3">{data?.title}</p>
        <p className="font-[600]">Description:</p>
        <p className="mb-3"> {data?.description}</p>
        <h4 className="font-[600]">Responsibilities</h4>
        <ul>
          {responsibilityList?.map((item, i) => (
            <li className="ml-3">-{item}</li>
          ))}
        </ul>
        <h4 className="font-[600]">Requirements</h4>
        <ul>
          {requirementsList?.map((item, i) => (
            <li className="ml-3">-{item}</li>
          ))}
        </ul>
        <a href="mailto:consult@bristonhr.com">
          <button className="bg-blue-500 p-2 mt-3 rounded-md text-[#ffffff]">
            Easy apply
          </button>
        </a>
        <p className="text-right mb-5">
          Post date:{" "}
          <span className="font-[700]">{timeDiff(data?.created_at)}</span>
        </p>
        <p className="text-left mb-5">
          Application deadline:{" "}
          <span className="font-[700]">{data?.deadline}</span>
        </p>
        {/* {token && (
          <div className="lg:w-2/3 mx-auto flex justify-between">
            <button
              onClick={() => setShowModal(true)}
              className="bg-red-500 px-2 rounded-sm text-[#ffffff]">
              {loading ? "Deleting..." : "Delete"}
            </button>
            <button
              onClick={() => handleEdit(id)}
              className="bg-green-600 px-2 rounded-sm text-[#ffffff]">
              Edit
            </button>
          </div>
        )} */}
        <hr></hr>
      </div>
      <div>
        {showModal ? (
          <>
            <div className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 p-5 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between  rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Are you sure you want to delete {title} job post?
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}>
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed"></p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-1 border-t  rounded-b">
                    <button
                      className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}>
                      cancel
                    </button>
                    <button
                      onClick={() => handleDelete(id)}
                      className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </Layout>
  );
};

export default JobPage;
