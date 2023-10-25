import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { database } from "../firebaseConfig";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
const SignUp = () => {
  const pfp = [
    "https://tinyurl.com/256xvcve",
    "https://tinyurl.com/4y5vf2yw",
    "https://tinyurl.com/2s4hzjy6",
    "https://tinyurl.com/3nccw8aa",
    "https://tinyurl.com/3nj923xk",
    "https://tinyurl.com/3s96m3m8",
    "https://tinyurl.com/3zha5v88",
    "https://tinyurl.com/5n7rz583",
    "https://tinyurl.com/3mest45a",
    "https://tinyurl.com/y7x6pzvp",
  ];
  const auth = getAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [passEqual, setPassEqual] = useState(true);
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const checkPass = (e) => {
    if (e.target.value == user.password) {
      setPassEqual(true);
      return true;
    }
    setPassEqual(false);
  };
  const handleUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const createUserLink = (userId) => {
    return `https://whispme.vercel.app/:${userId}`;
  };
  const createUser = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        const userr = userCredential.user;
        createFireStoreUser(userr.uid);
        setTimeout(() => {
          setIsLoading(false);
          navigate("/login");
        }, 5000);
      })
      .catch((error) => {
        toast.error(error.message, { theme: "dark" });
        setIsLoading(false);
      });
  };

  //   create the same user using id from auth in firestore databse
  const createFireStoreUser = async (uid) => {
    await setDoc(doc(database, "Users", `${uid}`), {
      userName: user.userName,
      email: user.email,
      userLink: createUserLink(uid),
      photoURL: pfp[Math.floor(Math.random() * pfp.length)],
      messages: "",
    })
      .then(() => {
        toast.success("Account created succesfully", { theme: "dark" });
      })
      .catch((err) => {
        toast.error(err.message, { theme: "dark" });
      });
  };

  useEffect(() => {}, [passEqual]);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <form className="w-full max-w-md">
          <div className="flex justify-center mx-auto">
            <img
              className="w-auto h-14 sm:h-20"
              src="/logo-notext.png"
              alt=""
            />
          </div>

          <div className="flex items-center justify-center mt-6">
            <p className="w-1/3 pb-4 font-medium text-center  capitalize border-b-2  border-yellow-400 text-white">
              sign up
            </p>
          </div>

          <div className="relative flex items-center mt-8">
            <span className="absolute">
              <svg
                xmlns="https://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3  text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>

            <input
              type="text"
              className="block w-full py-3 border rounded-lg px-11 bg-gray-900 text-gray-300 border-gray-600 focus:border-yellow-300 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Username"
              name="userName"
              value={user.userName}
              onChange={handleUser}
            />
          </div>
          <div className="relative flex items-center mt-6">
            <span className="absolute">
              <svg
                xmlns="https://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>

            <input
              type="email"
              className="block w-full py-3 bg border rounded-lg px-11 bg-gray-900 text-gray-300 border-gray-600 focus:border-yellow-300 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Email address"
              name="email"
              value={user.email}
              onChange={handleUser}
            />
          </div>

          <div className="relative flex items-center mt-4">
            <span className="absolute">
              <svg
                xmlns="https://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>

            <input
              type="password"
              className="block w-full px-10 py-3 border rounded-lg bg-gray-900 text-gray-300 border-gray-600 focus:border-yellow-300 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Password"
              name="password"
              onChange={handleUser}
            />
          </div>

          <div className="relative flex items-center mt-4">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>

            <input
              type="password"
              id="confirm"
              className="block w-full px-10 py-3 border rounded-lg bg-gray-900 text-gray-300 border-gray-600 focus:border-yellow-300 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Confirm Password"
              onChange={checkPass}
            />
          </div>
          {!passEqual && (
            <small className="text-red-500">Passwords do not match</small>
          )}

          <div className="mt-6">
            {!isLoading ? (
              <button
                className="w-full px-6 py-3 text-sm font-semibold tracking-wide text-black  capitalize transition-colors duration-300 transform bg-yellow-500 rounded-lg hover:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-opacity-50"
                onClick={createUser}
              >
                Sign Up
              </button>
            ) : (
              <button
                className="w-full px-6 py-3 text-sm font-semibold tracking-wide text-black   transition-colors bg-yellow-500 rounded-lg"
                disabled={true}
              >
                <i class="fa-solid fa-spinner fa-spin-pulse text-white"></i>
              </button>
            )}

            <div className="mt-6 text-center ">
              <Link
                to={"/login"}
                className="text-sm hover:underline text-yellow-400"
              >
                Already have an account? Sign In
              </Link>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default SignUp;
