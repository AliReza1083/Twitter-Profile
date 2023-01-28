import React from "react";
import Gradients from "./Gradients";
import CircularSlider from "@fseehawer/react-circular-slider";
import { useDispatch, useSelector } from "react-redux";
import { rotateAction } from "@/store/Background/Background.actions";
import { navbarSelector } from "@/store/Navbar/Navbar.selector";
import NumberFormat from "./NumberFormat";
import DarkMode from "./DarkMode";
import { darkActions } from "@/store/Navbar/Navbar.actions";

const Navbar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => navbarSelector(state));

  return (
    <div
      className={`h-screen bg-white fixed top-0 left-0 shadow-xl p-4 flex flex-col items-center gap-6 z-50 ${
        isOpen == false ? "-translate-x-[200%]" : "translate-x-0"
      } lg:translate-x-0 duration-200`}
    >
      <CircularSlider
        width={80}
        valueFontSize="20px"
        labelFontSize="9px"
        verticalOffset="0em"
        onChange={(value) => dispatch(rotateAction(value))}
      />
      <Gradients />

      <NumberFormat />

      <DarkMode
        onChange={(e) => {
          dispatch(darkActions(e.target.checked));
        }}
      />
    </div>
  );
};

export default Navbar;
