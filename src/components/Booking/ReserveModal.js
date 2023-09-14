"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import moment from "jalali-moment";
import Swal from "sweetalert2/dist/sweetalert2.js";
import sendReserve from "./sendReserve";
import QueContext from "@/context/QueContext ";
import AuthContext from "@/context/AuthContext";
import { useRouter } from "next/navigation";
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger",
  },
  buttonsStyling: false,
});
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

export default function ReserveModal({ show, data, handleRMClose, office }) {
  const router = useRouter();
  const [open, setOpen] = React.useState(show);
  const handleOpen = () => setOpen(true);
  const handleClose = () => handleRMClose();
  const { user, setLoading } = React.useContext(AuthContext);
  React.useEffect(() => {}, [show, data]);
  const handleReserve1 = async (item) => {
    handleRMClose();
    const result = await Swal.fire({
      // title: ` آیا از انتخاب تاریخ ${moment(data.time)
      //   .locale("fa")
      //   .format("YYYY/MM/DD HH:mm:ss")}   اطمینان دارید؟`,
      html: `
          <div> تاریخ: ${moment(data.time)
            .locale("fa")
            .format("YYYY/MM/DD")}</div>
        <br>   <div> ساعت: ${moment(data.time)
          .locale("fa")
          .format("HH:mm")}</div>
        <br>  <div>    مطب  <b >: مطب اصلی </b>  </div>
        <br>   <div>  نام پزشک  <b >: دکتر مهدی حقیقتی </b> </div>
        <br>  <div> مبلغ قابل پرداخت  <b >: 10000 تومان </b> </div>
        
        `,
      icon: "warning",
      iconHtml: "i",
      confirmButtonText: "تائید و پرداخت",
      cancelButtonText: "انصراف",
      showCancelButton: true,
      showCloseButton: true,
    });
    if (result.isConfirmed) {
      setLoading(true);
      const response = await sendReserve(data, item, user.user.id,user.token);
      setLoading(false);
      if (response.status == 200) {
        router.push(response.data.data.url);
      }
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        "انصراف",
        "شما از پرداخت منصرف شده اید :)",
        "error"
      );
    }
    // });
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
      {/* <div>
        : مطب اصلی <b>مطب</b>
      </div> */}
    </div>
  );
}
