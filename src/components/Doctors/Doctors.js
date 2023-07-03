import styles from "@/components/Doctors/page.module.css";
import Image from "next/image";
import Link from "next/link";
const Doctors = () => {
  return (
    <>
      <div className="d-flex col-12 flex-column align-items-center justify-content-start pt-4 ">
        <div className={styles.card}>
          <div className="d-flex col-12 align-items-center justify-content-between mb-3">
            <h3 className={styles.title}>دکتر مجید کریمیان</h3>
            <img className={styles.avatar} src="/images/profile.jpeg" />
          </div>
          <div className="d-flex align-items-center mb-3">
            <Image
              src="/images/doctor.svg"
              width={25}
              height={25}
              className="me-2"
            />
            <span className={styles.txt1}>شناسه نظام پزشکی: 117083</span>
          </div>
          <div className="d-flex align-items-center mb-4">
            <Image 
              src="/images/information.svg"
              width={25}
              height={25}
              className="me-2"
            />
            <span className={styles.txt1}>شناسه نظام پزشکی: 117083</span>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div
              className={`d-flex align-items-center justify-content-center ${styles.sec1}`}
            >
              <Image
                src="/images/contact.svg"
                width={18}
                height={18}
                className="me-2"
              />
              <span className={styles.txt2}>ارتباط با پزشک</span>
            </div>
            <Link
              className={`d-flex align-items-center justify-content-center ${styles.sec2}`}
              href='/booking'
            >
              <Image
                src="/images/booking.svg"
                width={18}
                height={18}
                className="me-2"
              />
              <span className={styles.txt3}>دریافت نوبت</span>
            </Link>
          </div>
        </div>
        <div className={styles.card}>
          <div className="d-flex col-12 align-items-center justify-content-between mb-3">
            <h3 className={styles.title}>دکتر مجید کریمیان</h3>
            <img className={styles.avatar} src="/images/profile.jpeg" />
          </div>
          <div className="d-flex align-items-center mb-3">
            <Image
              src="/images/doctor.svg"
              width={20}
              height={20}
              className="me-2"
            />
            <span className={styles.txt1}>شناسه نظام پزشکی: 117083</span>
          </div>
          <div className="d-flex align-items-center mb-4">
            <Image 
              src="/images/information.svg"
              width={20}
              height={20}
              className="me-2"
            />
            <span className={styles.txt1}>شناسه نظام پزشکی: 117083</span>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div
              className={`d-flex align-items-center justify-content-center ${styles.sec1}`}
            >
              <Image
                src="/images/contact.svg"
                width={18}
                height={18}
                className="me-2"
              />
              <span className={styles.txt2}>ارتباط با پزشک</span>
            </div>
            <div
              className={`d-flex align-items-center justify-content-center ${styles.sec2}`}
            >
              <Image
                src="/images/booking.svg"
                width={18}
                height={18}
                className="me-2"
              />
              <span className={styles.txt3}>دریافت نوبت</span>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className="d-flex col-12 align-items-center justify-content-between mb-3">
            <h3 className={styles.title}>دکتر مجید کریمیان</h3>
            <img className={styles.avatar} src="/images/profile.jpeg" />
          </div>
          <div className="d-flex align-items-center mb-3">
            <Image
              src="/images/doctor.svg"
              width={20}
              height={20}
              className="me-2"
            />
            <span className={styles.txt1}>شناسه نظام پزشکی: 117083</span>
          </div>
          <div className="d-flex align-items-center mb-4">
            <Image 
              src="/images/information.svg"
              width={20}
              height={20}
              className="me-2"
            />
            <span className={styles.txt1}>شناسه نظام پزشکی: 117083</span>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div
              className={`d-flex align-items-center justify-content-center ${styles.sec1}`}
            >
              <Image
                src="/images/contact.svg"
                width={18}
                height={18}
                className="me-2"
              />
              <span className={styles.txt2}>ارتباط با پزشک</span>
            </div>
            <div
              className={`d-flex align-items-center justify-content-center ${styles.sec2}`}
            >
              <Image
                src="/images/booking.svg"
                width={18}
                height={18}
                className="me-2"
              />
              <span className={styles.txt3}>دریافت نوبت</span>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className="d-flex col-12 align-items-center justify-content-between mb-1">
            <h3 className={styles.title}>دکتر مجید کریمیان</h3>
            <img className={styles.avatar} src="/images/profile.jpeg" />
          </div>
          <div className="d-flex align-items-center mb-3">
            <Image
              src="/images/doctor.svg"
              width={20}
              height={20}
              className="me-2"
            />
            <span className={styles.txt1}>شناسه نظام پزشکی: 117083</span>
          </div>
          <div className="d-flex align-items-center mb-4">
            <Image 
              src="/images/information.svg"
              width={20}
              height={20}
              className="me-2"
            />
            <span className={styles.txt1}>شناسه نظام پزشکی: 117083</span>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div
              className={`d-flex align-items-center justify-content-center ${styles.sec1}`}
            >
              <Image
                src="/images/contact.svg"
                width={18}
                height={18}
                className="me-2"
              />
              <span className={styles.txt2}>ارتباط با پزشک</span>
            </div>
            <div
              className={`d-flex align-items-center justify-content-center ${styles.sec2}`}
            >
              <Image
                src="/images/booking.svg"
                width={18}
                height={18}
                className="me-2"
              />
              <span className={styles.txt3}>دریافت نوبت</span>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className="d-flex col-12 align-items-center justify-content-between mb-3">
            <h3 className={styles.title}>دکتر مجید کریمیان</h3>
            <img className={styles.avatar} src="/images/profile.jpeg" />
          </div>
          <div className="d-flex align-items-center mb-3">
            <Image
              src="/images/doctor.svg"
              width={20}
              height={20}
              className="me-2"
            />
            <span className={styles.txt1}>شناسه نظام پزشکی: 117083</span>
          </div>
          <div className="d-flex align-items-center mb-4">
            <Image 
              src="/images/information.svg"
              width={20}
              height={20}
              className="me-2"
            />
            <span className={styles.txt1}>شناسه نظام پزشکی: 117083</span>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div
              className={`d-flex align-items-center justify-content-center ${styles.sec1}`}
            >
              <Image
                src="/images/contact.svg"
                width={18}
                height={18}
                className="me-2"
              />
              <span className={styles.txt2}>ارتباط با پزشک</span>
            </div>
            <div
              className={`d-flex align-items-center justify-content-center ${styles.sec2}`}
            >
              <Image
                src="/images/booking.svg"
                width={18}
                height={18}
                className="me-2"
              />
              <span className={styles.txt3}>دریافت نوبت</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Doctors;
