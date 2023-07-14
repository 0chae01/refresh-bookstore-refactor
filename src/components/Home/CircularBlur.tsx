import React from "react";
import { EnumType } from "typescript";

interface CircularBlurType {
  width: string;
  blur: string;
  opacity: string;
}

const CircularBlur: React.FC<CircularBlurType> = ({ width, blur, opacity }) => {
  return (
    <div
      className={`w-[${width}] h-[${width}] rounded-circle bg-point backdrop-filter  opacity-[${opacity}] backdrop-blur-${blur}`}
    ></div>
  );
};

export default CircularBlur;
