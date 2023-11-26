"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    fetch("https://bristol.onrender.com/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("token", `${data.token}`);
        router.push("/dashboard/jobs");
      });
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#ffffff] lg:shadow-md gap-3 lg:w-1/2 p-3 mx-auto py-5 rounded-md my-auto">
        <h1 className="font-[600] text-center">Welcome Admin</h1>
        <div className="flex flex-col gap-2">
          <p className="font-[500]">Email</p>
          <input
            {...register("email")}
            type="text"
            className="border bottom-1 w-full p-2"
            placeholder="Enter email"
          />
          <p className="text-red-500">{errors.email?.message}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-[500]">Password</p>
          <input
            {...register("password")}
            type="password"
            className="border bottom-1 w-full p-2"
            placeholder="Enter password"
          />
          <p className="text-red-500">{errors.password?.message}</p>
        </div>
        <div className="w-full">
          <button className="p-2 w-full mx-auto bg-blue-500 m-2 rounded-md text-sm text-[#ffffff] mt-3">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
