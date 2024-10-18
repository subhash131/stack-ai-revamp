import React from "react";
import { GiNinjaStar } from "react-icons/gi";

const solutions = [
  "No Code AI apps",
  "Pre-built Templates",
  "Compliance-Certified",
  "On-Premise Deployment",
  "AI-drafting",
  "AI co-pilot",
  "Automated SOAP",
  "Sales Call Analytics",
  "Compliance Monitoring",
  "Instant Contract and Financial Analysis",
];

const AiSolution = () => {
  return (
    <div className="w-screen h-screen mt-24 flex flex-col items-center justify-center bg-white gap-4">
      <div className="flex items-center flex-col">
        <h3 className="drop-shadow-lg">Services</h3>
        <p className="text-2xl font-semibold drop-shadow-lg">
          How we reduce your overhead
        </p>
      </div>
      <div className="w-[50rem] h-64 flex">
        <div className="w-[70%] h-fit flex gap-2 flex-wrap items-start justify-start">
          {solutions.map((sol) => (
            <button className="hover:scale-105 transition-transform border-dashed border border-gray-400 px-4 py-2 rounded-xl flex items-center gap-1">
              <GiNinjaStar /> {sol}
            </button>
          ))}
        </div>
        <div className="w-[30%] h-full bg-black text-white rounded-lg p-4 flex flex-col gap-8">
          <h4 className="text-2xl">See how it benefits your organization!</h4>
          <div className="flex gap-2 px-4 py-3 bg-white rounded-full shadow-lg shadow-gray-500 text-black text-sm w-fit cursor-pointer hover:scale-95 transition-transform">
            <div className="size-5 flex items-center justify-center bg-[rgba(48,197,34,0.46)] rounded-full">
              <div className="size-3 rounded-full bg-green-500 animate-ping"></div>
            </div>{" "}
            Book Call
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiSolution;
