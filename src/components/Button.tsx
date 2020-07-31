import React from "react"

interface ButtonProps {
  id?: string;
  value?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { id, value } = props;

  return <button id={id}>{value}</button>;
};

export default Button;
