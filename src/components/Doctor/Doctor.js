"use client";
import styles from "@/components/Doctor/page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import axios from "axios";
import OfficeChooseModal from "./OfficeChooseModal";
const MapWidget = dynamic(() => import("../main/MapWidget"), { ssr: false });
const Doctor = ({ id }) => {
  const router = useRouter();
  const [doctor, setDoctor] = useState({});
  const [srModal, setSrModal] = useState(false);
  const handleClose = () => {
    setSrModal(false);
  };

  useEffect(() => {
    getDoctor();
  }, []);

  const getDoctor = async () => {
    try {
      await axios({
        url: `doctors/${id}`,
        method: "get",
        headers: {
          // Authorization: `Bearer ${req.cookies.token}`,
          Accept: "application/json",
        },
      })
        .then((response) => {
          setDoctor(response.data.data.doctor);
        })
        .catch(function (error) {
          console.log(error.response.data);
          // console.log(error);
        });
    } catch (e) {
      // res.status(500).json({ message: { err: ["Server Error"] } });
    }
  };
   const handleOffice = () => {
    setSrModal(true);
  };
  return (
    <>
      <div className={`d-flex flex-column mx-auto mt-3  ${styles.wrapper}`}>
        <div className={`mx-auto position-relative mt-2 ${styles.banner}`}>
          <img
            src="/images/office1.jpg"
            width="100%"
            height="100%"
            style={{
              borderRadius: 15,
            }}
            alt=""
          />
          <img
            className={styles.avatar}
            src="/images/profile.jpeg"
            width={80}
            height={80}
            alt=""
          />
          <div
            className="d-flex flex-column position-absolute
             align-items-start justify-content-center"
            style={{
              right: "35%",
              bottom: -70,
            }}
          >
            <h3 className={styles.drTitle}>{doctor.name}</h3>
            <h3 className={styles.drExpert}> {doctor.expert} </h3>
          </div>
        </div>
        <div
          className={` d-flex flex-column py-2 px-4 mx-auto  ${styles.drInfo}`}
        >
          <div className="d-flex mb-4 align-items-center justify-content-between">
            <span className={styles.txt1}>اطلاعات پزشک</span>
            <Image src="/images/home.svg" height={25} width={25} alt="" />
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex flex-column align-items-center">
              <span className={styles.txt2}>{doctor.id}</span>
              <span className={styles.txt3}>شناسه میک اپ</span>
            </div>
            <div className="d-flex flex-column align-items-center">
              <span className={styles.txt2}>{doctor.nezam}</span>
              <span className={styles.txt3}>نظام پزشکی</span>
            </div>
          </div>
        </div>
        <div
          className={`mx-auto pointer py-4 mt-4 ${styles.drQue}`}
          onClick={() => handleOffice()}
        >
          <span className={styles.txt4}>دریافت نوبت</span>
        </div>
        <div className="row row-cols-2 row-cols-md-4 px-3 mt-3 ">
          <div className={`col px-2  my-2 `}>
            <div className={`px-1  ${styles.sec} ${styles.sec1}`}>تجهیزات</div>
          </div>
          <div className={`col px-2  my-2 `}>
            <div className={`px-1  ${styles.sec}  ${styles.sec2}`}>
              متدهای درمانی
            </div>
          </div>
          <div className={`col px-2  my-2 `}>
            <div className={`px-2  ${styles.sec}  ${styles.sec3}`}>
              گالری تصاویر
            </div>
          </div>
          <div className={`col  px-2 my-2 `}>
            <div className={`px-2  ${styles.sec}  ${styles.sec4}`}>
              ارتباط با پزشک
            </div>
          </div>
        </div>
        <MapWidget />
      </div>
      {doctor.offices && (
        <OfficeChooseModal
          show={srModal}
          offices={doctor.offices}
          handleRMClose={handleClose}
        />
      )}
    </>
  );
};
export default Doctor;
