import { useCallback, useEffect, useState } from "react";
import { database } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const GetData = (id = null) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const dataInt = setInterval(async () => {
      let userId = "";
      try {
        if (id !== null) {
          userId = id;
        } else {
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
  };
};

export default GetData;
