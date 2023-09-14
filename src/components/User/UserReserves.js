"use client";
import styles from "@/components/User/page.module.css";
import AuthContext from "@/context/AuthContext";
import axios from "axios";
import moment from "jalali-moment";
import { useContext, useEffect, useState } from "react";
const UserReserves = () => {
  const { user, setLoading } = useContext(AuthContext);
  const [userQues, setUserQues] = useState([]);

  const getUserQues = async () => {
    setLoading(true);
    try {
      await axios({
        url: "reserves",
        method: "get",
        headers: {
          Authorization: `Bearer ${user.token}`,
          Accept: "application/json",
        },
      })
        .then((response) => {
          setLoading(false);
          setUserQues(response.data.data.reserves);
        })
        .catch(function (error) {
          setLoading(false);
          console.log(error.response.data);
          // console.log(error);
        });
    } catch (e) {
      setLoading(false);

      // res.status(500).json({ message: { err: ["Server Error"] } });
    }
  };
  useEffect(() => {
    getUserQues();
  }, [user]);

  console.log(userQues);
  return (
    <>
      <div className="d-flex flex-column">
        <div className={`d-flex mx-auto py-2 mb-4 flex-column ${styles.title}`}>
          نوبت های من
        </div>
        {userQues.map((item) => (
          <div
            key={item.id}
            className={` d-flex flex-column mx-auto mb-3 px-3 py-3  ${
              styles.queCard
            } ${(item.status == "done" || item.status == 'non-referral') && styles.doneQue}`}
          >
            <div className="d-flex mb-2 justify-content-between position-relative ">
              {item.status == "done" ? (
                <div className={styles.seal}>
                  <span className="stamp is-approved">پذیرش شد</span>
                </div>
              ) : item.status == "non-referral" ? (
                <div className={styles.seal}>
                  <span className="stamp is-nope">عدم مراجعه</span>
                </div>
              ) : null}
              <h6 className="text-secondary">نام پزشک</h6>
              <h6>{item.doctor}</h6>
            </div>
            <div className="d-flex mb-2 justify-content-between ">
              <h6 className="text-secondary">تاریخ نوبت</h6>
              <h6 className="numfont">
                {moment(item.time).locale("fa").format("jYYYY/jMM/jDD HH:mm")}
              </h6>
            </div>

            <div className="d-flex mb-2 justify-content-between ">
              <h6 className="text-secondary">وضعیت</h6>
              <h6>
                {item.status == "wait"
                  ? "در انتظار پذیرش"
                  : item.status == "done"
                  ? "پذیرش شده"
                  : item.status == "non-referral"
                  ? "عدم مراجعه"
                  : null}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default UserReserves;
