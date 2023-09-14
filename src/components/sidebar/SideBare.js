"use client";
import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import ToggleContext from "@/context/ToggleContext";
import styles from "@/components/sidebar/SideBar.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AuthContext from "@/context/AuthContext";
export default function SwipeableTemporaryDrawer() {
  const [width, setWidth] = React.useState(500);
  const router = useRouter();
  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  const {user} = React.useContext(AuthContext)
  const { sidebar, setSidebar } = React.useContext(ToggleContext);
  const [state, setState] = React.useState({
    right: sidebar,
  });
  React.useEffect(() => {
    sidebar && setState({ ...state, right: open });
  }, [sidebar]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
    setSidebar(false);
  };

  const list = (anchor) => {
    return (
      <>
        <div
          className="d-flex flex-column"
          style={{
            width: width * 0.6,
          }}
        >
         { user && <div className="d-flex align-items-center  bgMic px-3 py-3">
            <img
              className={styles.avatar}
              src="/images/profile.jpeg"
              width={90}
              height={90}
              alt=""
            />
            <div className="d-flex ms-3 flex-column">
              <span className={styles.userName}>{user.name}</span>
              <span className={styles.welcome}>عزیز خوش آمدید</span>
            </div>
          </div>}
          <ul className="d-flex flex-column mt-3">
            <li
              className="d-flex align-items-baseline mb-4 pointer"
              onClick={() => router.push("/")}
            >
              <img
                src="/images/home.svg"
                className="me-4"
                width={20}
                height={20}
              />
              <h6 className={styles.menuItem}>صفحه اصلی</h6>
            </li>
            <li
              className="d-flex align-items-baseline mb-4 pointer"
              onClick={() => router.push("/medicals")}
            >
              <Image
                src="/images/medicals.svg"
                className="me-4"
                width={20}
                height={20}
                alt=""
              />
              <h6 className={styles.menuItem}>مراکز درمانی</h6>
            </li>
            <li className="d-flex align-items-baseline mb-1 pointer">
              <Image
                src="/images/locs.svg"
                className="me-4"
                width={20}
                height={20}
                alt=""
              />
              <h6 className={styles.menuItem}>نمایش نقشه</h6>
            </li>
            <hr />
            <li className="d-flex align-items-start mb-4 pointer">
              <Image
                src="/images/profile1.svg"
                className="me-4"
                width={20}
                height={20}
                alt=""
              />
              <h6 className={styles.menuItem}>پروفایل</h6>
            </li>
            <li className="d-flex align-items-start pointer">
              <Image
                src="/images/shop.svg"
                className="me-4"
                width={20}
                height={20}
                alt=""
              />
              <h6 className={styles.menuItem}>فروشگاه</h6>
            </li>
            <hr />
            <li className="d-flex align-items-start mb-4 pointer">
              <Image
                src="/images/logout.svg"
                className="me-4"
                width={20}
                height={20}
                alt=""
              />
              <h6 className={styles.menuItem}>خروج</h6>
            </li>
          </ul>
        </div>
      </>
    );
  };

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <SwipeableDrawer
            anchor="right"
            open={state[anchor]}
            // open={sidebar}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
