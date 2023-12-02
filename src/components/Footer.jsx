// import React from "react";
import NotionLogo from "../assets/notionLogo.png";
import {
  Copyright,
  Twitter,
  Instagram,
  FacebookIcon,
  LinkedinIcon,
  YoutubeIcon,
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
    <div className="mx-2 py-20 border-t ">
      <div className="w-3/5 mx-auto grid grid-cols-4">
        <div className="flex flex-col space-y-3">
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
        </div>
        <div className="space-y-10">
          <div className="space-y-1">
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
        <div className="space-y-5">
          <div className="">
            <h2>Download</h2>
            <ul className="text-gray-500">
              <li>iOS & Android</li>
              <li>Mac & Windows</li>
              <li>Web Clipper</li>
            </ul>
          </div>
          <div className="">
            <h2>Build</h2>
            <ul className="text-gray-500">
              <li>Templates</li>
              <li>Integrations</li>
              <li>API docs</li>
              <li>Guides & Tutorials</li>
              <li>Hire a consultant</li>
              <li>Become an affliliate</li>
            </ul>
          </div>
          <div className="">
            <h2>Learn</h2>
            <ul className="text-gray-500">
              <li>Customer Stories</li>
              <li>Help Center</li>
              <li>Webinars</li>
              <li>Blog</li>
              <li>Community</li>
            </ul>
          </div>
        </div>
        <div className="space-y-4">
          <div className="">
            <h2>Get Started</h2>
            <ul className="text-gray-500">
              <li>Switch from Confluence</li>
              <li>Switch from Asana</li>
              <li>Switch from Evernote</li>
              <li>Compare vs Monday</li>
              <li>Compare vs Clickup</li>
              <li>Compare vs Jira</li>
            </ul>
          </div>
          <div className="">
            <h2>Resources</h2>
            <ul className="text-gray-500">
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
      <div className="text-sm w-4/6 mt-10 ml-auto border">
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
