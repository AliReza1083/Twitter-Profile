import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-screen fixed top-0 left-0 z-[9999] bg-white flex justify-center items-center">
      <svg
        fill="none"
        className="h-24 w-24 animate-spin text-indigo-600"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clipRule="evenodd"
          d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default Loader;
