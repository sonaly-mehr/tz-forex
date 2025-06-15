import React from "react";
import clsx from "clsx"; // optional but recommended for merging class names

const ButtonOutlined = ({ lable, className = "" }) => {
  return (
    <button
      className={clsx(
        "w-fit font-matter-semibold text-dark bg-white text-lg lg:text-[22px] translate-[2%]",
        "flex justify-center items-center rounded-lg lg:rounded-[14px] px-7 py-4 lg:py-5",
        "transform transition-transform duration-200 ease-in-out hover:scale-105",
        className
      )}
    >
      {lable}
    </button>
  );
};

export default ButtonOutlined;
