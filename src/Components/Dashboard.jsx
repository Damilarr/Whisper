import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import MessageView from "../Pages/MessageView";
import Navbarr from "./Navbar";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import SkeletonLoader from "./SkeletonLoader";
import GetData from "../Hooks/getData";
import { UseGlobalContext } from "./Context";
const Dashboard = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const { isLoading, isError, user } = UseGlobalContext();
  const handleCopyClick = () => {
    navigator.clipboard.writeText(user?.userLink);
    toast.success("Link Copied");
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("");
      } else {
        navigate("/login");
      }
    });
  }, []);

  return (
    <>
      <Navbarr />
      <section className="flex flex-col px-4  py-3">
        {user ? (
          <section className="flex flex-col justify-between gap-5 rounded-xl bg-slate-800 p-5 sm:w-3/4 lg:w-3/6 mx-auto">
            <div className="text-left text-white font-exo2 font-semibold">
              <h1 className="text-xl  ">Hello,{user?.userName}</h1>
              <p className="font-exo2">
                Share the link below to receive messages
              </p>
            </div>

            <div className="flex gap-2">
              <input
                // ref={linkRef}
                type="text"
                name="code"
                id="code"
                value={!user ? "loading..." : user?.userLink}
                readOnly
                className="w-full text-white overflow-hidden rounded-md bg-slate-700 p-2"
              />
              <button
                onClick={handleCopyClick}
                className="whitespace-nowrap rounded-md border-[1.5px] border-yellow-500 bg-yellow-500 p-2 font-semibold transition-all duration-150 hover:bg-transparent hover:text-yellow-400 active:translate-y-1"
              >
                Copy Link
              </button>
            </div>
          </section>
        ) : (
          <SkeletonLoader />
        )}
        <MessageView />
        <ToastContainer theme="dark" autoClose="1000" />
      </section>
    </>
  );
};

export default Dashboard;
