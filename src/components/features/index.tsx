import React from "react";
import LeftDiv from "./left-div";
import RightDiv from "./right-div";
import CenterDiv from "./center-div";
import Export from "./export";
import Card from "./card";
import { BsHammer, BsRocket } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

const Features = () => {
  return (
    <>
      <div className="size-full min-h-screen backdrop-blur-lg flex justify-center relative pt-24">
        <LeftDiv />
        <RightDiv />
        <CenterDiv />
      </div>
      <div className="w-full h-fit flex flex-col items-center justify-start backdrop-blur-lg gap-24">
        <Card
          icon={BsRocket}
          name="Export"
          poster="https://d3ouvrmelntobn.cloudfront.net/interface-tab-poster.png"
          webmUrl="https://d3ouvrmelntobn.cloudfront.net/interface-tab.webm"
          mp4Url="https://d3ouvrmelntobn.cloudfront.net/interface-tab.mp4"
          key="Export Card"
        />
        <Card
          icon={RxHamburgerMenu}
          name="Analytics"
          poster="https://d3ouvrmelntobn.cloudfront.net/analytics-tab-poster.png"
          webmUrl="https://d3ouvrmelntobn.cloudfront.net/analytics-tab.webm"
          mp4Url="https://d3ouvrmelntobn.cloudfront.net/analytics-tab.mp4"
          key="Analytics Card"
        />
      </div>
    </>
  );
};

export default Features;
