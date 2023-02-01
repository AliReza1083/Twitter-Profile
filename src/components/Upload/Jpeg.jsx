import React from "react";
import { useDispatch } from "react-redux";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import { motion } from "framer-motion";
import { downloadLoadingAction } from "@/store/Background/Background.actions";

const Jpeg = ({ user }) => {
  const dispatch = useDispatch();
  const style = {
    transform: "scale(8)",
    transformOrigin: "top left",
    left: "0px",
    height: "auto",
    width: "auto",
  };

  const JPEG = async () => {
    const container = document.querySelector("#container");
    dispatch(downloadLoadingAction(true));
    container.classList.add("image");
    const param = {
      quality: 1,
      height: container.offsetHeight * 8,
      width: container.offsetWidth * 8,
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

  return (
    <motion.div
      animate={{ opacity: [0, 1], y: [20, 0] }}
      transition={{ duration: 0.4, delay: 0.03 }}
      className="bg-black p-2 rounded-md text-xs cursor-pointer"
      onClick={JPEG}
    >
      JPG
    </motion.div>
  );
};

export default Jpeg;
