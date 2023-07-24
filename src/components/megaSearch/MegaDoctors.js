import styles from "@/components/Doctors/page.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
const MegaDoctors = ({ doctors }) => {
  useEffect(() => {}, [doctors]);
  return (
    <>
      <div className="d-flex col-12 flex-column align-items-center justify-content-start pt-4 ">
        {doctors &&
          doctors.map((item, key) => (
            <div className={styles.card} key={item.id}>
              <div className="d-flex col-12 align-items-center justify-content-between mb-3">
                <h3 className={styles.title}>{item.name}</h3>
                <img className={styles.avatar} src="/images/profile.jpeg" />
              </div>
              <div className="d-flex align-items-center mb-3">
                <Image
                  src="/images/doctor.svg"
                  width={25}
                  height={25}
                  className="me-2"
                  alt=""
                />
                <span className={styles.txt1}>تخصص: {item.expert}</span>
              </div>
              <div className="d-flex align-items-center mb-4">
                <Image
                  src="/images/information.svg"
                  width={25}
                  height={25}
                  className="me-2"
                  alt=""
                />
                <span className={styles.txt1}>
                  شناسه نظام پزشکی: {item.nezam}
                </span>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <Link
                  className={`d-flex align-items-center justify-content-center ${styles.sec1}`}
                  href="/doctor"
                >
                  <Image
                    src="/images/contact.svg"
                    width={18}
                    height={18}
                    className="me-2"
                    alt=""
                  />
                  <span className={styles.txt2}>ارتباط با پزشک</span>
                </Link>
                <Link
                  className={`d-flex align-items-center justify-content-center ${styles.sec2}`}
                  href="/booking"
                >
                  <Image
                    src="/images/booking.svg"
                    width={18}
                    height={18}
                    className="me-2"
                    alt=""
                  />
                  <span className={styles.txt3}>دریافت نوبت</span>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
export default MegaDoctors;
