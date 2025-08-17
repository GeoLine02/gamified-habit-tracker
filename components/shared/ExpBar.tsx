import React from "react";

const ExpBar = () => {
  return (
    <div className="p-1.5 px-3 bg-light-gray w-full rounded-full flex justify-between items-center relative z-50 font-medium md:max-w-[250px]">
      <span>XP</span>
      <div className="w-1/2 bg-custom-green  rounded-full h-full absolute top-0 left-0 -z-10"></div>
      <span>Level 1</span>
    </div>
  );
};

export default ExpBar;
