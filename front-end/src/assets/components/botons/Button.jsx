import React from "react";

const Button = ({ text, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`
    px-6 py-2 rounded-full transition-all duration-300 bg-[#45DB61] text-black hover:bg-transparent hover:text-[#45DB61] hover:border-[#45DB61] ${className}
    `}
    >
      {text}
    </button>
  );
};

export default Button;
