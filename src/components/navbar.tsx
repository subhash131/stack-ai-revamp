import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-screen h-16 flex items-center justify-between px-32 font-medium fixed top-0 bg-white z-50">
      <div>
        <Image
          src="stack-ai-logo.svg"
          alt="logo"
          width={1}
          height={1}
          className="w-20 "
        />
      </div>
      <div>
        <button className="rounded-xl text-black px-4 py-2 hover:bg-gray-200 transition-all">
          Solution
        </button>
        <button className="rounded-xl text-black px-4 py-2 hover:bg-gray-200 transition-all">
          Templates
        </button>
        <button className="rounded-xl text-black px-4 py-2 hover:bg-gray-200 transition-all">
          Customers
        </button>
        <button className="rounded-xl text-black px-4 py-2 hover:bg-gray-200 transition-all">
          Pricing
        </button>
        <button className="rounded-xl text-black px-4 py-2 hover:bg-gray-200 transition-all">
          Resources
        </button>
        <button className="rounded-xl text-black px-4 py-2 hover:bg-gray-200 transition-all">
          Talk to us
        </button>
      </div>
      <div className="flex gap-6 items-center">
        <button className="">Login</button>
        <button className="bg-[#313133] rounded-xl text-white px-4 py-2">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
