"use client";
import ToggleContext from "@/context/ToggleContext";
import Image from "next/image";
import { useContext } from "react";

const Header = () => {
  const { sidebar, setSidebar } = useContext(ToggleContext);

  return (
    <nav className="navbar navbar-expand-lg nav-bg fixed-top bgMic" >
      <div className="container-fluid">
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
          }}
        >
          میک اَپ
        </a>
      </div>
    </nav>
  );
};

export default Header;
