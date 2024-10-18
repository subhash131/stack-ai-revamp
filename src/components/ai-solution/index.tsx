import Image from "next/image";
import React from "react";
import { GiNinjaStar } from "react-icons/gi";

const solutions = [
  {
    name: "No Code AI apps",
    desc: "Build AI applications effortlessly with our drag-and-drop interface. Deploy with customizable UIs or ready-to-use API endpoints.",
  },
  {
    name: "Pre-built Templates",
    desc: "Leverage our extensive library of Templates inspired by real use cases. Achieve immediate results and customize to your needs.",
  },
  {
    name: "Compliance-Certified",
    desc: "Stack AI is SOC2, HIPAA, and GDPR compliant, and has DPAs signed with the main AI providers, such as Anthropic and OpenAI.",
  },
  {
    name: "On-Premise Deployment",
    desc: "Stack AI can be self-hosted on your own servers or VPC (Virtual Private Cloud), giving you complete control over your data.",
  },
  {
    name: "AI-drafting",
    desc: "Speed up RFP responses. Use AI to search through your RFP knowledge base and draft proposal sections.",
  },
  {
    name: "AI co-pilot",
    desc: "Assist clinical support with a custom AI co-pilot. Generate suggestions for treatment plans and diagnoses based on patient data.",
  },
  {
    name: "Automated SOAP",
    desc: "Transcribe visit recording and automatically generate SOAP notes for the EHR system.",
  },
  {
    name: "Sales Call Analytics",
    desc: "Perform sales call critiques automatically and provide feedback to sales representatives.",
  },
  {
    name: "Compliance Monitoring",
    desc: "Check communication compliance at scale. Automate compliance verification in your sales representative communications.",
  },
  {
    name: "Instant Contract and Financial Analysis",
    desc: "Perform due-diligence, financial report comparison, and investment memo generation.",
  },
];

const AiSolution = () => {
  return (
    <div className="w-screen h-screen mt-24 flex flex-col items-center justify-center bg-white gap-4 relative">
      <div className="absolute left-[20%] top-[14%] -rotate-6 bg-gray-100 border shadow-xl px-4 flex items-center justify-center py-2 rounded-lg">
        <Image
          src="gemini-ai.png"
          alt="gemini-ai"
          width={0}
          height={0}
          className="w-fit h-10 object-cover"
        />
      </div>
      <div className="absolute left-[3%] top-[35%] border rotate-6 bg-gray-100 shadow-xl px-4 flex items-center justify-center py-2 rounded-lg">
        <Image
          src="open-ai.png"
          alt="open-ai"
          width={0}
          height={0}
          className="w-fit h-10 object-cover"
        />
      </div>
      <div className="absolute right-[17%] top-[15%] border rotate-6 bg-gray-100 shadow-xl px-4 flex items-center justify-center py-2 rounded-lg">
        <Image
          src="amazon.svg"
          alt="amazon-ai"
          width={0}
          height={0}
          className="w-fit h-10 object-cover"
        />
      </div>
      <div className="absolute right-[17%] bottom-[10%] border -rotate-6 bg-gray-100 shadow-xl px-4 flex items-center justify-center py-3 rounded-lg">
        <Image
          src="meta.svg"
          alt="meta-ai"
          width={0}
          height={0}
          className="w-fit h-8 object-cover"
        />
      </div>
      <div className="absolute left-[20%] bottom-[15%] border rotate-12 bg-gray-100 shadow-xl px-4 flex items-center justify-center py-3 rounded-lg">
        <Image
          src="groq.png"
          alt="groq-ai"
          width={0}
          height={0}
          className="w-fit h-8 object-cover"
        />
      </div>
      <div className="absolute right-[4%] top-[40%] border rotate-12 bg-gray-100 shadow-xl px-4 flex items-center justify-center py-3 rounded-lg">
        <Image
          src="mistral-ai.png"
          alt="mistral-ai"
          width={0}
          height={0}
          className="w-fit h-8 object-cover"
        />
      </div>
      <div className="absolute left-[45%] top-[12%] border rotate-6 bg-gray-100 shadow-xl px-4 flex items-center justify-center py-3 rounded-lg">
        <Image
          src="anthropic-logo.png"
          alt="anthropic-ai"
          width={0}
          height={0}
          className="w-fit h-4 object-cover"
        />
      </div>
      <div className="absolute left-[45%] bottom-[12%] border -rotate-6 bg-gray-100 shadow-xl px-4 flex items-center justify-center py-3 rounded-lg">
        <Image
          src="azure-logo.png"
          alt="anthropic-ai"
          width={0}
          height={0}
          className="w-fit h-7 object-cover"
        />
      </div>
      <div className="flex items-center flex-col">
        <h3 className="drop-shadow-lg">Services</h3>
        <p className="text-3xl font-semibold drop-shadow-lg">
          Trim your overhead with
        </p>
      </div>
      <div className="w-[50rem] h-64 flex">
        <div className="w-[70%] h-fit flex gap-2 flex-wrap items-start justify-start">
          {solutions.map(({ desc, name }, id) => (
            <button
              className="hover:scale-105 transition-transform border-dashed border border-gray-400 px-4 py-2 rounded-xl flex items-center gap-1 relative group"
              key={name + id}
            >
              <span className="absolute w-full bottom-12 p-2 rounded-xl h-fit text-xs group-hover:block hidden bg-gray-100 text-start left-0">
                {desc}
              </span>
              <GiNinjaStar /> {name}
            </button>
          ))}
        </div>
        <div className="w-[30%] h-full shadow-xl bg-black text-white rounded-lg p-4 flex flex-col gap-8">
          <h4 className="text-2xl">See how it benefits your organization!</h4>
          <div className="flex gap-2 px-4 py-3 bg-white rounded-full shadow-lg shadow-gray-500 text-black text-sm w-fit cursor-pointer hover:scale-95 transition-transform">
            <div className="size-5 flex items-center justify-center rounded-full">
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
