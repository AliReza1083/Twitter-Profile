import React from "react";

interface IContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: IContainerProps) {
  return (
    <div
      className={`w-full max-w-[1536px] mx-auto px-4 md:px-24 lg:px-40 ${className}`}
    >
      {children}
    </div>
  );
}
