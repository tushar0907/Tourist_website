import React from "react";
import "./secondnav.css";

const secondnav = () => {
  return (
    <div className="secondnav" id="secnav">
      <div className="first">
        <a href="#">First</a>
      </div>
      <div className="first">
        <a href="sd">Second</a>
      </div>
      <div className="first" style={{ border: 0 }}>
        {" "}
        <a hreaf="tr">third</a>
      </div>
    </div>
  );
};

export default secondnav;
