// import React from 'react'
import { ArrowRight } from "lucide-react";
import NotionLogo from "../assets/notionLogo.png";

const Navbar = () => {
  return (
    <div className="mx-2 p-2 border-b flex items-center text-gray-600">
      <div className="flex items-center space-x-1">
        <img src={NotionLogo} alt="" className="w-10" />
        <h1 className="text-black font-semibold text-lg">Notion</h1>
      </div>
      <ul className="ml-2 mr-auto flex items-center space-x-5">
        <li>Product</li>
        <li>Download</li>
        <li>Solutions</li>
        <li>Resources</li>
        <li>Pricing</li>
      </ul>
      <div className="flex items-center">
        <p className="px-2 border-r">Request a demo</p>
        <div className="py-2 flex items-center">
          <button className="p-2">Log in</button>
          <button className="py-1 px-2 bg-black text-white rounded flex items-center">
            <span>Get Notion free</span>
            <ArrowRight className="w-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
