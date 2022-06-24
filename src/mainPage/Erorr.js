import React from "react";
import { Link } from "react-router-dom";

const Erorr = () => {
  return (
    <div className="text-center">
      <h1 style={{ color: "red" }}>404</h1>
      <h3 style={{ color: "green" }}>Erorr</h3>
      <Link to="posts">Ortga Qaytish</Link>
    </div>
  );
};
export default Erorr;
