import React, { createContext, useContext, useEffect, useState } from "react";
import GetData from "../Hooks/getData";
const GlobalContext = createContext();
export const UseGlobalContext = () => useContext(GlobalContext);
const AppContext = ({ children }) => {
  const [uid, setUid] = useState(false);
  const { isError, isLoading, user } = GetData();
  return (
    <GlobalContext.Provider
      value={{
        isError,
        isLoading,
        user,
        setUid,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
