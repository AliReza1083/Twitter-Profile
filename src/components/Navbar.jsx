import React from "react";
import Gradients from "./Gradients";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import CircularSlider from "@fseehawer/react-circular-slider";
import { useDispatch, useSelector } from "react-redux";
import {
  downloadLoadingAction,
  rotateAction,
} from "@/store/Background/Background.actions";
import { navbarSelector, uploadSelector } from "@/store/Navbar/Navbar.selector";
import NumberFormat from "./NumberFormat";
import DarkMode from "./DarkMode";
import { darkActions, uploadActions } from "@/store/Navbar/Navbar.actions";
import { AiOutlineCloudUpload, AiOutlineDownload } from "react-icons/ai";

const Navbar = ({ user }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => navbarSelector(state));
  const upload = useSelector((state) => uploadSelector(state));

  const style = {
    transform: "scale(1.8)",
    transformOrigin: "top left",
    left: "0px",
    height: "auto",
    width: "auto",
  };

  const PNG = async () => {
    const container = document.querySelector("#container");
    dispatch(downloadLoadingAction(true));
    container.classList.add("image");
    const param = {
      quality: 1,
      height: container.offsetHeight * 1.8,
      width: container.offsetWidth * 1.8,
      style,
    };
    //image download
    try {
      let dataUrl = await domtoimage.toPng(container, param);
      saveAs(dataUrl, `${user.name} - ${user.id}.png`);
      container.classList.remove("image");
      dispatch(downloadLoadingAction(false));
      return;
    } catch (error) {
      console.error("Something was wrong!");
    }
  };

  const JPG = async () => {
    const container = document.querySelector("#container");
    dispatch(downloadLoadingAction(true));
    container.classList.add("image");
    const param = {
      quality: 1,
      height: container.offsetHeight * 1.8,
      width: container.offsetWidth * 1.8,
      style,
    };
    //image download
    try {
      let dataUrl = await domtoimage.toJpeg(container, param);
      saveAs(dataUrl, `${user.name} - ${user.id}.jpeg`);
      container.classList.remove("image");
      dispatch(downloadLoadingAction(false));
      return;
    } catch (error) {
      console.error("Something was wrong!");
    }
  };

  const SVG = async () => {
    const container = document.querySelector("#container");
    dispatch(downloadLoadingAction(true));
    container.classList.add("image");
    const param = {
      quality: 1,
      height: container.offsetHeight * 1.8,
      width: container.offsetWidth * 1.8,
      style,
    };
    //image download
    try {
      let dataUrl = await domtoimage.toSvg(container, param);
      saveAs(dataUrl, `${user.name} - ${user.id}.svg`);
      container.classList.remove("image");
      dispatch(downloadLoadingAction(false));
      return;
    } catch (error) {
      console.error("Something was wrong!");
    }
  };

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

      <div
        className="relative mt-auto bg-green-600 p-4 text-2xl text-white rounded-xl"
        onClick={() => dispatch(uploadActions(upload))}
      >
        <AiOutlineCloudUpload />
        <div
          className={`flex gap-2 absolute bottom-0 left-24 ${
            upload ? "block" : "hidden"
          }`}
        >
          <div className="bg-green-500 p-2 rounded-md text-xs" onClick={PNG}>
            PNG
          </div>
          <div className="bg-green-500 p-2 rounded-md text-xs" onClick={JPG}>
            JPG
          </div>
          <div className="bg-green-500 p-2 rounded-md text-xs" onClick={SVG}>
            SVG
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
