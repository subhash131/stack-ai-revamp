"use client";
import React, { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { BiCube } from "react-icons/bi";
import { FiExternalLink } from "react-icons/fi";

const CenterDiv = () => {
  const divRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["center start", "center end"],
  });

  const smoothYProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 10,
    mass: 0.1,
  });

  const scale = useTransform(smoothYProgress, [1, 0.7], [1, 1.5]);
  const rotate = useTransform(smoothYProgress, [0.5, 1], ["0deg", "0deg"]);
  const marginTop = useTransform(smoothYProgress, [1, 0.6], ["-10px", "200px"]);

  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(divRef);
  useEffect(() => {
    if (inView) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [inView]);

  return (
    <motion.div
      className="size-1/3 rounded-lg rotate-12 border overflow-hidden shadow-2xl transition-all z-10"
      style={{
        scale,
        rotate,
        marginTop,
      }}
      transition={{ ease: "linear", duration: 1 }}
      ref={divRef}
    >
      <div className="bg-gray-300 p-1 rounded-lg">
        <video
          poster="https://d3ouvrmelntobn.cloudfront.net/builder-tab-poster.png"
          className="size-full object-cover rounded-md"
          loop
          playsInline
          muted
          ref={videoRef}
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
          <BiCube size={28} /> Workflow
        </div>
        <button className="px-6 py-3 bg-[#2b2b2b] text-white text-xs rounded-full flex gap-2 items-center">
          Read More <FiExternalLink />
        </button>
      </div>
    </motion.div>
  );
};

export default CenterDiv;
