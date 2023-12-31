// import React from 'react'
// import { ArrowRight } from "lucide-react";
import NotionLogo from "../assets/notionLogo.png";

const Navbar = () => {
  return (
    <div className="mx-2 lg:p-1 p-3 flex items-center text-gray-600 text-md w-screen">
      <div className="flex items-center space-x-1">
        <img src={NotionLogo} alt="" className="lg:w-8 w-9" />
        <h1 className="text-black font-semibold">Notion</h1>
      </div>
      <ul className="lg:ml-2 lg:mr-auto lg:flex lg:flex-row lg:visible hidden items-center space-x-5">
        <li>Product</li>
        <li>Download</li>
        <li>Solutions</li>
        <li>Resources</li>
        <li>Pricing</li>
      </ul>
      <div className="lg:flex items-center lg:visible hidden">
        <p className="px-3 border-r">Request a demo</p>
        <div className="p-2 flex items-center space-x-3 text-sm">
          <button className="p-2">Log in</button>
          <button className="py-1 px-3 bg-black text-white rounded flex items-center">
            <span>Get Notion free</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
