import React from "react";

const Button = ({ title, id, rightIcon, leftIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full ng-voilet-50 px-7 py-3 text-black"
      ${containerClass}`}
    >
      {leftIcon}
      <span className="realtive incline-flex overflow-hidden font-general rexr-xs uppercase">
        <div>{title}</div>
        {rightIcon}
      </span>
    </button>
  );
};

export default Button;
