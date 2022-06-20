import React from "react";
import classes from "./MyModal.module.css";

function MyModal({ children, modal, setModal }) {
  const ClassModal = [classes.myModal];
  if (modal) {
    ClassModal.push(classes.active);
  }

  return (
    <div className={ClassModal.join(" ")} onClick={() => setModal(false)}>
      <div
        className={classes.myModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
export default MyModal;
