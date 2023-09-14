"use client";
import splitTime from "@/components/Booking/SplitTime";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import moment from "jalali-moment";

const QueContext = createContext();

export const QueProvider = ({ children }) => {
  const [intervals, setIntervals] = useState([]);
  const [activeDate, setActiveDate] = useState(null);
  const [office, setOffice] = useState(null);
  const [reserves, setReserves] = useState(null);
  const [officeID, setOfficeID] = useState(null);
  const getOffice = async () => {
    try {
      await axios({
        url: `offices/${officeID}/?time=${moment(activeDate)
          .locale("en")
          .format("YYYY-MM-DD")}`,
        method: "get",
        headers: {
          // Authorization: `Bearer ${req.cookies.token}`,
          Accept: "application/json",
        },
      })
        .then((response) => {
          setOffice(response.data.data.office);
          setReserves(response.data.data.reserves);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (e) {
      console.log(e);

      // res.status(500).json({ message: { err: ["Server Error"] } });
    }
  };
  useEffect(() => {
    officeID && getOffice();
    office && setIntervals(splitTime(office, reserves, activeDate));
  }, [officeID, activeDate]);
  useEffect(() => {
     office && setIntervals(splitTime(office, reserves, activeDate));
  }, [reserves,office]);

  return (
    <QueContext.Provider
      value={{
        intervals,
        activeDate,
        setActiveDate,
        office,
        setOfficeID,
        getOffice,
      }}
    >
      {children}
    </QueContext.Provider>
  );
};

export default QueContext;
