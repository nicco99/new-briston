"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    // Check if the user is authenticated (e.g., by verifying the JWT token in local storage)
    const isAuthenticated = localStorage.getItem("token");
    if (!isAuthenticated) {
      // If not authenticated, redirect to the login page
      router.push("/login");
    }
  }, []);

  return <div className="bg-[#F5F5F5 grow h-full">{children}</div>;
};

export default ProtectedRoute;
