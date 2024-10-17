import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="w-screen h-fit flex flex-col items-center justify-center pt-32 -z-10 sticky top-0">
      <div className="size-full flex flex-col items-center justify-center gap-2 ">
        <div className="mb-2 w-fit px-4 py-2 rounded-full border border-gray-300 cursor-pointer active:scale-95 transition-transform">
          <p className="text-sm">
            <span className="py-0.5 px-2 bg-[#634cc3] rounded-full text-white mr-1">
              New
            </span>
            Self-host Stack AI within your infrastructure
          </p>
        </div>
        <h2 className="text-4xl font-semibold">
          The Enterprise Generative AI Platform
        </h2>
        <p className="text-sm text-gray-700 text-center">
          Augment your workforce with AI Assistants. Automate back office
          operations. <br />
          Make your organization smarter.
        </p>
        <div className="flex gap-6 mt-4">
          <button className="bg-gray-700 text-white px-4 py-2 rounded-xl active:scale-95 transition-transform">
            Get Demo
          </button>
          <button className="flex gap-2 items-center justify-center active:scale-95 transition-transform">
            Start for free <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
