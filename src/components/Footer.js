import React from "react";

const Footer = () => {
  return (
    <div className="absolute top-[90%] flex w-full justify-center">
      <div className="m-auto text-sm">
        <p>
          &copy; 2022 | Inspired by{" "}
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
