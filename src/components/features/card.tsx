"use client";
import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { IconType } from "react-icons";
import { FiExternalLink } from "react-icons/fi";

type CardProp = {
  poster: string;
  webmUrl: string;
  mp4Url: string;
  name: string;
  icon: IconType;
};

const Card = ({ icon: Icon, mp4Url, name, poster, webmUrl }: CardProp) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(videoRef);

  useEffect(() => {
    if (inView) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [inView]);

  return (
    <div className="size-1/3 rounded-lg scale-150 mt-52 border overflow-hidden shadow-2xl transition-all">
      <div className="bg-gray-300 p-1 rounded-lg">
        <video
          poster={poster}
          className="size-full object-cover rounded-md"
          loop
          playsInline
          muted
          ref={videoRef}
        >
          <source src={webmUrl} type="video/webm" />
          <source src={mp4Url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-full h-12 flex px-4 items-center justify-between bg-white">
        <div className="flex items-center gap-2 text-xl">
          <Icon size={28} /> {name}
        </div>
        <button className="px-6 py-3 bg-[#2b2b2b] text-white text-xs rounded-full flex gap-2 items-center">
          Read More <FiExternalLink />
        </button>
      </div>
    </div>
  );
};

export default Card;
