'use client'
import styles from "@/components/Booking/page.module.css";
import Calendar from "@/components/calendar/Calendar";
import Image from "next/image";
import QuetimesPatient from "./QuetimesPatient";
import QueContext from "@/context/QueContext ";
import { useContext, useEffect, useState } from "react";
import jMoment from "moment-jalaali";
import axios from "axios";

const Booking = ({id}) => {
  const{activeDate}=useContext(QueContext)
  const [office, setOffice] = useState({});
  useEffect(() => {
    getOffice();
  }, []);
  
  const getOffice = async () => {

    try {
      await axios({
        url:`offices/${id}`,
        method: "get",
        headers: {
          // Authorization: `Bearer ${req.cookies.token}`,
          Accept: "application/json",
        },
      })
      .then((response) => {
        setOffice(response.data.data.office);
        })
        .catch(function (error) {
          console.log(error.response.data);
          // console.log(error);
        });
    } catch (e) {
      // res.status(500).json({ message: { err: ["Server Error"] } });
    }
  };

  return (
    <>
      <div className="d-flex col-12 py-2 flex-column">
        <div
          className={`d-flex mx-auto px-3 py-2 flex-column mb-4 ${styles.sec1}`}
        >
          <div className="d-flex mb-2  justify-content-between align-items-center ">
            <h6 className={styles.txt1}>بیمارستان سپاهان</h6>
            <h6 className={styles.txt1}>{office.doctor && office.doctor.expert}</h6>
          </div>
          <div className="d-flex  justify-content-between align-items-center ">
            <h6 className={styles.txt1}>دکتر {office.doctor && office.doctor.name}</h6>
            <h6 className={styles.txt1}>امروز : {jMoment().format("jYYYY/jM/jD")} </h6>
          </div>
        </div>
        <Calendar />
        <div
          className={` d-flex align-items-center justify-content-between py-2 px-3 mx-auto mt-4
           ${styles.sec2}`}
        >
          <span className={styles.txt2}>تاریخ انتخابی شما:</span>
          <span className={styles.txt2}>{ activeDate && activeDate.format("jYYYY/jM/jD")}</span>
        </div>
        <QuetimesPatient id={office.id} />
      </div>
    </>
  );
};
export default Booking;
