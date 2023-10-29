import React, { useEffect, useState } from "react";
import { UseGlobalContext } from "../Components/Context";
import { database, storage } from "../firebaseConfig";
import { arrayRemove, doc, updateDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import { deleteObject, ref } from "firebase/storage";
import ReactPaginate from "react-paginate";
const MessageView = () => {
  const { user, isError, isLoading } = UseGlobalContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [messagesPerPage] = useState(6);
  const indexOfLastMessage = currentPage * messagesPerPage;
  const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
  const currentMessages = user?.messages?.slice(
    indexOfFirstMessage,
    indexOfLastMessage
  );

  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };
  const deleteMessage = async (messageObj) => {
    const documentRef = doc(database, "Users", sessionStorage.getItem("uid"));
    try {
      if (messageObj.imageName) {
        const imageRef = ref(storage, `images/${messageObj.imageName}`);
        await updateDoc(documentRef, {
          messages: arrayRemove(messageObj),
        });
        deleteObject(imageRef).then(() => {
          toast.success("Message Deleted");
        });
      } else {
        await updateDoc(documentRef, {
          messages: arrayRemove(messageObj),
        });
        toast.success("Message Deleted");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {}, [user, user?.messages]);

  return (
    <div className="mx-auto max-w-screen-xl py-12">
      <h2 className="text-white px-2 text-center text-4xl font-bold tracking-tight sm:text-5xl">
        Messages
      </h2>
      {user?.messages ? (
        <>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            {currentMessages.map((message) => {
              return (
                <blockquote
                  key={message.id}
                  className="rounded-lg bg-gray-800 text-white space-y-2 flex flex-col justify-around p-4 shadow-sm sm:p-6"
                >
                  <span className="text-slate-200 font-slab text-sm text-center sm:text-base font-medium ">
                    {message.date}
                  </span>

                  <p className="mt-1 sm:mt-3 font-exo2 text-base  text-white">
                    {message.messageText}
                  </p>
                  {message.image && (
                    <img
                      alt="Man"
                      src={message?.image}
                      className="object-cover w-full rounded-lg mx-auto"
                      height={300}
                    />
                  )}
                  <div className="flex items-center text-lg justify-between">
                    <button className="bg-green-700 px-2 shadow-md rounded-md">
                      <i class="fa-solid text-gray-300 fa-bookmark"></i>
                    </button>
                    <button
                      onClick={() => deleteMessage(message)}
                      className="bg-green-700 shadow-md px-2 rounded-md"
                    >
                      <i className="fa text-gray-300 fa-trash-can"></i>
                    </button>
                  </div>
                </blockquote>
              );
            })}
          </div>
          <div className="py-3">
            <ReactPaginate
              className="py-5 justify-center items-center space-x-2 paginationn w-3/4 mx-auto flex"
              onPageChange={paginate}
              pageCount={Math.ceil(user.messages.length / messagesPerPage)}
              previousLabel={"Prev"}
              nextLabel={"Next"}
              containerClassName={"pagination"}
              pageLinkClassName={"page-number"}
              previousLinkClassName={"page-number"}
              nextLinkClassName={"page-number"}
              activeLinkClassName={"active"}
            />
          </div>
        </>
      ) : (
        <p className="text-white py-3 w-full text-lg text-center mx-auto">
          No message here yet,share your link to recive messages
        </p>
      )}
      {isError && <p>An Error Occured</p>}
    </div>
  );
};

export default MessageView;
