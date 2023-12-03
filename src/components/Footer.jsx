// import React from "react";
import NotionLogo from "../assets/notionLogo.png";
import {
  Copyright,
  Twitter,
  Instagram,
  FacebookIcon,
  LinkedinIcon,
  YoutubeIcon,
  Globe,
  ChevronDown,
} from "lucide-react";
// const footerLinks = [
//   {
//     Product: ["Wikis", "Projects", "Docs", "Notion AI", "What's new"],
//   },
//   {
//     Solutions: [
//       "Remote work",
//       "Remote learning",
//       "Remote onboarding",
//       "Engineering",
//       "Design",
//       "Marketing",
//       "Sales",
//       "Product",
//       "HR",
//       "Customer support",
//       "Operations",
//       "Finance",
//       "All teams",
//     ],
//   },
//   {
//     Resources: [
//       "Templates",
//       "Guides",
//       "Examples",
//       "Notion for startups",
//       "Notion for students",
//       "Notion for teams",
//       "Notion for remote work",
//       "Notion for learning",
//       "Notion API",
//     ],
//   },
//   {
//     Company: [
//       "About",
//       "Careers",
//       "Press",
//       "Contact",
//       "Customers",
//       "Partners",
//       "Security",
//       "Privacy",
//     ],
//   },
// ];

const Footer = () => {
  return (
    <div className="lg:mx-2 mx-4 lg:py-20 py-10 border-t ">
      <div className="lg:w-4/6 mx-auto lg:grid lg:grid-cols-4">
        <div className="flex flex-col space-y-8">
          <div className="flex items-center">
            <img src={NotionLogo} alt="" className="w-10" />
            <h1 className="text-black font-semibold text-lg">Notion</h1>
          </div>
          <div className="">
            <ul className="flex space-x-1 items-center text-gray-500">
              <li>
                <Instagram />
              </li>
              <li>
                <Twitter />
              </li>
              <li>
                <LinkedinIcon />
              </li>
              <li>
                <FacebookIcon />
              </li>
              <li>
                <YoutubeIcon />
              </li>
            </ul>
          </div>
          <div className="flex items-center space-x-2 p-2 border rounded-md w-max">
            <Globe className="w-4" />
            <button className="">English</button>
            <ChevronDown className="w-4" />
          </div>
        </div>
        <div className="space-y-11 flex items-baseline gap-5">
          <div className="space-y-1 w-1/2">
            <h2>Product</h2>
            <ul className="text-gray-500 space-y-1">
              <li>Wikis</li>
              <li>Projects</li>
              <li>Docs</li>
              <li>Notion AI</li>
              <li>Whats new</li>
            </ul>
          </div>
          <div className="space-y-1">
            <h2 className="">Solutions</h2>
            <ul className="text-gray-500 space-y-1">
              <li>Enterprise</li>
              <li>Small Business</li>
              <li>Remote Work</li>
              <li>Startups</li>
              <li>Education</li>
              <li>Non Profits</li>
              <li>Engineering</li>
              <li>Product</li>
              <li>Design</li>
              <li>Managers</li>
            </ul>
          </div>
        </div>
        <div className="space-y-6 flex items-baseline gap-2">
          <div className="space-y-1 w-1/3">
            <h2>Download</h2>
            <ul className="text-gray-500 space-y-1">
              <li>iOS & Android</li>
              <li>Mac & Windows</li>
              <li>Web Clipper</li>
            </ul>
          </div>
          <div className="space-y-1 w-1/3">
            <h2>Build</h2>
            <ul className="text-gray-500 space-y-1">
              <li>Templates</li>
              <li>Integrations</li>
              <li>API docs</li>
              <li>Guides & Tutorials</li>
              <li>Hire a consultant</li>
              <li>Become an affliliate</li>
            </ul>
          </div>
          <div className="space-y-1 w-1/3">
            <h2>Learn</h2>
            <ul className="text-gray-500 space-y-1">
              <li>Customer Stories</li>
              <li>Help Center</li>
              <li>Webinars</li>
              <li>Blog</li>
              <li>Community</li>
            </ul>
          </div>
        </div>
        <div className="space-y-4 flex items-baseline gap-5">
          <div className="space-y-1 w-1/2">
            <h2>Get Started</h2>
            <ul className="text-gray-500 space-y-1">
              <li>Switch from Confluence</li>
              <li>Switch from Asana</li>
              <li>Switch from Evernote</li>
              <li>Compare vs Monday</li>
              <li>Compare vs Clickup</li>
              <li>Compare vs Jira</li>
            </ul>
          </div>
          <div className="space-y-1">
            <h2>Resources</h2>
            <ul className="text-gray-500 space-y-1">
              <li>Pricing</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Media Kit</li>
              <li>Email Us</li>
              <li>Security</li>
              <li>Cookie Settings</li>
              <li>Terms & Policy</li>
              <li>California Privacy Notice</li>
              <li>Status</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-sm lg:w-4/6 mt-10 ml-auto lg:space-y-0 space-y-3">
        <p>Do Not Sell or Share My Info</p>
        <p className="flex items-center text-gray-400">
          <span>
            <Copyright className="w-4 mr-1" />
          </span>
          2023 Notion Labs, Inc.
        </p>
      </div>
    </div>
  );
};

export default Footer;
