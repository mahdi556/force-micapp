"use client";
import styles from "@/components/Booking/page.module.css";
import Calendar from "@/components/calendar/Calendar";
import QuetimesPatient from "./QuetimesPatient";
import QueContext from "@/context/QueContext ";
import { useContext, useEffect } from "react";
import jMoment from "moment-jalaali";

const Booking = ({ id }) => {
  const { activeDate, office, setOfficeID,reserves } = useContext(QueContext);
  useEffect(() => {
    setOfficeID(id);
  }, [id]);
  return (
    <>
      {office && (
        <div className="d-flex col-12 py-2 flex-column">
          <div
            className={`d-flex mx-auto px-3 py-2 flex-column mb-4 ${styles.sec1}`}
          >
            <div className="d-flex mb-2  justify-content-between align-items-center ">
              <h6 className={styles.txt1}>بیمارستان سپاهان</h6>
              <h6 className={styles.txt1}>
                {office.doctor && office.doctor.expert}
              </h6>
            </div>
            <div className="d-flex  justify-content-between align-items-center ">
              <h6 className={styles.txt1}>
                دکتر {office.doctor && office.doctor.name}
              </h6>
              <h6 className={styles.txt1}>
                امروز : {jMoment().format("jYYYY/jM/jD")}{" "}
              </h6>
            </div>
          </div>
          <Calendar />
          <div
            className={` d-flex align-items-center justify-content-between py-2 px-3 mx-auto mt-4
           ${styles.sec2}`}
          >
            <span className={styles.txt2}>تاریخ انتخابی شما:</span>
            <span className={styles.txt2}>
              {activeDate && activeDate.format("jYYYY/jM/jD")}
            </span>
          </div>
          <QuetimesPatient />
        </div>
      )}
    </>
  );
};
export default Booking;
