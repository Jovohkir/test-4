import { Link } from "@mui/material";
import React from "react";

const LogIn = () => {
  return (
    <>
      <div
        className="container"
        style={{
          width: "300px",
          border: "1px solid grey",
          borderRadius: "5px",
          color: "grey",
          marginTop: "50px"
        }}
      >
        <form>
          <h2 className="text-center">Login</h2>
          <div className="mb-4">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Login"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              required
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary my-2">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            Forgot <Link>password ?</Link>
          </p>
        </form>
      </div>
    </>
  );
};
export default LogIn;
