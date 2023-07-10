"use client";
import styles from "@/components/Medicals/page.module.css";
import Image from "next/image";
import MedInfo from "../Medinfo/Medinfo";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const MegaMedicals = ({ medicalList }) => {
  const router = useRouter();

  const [status, setStatus] = useState(false);
  const handleStatus = (val) => {
    setStatus(val);
  };
  useEffect(() => {}, [medicalList]);

  return (
    <>
      <div className="d-flex col-12 flex-column align-items-center justify-content-start pt-4 ">
        {medicalList.map((item, key) => (
          <div className={styles.card} key={item.id}>
            <div className="d-flex col-12 align-items-center justify-content-between mb-3">
              <h3 className={styles.title}>{item.name}</h3>
              <img className={styles.avatar} src="/images/profile.jpeg" />
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center mb-3">
                <Image
                  src="/images/doctor.svg"
                  width={25}
                  height={25}
                  className="me-2"
                  alt=""
                />
                <span className={styles.txt1}>
                  تعداد کلینیک: {item.clinics}  
                </span>
              </div>
              <div className="d-flex align-items-center mb-4">
                <Image
                  src="/images/information.svg"
                  width={25}
                  height={25}
                  className="me-2"
                  alt=""
                />
                <span className={styles.txt1}>تعداد پزشک: {item.doctors}</span>
              </div>
            </div>
            <div className="d-flex align-items-center mb-4">
              <Image
                src="/images/information.svg"
                width={25}
                height={25}
                className="me-2"
              />
              <span className={styles.txt1}>
                متدهای درمانی: {item.methodes}
              </span>
            </div>
            <div className="d-flex align-items-center mb-4">
              <Image
                src="/images/information.svg"
                width={25}
                height={25}
                className="me-2"
                alt=""
              />
              <span className={styles.txt1}>تجهیزات: {item.tools}</span>
            </div>

            <div className="d-flex mt-2 ">
              <button
                className={` py-2 ${styles.submitBtn}`}
                type=""
                onClick={() => router.push("/doctors")}
              >
                مشاهده کلینیک ها
              </button>
              <button
                className={`py-2 ${styles.canselBtn}`}
                type=""
                onClick={() => setStatus(!status)}
              >
                اطلاعات بیشتر
              </button>
            </div>
          </div>
        ))}
        <MedInfo status={status} handleStatus={handleStatus} />
      </div>
    </>
  );
};
export default MegaMedicals;
