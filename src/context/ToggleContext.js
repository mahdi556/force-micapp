"use client";
import { createContext, useState } from "react";


const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <ToggleContext.Provider value={{sidebar,setSidebar}}>
        {children}
    </ToggleContext.Provider>
  );
};

export default ToggleContext;