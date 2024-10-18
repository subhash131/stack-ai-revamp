import React from "react";
import LeftDiv from "./left-div";
import RightDiv from "./right-div";
import CenterDiv from "./center-div";
import Export from "./export";

const Features = () => {
  return (
    <>
      <div className="size-full min-h-screen backdrop-blur-lg flex justify-center relative pt-20">
        <LeftDiv />
        <RightDiv />
        <CenterDiv />
      </div>
      <div className="w-full h-fit flex flex-col items-center justify-start backdrop-blur-lg gap-36">
        <Export />
        <Export />
      </div>
    </>
  );
};

export default Features;
