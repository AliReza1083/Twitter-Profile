import { numberFormatAction } from "@/store/Background/Background.actions";
import React from "react";
import { useDispatch } from "react-redux";
import Input from "./Input";

const NumberFormat = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center">
      <p className="text-xs opacity-50 mb-2">Number Format</p>
      <Input
        onChange={(e) => {
          dispatch(numberFormatAction(e.target.checked));
        }}
      />
    </div>
  );
};

export default NumberFormat;
