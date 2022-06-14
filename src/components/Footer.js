import React from "react";

import text from "../data/text.json";

const Footer = (props) => {
  return (
    <div className="absolute top-[90%] flex w-full justify-center">
      <div className="m-auto text-sm">
        <p>
          &copy; 2022 | {text.home.copyright[props.lang]}{" "}
          <a
            href="https://github.com/jgeden/jgeden.github.io#attribution"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 underline"
          >
            Rohit
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
