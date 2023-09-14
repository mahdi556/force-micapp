"use client";
import ToggleContext from "@/context/ToggleContext";
import Image from "next/image";
import { useContext } from "react";
import LoginModal from "./LoginModal";
import AuthContext from "@/context/AuthContext";

const Header = () => {
  const { sidebar, setSidebar } = useContext(ToggleContext);
  const { loginModal, setLoginModal, user, logout } = useContext(AuthContext);
  const handleLogout = async () => {
    await logout();
  };

  return (
    <nav className="navbar navbar-expand-lg nav-bg fixed-top bgMic mb-4 ">
      <div className="container-fluid position-relative ">
        <div
          className="position-absolute w-100"
          style={{
            backgroundColor: "#11999e",
            top: "100%",
            right: 0,
            height: 25,
          }}
        >
          <div
            className="w-100"
            style={{
              backgroundColor: "#fff",
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
              height: 25,
            }}
          ></div>
        </div>
        <button
          className="d-md-none"
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
          href="/"
          style={{
            fontSize: 24,
            fontFamily: "shabnam",
          }}
        >
          میک اَپ
        </a>
        {user ? (
          <div>
            <button
              className=" btn btn-outline py-1 px-3 text-white me-5 ms-auto"
              style={{
                fontSize: 16,
                fontFamily: "shabnam",
                border: "solid 1px #fff",
                borderRadius: 10,
              }}
            >
              {user.user.name}
            </button>
            <button
              className=" btn btn-outline py-1 px-3 text-white me-5 ms-auto"
              style={{
                fontSize: 16,
                fontFamily: "shabnam",
                border: "solid 1px #fff",
                borderRadius: 10,
              }}
              onClick={() => handleLogout()}
            >
              خروج
            </button>
          </div>
        ) : (
          <button
            className=" btn btn-outline py-1 px-3 text-white me-5 ms-auto"
            style={{
              fontSize: 16,
              fontFamily: "shabnam",
              border: "solid 1px #fff",
              borderRadius: 10,
            }}
            onClick={() => setLoginModal(!loginModal)}
          >
            ورود/عضویت
          </button>
        )}
      </div>
      <LoginModal />
    </nav>
  );
};

export default Header;
