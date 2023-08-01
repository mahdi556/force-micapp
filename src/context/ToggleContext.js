"use client";
import { createContext, useState } from "react";


const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  return (
    <ToggleContext.Provider value={{sidebar,setSidebar,loginModal, setLoginModal}}>
        {children}
    </ToggleContext.Provider>
  );
};

export default ToggleContext;