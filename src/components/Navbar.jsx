// import React from 'react'
// import { ArrowRight } from "lucide-react";
import NotionLogo from "../assets/notionLogo.png";

const Navbar = () => {
  return (
    <div className="mx-2 p-1 flex items-center text-gray-600 text-md w-screen">
      <div className="flex items-center space-x-1">
        <img src={NotionLogo} alt="" className="w-8" />
        <h1 className="text-black font-semibold">Notion</h1>
      </div>
      <ul className="ml-5 mr-auto flex items-center space-x-5">
        <li>Product</li>
        <li>Download</li>
        <li>Solutions</li>
        <li>Resources</li>
        <li>Pricing</li>
      </ul>
      <div className="flex items-center">
        <p className="px-3 border-r">Request a demo</p>
        <div className="p-2 flex items-center space-x-3 text-sm">
          <button className="p-2">Log in</button>
          <button className="py-1 px-3 bg-black text-white rounded flex items-center">
            <span >Get Notion free</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
