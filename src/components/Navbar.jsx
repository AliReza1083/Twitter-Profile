import React from "react";

import Gradients from "./Gradients";
import CircularSlider from "@fseehawer/react-circular-slider";
import { useDispatch, useSelector } from "react-redux";
import { rotateAction } from "@/store/Background/Background.actions";
import { navbarSelector, uploadSelector } from "@/store/Navbar/Navbar.selector";
import NumberFormat from "./NumberFormat";
import DarkMode from "./DarkMode";
import { darkActions, uploadActions } from "@/store/Navbar/Navbar.actions";
import { AiOutlineCloudUpload } from "react-icons/ai";

import Png from "./Upload/Png";
import Jpeg from "./Upload/Jpeg";
import Svg from "./Upload/Svg";
import Copy from "./Upload/Copy";
import Community from "./Upload/Community";

const Navbar = ({ user }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => navbarSelector(state));
  const upload = useSelector((state) => uploadSelector(state));

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
        progressColorFrom="#999"
        progressColorTo="#000"
        trackColor="#eee"
        knobColor="#000"
        onChange={(value) => dispatch(rotateAction(value))}
      />
      <Gradients />

      <NumberFormat />

      <DarkMode
        onChange={(e) => {
          dispatch(darkActions(e.target.checked));
        }}
      />

      <div className="mt-auto text-white">
        <div
          className="relative mt-auto bg-black p-4 text-2xl text-white rounded-xl active:scale-90 duration-100"
          onClick={() => dispatch(uploadActions(upload))}
        >
          <AiOutlineCloudUpload />
        </div>
        {upload && (
          <div
            className={`flex flex-col-reverse items-center gap-2 absolute bottom-[85px] left-[39px]`}
          >
            <Png user={user} />
            <Jpeg user={user} />
            <Svg user={user} />
            <Copy user={user} />
            <Community user={user} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
