import { useEffect, useState } from "react";
import { database } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const GetData = (id = null) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const dataInt = setInterval(async () => {
      let userId = "";
      try {
        if (sessionStorage.getItem("uid")) {
          userId = sessionStorage.getItem("uid");
        } else {
          console.log("no id");
          setUser(null);
          setIsError(false);
          setIsLoading(true);
          return;
        }
        const documentRef = doc(database, "Users", userId);
        const user = await getDoc(documentRef);
        const data = user.data();
        if (data?.messages) {
          setUser({ ...data, messages: data.messages.reverse() });
        } else {
          setUser(data);
        }
        setIsLoading(false);
        setIsError(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        console.log(error.message);
      }
    }, 15000);
    return () => {
      clearInterval(dataInt); // Clear the interval when the component unmounts
    };
  }, []);
  return {
    isLoading,
    isError,
    user,
    setIsLoading,
    setIsError,
    setUser,
  };
};

export default GetData;
