import React from "react";

const Input = ({ placeholder, value, changeValue }) => {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={(e) => changeValue(e.target.value)}
    />
  );
};

export default Input;
