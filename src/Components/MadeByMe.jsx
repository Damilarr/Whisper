import React from "react";

const MadeByMe = () => {
  return (
    <span className="text-white py-4 flex justify-center items-center space-x-1">
      <span className="text-slate-400">Made with </span>
      <i className="fa fa-heart animate-pulse px-2 text-red-500"></i> by{" "}
      <a href="https://github.com/Damilarr" target="_blank">
        AED
      </a>
    </span>
  );
};

export default MadeByMe;
