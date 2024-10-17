"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";

const CenterDiv = () => {
  const divRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["center start", "center end"],
  });

  const initialState = useMotionValue(1);
  const scale = useTransform(scrollYProgress, [1, 0], [1, 3]);
  const rotate = useTransform(scrollYProgress, [0.5, 1], ["0deg", "40deg"]);
  const marginTop = useTransform(scrollYProgress, [1, 0], ["100px", "200px"]);

  return (
    <motion.div
      className="size-72 bg-red-50 rounded-lg rotate-12"
      style={{
        scale: scale.get() >= 1 ? scale : initialState,
        rotate,
        marginTop,
      }}
      ref={divRef}
    ></motion.div>
  );
};

export default CenterDiv;
