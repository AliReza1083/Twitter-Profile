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
      <p className="text-xs opacity-50 mb-2">Number Format</p>
      <Input
        onChange={() => {
          dispatch(darkActions(dark));
        }}
      />
    </div>
  );
};

export default DarkMode;
