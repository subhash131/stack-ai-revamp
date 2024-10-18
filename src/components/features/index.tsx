import React from "react";
import LeftDiv from "./left-div";
import RightDiv from "./right-div";
import CenterDiv from "./center-div";
import Card from "./card";
import { BsRocket } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import AiSolution from "../ai-solution";

const Features = () => {
  return (
    <div className="backdrop-blur-xl">
      <div className="size-full min-h-screen backdrop-blur-lg flex justify-center relative pt-24">
        <LeftDiv />
        <RightDiv />
        <CenterDiv />
      </div>
      <div className="w-full h-fit flex flex-col items-center justify-start gap-20">
        <div className="size-full flex items-center justify-between">
          <div className="w-full h-fit [writing-mode:vertical-lr] text-8xl flex items-start text-[rgba(156,163,175,0.3)] font-bold justify-center">
            <p className="pl-10 pt-32 tracking-widest">Stack</p>
          </div>
          <Card
            icon={BsRocket}
            name="Export"
            poster="https://d3ouvrmelntobn.cloudfront.net/interface-tab-poster.png"
            webmUrl="https://d3ouvrmelntobn.cloudfront.net/interface-tab.webm"
            mp4Url="https://d3ouvrmelntobn.cloudfront.net/interface-tab.mp4"
            key="Export Card"
          />
          <div className="w-full h-fit [writing-mode:vertical-lr] text-8xl flex items-end text-[rgba(156,163,175,0.3)] font-bold justify-center">
            <p className="pr-10 pt-32 tracking-widest">Stack</p>
          </div>
        </div>
        <div className="size-full flex items-center justify-between">
          <div className="w-full h-fit [writing-mode:vertical-lr] text-8xl flex items-start text-[rgba(156,163,175,0.3)] font-bold justify-center">
            <p className="pl-10 pt-32 tracking-widest">Stack</p>
          </div>
          <Card
            icon={RxHamburgerMenu}
            name="Analytics"
            poster="https://d3ouvrmelntobn.cloudfront.net/analytics-tab-poster.png"
            webmUrl="https://d3ouvrmelntobn.cloudfront.net/analytics-tab.webm"
            mp4Url="https://d3ouvrmelntobn.cloudfront.net/analytics-tab.mp4"
            key="Analytics Card"
          />
          <div className="w-full h-fit [writing-mode:vertical-lr] text-8xl flex items-end text-[rgba(156,163,175,0.3)] font-bold justify-center">
            <p className="pr-10 pt-32 tracking-widest">Stack</p>
          </div>
        </div>
      </div>
      <AiSolution />
    </div>
  );
};

export default Features;
