import React from "react";

const ActionButton = ({ buttonStyle, title, action }) => {
  return (
    <button onClick={action} className={buttonStyle}>
      {title}
    </button>
  );
};

export default ActionButton;
