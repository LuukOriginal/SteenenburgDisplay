import React from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Popupcontext } from "./PopupManager";

export default function PopupMessage({ title, message, options }) {
  const popup = React.useContext(Popupcontext);
  return (
    <Dialog
      open={true}
      onClose={() => popup.hide()}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{ zIndex: 9999 }}
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {options.map((data) => (
          <Button
            onClick={() => {
              popup.hide();
              if (data.onClick) {
                data.onClick();
              }
            }}
          >
            {data.text}
          </Button>
        ))}
      </DialogActions>
    </Dialog>
  );
}
