"use client";
import styles from "@/components/main/Main.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const MedicalWidget = () => {
  const router = useRouter();

  return (
    <>
      <div className="d-flex flex-column px-4 mx-auto mt-4 px-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h4 className={styles.expertWidgetTxt1}>مراکز درمانی</h4>
          <span className={styles.expertWidgetTxt2}>مشاهده همه</span>
        </div>
        <div className=" row row-cols-3 align-items-start px-3">
          <div
            className=" col d-flex flex-column align-content-start justify-content-center mb-2 align-items-center"
            onClick={() => router.push("/medicals")}
          >
            <div className={styles.expertWidgetTxt3}>
              <Image
                src="images/medicalwidget.svg"
                height={40}
                width={40}
                alt=""
              />
            </div>
            <div className={styles.expertWidgetTxt4}> بیمارستان</div>
          </div>
          <div
            className=" col d-flex flex-column    mb-2 align-items-center"
            onClick={() => router.push("/medicals")}
          >
            <div className={styles.expertWidgetTxt3}>
              <Image
                src="images/medicalwidget.svg"
                height={40}
                width={40}
                alt=""
              />
            </div>
            <div className={styles.expertWidgetTxt4}>دندانپزشکی</div>
          </div>
          <div
            className="col d-flex flex-column align-content-start justify-content-center mb-2 align-items-center"
            onClick={() => router.push("/medicals")}
          >
            <div className={styles.expertWidgetTxt3}>
              <Image
                src="images/medicalwidget.svg"
                height={40}
                width={40}
                alt=""
              />
            </div>
            <div className={styles.expertWidgetTxt4}>اورژانس</div>
          </div>
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            onClick={() => router.push("/medicals")}
          >
            <div className={styles.expertWidgetTxt3}>
              <Image
                src="images/medicalwidget.svg"
                height={40}
                width={40}
                alt=""
              />
            </div>
            <div className={styles.expertWidgetTxt4}> تصویربرداری</div>
          </div>
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            onClick={() => router.push("/medicals")}
          >
            <div className={styles.expertWidgetTxt3}>
              <Image
                src="images/medicalwidget.svg"
                height={40}
                width={40}
                alt=""
              />
            </div>
            <div className={styles.expertWidgetTxt4}>درمانگاه</div>
          </div>
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            onClick={() => router.push("/medicals")}
          >
            <div className={styles.expertWidgetTxt3}>
              <Image
                src="images/medicalwidget.svg"
                height={40}
                width={40}
                alt=""
              />
            </div>
            <div className={styles.expertWidgetTxt4}>ترک اعتیاد</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MedicalWidget;
