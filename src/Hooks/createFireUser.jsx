import { doc, setDoc } from "firebase/firestore";
import React from "react";
import { toast } from "react-toastify";
import { database } from "../firebaseConfig";

const createFireUser = (uid, userName, email, photoURL) => {
  const createUserLink = (userId) => {
    return `http://127.0.0.1:5173/res/:${userId}`;
  };
  const createFireStoreUser = async () => {
    await setDoc(doc(database, "Users", `${uid}`), {
      userName: userName,
      email: email,
      userLink: createUserLink(uid),
      photoURL: photoURL,
    }).catch((err) => {
      toast.error(err.message);
    });
  };
};

export default createFireUser;
