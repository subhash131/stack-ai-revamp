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
  const rotate = useTransform(scrollYProgress, [0.5, 1], ["-40deg", "20deg"]);
  const marginLeft = useTransform(scrollYProgress, [1, 0], ["100px", "-500px"]);

  return (
    <motion.div
      className="h-72 w-96 bg-red-50 rounded-lg absolute left-32 mt-16"
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
