import React, { useState } from "react";

function Inputs() {
  let [value, setValue] = useState("");
  return (
    <div>
      <p>value: {value}</p>
      <input
        type="text"
        className="form-controll"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
}
export default Inputs;
