import React, { createContext, useContext, useEffect, useState } from "react";
import useStateR from "react-usestateref";
import GetData from "../Hooks/getData";
import { useRef } from "react";
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
