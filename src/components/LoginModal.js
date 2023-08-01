"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import axios from "axios";
import moment from "jalali-moment";
import Swal from "sweetalert2/dist/sweetalert2.js";
import ToggleContext from "@/context/ToggleContext";
import AuthContext from "@/context/AuthContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function LoginModal({ show }) {
  const [open, setOpen] = React.useState(show);
  const { loginModal, setLoginModal, userStatus, sendOtp } =
    React.useContext(AuthContext);
  React.useEffect(() => {}, [userStatus]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setLoginModal(false);
  React.useEffect(() => {}, [loginModal]);
  const [error1, setError1] = React.useState(false);
  const [cellphone, setCellphone] = React.useState(null);
  const [otp, setOtp] = React.useState(null);
  const [codeMelli, setCodeMelli] = React.useState(null);
  const [name, setName] = React.useState(null);
  const [error2, setError2] = React.useState(false);
  const { login } = React.useContext(AuthContext);
   const handleCellphone = (event) => {
    if (!event.target.validity.valid) {
      setError1(true);
    } else {
      setError1(false);
      setCellphone(event.target.value);
    }
  };
  const handleCodeMelli = (event) => {
    if (!event.target.validity.valid) {
      setError2(true);
    } else {
      setError2(false);
      setCodeMelli(event.target.value);
    }
  };
  const handleLogin = async () => {
    await login(cellphone);
  };
  const handleOtp = async () => {
    await sendOtp(otp, name, codeMelli);
    handleClose();
  };

  return (
    <div>
      <Modal
        open={loginModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {userStatus == "guest" ? (
            <form
              id="cellphone"
              action="onSubmit"
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            >
              <div className="d-flex flex-column">
                <h6 className="text-center mb-5">ورود / عضویت</h6>
                <div className="mb-2">
                  <div className="d-flex align-items-center ">
                    <label className="me-2">تلفن همراه</label>
                    <input
                      type="text"
                      className="ms-auto"
                      dir="ltr"
                      pattern="09[0-9]{9}"
                      title="تلفن همراه را به درستی وارد نمایید"
                      onChange={handleCellphone}
                      name="cellphone"
                    />
                  </div>
                  {error1 && (
                    <span
                      className="text-danger"
                      style={{
                        fontSize: 12,
                      }}
                    >
                      تلفن همراه را به درستی وارد نمایید. مثال:09123456789
                    </span>
                  )}
                </div>
              </div>
              <button
                className="btn btn-success btn-sm mt-3 col-12 ms-auto"
                type="submit"
                // onClick={() => handleClose()}
              >
                ارسال کد یکبار مصرف
              </button>
              <button
                className="btn btn-danger btn-sm mt-3 col-12 ms-auto"
                type=""
                onClick={() => handleClose()}
              >
                انصراف
              </button>
            </form>
          ) : userStatus == "login_token" ? (
            <form
              action="onSubmit"
              onSubmit={(e) => {
                e.preventDefault();
                handleOtp();
              }}
              id="otpSubmit"
            >
              <div className="d-flex flex-column">
                <h6 className="text-center mb-5">ورود / عضویت</h6>

                <div className="d-flex align-items-center mb-2">
                  <label className="me-2">نام و نام خانوادگی</label>
                  <input
                    type="text"
                    className="ms-auto"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <div className="d-flex align-items-center ">
                    <label className="me-2">کد ارسال شده</label>
                    <input
                      type="text"
                      className="ms-auto"
                      dir="ltr"
                      title="کد ارسال شده"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      name="otp"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <div className="d-flex align-items-center ">
                    <label className="me-2">کد ملی</label>
                    <input
                      type="text"
                      className="ms-auto"
                      dir="ltr"
                      pattern="[0-9]{10}"
                      title="کدملی را به درستی وارد نمایید"
                      onChange={(e) => setCodeMelli(e.target.value)}
                    />
                  </div>
                  {error2 && (
                    <span
                      className="text-danger"
                      style={{
                        fontSize: 12,
                      }}
                    >
                      کدملی را به درستی وارد نمایید. مثال:1234567890
                    </span>
                  )}
                </div>
              </div>
              <button
                className="btn btn-success btn-sm mt-3 col-12 ms-auto"
                type="submit"
              >
                ارسال
              </button>
              <button
                className="btn btn-danger btn-sm mt-3 col-12 ms-auto"
                type=""
                onClick={() => handleClose()}
              >
                انصراف
              </button>
            </form>
          ) : null}
        </Box>
      </Modal>
    </div>
  );
}
