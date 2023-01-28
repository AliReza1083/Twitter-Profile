import React from "react";
import { useDispatch } from "react-redux";
import { numberFormatAction } from "@/store/Background/Background.actions";

const Input = ({ ...otherProps }) => {
  const dispatch = useDispatch();

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
