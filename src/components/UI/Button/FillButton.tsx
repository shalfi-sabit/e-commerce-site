import React from "react";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <div>
      <button
        className="bg-red-900 hover:bg-red-400 border-solid border-[1px] rounded border-slate-500 text-white 
    font-semibold hover:text-slate-700 text-[12px] sm:text-sm lg:text-[16px] px-5 sm:px-6 lg:px-7 py-1 sm:py-[6px] lg:py-2 hover:shadow-md duration-200 "
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
