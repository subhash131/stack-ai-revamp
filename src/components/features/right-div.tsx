"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";

const RightDiv = () => {
  const divRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["center start", "center end"],
  });

  const initialState = useMotionValue(1);
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1.5]);
  const rotate = useTransform(scrollYProgress, [1, 0.5], ["20deg", "80deg"]);
  const marginRight = useTransform(
    scrollYProgress,
    [1, 0],
    ["100px", "-500px"]
  );

  return (
    <motion.div
      className="size-72 bg-red-50 rounded-lg rotate-12 absolute right-40"
      style={{
        scale: scale.get() >= 1 ? scale : initialState,
        rotate,
        marginRight,
        opacity,
      }}
      ref={divRef}
    ></motion.div>
  );
};

export default RightDiv;
