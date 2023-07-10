"use client";
import * as React from "react";
import ToggleContext from "@/context/ToggleContext";
import { Drawer } from "@mui/material";
import styles from "@/components/Medinfo/page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function MedInfo({ status, handleStatus }) {
  const [width, setWidth] = React.useState(500);
  const router = useRouter();
  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  const [state, setState] = React.useState(status);
  React.useEffect(() => {
    status && setState(status);
  }, [status]);

  const toggleDrawer = (open) => {
    setState(open);
    handleStatus(open);
  };
  const list = (anchor) => {
    return (
      <>
        <div className={`d-flex flex-column mx-auto ${styles.wrapper}`}>
          <img
            src="/images/office1.jpg"
            width="100%"
            height={width / 2}
            style={{
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
            }}
            alt=""
          />
          <div className={`d-flex mt-2 px-3 align-items-center ${styles.sec1}`}>
            <div className={styles.expertWidgetTxt3}>
              <Image src="/images/bandaj.svg" width={25} height={25} />
            </div>
            <div className="d-flex ms-3 flex-column">
              <h4 className={styles.txt1}>کلینیک زیبایی رویال دکتر فروتن</h4>
              <span className={styles.txt2}>کلینیک زیبایی</span>
            </div>
          </div>
          <div className={`d-flex px-3 py-2 align-items-center ${styles.sec1}`}>
            <Image
              src="/images/doctor.svg"
              className="me-2"
              height={25}
              width={25}
            />
            <span className={styles.txt3}>تعداد کلینیک : 3</span>
          </div>
          <div className={`d-flex px-3 py-2 align-items-center ${styles.sec1}`}>
            <Image
              src="/images/hosloc.svg"
              className="me-2"
              height={25}
              width={25}
            />
            <span className={styles.txt3}>تعداد پزشکان : 10</span>
          </div>
          <div className={`d-flex px-3 py-2 align-items-center ${styles.sec1}`}>
            <Image
              src="/images/insurrance.svg"
              className="me-2"
              height={25}
              width={25}
            />
            <span className={styles.txt3}>بیمه های طرف قرارداد : تامین اجتماعی، نیروهای مسلح</span>
          </div>
          <div className={`d-flex px-3 py-2 align-items-center ${styles.sec1}`}>
            <Image
              src="/images/insurrance.svg"
              className="me-2"
              height={25}
              width={25}
            />
            <span className={styles.txt3}>متدهای درمانی : زیبایی، تزریق ژل-بوتاکس،میکرونیدلینگ، لیفت نخ</span>
          </div>
          <div className={`d-flex px-3 py-2 align-items-center ${styles.sec1}`}>
            <Image
              src="/images/insurrance.svg"
              className="me-2"
              height={25}
              width={25}
            />
            <span className={styles.txt3}>تجهیزات درمانی : لیزر موهای زائد توسط دستگاه کندلاجنتل مکس</span>
          </div>
          <div className={`d-flex px-3 py-2 align-items-center ${styles.sec1}`}>
            <Image
              src="/images/hosloc.svg"
              className="me-2"
              height={25}
              width={25}
            />
            <span className={styles.txt3}>آدرس : چهارباغ بالا مجتمع اوسان ورودی اداری کاخ 2 طبقه دوم واحد 5</span>
          </div>
          <div className={`d-flex px-3 py-2 align-items-center ${styles.sec1}`}>
            <Image
              src="/images/phone.svg"
              className="me-2"
              height={25}
              width={25}
            />
            <span className={styles.txt3}>تلفن : 0913254121-0912547244-03132542185-031574121</span>
          </div>
         
          <div className="d-flex ">
            <button
              className={` py-3 ${styles.submitBtn}`}
              type=""
              onClick={() => router.push("/doctors")}
            >
              مشاهده کلینیک ها
            </button>
            <button
              className={`py-3 ${styles.canselBtn}`}
              onClick={() => {
                toggleDrawer(false);
              }}
              type=""
            >
              بازگشت
            </button>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor="bottom"
            open={state}
            onClose={() => toggleDrawer(false)}
            onOpen={() => toggleDrawer(true)}
            PaperProps={{
              sx: {
                backgroundColor: "transparent",
                width: "100%",
              },
            }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
