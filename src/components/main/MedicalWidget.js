"use client";
import styles from "@/components/main/Main.module.css";
import Image from "next/image";

const MedicalWidget = () => {
  return (
    <>
      <div className="d-flex flex-column px-4 mx-auto mt-4 px-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h4 className={styles.expertWidgetTxt1}>تخصص ها</h4>
          <span className={styles.expertWidgetTxt2}>مشاهده همه</span>
        </div>
        <div className=" row row-cols-3 align-items-start px-3">
          <div className=" col d-flex flex-column align-content-start justify-content-center mb-2 align-items-center">
            <div className={styles.expertWidgetTxt3}>
                <Image src='images/bandaj.svg' height={40} width={40} alt="" />
            </div>
            <div className={styles.expertWidgetTxt4}> قلب و عروق</div>
          </div>
          <div className=" col d-flex flex-column    mb-2 align-items-center">
            <div className={styles.expertWidgetTxt3}>
                <Image src='images/bandaj.svg' height={40} width={40} alt="" />
            </div>
            <div className={styles.expertWidgetTxt4}>کلیه و مجاری ادراری</div>
          </div>
          <div className="col d-flex flex-column align-content-start justify-content-center mb-2 align-items-center">
            <div className={styles.expertWidgetTxt3}>
                <Image src='images/bandaj.svg' height={40} width={40} alt="" />
            </div>
            <div className={styles.expertWidgetTxt4}>مغز و اعصاب</div>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className={styles.expertWidgetTxt3}>
                <Image src='images/bandaj.svg' height={40} width={40} alt="" />
            </div>
            <div className={styles.expertWidgetTxt4}> قلب و عروق</div>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className={styles.expertWidgetTxt3}>
                <Image src='images/bandaj.svg' height={40} width={40} alt="" />
            </div>
            <div className={styles.expertWidgetTxt4}>کلیه و مجاری ادراری</div>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className={styles.expertWidgetTxt3}>
                <Image src='images/bandaj.svg' height={40} width={40} alt="" />
            </div>
            <div className={styles.expertWidgetTxt4}>مغز و اعصاب</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MedicalWidget;
