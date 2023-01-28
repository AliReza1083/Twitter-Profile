import React from "react";
import { useDispatch, useSelector } from "react-redux";

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
  const dispatch = useDispatch();
  const rotateSelector = useSelector((state) => state.background.rotate);
  return (
    <div className="flex lg:flex-col gap-2">
      {/* <div className="w-24 h-24 bg-[#62BDFF]"></div> */}
      {GRADIENTS.map((gradient) => (
        <div
          className={`w-12 h-12 rounded-md active:scale-90 duration-100`}
          style={{
            background: `linear-gradient(${rotateSelector}deg, ${gradient.from}, ${gradient.to})`,
          }}
          onClick={() => dispatch({ type: "background", payload: gradient })}
        ></div>
      ))}
    </div>
  );
};

export default Gradients;
