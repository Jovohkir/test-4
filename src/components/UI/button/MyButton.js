import React from "react";

const MyButton = ({ children, ...props }) => {
  return (
    <div>
      <button {...props} className="btn btn-primary w-100">
        {children}
      </button>
    </div>
  );
};
export default MyButton;
