"use client";
import ToggleContext from "@/context/ToggleContext";
import Image from "next/image";
import { useContext } from "react";

const Header = () => {
  const { sidebar, setSidebar } = useContext(ToggleContext);

  return (
    <nav className="navbar navbar-expand-lg nav-bg fixed-top bgMic mb-4 " 
    
    >
      <div className="container-fluid position-relative ">
        <div className="position-absolute w-100"
        style={{
          backgroundColor: "#11999e",
          top:'100%',
          right:0,
          height:50,         
        }}
        >
          <div className="w-100"
          style={{
            backgroundColor:'#fff',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            height:50,
          }}
          >
            
          </div>
        </div>
        <button
          style={{
            textDecoration: "none",
            outline: "none",
            background: "transparent",
            border: "none",
          }}
          onClick={() => setSidebar(!sidebar)}
          type="button"
        >
          <Image src="/images/menu-bar.svg" alt="" height={25} width={25} />
        </button>
        <a
          className="navbar-brand fw-bold text-white ms-3 me-auto"
          href="#"
          style={{
            fontSize: 24,
            fontFamily:'shabnam'
          }}
        >
          میک اَپ
        </a>
      </div>
    </nav>
  );
};

export default Header;
