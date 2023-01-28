import React from "react";
import { numberFormatAction } from "@/store/Background/Background.actions";
import { useDispatch } from "react-redux";

const Input = () => {
  const dispatch = useDispatch();

  return (
    <label class="toggler-wrapper style-12">
      <input
        type="checkbox"
        onChange={(e) => dispatch(numberFormatAction(e.target.checked))}
      />
      <div class="toggler-slider">
        <div class="toggler-knob"></div>
      </div>
    </label>
  );
};

export default Input;
