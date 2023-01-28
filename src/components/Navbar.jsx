import React from "react";
import Gradients from "./Gradients";
import CircularSlider from "@fseehawer/react-circular-slider";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-white fixed bottom-4 lg:top-24 lg:left-8 shadow-xl p-4 rounded-lg flex lg:flex-col items-center gap-4">
      <CircularSlider
        width={80}
        valueFontSize="20px"
        labelFontSize="9px"
        verticalOffset="0em"
        onChange={(value) => {
          dispatch({ type: "rotate", payload: value });
        }}
      />
      <Gradients />
    </div>
  );
};

export default Navbar;
