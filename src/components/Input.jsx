import React from "react";
import { numberFormatAction } from "@/store/Background/Background.actions";
import { useDispatch } from "react-redux";

const Input = () => {
  const dispatch = useDispatch();

  return (
    <label className="toggler-wrapper style-12">
      <input
        type="checkbox"
        onChange={(e) => dispatch(numberFormatAction(e.target.checked))}
      />
      <div className="toggler-slider">
        <div className="toggler-knob"></div>
      </div>
    </label>
  );
};

export default Input;
