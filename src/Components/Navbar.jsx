import React from "react";
import { UseGlobalContext } from "./Context";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import GetData from "../Hooks/getData";

const Navbarr = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  // const { user } = UseGlobalContext();
  const { user } = GetData(sessionStorage.getItem("uid"));
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Signed out successfully");
        sessionStorage.removeItem("uid");
        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((error) => {
        // An error happened.
        toast.error(error.message);
      });
  };
  return (
    <div className="flex flex-wrap ">
      <div className=" p-2 sm:p-4 w-full">
        {/* <!--dark mode - text and icons--> */}
        <div className="p-2 text-gray-700 bg-gray-900 rounded-lg shadow-lg font-medium capitalize">
          <span className="px-2 mr-2 border-r border-gray-300 sm:border-gray-500">
            <img
              src="/logo-notext.png"
              alt="alt placeholder"
              className="w-8 h-8 -mt-1 inline mx-auto"
            />
          </span>
          <span className="text-slate-100">WHISPER</span>
          {/* <i class="w-8 fas fa-stream p-2 sm:hidden bg-gray-800 rounded-full"></i> */}
          <button
            onClick={handleLogout}
            title="Logout"
            className="text-white hover:text-yellow-500 cursor-pointer w-10 relative float-right mr-3"
          >
            <i className="fas fa-arrow-right-from-bracket p-2 bg-gray-800 rounded-full"></i>
          </button>
          {user ? (
            <span className="float-right border-r cursor-pointer  relative w-10 mr-3 border-gray-800">
              <img
                src={user.photoURL}
                alt="alt placeholder"
                className="w-[30px] h-[30px] rounded-full inline mx-auto"
              />
              <span className="absolute right-0 top-0 -mt-1 -mr-1 text-xs bg-yellow-500 text-black font-medium px-2 rounded-full">
                {user.messages && user.messages.length > 0
                  ? user.messages.length
                  : 0}
              </span>
            </span>
          ) : (
            <i className="fa-solid fa-spinner fa-spin-pulse text-white mr-3 float-right"></i>
          )}
        </div>
      </div>
      <ToastContainer theme="dark" autoClose="2000" />
    </div>
  );
};

export default Navbarr;
