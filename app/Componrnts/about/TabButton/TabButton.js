import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "mr-3 font-semibold hover:text-white border-b border-purple-500"
    : "mr-3 font-semibold text-[#ADB7BE] hover:text-white border-b border-purple-500";
  
  return (
    <button onClick={selectTab}>
      <p className={buttonClasses}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
