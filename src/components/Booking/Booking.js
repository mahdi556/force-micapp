import styles from "@/components/Booking/page.module.css";
import Calendar from "@/components/calendar/Calendar";
import Image from "next/image";
import Quetimes from "./Quetimes";
const Booking = () => {
  return (
    <>
      <div className="d-flex col-12 py-2 flex-column">
        <div
          className={`d-flex mx-auto px-3 py-2 flex-column mb-4 ${styles.sec1}`}
        >
          <div className="d-flex mb-2  justify-content-between align-items-center ">
            <h6 className={styles.txt1}>بیمارستان سپاهان</h6>
            <h6 className={styles.txt1}>کلینیک گوارش</h6>
          </div>
          <div className="d-flex  justify-content-between align-items-center ">
            <h6 className={styles.txt1}>دکتر مهدی حقیقتی</h6>
            <h6 className={styles.txt1}>امروز : 1401/03/15 </h6>
          </div>
        </div>
        <Calendar />
        <div
          className={` d-flex align-items-center justify-content-between py-2 px-3 mx-auto mt-4
           ${styles.sec2}`}
        >
          <span className={styles.txt2}>تاریخ انتخابی شما:</span>
          <span className={styles.txt2}>1401/03/15</span>
        </div>
        <Quetimes />
      </div>
    </>
  );
};
export default Booking;
