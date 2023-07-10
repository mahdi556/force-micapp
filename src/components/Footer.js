"use client";
import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Footer() {
  const [width, setWidth] = React.useState(500);
  const router = useRouter();
  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
  
    <nav className="fixed-bottom">
      <div
        className="footNav"
        style={{
          position: "absolute",
          right: (width / 2)-30,
          top: "0%",
          height: 30,
          width: 60,
          borderRadius: "0px 0px 50px 50px ",
          border: "solid 1px #ccc",
          borderTopColor: "#fff",
          backgroundColor: "#fff",
          zIndex: 10,
          display:'flex',
          alignItems:'flex-start',
          justifyContent:'center'
        }}
      >
        <div className="footerLocButton d-flex align-items-center justify-content-center">
          <Image className="  " src='/images/location.svg' width={50} height={35} alt="" />
        </div>
      </div>
      <BottomNavigation
        sx={{
          width: width * 0.99,
          backgroundColor: "#fff",
          border: "solid 1px #ddd",
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          marginRight: "auto",
          marginLeft: "auto",
        }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="خانه"
          value="recents"
           icon={<HomeIcon />}
           onClick={()=>router.push('/')}
        />
        <BottomNavigationAction
          label="نوبت من"
          value="favorites"
          icon={<ConfirmationNumberIcon />}
        />
        <BottomNavigationAction
          label="تنظیمات"
          value="تنظیمات"
          icon={<SettingsSuggestIcon />}
        />
        <BottomNavigationAction
          label="پروفایل"
          value="folder"
          icon={<PersonIcon />}
        />
      </BottomNavigation>
    </nav>
  );
}
