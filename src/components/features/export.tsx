import React from "react";
import { BsRocket } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

const Export = () => {
  return (
    <div className="size-1/3 rounded-lg scale-150 mt-52 border overflow-hidden shadow-2xl transition-all">
      <div className="bg-gray-300 p-1 rounded-lg">
        <video
          poster="https://d3ouvrmelntobn.cloudfront.net/builder-tab-poster.png"
          className="size-full object-cover rounded-md"
          loop
          playsInline
          muted
          autoPlay
        >
          <source
            src="https://d3ouvrmelntobn.cloudfront.net/builder-tab.webm"
            type="video/webm"
          />
          <source
            src="https://d3ouvrmelntobn.cloudfront.net/builder-tab.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-full h-12 flex px-4 items-center justify-between bg-white">
        <div className="flex items-center gap-2 text-xl">
          <BsRocket size={28} /> Export
        </div>
        <button className="px-6 py-3 bg-[#2b2b2b] text-white text-xs rounded-full flex gap-2 items-center">
          Read More <FiExternalLink />
        </button>
      </div>
    </div>
  );
};

export default Export;
