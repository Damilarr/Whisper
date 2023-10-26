import { useEffect, useState } from "react";
import { database } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const GetUser = (id = null) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);
  const getUser = async () => {
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
      setUser(data);
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      // toast.error(error.message);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return {
    isLoading,
    isError,
    user,
  };
};

export default GetUser;
