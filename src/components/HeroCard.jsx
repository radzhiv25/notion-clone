// import React from 'react'

import { ArrowRight, Sparkles } from "lucide-react";

const HeroCard = (props) => {
  return (
    <div className="rounded-xl border shadow-lg p-2 font-semibold space-y-3 lg:w-auto w-screen">
      <h1 className="text-2xl flex items-center gap-2">
        <Sparkles className="bg-purple-300 p-1 rounded-md w-8 h-8 text-purple-600" />
        {props.title}
        <span className="text-purple-500 text-sm bg-purple-300 p-1 rounded-full">
          {props.more}
        </span>
      </h1>
      <p className="text-gray-500">{props.content}</p>
      <button className="flex items-center text-red-500">
        learn more{" "}
        <span>
          <ArrowRight className="w-4 mt-1 ml-1" />
        </span>
      </button>
    </div>
  );
};

export default HeroCard;
