import React from "react";
export function Steps({}) {
  return (
    <ol className="space-y-4 w-full sm:w-1/2 lg:w-1/3 py-14">
      <li>
        <div className="w-full p-4    rounded-lg bg-[#1e293b] " role="alert">
          <div className="flex items-center justify-between">
            <h3 className="font-medium from-green-700 to-yellow-500 bg-clip-text text-transparent bg-gradient-to-r">
              1. Create an account.
            </h3>
            <i>icon</i>
          </div>
        </div>
      </li>
      <li>
        <div className="w-full p-4 rounded-lg bg-[#1e293b] " role="alert">
          <div className="flex items-center justify-between">
            <h3 className="font-medium from-green-700 to-yellow-500 bg-clip-text text-transparent bg-gradient-to-r">
              2. Login to your account.
            </h3>
            <i>icon</i>
          </div>
        </div>
      </li>
      <li>
        <div className="w-full p-4  rounded-lg bg-[#1e293b] " role="alert">
          <div className="flex items-center justify-between">
            <h3 className="font-medium from-green-700 to-yellow-500 bg-clip-text text-transparent bg-gradient-to-r">
              3. Share link with friends.
            </h3>
            <i>icon</i>
          </div>
        </div>
      </li>
      <li>
        <div className="w-full p-4   rounded-lg bg-[#1e293b] " role="alert">
          <div className="flex items-center justify-between">
            <h3 className="font-medium from-green-700 to-yellow-500 bg-clip-text text-transparent bg-gradient-to-r">
              4. Receive Messages.
            </h3>
            <i>icon</i>
          </div>
        </div>
      </li>
      <li>
        <div className="w-full p-4  rounded-lg bg-[#1e293b] " role="alert">
          <div className="flex items-center justify-between">
            <h3 className="font-medium to-green-700 from-yellow-500 bg-clip-text text-transparent bg-gradient-to-r">
              5. Reply to messages.
            </h3>
            <i>icon</i>
          </div>
        </div>
      </li>
    </ol>
  );
}
