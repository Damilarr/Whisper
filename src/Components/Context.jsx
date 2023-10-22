import React, { createContext, useContext } from "react";
import GetData from "../Hooks/getData";
const GlobalContext = createContext();
export const UseGlobalContext = () => useContext(GlobalContext);
const AppContext = ({ children }) => {
  const { isError, isLoading, user } = GetData(sessionStorage.getItem("uid"));
  return (
    <GlobalContext.Provider value={{ isError, isLoading, user }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
