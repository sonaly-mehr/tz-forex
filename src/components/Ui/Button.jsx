import React from "react";

const Button = ({ lable, path, secondary, className }) => {
  return (
    <button
      className={`${className} font-matter-medium text-base lg:text-[22px] px-6 py-3 rounded-xl  transform
    transition-transform duration-200 ease-in-out
    hover:scale-105  ${
      secondary ? "text-primary bg-white" : "text-white bg-primary "
    } `}
    >
      {lable}
    </button>
  );
};

export default Button;
