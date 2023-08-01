"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useRouter } from "next/navigation";

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

export default function OfficeChooseModal({ show, offices, handleRMClose }) {
  const [open, setOpen] = React.useState(show);
  const handleOpen = () => setOpen(true);
  const handleClose = () => handleRMClose();
  React.useEffect(() => {}, [show, offices]);
  const router = useRouter();
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
          مطب انتخاب نمایید
          <div className="d-flex flex-row justify-content-between py-2">
            {offices.map((item, key) => (
              <div className="   " key={item.id}>
                <button
                  className="btn btn-success"
                  type=""
                  onClick={() => router.push(`/booking/${item.id}`)}
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
