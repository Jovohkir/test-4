import React, { useState } from "react";

function Counters() {
  const [count, setCount] = useState(null);
  function inc() {
    setCount((prev) => prev + 1);
    console.log(count);
  }
  function dec() {
    setCount((prev) => prev - 1);
    console.log(count);
  }
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={dec} className="btn btn-success">
        DEC
      </button>
      <button onClick={inc} className="btn btn-danger">
        INC
      </button>
    </div>
  );
}
export default Counters;
