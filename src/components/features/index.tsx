import React from "react";
import LeftDiv from "./left-div";
import RightDiv from "./right-div";
import CenterDiv from "./center-div";

const Features = () => {
  return (
    <div className="size-full min-h-screen backdrop-blur-lg flex justify-center relative pt-20">
      <LeftDiv />
      <CenterDiv />
      <RightDiv />
    </div>
  );
};

export default Features;
