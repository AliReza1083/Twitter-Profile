import { darkActions } from "@/store/Navbar/Navbar.actions";
import React from "react";
import { useDispatch } from "react-redux";
import Input from "./Input";

const DarkMode = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center">
      <p className="text-xs opacity-50 mb-2">Number Format</p>
      <Input
        onChange={(e) => {
          dispatch(darkActions(e.target.checked));
        }}
      />
    </div>
  );
};

export default DarkMode;
