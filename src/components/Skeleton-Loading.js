import React from "react";

const SkeletonLoading = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {[0, 1, 2, 3, 4, 5, 6].map(([], index) => (
        <div
          key={index}
          className="bg-[#ddd] h-40 rounded-lg animate-blink"
        ></div>
      ))}
    </div>
  );
};

export default SkeletonLoading;
