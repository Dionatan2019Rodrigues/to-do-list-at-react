import React from "react";

import "./Button.css"

const Button = ({ children, clickFunction }) => {
  return <button onClick={clickFunction} className="button">{children}</button>;
};

export default Button;
