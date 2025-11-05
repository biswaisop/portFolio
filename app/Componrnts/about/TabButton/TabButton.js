import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "px-6 py-3 font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300"
    : "px-6 py-3 font-semibold text-[#ADB7BE] hover:text-white bg-zinc-800/50 rounded-full hover:bg-zinc-800 transition-all duration-300 border border-zinc-700";
  
  return (
    <button onClick={selectTab} className={buttonClasses}>
      {children}
    </button>
  );
};

export default TabButton;
