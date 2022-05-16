import React from "react";

const Footer = () => {
  return (
    <div className="w-full absolute top-[90%] flex justify-center">
      <div className="m-auto">
        <p>
          &copy; 2022 | Inspired by {" "}
          <a
            href="https://github.com/jgeden/jgeden.github.io#attribution"
            target="_blank"
            rel="noreferrer"
            className="underline text-gray-400"
          >
            Rohit
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
