import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdArrowDropright } from "react-icons/io";
import { motion } from "framer-motion";

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
  const rotateSelector = useSelector((state) => state.background.rotate);
  const backgroundSelector = useSelector(
    (state) => state.background.background
  );
  return (
    <div className="relative flex lg:flex-col gap-2 mt-4">
      {/* <div className="w-24 h-24 bg-[#62BDFF]"></div> */}
      <div className="flex items-center">
        <div
          className="w-12 h-12 rounded-lg"
          style={{
            background: `linear-gradient(${rotateSelector}deg, ${backgroundSelector.from}, ${backgroundSelector.to})`,
          }}
        ></div>
        <IoMdArrowDropright
          className={`text-2xl cursor-pointer ${
            isOpen && "translate-x-3"
          } duration-150`}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen && (
        <div
          id="gradient_container"
          className="w-full absolute -left-3/4 lg:top-0 lg:left-28 flex lg:flex-col gap-2 overflow-visible"
        >
          {GRADIENTS.map((gradient, index) => (
            <motion.div
              className={`w-[48px] h-[48px] rounded-md active:!scale-90 duration-100`}
              style={{
                background: `linear-gradient(${rotateSelector}deg, ${gradient.from}, ${gradient.to})`,
              }}
              animate={{ opacity: [0, 1], x: [-40, 0] }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              onClick={() =>
                dispatch({ type: "background", payload: gradient })
              }
            ></motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gradients;
