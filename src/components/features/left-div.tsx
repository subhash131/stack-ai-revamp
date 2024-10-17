"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";

const LeftDiv = () => {
  const divRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["center start", "center end"],
  });

  const initialState = useMotionValue(1);
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1.5]);
  const rotate = useTransform(scrollYProgress, [0.5, 1], ["20deg", "80deg"]);
  const marginLeft = useTransform(scrollYProgress, [1, 0], ["100px", "-500px"]);

  return (
    <motion.div
      className="size-72 bg-red-50 rounded-lg rotate-12 ml-10 absolute left-40"
      style={{
        scale: scale.get() >= 1 ? scale : initialState,
        rotate,
        marginLeft,
        opacity,
      }}
      ref={divRef}
    ></motion.div>
  );
};

export default LeftDiv;
