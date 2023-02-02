import React from "react";

interface IFrameProps {
  children: React.ReactNode;
}

const Frame = ({ children }: IFrameProps) => {
  return (
    <div className="w-full bg-black border-2 border-[#fff2] px-6 pt-8 rounded-xl shadow-informationShadow">
      {children}
    </div>
  );
};

export default Frame;
