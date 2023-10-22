import { Steps } from "./Steps";
import React from "react";
import { Link } from "react-router-dom";
import TypewriterComponent from "typewriter-effect";
const Home = () => {
  return (
    <section className="flex flex-col justify-center items-center text-white">
      <img src="./logo-notext.png" className="animate-bounce w-96" alt="Logo" />
      <h2 className="font-holenVintage text-5xl md:text-7xl shadow-lg">
        WHISPER
      </h2>
      <div className="text-base">
        <div className="text-lg py-4 text-yellow-400 flex justify-around font-holenVintage">
          <span className="px-2 text-white">Get Anonymous</span>
          <TypewriterComponent
            className="text-yellow-400"
            options={{
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Messages.")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Advices.")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Compliments.")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Opinions.")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Questions.")
                .pauseFor(1000)
                .deleteAll()
                .start();
            }}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row font-medium w-full sm:w-1/2 md:w-1/3 space-x-0 md:space-y-0 space-y-3 md:space-x-2 justify-center items-center px-auto ">
        <button className="py-1 w-full hover:border-[#4338ca88] hover:border hover:bg-transparent transition-all  shadow-lg flex-grow  bg-[#4438ca88] text-white text-lg px-1 rounded-sm">
          <Link to={"/sign-up"}>Get started</Link>
        </button>
        <button className="py-1 w-full flex-grow  bg-transparent border transition-all hover:bg-[#4438ca88] hover:text-white shadow-lg border-[#4438caa0] text-white  text-lg px-2 rounded-sm">
          <Link to={"/login"}>Login</Link>
        </button>
      </div>
      {/* steps */}
      <Steps />
    </section>
  );
};

export default Home;
