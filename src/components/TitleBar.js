import React from "react";

const TitleBar = () => {
  return (
    <div className="absolute z-10 flex h-16 w-full bg-[#1b1c1d]">
      <div className="m-auto flex w-[90%] max-w-[780px] items-center justify-between">
        <div className="flex items-center font-bold">
          <span>&gt;</span>
          <a className="ml-2" href="/#home">
            <span className="text-lg">joshgeden</span>
          </a>
          <span className="text-lg">$</span>
          <span className="ml-1 h-5 w-[10px] animate-blink rounded-sm bg-[#be0048]"></span>
        </div>
        <div>
          <a className="ml-4" href="#about">
            about
          </a>
          <a className="ml-4" href="#experience">
            experience
          </a>
          <a className="ml-4" href="#projects">
            projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
