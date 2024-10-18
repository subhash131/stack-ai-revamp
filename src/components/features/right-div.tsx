"use client";
import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";

const RightDiv = () => {
  const divRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["center start", "center end"],
  });

  const smoothYProgress = useSpring(scrollYProgress, {
    restDelta: 0.0001,
    bounce: 0.01,
  });

  const initialState = useMotionValue(1);
  const scale = useTransform(smoothYProgress, [0, 1], [0, 1.5]);
  const opacity = useTransform(smoothYProgress, [0, 1], [0, 1.5]);
  const rotate = useTransform(smoothYProgress, [1, 0.5], ["-20deg", "40deg"]);
  const marginRight = useTransform(
    scrollYProgress,
    [1, 0],
    ["100px", "-500px"]
  );

  return (
    <motion.div
      className="h-60 w-96 rounded-lg rotate-12 absolute right-32 mt-16 shadow-2xl bg-gray-300 p-1"
      style={{
        scale: scale.get() >= 1 ? scale : initialState,
        rotate,
        marginRight,
        opacity,
      }}
      ref={divRef}
    >
      <Image
        src="https://d3ouvrmelntobn.cloudfront.net/analytics-tab-poster.png"
        width={1}
        height={1}
        className="size-full object-cover rounded-md"
        alt="analytics"
      />
      {/* <video
        poster="https://d3ouvrmelntobn.cloudfront.net/analytics-tab-poster.png"
        className="size-full object-cover rounded-md"
        muted
      >
        <source
          src="https://d3ouvrmelntobn.cloudfront.net/analytics-tab.webm"
          type="video/webm"
        />
        <source
          src="https://d3ouvrmelntobn.cloudfront.net/analytics-tab.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video> */}
    </motion.div>
  );
};

export default RightDiv;
