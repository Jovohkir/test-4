import React, { useState } from "react";

function Hides() {
  let [hide, setHide] = useState(false);

  return (
    <div>
      <button className="btn btn-secondary" onClick={() => setHide(!hide)}>
        Hide
      </button>
      {hide ? <p className="lead">YouTube Content</p> : null}
    </div>
  );
}
export default Hides;
