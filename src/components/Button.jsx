import React from "react";

const Button = ({ title, id, rightIcon, leftIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black ${containerClass}`}
    >
      <span className="inline-flex items-center gap-1 font-general text-xs uppercase">
        {leftIcon}
        <div>{title}</div>
        {rightIcon}
      </span>
    </button>
  );
};

export default Button;
