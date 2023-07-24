"use client";
import { createContext, useState } from "react";

const QueContext = createContext();

export const QueProvider = ({ children }) => {
  const [intervals, setIntervals] = useState([]);
  const [activeDate, setActiveDate] = useState(null);
  return (
    <QueContext.Provider value={{ intervals, setIntervals ,activeDate, setActiveDate}}>
      {children}
    </QueContext.Provider>
  );
};

export default QueContext;
