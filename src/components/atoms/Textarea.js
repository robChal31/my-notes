import React from "react";

const Textarea = ({ placeholder, value, changeValue }) => {
  return (
    <textarea
      placeholder={placeholder}
      className="note-input__body"
      value={value}
      onChange={(e) => changeValue(e.target.value)}
    />
  );
};

export default Textarea;
