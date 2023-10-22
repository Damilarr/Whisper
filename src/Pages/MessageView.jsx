import React, { useEffect } from "react";
import { UseGlobalContext } from "../Components/Context";
import { database } from "../firebaseConfig";
import { arrayRemove, doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
const MessageView = () => {
  // const { user, isError, isLoading } = GetData(sessionStorage.getItem("uid"));
  const { user, isLoading, isError } = UseGlobalContext();
  const deleteMessage = async (messageObj) => {
    const documentRef = doc(database, "Users", sessionStorage.getItem("uid"));
    await updateDoc(documentRef, {
      messages: arrayRemove(messageObj),
    });
    toast.success("Message Deleted");
  };
  useEffect(() => {}, [user]);

  return (
    <div className="mx-auto max-w-screen-xl py-12">
      <h2 className="text-white px-2 text-center text-4xl font-bold tracking-tight sm:text-5xl">
        Messages
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
        {!isLoading && user?.messages ? (
          user.messages.map((message) => {
            return (
              <blockquote
                key={message.id}
                className="rounded-lg bg-[#334155] text-white space-y-2 flex flex-col justify-around p-6 shadow-sm sm:p-8"
              >
                <span className="text-white font-exo font-semibold">
                  {message.date}
                </span>
                {message.image && (
                  <img
                    alt="Man"
                    src={message?.image}
                    className="object-cover rounded-lg"
                    width={300}
                    height={300}
                  />
                )}

                <p className="mt-1 sm:mt-4 font-exo2 text-white">
                  {message.messageText}
                </p>
                <div className="flex items-center text-lg justify-between">
                  <button className="bg-green-500 px-2 shadow-md rounded-md">
                    <i className="fa-solid fa-reply"></i>
                  </button>
                  <button
                    onClick={() => deleteMessage(message)}
                    className="bg-green-500 shadow-md px-2 rounded-md"
                  >
                    <i className="fa fa-trash-can"></i>
                  </button>
                </div>
              </blockquote>
            );
          })
        ) : (
          <p className="text-white text-lg text-center mx-auto">
            No message here yet,share your link to recive messages
          </p>
        )}
      </div>
    </div>
  );
};

export default MessageView;
