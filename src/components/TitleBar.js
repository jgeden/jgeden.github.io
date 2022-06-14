import React from "react";

import text from "../data/text.json";

const isSmallScreen = typeof window !== "undefined" && window.innerWidth < 700;

const TitleBar = (props) => {
  return (
    <div className="absolute z-10 flex h-16 w-full bg-[#1b1c1d] text-sm sm:text-lg">
      <div className="flex w-full flex-row items-center justify-center">
        <div
          className={
            "m-auto flex w-[90%] max-w-[800px] items-center" +
            `${isSmallScreen ? " justify-center" : " justify-between"}`
          }
        >
          {!isSmallScreen && (
            <div className="flex items-center font-bold">
              <span>&gt;</span>
              <a className="ml-2" href="/#home">
                <span>joshgeden</span>
              </a>
              <span>$</span>
              <span className="ml-1 h-5 w-[10px] animate-blink rounded-sm bg-[#be0048]"></span>
            </div>
          )}
          <div className="flex flex-row items-center">
            <a className="ml-4" href="#about">
              {text.title_bar.about[props.lang]}
            </a>
            <a className="ml-4" href="#experience">
              {text.title_bar.experience[props.lang]}
            </a>
            <a className="ml-4" href="#projects">
              {text.title_bar.projects[props.lang]}
            </a>
            <img
              src="https://img.icons8.com/ios/50/undefined/google-translate.png"
              className="ml-1 mt-1 h-12 rounded p-3 invert-[70%] hover:cursor-pointer"
              onClick={props.changeLanguage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
