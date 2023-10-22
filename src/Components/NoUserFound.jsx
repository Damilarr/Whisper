import React from "react";

const NoUserFound = () => {
  return (
    <div className="grid h-screen px-4 text-white place-content-center">
      <div className="text-center flex flex-col items-center">
        <img src="/illus.svg" className="w-3/4" alt="" />

        <h1 className="mt-6 text-2xl font-bold tracking-tight  sm:text-4xl">
          User Not Found
        </h1>

        <p className="mt-4 ">
          There seems to be no user with the link used. kindly recheck the
          copied link
        </p>
      </div>
    </div>
  );
};

export default NoUserFound;
