import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdArrowDropright } from "react-icons/io";
import { motion } from "framer-motion";

import { backgroundAction } from "@/store/Background/Background.actions";
import {
  backgroundSelector,
  rotateSelector,
} from "@/store/Background/Background.selector";

const GRADIENTS = [
  {
    from: "#0965C0",
    to: "#C53A94",
  },
  {
    from: "#3D10BD",
    to: "#62BDFF",
  },
  {
    from: "#BDC3C7",
    to: "#2C3E50",
  },
  {
    from: "#FDC830",
    to: "#F37335",
  },
  {
    from: "#61C695",
    to: "#133114",
  },
  {
    from: "#FFEB3A",
    to: "#4DEF8E",
  },
];

const Gradients = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const rotate = useSelector((state) => rotateSelector(state));
  const background = useSelector((state) => backgroundSelector(state));

  return (
    <div className="relative flex flex-col gap-2">
      <p className="text-xs opacity-50 mb-2">Background</p>
      <div className="flex items-center" onClick={() => setIsOpen(!isOpen)}>
        <div
          className="w-12 h-12 rounded-lg"
          style={{
            background: `linear-gradient(${rotate}deg, ${background.from}, ${background.to})`,
          }}
        ></div>
        <IoMdArrowDropright
          className={`text-2xl cursor-pointer ${
            isOpen && "translate-x-3"
          } duration-150`}
        />
      </div>
      {isOpen && (
        <div
          id="gradient_container"
          className="w-full absolute top-0 left-28 flex flex-col gap-2 overflow-visible"
        >
          {GRADIENTS.map((gradient, index) => (
            <motion.div
              key={index}
              className={`w-[48px] h-[48px] rounded-md active:!scale-90 duration-100`}
              style={{
                background: `linear-gradient(${rotate}deg, ${gradient.from}, ${gradient.to})`,
              }}
              animate={{ opacity: [0, 1], x: [-40, 0] }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              onClick={() => dispatch(backgroundAction(gradient))}
            ></motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gradients;
