import React from "react";

const TitleBar = () => {
  return (
    <div className="bg-[#1b1c1d] w-full h-16 flex absolute z-10">
      <div className="w-[90%] max-w-[780px] m-auto flex justify-between items-center">
        <div className="flex items-center font-bold">
          <span>&gt;</span>
          <a className="ml-2" href="/#home">
            <span className="text-lg">joshgeden</span>
          </a>
          <span className="text-lg">$</span>
          <span className="bg-[#be0048] rounded-sm h-5 w-[10px] ml-2 animate-blink"></span>
        </div>
        <div>
          <a className="ml-4" href="#about">about</a>
          <a className="ml-4" href="#experience">experience</a>
          <a className="ml-4" href="#projects">projects</a>
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
