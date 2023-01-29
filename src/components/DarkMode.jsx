import { darkActions } from "@/store/Navbar/Navbar.actions";
import { darkSelector } from "@/store/Navbar/Navbar.selector";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "./Input";

const DarkMode = () => {
  const dispatch = useDispatch();
  const dark = useSelector((state) => darkSelector(state));

  return (
    <div className="flex flex-col items-center">
      <p className="text-xs text-black mb-2">
        <span className={`${dark == false && "font-bold"}`}>Dark</span> &{" "}
        <span className={`${dark == true && "font-bold"}`}>Light</span>
      </p>
      <Input
        onChange={() => {
          dispatch(darkActions(dark));
        }}
      />
    </div>
  );
};

export default DarkMode;
