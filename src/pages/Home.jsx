import HeroCard from "../components/HeroCard";
import {
  ArrowRight,
  Flag,
  Home,
  Shuffle,
  Eye,
  Palette,
  Sparkles,
  FileText,
  Target,
  BookOpenText,
} from "lucide-react";
import AImg from "../assets/AI.png";
import NotionParade from "../assets/notion-parade.webp";
import WikiTemp from "../assets/company-wiki-template.webp";
import Avatar from "../assets/avatars.webp";
import Strike from "../assets/strikethrough.png";

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

  const heroComponents = [Sparkles, BookOpenText, Target, FileText];

const HomePage = () => {
  return (
    <div className="mt-10">
      <div className="w-2/3 mx-auto flex flex-col justify-center">
        <h1 className="text-center text-6xl font-bold leading-snuff">
          Write, plan, share.
          <br />
          With AI at your side.
        </h1>
        <p className="mt-3 text-center font-medium text-2xl">
          Notion is connected workspace where better, faster work happens.
        </p>
        <button className="mt-5 mx-auto p-2 bg-black text-white rounded text-md flex items-center">
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
          {heroCardDetail.map((item, index) => (
            <HeroCard
              key={index}
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

      <div className="w-3/5 mx-auto my-10 ">
        <h1 className="text-center font-bold text-5xl">
          Millions run on Notion every day
        </h1>
        <p className="text-center">
          Powering the world's best teams, from next generation startups to
          established enterprises.
        </p>
        <p className="flex items-center w-max mx-auto text-blue-400">
          Read Customer Stories{" "}
          <span>
            <ArrowRight className="w-4" />
          </span>
        </p>
        <div className="space-y-5">
          <div className="w-3/4 mx-auto grid grid-cols-6 gap-5 items-center">
            <img
              src="https://images.ctfassets.net/spoqsaf9291f/502ApiNcRHgIwrDU8XRYTQ/c70d8752079a40241d08ec85dac5f93d/figma-logo.png"
              alt=""
            />
            <img
              src="https://images.ctfassets.net/spoqsaf9291f/6S40IUVrdki2SlPXQMHKKr/e02c776d183f70c84fa53e077a0f7b1a/pixar.png"
              alt=""
            />
            <img
              src="https://images.ctfassets.net/spoqsaf9291f/1jlyWNfa8mnYxJtmzu5lpV/4072e10330206f9057fe77ab19ce1bca/doordash.png"
              alt=""
            />
            <img
              src="https://images.ctfassets.net/spoqsaf9291f/2VtWKmfmToo8n3X7BY0WwA/ccdcd719ee3bc3fa76148eae11d97c51/nike.png"
              alt=""
            />
            <img
              src="https://images.ctfassets.net/spoqsaf9291f/6dIueLe6mDK6HhNObFq2On/a6cd5c6aa443fe0fc69386522acf7b70/amazon.png"
              alt=""
            />
            <img
              src="https://images.ctfassets.net/spoqsaf9291f/6WgTu82608DIXfxu9KliYL/326d36bbde762fd9c1800872db81244c/pinterest.png"
              alt=""
            />
          </div>
          <div className="w-3/5 mx-auto grid grid-cols-6 gap-5 items-center">
            <img
              src="https://images.ctfassets.net/spoqsaf9291f/LnKYnStAE4vKs51ejLRj2/69cb3e0382538d4c925208ea24f253f5/General_Electric_logo.svg__1_.png"
              alt=""
            />
            <img
              src="https://images.ctfassets.net/spoqsaf9291f/3o80U1VqLr5X1nE4kWlZM5/7d1493bad9ba1bd0adf0cf21b6751dd2/uber.png"
              alt=""
            />
            <img
              src="https://images.ctfassets.net/spoqsaf9291f/2owwRqFrnSdM98Js9Itzih/15cca0ca61fbbaadfeef6b70108ffb42/plaid.png"
              alt=""
            />
            <img
              src="https://images.ctfassets.net/spoqsaf9291f/18DMuU2Os0OAYiJxqU3aE7/3f2d9ce2c5761513c4f34f41cf85b028/Screen_Shot_2022-09-27_at_11.11_3.png"
              alt=""
            />
            <img
              src="https://images.ctfassets.net/spoqsaf9291f/346udUCJm76OzP8M0yI78w/81099c4f771df9286782581fe18d0efc/snowflake.png"
              alt=""
            />
            <img
              src="https://images.ctfassets.net/spoqsaf9291f/xDZNk5XtOxMEiqsiJ6paq/c9958ceead0fb85872449d26186d62b1/headspace__1_.png"
              alt=""
            />
          </div>
          <div className="w-1/5 mx-auto grid grid-cols-2 gap-5 items-center">
            <img
              src="https://images.ctfassets.net/spoqsaf9291f/4r1tX1hoz2RZigBJYbFbBJ/37e1dc9aa41342497d3e35a31649b2ae/angel-list.png"
              alt=""
            />
            <img
              src="https://images.ctfassets.net/spoqsaf9291f/4AmP2cmuZ2kUwbeSw3ukj9/91ee33f40debced0e8188a0847cb65af/robinhood_logo.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex items-center my-10">
          <div className="">
            <h1 className="relative top-32 font-bold text-center text-5xl">
              Consolidate tools.
              <br />
              Cut costs.
            </h1>
            <img
              src={Strike}
              alt=""
              className="relative top-48 w-3/5 mx-auto"
            />
            <div className="flex flex-row-reverse items-end w-1/2 mx-auto">
              <img
                src="https://www.notion.so/cdn-cgi/image/format=webp,width=640/front-static/pages/home/giant-pencil-illustration.png"
                alt=""
                className="w-2/5 relative left-32 bottom-8"
              />
            </div>
            <div className="relative w-3/5 mx-auto bottom-10 mix-blend-multiply">
              <img
                src="https://www.notion.so/cdn-cgi/image/format=webp,width=1200/front-static/pages/home/tools-before-notion-V2.png"
                alt=""
                className=""
              />
            </div>
          </div>
        </div>
        <div className="text-center space-y-3">
          <blockquote className="text-4xl w-2/3 mx-auto font-[Roboto]">
            "Notion Adapts to your needs. It's as minimal or as powerful as you
            need it to be"
          </blockquote>
          <div className="flex items-center gap-3 mx-auto w-max">
            <img
              src="https://www.notion.so/cdn-cgi/image/format=webp,width=256/front-static/shared/logos/color/metalab.png"
              alt=""
              className="w-16"
            />
            <div className="text-left leading-normal text-sm">
              <p className="font-semibold">Justin Watt</p>
              <p>Director of Ops & Marketing, Meta labs</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-3/5 mx-auto my-10">
        <div className="flex items-center space-x-10">
          <img
            src="https://www.notion.so/cdn-cgi/image/format=auto,width=640,quality=100/front-static/shared/illustrations/blocks/topPeekI.png"
            alt=""
            className="w-1/5"
          />
          <h1 className="font-bold text-5xl">Power building blocks </h1>
        </div>
        <div className="border p-5 -mt-2 rounded-lg">
          <Shuffle className="text-blue-500 my-2" />
          <h2 className="font-semibold text-lg">
            Visualize, filter & sort any way you want.
          </h2>
          <p className="">
            Show only tasks assigned to you, or items marked as urgent. Break
            <br />
            down any project in the way that's most helpful to you.
          </p>
          <img
            src="https://www.notion.so/cdn-cgi/image/format=webp,width=3840/front-static/pages/home/building-blocks/list.png"
            alt=""
            className="border my-5 rounded-lg"
          />
          <div className="grid grid-cols-6 text-sm w-3/5 mx-auto gap-3 text-center">
            <div className="p-1 border rounded-md">Board</div>
            <div className="p-1 border rounded-md">Table</div>
            <div className="p-1 border rounded-md">Timeline</div>
            <div className="p-1 border rounded-md">Calendar</div>
            <div className="p-1 border rounded-md">Gallery</div>
            <div className="p-1 border rounded-md">List</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 my-10">
          <div className="border rounded-xl">
            <div className="m-5">
              <Eye className="text-blue-500" />
              <h3 className="font-semibold">
                Build any page, communicate any idea
              </h3>
              <p>
                Everything is drag and drop in Notion - images, toggles, to-do,
                even embedded databases.
              </p>
            </div>
            <img
              src="https://www.notion.so/cdn-cgi/image/format=webp,width=2048/front-static/pages/home/build-any-page-communicate-any-idea.png"
              alt=""
              className="rounded-lg"
            />
          </div>
          <div className="border rounded-xl">
            <div className="m-5">
              <Palette className="text-blue-500" />
              <h3 className="font-semibold">Customize the info you track</h3>
              <p>
                Create your own labels, tags, owners, and more, so everyone has
                context and everything stays organized.
              </p>
            </div>
            <img
              src="https://www.notion.so/cdn-cgi/image/format=webp,width=2048/front-static/pages/home/customize-info.png"
              alt=""
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="text-center space-y-3">
          <blockquote className="text-4xl w-2/3 mx-auto font-[Roboto]">
            "Notion Adapts to your needs. It's as minimal or as powerful as you
            need it to be"
          </blockquote>
          <div className="flex items-center gap-3 mx-auto w-max">
            <img
              src="https://www.notion.so/cdn-cgi/image/format=webp,width=96/front-static/shared/logos/color/match-group.png"
              alt=""
              className="w-8"
            />
            <div className="text-left leading-normal text-sm">
              <p className="font-semibold">Ram Makhani</p>
              <p>Director of Product, Match group</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-3/5 mx-auto">
        <h1 className="text-5xl font-bold text-center">
          Every team, side-by-side
        </h1>
        <div className="grid grid-cols-6 gap-4 my-5">
          <div className="p-4 border rounded-xl">
            <img
              src="https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/pages/home/persona-carousel/icons/engineering-v2.png"
              alt=""
              className="w-3/5 mx-auto"
            />
            <h3 className="text-center">Engineering</h3>
          </div>
          <div className="p-4 border rounded-xl">
            <img
              src="https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/pages/home/persona-carousel/icons/design-v2.png"
              alt=""
              className="w-3/5 mx-auto"
            />
            <h3 className="text-center">Design</h3>
          </div>
          <div className="p-4 border rounded-xl">
            <img
              src="https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/pages/home/persona-carousel/icons/product.png"
              alt=""
              className="w-3/5 mx-auto"
            />
            <h3 className="text-center">Product</h3>
          </div>
          <div className="p-4 border rounded-xl">
            <img
              src="https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/pages/home/persona-carousel/icons/marketing.png"
              alt=""
              className="w-3/5 mx-auto"
            />
            <h3 className="text-center">Marketing</h3>
          </div>
          <div className="p-4 border rounded-xl">
            <img
              src="https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/pages/home/persona-carousel/icons/operations.png"
              alt=""
              className="w-3/5 mx-auto"
            />
            <h3 className="text-center">Operations</h3>
          </div>
          <div className="p-4 border rounded-xl">
            <img
              src="https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/pages/home/persona-carousel/icons/hr-v2.png"
              alt=""
              className="w-3/5 mx-auto"
            />
            <h3 className="text-center">HR</h3>
          </div>
        </div>
        <div className="">
          <img
            src="https://www.notion.so/cdn-cgi/image/format=webp,width=3840/front-static/pages/home/persona-carousel/screenshots/hr.png"
            alt=""
            className="border rounded-xl"
          />
        </div>
      </div>

      <div className="my-10">
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-center text-5xl font-bold">
              Join a global movement.
              <br />
              Unleash your creativity.
            </h1>
            <p className="text-center">
              Our vibrant community produces content, teaches courses, and leads
              events all over the world.
            </p>
          </div>
          <p className="flex justify-center items-center text-blue-400 hover:underline cursor-pointer">
            Learn more
            <span>
              <ArrowRight className="w-4" />
            </span>
          </p>
        </div>
        <img src={Avatar} alt="" className="w-3/5 mx-auto" />
        <div className="grid grid-cols-3 w-3/5 mx-auto gap-5">
          <div className="rounded-lg p-5 space-y-2 border">
            <h1 className="text-6xl text-blue-400 font-bold">1M+</h1>
            <p className="text-sm">community members</p>
          </div>
          <div className="rounded-lg p-5 space-y-2 border">
            <h1 className="text-6xl text-blue-400 font-bold">150+</h1>
            <p className="text-sm">community groups</p>
          </div>
          <div className="rounded-lg p-5 space-y-2 border">
            <h1 className="text-6xl text-blue-400 font-bold">50+</h1>
            <p className="text-sm">countries represented</p>
          </div>
        </div>
        <div className="my-10 w-3/5 mx-auto grid grid-cols-2 gap-5">
          <div className="rounded border">
            <div className="p-5 text-lg">
              <h2 className="font-semibold">An always-on suppport network</h2>
              <p>Swap setups and share tips in over 149 online communities.</p>
            </div>
            <img
              src="https://www.notion.so/cdn-cgi/image/format=webp,width=640/front-static/pages/home/community-icons-V2.png"
              alt=""
              className="w-3/5 ml-20"
            />
          </div>
          <div className="rounded border">
            <div className="text-lg">
              <div className="p-5">
                <h2 className="font-semibold">Choose your language</h2>
                <p>
                  Notion currently supports English, Korean, Japanese, French,
                  German, Spanish, and Portuguese. With more to come!
                </p>
              </div>
              <img
                src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/welcome-to-notion.png"
                alt=""
                className="ml-auto w-5/6 mt-12 rounded"
              />
            </div>
          </div>
        </div>
        <div className="w-3/5 mx-auto flex gap-5">
          <figure className="border py-14 px-20 w-2/3 rounded-lg">
            <img
              src="https://www.notion.so/cdn-cgi/image/format=webp,width=3840,quality=75/front-static/pages/home/community/community-slide-01.png"
              alt=""
              className="rounded h-full"
            />
            <figcaption className="text-center my-3">
              community meet up in tokyo
            </figcaption>
          </figure>
          <div className="grid grid-rows-3 gap-5 w-1/3">
            <div className="p-3 border rounded-lg">
              <div className="flex items-center space-x-3">
                <img
                  src="https://www.notion.so/cdn-cgi/image/format=auto,width=3840,quality=100/front-static/pages/home/avatars/twitter-avatar-deborah.png"
                  alt=""
                />
                <div className="">
                  <p>Deborah Mecca</p>
                  <p>@DebMecca</p>
                </div>
              </div>
              <p>
                I used to HATE documenting things. And then I started using
                @NotionHQ and I document a lot. A LOT A LOT. Now I just realize
                that it wasn't that I hated documenting, I just hated Google
                Docs.
              </p>
            </div>
            <div className="p-3 border rounded-lg">
              <div className="flex items-center space-x-3">
                <img
                  src="https://www.notion.so/cdn-cgi/image/format=auto,width=3840,quality=100/front-static/pages/home/avatars/twitter-avatar-deborah.png"
                  alt=""
                />
                <div className="">
                  <p>Deborah Mecca</p>
                  <p>@DebMecca</p>
                </div>
              </div>
              <p>
                I used to HATE documenting things. And then I started using
                @NotionHQ and I document a lot. A LOT A LOT. Now I just realize
                that it wasn't that I hated documenting, I just hated Google
                Docs.
              </p>
            </div>
            <div className="p-3 border rounded-lg">
              <div className="flex items-center space-x-3">
                <img
                  src="https://www.notion.so/cdn-cgi/image/format=auto,width=3840,quality=100/front-static/pages/home/avatars/twitter-avatar-deborah.png"
                  alt=""
                />
                <div className="">
                  <p>Deborah Mecca</p>
                  <p>@DebMecca</p>
                </div>
              </div>
              <p>
                I used to HATE documenting things. And then I started using
                @NotionHQ and I document a lot. A LOT A LOT. Now I just realize
                that it wasn't that I hated documenting, I just hated Google
                Docs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-3/5 mx-auto">
        <div className="text-center space-y-5 my-10">
          <h1 className="text-5xl font-bold">Endless way to use it</h1>
          <p className="text-blue-400 flex justify-center items-center">
            Browse all templates{" "}
            <span>
              <ArrowRight />
            </span>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="border rounded-lg">
            <div className="pl-5 pt-5 space-y-5">
              <Home className="text-red-400" />
              <p className="font-semibold">Company Wiki</p>
              <p className="flex text-blue-400">
                Browse template
                <span>
                  <ArrowRight className="w-4 " />
                </span>
              </p>
            </div>
            <img
              src={WikiTemp}
              alt=""
              className="ml-auto mt-5 w-5/6 rounded-tl-lg rounded-br-lg"
            />
          </div>
          <div className="">
            <div className="grid grid-cols-2 gap-5">
              <div className="border p-5 space-y-5 rounded-lg">
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

export default HomePage;
