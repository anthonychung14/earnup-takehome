import React from "react";
import "./style.scss";

const Box = ({ children, style }) => (
  <div className="box" style={style}>
    {children}
  </div>
);

export default Box;
