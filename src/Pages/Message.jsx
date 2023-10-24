import React, { useEffect, useRef } from "react";
import useState from "react-usestateref";
import { useParams } from "react-router-dom";
import { database, storage } from "../firebaseConfig";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import GetUser from "../Hooks/getUserr";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import NoUserFound from "../Components/NoUserFound";
const Message = () => {
  const { uid } = useParams();
  const [message, setMessage, messageRef] = useState({
    messageText: "",
    date: "",
    id: "",
  });
  const [issending, setIsSending] = useState(false);
  const inputFile = useRef(null);
  const { isLoading, isError, user } = GetUser(uid.slice(1));
  const [image, setImage, imageRef] = useState({ preview: "", raw: "" });
  const [imageUrl, setImageUrl, imageUrlRef] = useState(null);
  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };
  const handleUpload = async () => {
    const storageRef = ref(storage, `images/${image.raw.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image.raw);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        toast.error(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageUrl(downloadURL);
          setMessage({
            ...message,
            image: imageUrlRef.current,
            date: new Date().toLocaleString(),
            id: Date.now(),
          });
        });
      }
    );
  };
  function addMessage() {
    const documentRef = doc(database, "Users", uid.slice(1));
    updateDoc(documentRef, {
      messages: arrayUnion(message),
    })
      .then(() => {
        toast.success("Message sent");
        resetInput();
        setMessage({
          ...messageRef.current.current,
          messageText: "",
          date: "",
          id: "",
        });
        setIsSending(false);
      })
      .catch((err) => {
        toast.success(err.message);
      });
  }
  async function handleMessageSubmit() {
    setIsSending(true);
    if (image.raw !== "") {
      await handleUpload();
    } else {
      setMessage({
        ...message,
        date: new Date().toLocaleString(),
        id: Date.now(),
      });
    }
  }
  const resetInput = () => {
    inputFile.current.value = "";
    inputFile.current.type = "text";
    inputFile.current.type = "file";
    setImage({ preview: "", raw: "" });
    setImageUrl(null);
  };
  useEffect(() => {
    if (message.date && imageUrl) {
      addMessage();
    }
  }, [imageUrl]);
  useEffect(() => {
    if (message.date && !imageUrl) {
      addMessage();
    }
  }, [message]);
  if (!user) {
    return <NoUserFound />;
  }
  return (
    <section className="w-full">
      <div className="heading text-center font-bold text-xl sm:text-2xl m-5 text-white">
        Write a secret message to {user?.userName}
      </div>
      <div className=" rounded-lg mx-auto w-full sm:w-10/12 flex flex-col text-gray-800 border border-[#334155] p-4 shadow-lg max-w-2xl">
        {image.preview ? (
          <div className="relative">
            <img
              src={image.preview}
              alt="attached image"
              className="w-full sm:h-72"
              height={300}
            />
            <i
              onClick={resetInput}
              className="fa fa-x absolute top-3 right-4  cursor-pointer px-4 py-[13px] bg-slate-500 shadow-md text-white hover:text-yellow-500 hover:border-yellow-500 hover:border rounded-full "
            ></i>
          </div>
        ) : (
          <span></span>
        )}
        <textarea
          className="description bg-[#334155] sec p-3 h-44 sm:h-60 border border-[#334155] shadow-md rounded-md text-white outline-none"
          placeholder="Leave a message or feedback"
          name="messageText"
          value={message.messageText}
          readOnly={issending}
          onChange={(e) =>
            setMessage({ ...message, [e.target.name]: e.target.value })
          }
        ></textarea>

        {/* icons */}
        <div className="items-center flex justify-between text-gray-500 m-2">
          <label
            htmlFor="file-upload"
            className="cursor-pointer text-white inline-block border rounded-md border-yellow-500 py-2 px-3"
          >
            <i className="fa fa-camera"></i>
          </label>
          <input
            id="file-upload"
            onChange={handleChange}
            className="hidden"
            disabled={issending}
            type="file"
            ref={inputFile}
          />
          {issending ? (
            <button
              disabled
              className="btn border rounded-md border-yellow-500 p-1 px-4 font-semibold cursor-pointer text-black ml-2 bg-yellow-500"
            >
              <span>
                Sending{" "}
                <i className="fa-solid text-gray-200 fa-spinner fa-spin"></i>
              </span>
            </button>
          ) : (
            <div
              onClick={handleMessageSubmit}
              className="btn border rounded-md border-yellow-500 p-1 px-4 font-semibold cursor-pointer text-black ml-2 bg-yellow-500"
            >
              Send Message
            </div>
          )}
        </div>
      </div>
      <ToastContainer theme="dark" />
    </section>
  );
};

export default Message;
