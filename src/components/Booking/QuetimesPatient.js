"use client";
import React, { useContext, useState } from "react";
import moment from "jalali-moment";
import styles from "@/components/Booking/page.module.css";
import HandleQue from "./HandleQue";
import QueContext from "@/context/QueContext ";
import axios from "axios";
import ReserveModal from "./ReserveModal";
import AuthContext from "@/context/AuthContext";
const QuetimesPatient = () => {
  const { intervals, activeDate, office } = useContext(QueContext);
  moment.locale("fa");
  const [srModal, setSrModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const { user, setLoginModal, loginModal, setShowAlert } =
    useContext(AuthContext);
  const handleClose = () => {
    setSrModal(false);
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
    if (user) {
      setSrModal(true);
      setModalData(item);
    } else {
      setShowAlert(true);
      setLoginModal(!loginModal);
    }
  };
  return (
    <>
      <div className="row align-items-baseline g-3 px-4 mt-3 w-100" dir="ltr">
        {intervals.map(item1 => (
          <>
            <div className="btn btn-primary" key1={item1.name}>
              نوبت {item1.name}
            </div>
            <div className={`row py-3 g-3 px-4 mt-3 ${styles.queWrapper}`}>
              {item1.array.map(item=> (
                <div className={"col-4 col-md-3 col-lg-2 "} >
                  {item.res ? (
                    <>
                      <div key={item.id}
                        className={`py-2 px-2 d-flex align-items-center justify-content-center ${styles.timeSell}`}
                      >
                        {moment(item.time).locale("fa").format("HH:mm")}
                        
                      </div>
                    </>
                  ) : !item.res ? (
                    <div key={item.id}
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
            activeDate={activeDate}
          />
        )}
      </div>
    </>
  );
};
export default QuetimesPatient;
