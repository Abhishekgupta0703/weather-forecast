import React from "react";
import { UilLinkedin } from "@iconscout/react-unicons";

const Footer = () => {
  return (
    <div className="flex flex-row font-extralight text-white w-full text-center p-2 mt-2">
      <p className="w-full">
        Developed with <span className="animate-pulse transition">❤️</span> by
        <a
          href="https://www.linkedin.com/in/abhishek-g-996b40217/"
          className="px-2 relative text-green-300 font-light"
        >
          ABHI GUPTA
          <UilLinkedin className="m-0 inline pl-1 absolute top-0.5" size={20} />
        </a>
      </p>
    </div>
  );
};

export default Footer;
