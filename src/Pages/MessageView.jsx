import React, { useEffect } from "react";
import { UseGlobalContext } from "../Components/Context";
import { database } from "../firebaseConfig";
import { arrayRemove, doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import GetData from "../Hooks/getData";
const MessageView = () => {
  const { user, isError, isLoading } = UseGlobalContext();
  const deleteMessage = async (messageObj) => {
    const documentRef = doc(database, "Users", sessionStorage.getItem("uid"));
    await updateDoc(documentRef, {
      messages: arrayRemove(messageObj),
    });
    toast.success("Message Deleted");
  };
  useEffect(() => {}, [user, user?.messages]);

  return (
    <div className="mx-auto max-w-screen-xl py-12">
      <h2 className="text-white px-2 text-center text-4xl font-bold tracking-tight sm:text-5xl">
        Messages
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
        {user?.messages ? (
          user.messages.map((message) => {
            return (
              <blockquote
                key={message.id}
                className="rounded-lg bg-gray-800 text-white space-y-2 flex flex-col justify-around p-4 shadow-sm sm:p-6"
              >
                <span className="text-white font-exo text-sm text-center sm:text-base font-medium">
                  {message.date}
                </span>
                {message.image && (
                  <img
                    alt="Man"
                    src={message?.image}
                    className="object-cover rounded-lg mx-auto"
                    width={300}
                    height={300}
                  />
                )}

                <p className="mt-1 sm:mt-3 font-exo2 text-base  text-white">
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
          <p className="text-white w-full text-lg text-center mx-auto">
            No message here yet,share your link to recive messages
          </p>
        )}
      </div>
    </div>
  );
};

export default MessageView;
