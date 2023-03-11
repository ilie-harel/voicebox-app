import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./PhoneNotify.css";
import { apiService } from "../../../Service/ApiService";

export default function PhoneNotify() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [email, setEmail] = useState()

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 270,
    boxShadow: 24,
    bgcolor: "background.paper",
    borderRadius: "10px",
    p: 4,
  };

  async function saveEmail(){
    console.log(email);
    const results = await apiService.getEmailNotify(email);
    console.log(results);
  }

  return (
    <div className="PhoneNotify">

      <div onClick={handleOpen} className="PhoneNotifyDiv">
        <button>Stay updated</button>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="PhoneNotifyModal">
            <h2>Submit: </h2> <hr />
            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
            <button onClick={saveEmail}>Submit</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
