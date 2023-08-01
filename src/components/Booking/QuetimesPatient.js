"use client";
import React, { useContext, useEffect, useState } from "react";
import moment from "jalali-moment";
import styles from "@/components/Booking/page.module.css";
import splitTime from "./SplitTime";
import HandleQue from "./HandleQue";
import QueContext from "@/context/QueContext ";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";
import ReserveModal from "./ReserveModal";
const QuetimesPatient = ({ id }) => {
  const { intervals, setIntervals, activeDate } = useContext(QueContext);
  moment.locale("fa");
  const [srModal, setSrModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [reserves, setReserves] = useState(null);
  const [office, setOffice] = useState(null);
  const handleClose = () => {
    setSrModal(false);
  };

  useEffect(() => {
    getOffice();
  }, []);

  useEffect(() => {
    office && setIntervals(splitTime(office, reserves, activeDate));
  }, [office, activeDate]);
  // console.log(intervals)
  const getOffice = async () => {
    try {
      await axios({
        url: `offices/22/?time=${moment(activeDate)
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
          console.log(error.response.data);
          // console.log(error);
        });
    } catch (e) {
      // res.status(500).json({ message: { err: ["Server Error"] } });
    }
  };
  const refreshReserve = async () => {
    try {
      await axios({
        url: "refreshReserve",
        method: "get",
        headers: {
          // Authorization: `Bearer ${req.cookies.token}`,
          Accept: "application/json",
        },
      })
        .then((response) => {
          setReserves(response.data.data.reserves);
        })
        .catch(function (error) {
          console.log(error.response.data);
          // console.log(error);
        });
    } catch (e) {
      // res.status(500).json({ message: { err: ["Server Error"] } });
    }
  };
  const handleClick = (item) => {
    HandleQue(item);
  };
  const handleNewReserve = async (item) => {
    setSrModal(true);
    setModalData(item);
  };
  // console.log(moment(activeDate).locale("en").format("YYYY-MM-DD HH:mm:ss"));
  return (
    <>
      <div className="row align-items-baseline g-3 px-4 mt-3 w-100" dir="ltr">
        {intervals.map((item1, key1) => (
          <>
            <div className="btn btn-primary" key1={item1.id}>
              نوبت {item1.name}
            </div>
            <div className={`row py-3 g-3 px-4 mt-3 ${styles.queWrapper}`}>
              {item1.array.map((item, key) => (
                <div className={"col-4 col-md-3 col-lg-2 "} key={item.id}>
                  {item.res  ? (
                    <>
                      <div
                        className={`py-2 px-2 d-flex align-items-center justify-content-center ${styles.timeSell}`}
                      >
                        {moment(item.time).locale("fa").format("HH:mm")}
                      </div>
                    </>
                  ) : !item.res ? (
                    <div
                      className={`py-1 px-2 d-flex justify-content-center align-items-center pointer ${styles.timefree}`}
                      onClick={() => handleNewReserve(item)}
                    >
                      <span>
                        {moment(item.time).locale("fa").format("HH:mm")}
                      </span>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </>
        ))}
        {office && (
          <ReserveModal
            show={srModal}
            data={modalData}
            office={office}
            handleRMClose={handleClose}
            getOffice={getOffice}
            activeDate={activeDate}
          />
        )}
      </div>
    </>
  );
};
export default QuetimesPatient;
