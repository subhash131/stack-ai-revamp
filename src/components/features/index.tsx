import React from "react";
import LeftDiv from "./left-div";
import RightDiv from "./right-div";
import CenterDiv from "./center-div";

const Features = () => {
  return (
    <div className="size-full min-h-screen pt-16 px-20 backdrop-blur-lg flex justify-center relative">
      <LeftDiv />
      <CenterDiv />
      <RightDiv />
    </div>
  );
};

export default Features;
