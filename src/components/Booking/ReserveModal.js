"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import axios from "axios";
import moment from "jalali-moment";
import Swal from "sweetalert2/dist/sweetalert2.js";

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

export default function ReserveModal({
  show,
  data,
  office,
  handleRMClose,
  getOffice,
  activeDate
}) {
  const [open, setOpen] = React.useState(show);
  const handleOpen = () => setOpen(true);
  const handleClose = () => handleRMClose();
  React.useEffect(() => {}, [show, data]);
  const handleReserve1 = async (item) => {
    try {
      await axios({
        url: "reserves",
        method: "post",
        data: {
          time: moment(data.time).locale("en").format("YYYY-MM-DD HH:mm:ss"),
          display_time: moment(data.displayTime)
            .locale("en")
            .format("YYYY-MM-DD HH:mm:ss"),
          hour: moment(data.time).locale("fa").format("HH"),
          minute: moment(data.time).locale("fa").format("mm"),
          qty: item.rate,
          type: item.name,
          section: data.section,
        },

        headers: {
          // Authorization: `Bearer ${req.cookies.token}`,
          Accept: "application/json",
        },
      })
        .then((response) => {
          handleRMClose();
          getOffice();
        })
        .catch(function (error) {
          handleRMClose();
          if (error.response.status == 406) {
            Swal.fire({
              icon: "error",
              title: "خطا!",
              text: "با توجه به مدت زمان مورد نیاز جهت ویزیت شما و نوبت بعدی رزرو شده،امکان رزرو این ساعت وجود ندارد",
              confirmButtonText: 'قبول', 
            });
          }

          // console.log(error);
        });
    } catch (e) {
      // res.status(500).json({ message: { err: ["Server Error"] } });
    }
  };
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={show}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          نوع ویزیت را انتخاب نمایید
          <div className="d-flex flex-row justify-content-between py-2">
            {office.visit_type.map((item, key) => (
              <div className="   " key={item.id}>
                <button
                  className="btn btn-success"
                  type=""
                  onClick={() => handleReserve1(item)}
                >
                  {item.name}
                </button>
              </div>
            ))}
          </div>
          <button
            className="btn btn-danger btn-sm mt-3 col-12 ms-auto"
            type=""
            onClick={() => handleRMClose()}
          >
            انصراف
          </button>
        </Box>
      </Modal>
    </div>
  );
}
