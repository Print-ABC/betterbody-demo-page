import React from "react";
import "./Button.css";

interface ButtonProps {
  text?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { text } = props;

  return <button id="navbarBtn">{text}</button>;
};

export default Button;
