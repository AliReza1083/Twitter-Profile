import React from "react";

const Input = ({ ...otherProps }) => {
  return (
    <label className="toggler-wrapper style-12">
      <input type="checkbox" {...otherProps} />
      <div className="toggler-slider">
        <div className="toggler-knob"></div>
      </div>
    </label>
  );
};

export default Input;
