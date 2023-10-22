import React from "react";
export function Steps({}) {
  return (
    <ol className="space-y-4 w-full sm:w-1/2 lg:w-1/3 py-14">
      <li>
        <div
          className="w-full p-4 text-green-700 border border-green-300 rounded-lg bg-[#1e293b] "
          role="alert"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-medium">1. Create an account.</h3>
            <i>icon</i>
          </div>
        </div>
      </li>
      <li>
        <div
          className="w-full p-4 text-green-700 border border-green-300 rounded-lg bg-[#1e293b] "
          role="alert"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-medium">2. Login to your account.</h3>
            <i>icon</i>
          </div>
        </div>
      </li>
      <li>
        <div
          className="w-full p-4 text-green-700 border border-green-300 rounded-lg bg-[#1e293b] "
          role="alert"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-medium">3. Share link with friends.</h3>
            <i>icon</i>
          </div>
        </div>
      </li>
      <li>
        <div
          className="w-full p-4 text-green-700 border border-green-300 rounded-lg bg-[#1e293b] "
          role="alert"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-medium">4. Receive Messages.</h3>
            <i>icon</i>
          </div>
        </div>
      </li>
      <li>
        <div
          className="w-full p-4 text-green-700 border border-green-300 rounded-lg bg-[#1e293b] "
          role="alert"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-medium">5. Reply to messages.</h3>
            <i>icon</i>
          </div>
        </div>
      </li>
    </ol>
  );
}
