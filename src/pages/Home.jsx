// import React from "react";
import HeroCard from "../components/HeroCard";
import { ArrowRight, Flag } from "lucide-react";
import AImg from "../assets/AI.png";
import NotionParade from "../assets/notion-parade.webp";

const heroCardDetail = [
  {
    title: "AI",
    content: "Ask literally anything Notion will answer.",
    more: "Now with Q&A",
  },
  {
    title: "Wikis",
    content: "Centralize your knowledge. No more hunting for answers.",
  },
  {
    title: "Projects",
    content: "Manage complex projects without the chaos.",
  },
  {
    title: "Docs",
    content: "Simple powerful, beautiful. Next-gen notes & docs.",
  },
];

const heroImg = [
    image: '../assets/AI.png',
    alt: 'AI'
]

const Home = () => {
  return (
    <div className="mt-10">
      <div className="w-2/3 mx-auto flex flex-col justify-center">
        <h1 className="text-center text-6xl font-bold leading-snuff">
          Write, plan, share.
          <br />
          With AI at your side.
        </h1>
        <p className="mt-3 text-center font-medium text-3xl">
          Notion is connected workspace where better, faster work happens.
        </p>
        <button className="mt-5 mx-auto py-1 px-2 bg-black w-max text-white rounded text-lg flex items-center">
          Get Notion free
          <span>
            <ArrowRight className="w-4 ml-1" />
          </span>
        </button>
      </div>
      <div className="mt-10">
        <img
          src="https://www.notion.so/cdn-cgi/image/format=webp,width=3840/https://images.ctfassets.net/spoqsaf9291f/3csRrNi1u82ymVlwjfo2E6/02516e52af15501acd822d3e7a03baf9/home-hero.png"
          alt=""
          className="mx-auto w-2/5"
        />
        <div className="grid grid-cols-4 gap-5 w-3/5 mx-auto">
          {heroCardDetail.map((item) => (
            <HeroCard
              title={item.title}
              content={item.content}
              more={item.more}
            />
          ))}
        </div>
        <div className="w-3/5 mx-auto">
          <img src={AImg} alt="" className="rounded-lg mt-3 " />
        </div>
      </div>
      <div className="w-2/3 mx-auto">
        <div className="text-center">
          <h1 className="text-2xl">Endless way to use it</h1>
          <p>Browse all templates</p>
        </div>
        <div className="grid grid-cols-2">
          <div className="border">
            <Home />
            <p>Company Wiki</p>
            <p className="flex">
              Browse template{" "}
              <span>
                <ArrowRight className="w-4 " />
              </span>
            </p>
          </div>
          <div className="border">
            <div className="grid grid-cols-2 gap-5">
              <div className="border p-5 space-y-4 rounded-lg">
                <Flag />
                <h1>Product Roadmap</h1>
                <p className="flex">
                  Browse template{" "}
                  <span>
                    <ArrowRight className="w-4 " />
                  </span>
                </p>
              </div>
              <div className="border p-5 space-y-4 rounded-lg">
                <Flag />
                <h1>Product Roadmap</h1>
                <p className="flex">
                  Browse template{" "}
                  <span>
                    <ArrowRight className="w-4 " />
                  </span>
                </p>
              </div>
              <div className="border p-5 space-y-4 rounded-lg">
                <Flag />
                <h1>Product Roadmap</h1>
                <p className="flex">
                  Browse template{" "}
                  <span>
                    <ArrowRight className="w-4 " />
                  </span>
                </p>
              </div>
              <div className="border p-5 space-y-4 rounded-lg">
                <Flag />
                <h1>Product Roadmap</h1>
                <p className="flex">
                  Browse template{" "}
                  <span>
                    <ArrowRight className="w-4 " />
                  </span>
                </p>
              </div>
              <div className="border p-5 space-y-4 rounded-lg">
                <Flag />
                <h1>Product Roadmap</h1>
                <p className="flex">
                  Browse template{" "}
                  <span>
                    <ArrowRight className="w-4 " />
                  </span>
                </p>
              </div>
              <div className="border p-5 space-y-4 rounded-lg">
                <Flag />
                <h1>Product Roadmap</h1>
                <p className="flex">
                  Browse template{" "}
                  <span>
                    <ArrowRight className="w-4 " />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center w-max mx-auto space-y-4">
        <h1 className="font-bold text-5xl">Get Started for Free</h1>
        <p>Play around with it first. Pay and add your team later</p>
        <div className="flex items-center space-x-5 w-max mx-auto">
          <button className="p-2 text-white bg-black rounded">
            Try Notion Free
          </button>
          <p className="text-blue-400 flex items-center">
            Request a Demo{" "}
            <span>
              <ArrowRight className="w-4" />
            </span>
          </p>
        </div>
        <img src={NotionParade} alt="" className="w-2/5 mx-auto" />
      </div>
    </div>
  );
};

export default Home;
