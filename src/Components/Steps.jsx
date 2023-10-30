import React from "react";
export function Steps({}) {
  return (
    <ol className="space-y-4 w-full sm:w-1/2 lg:w-1/3 py-14">
      <li>
        <div
          className="w-full p-4 shadow-md border-l-2 border-yellow-500  rounded-r-lg bg-[#1e293b] "
          role="alert"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-gray-400">1. Create an account.</h3>

            <i className="fa fa-user text-green-700"></i>
          </div>
        </div>
      </li>
      <li>
        <div
          className="w-full shadow-md border-l-2 border-yellow-500  rounded-r-lg p-4 bg-[#1e293b] "
          role="alert"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-gray-400">
              2. Login to your account.
            </h3>
            <i className="fa fa-user-check text-green-700"></i>
          </div>
        </div>
      </li>
      <li>
        <div
          className="w-full p-4 shadow-md  border-l-2 border-yellow-500  rounded-r-lg   bg-[#1e293b] "
          role="alert"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-gray-400">
              3. Share link with friends.
            </h3>
            <i className="fa fa-share-nodes text-green-700"></i>
          </div>
        </div>
      </li>
      <li>
        <div
          className="w-full p-4  border-l-2 border-yellow-500  rounded-r-lg shadow-md bg-[#1e293b] "
          role="alert"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-gray-400">4. Receive Messages.</h3>

            <i className="fa-regular fa-comments text-green-700"></i>
          </div>
        </div>
      </li>
      <li>
        <div
          className="w-full p-4 shadow-md border-l-2 border-yellow-500  rounded-r-lg bg-[#1e293b] "
          role="alert"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-gray-400">
              5. Share and Reply to messages.
            </h3>
            <i className="fa fa-reply text-green-700"></i>
          </div>
        </div>
      </li>
    </ol>
  );
}
