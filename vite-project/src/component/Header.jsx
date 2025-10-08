import React from "react";

export const Header = () => {
  return (
    <header className="w-full h-16 border-b flex items-center justify-between px-8 bg-[#FFFFFF]">
      <div className="flex items-center">
        <p className="h-8 w-auto text-3xl">Medium</p>
        <div>
            <input type="text" placeholder="Search" className=""/>
        </div>
      </div>
      <nav className="flex items-center space-x-6 text-gray-700">
        <button className="px-4 py-2 bg-[#156D12] text-white rounded-full cursor-pointer">
          Sign up
        </button>
        <button className="px-4 py-2 rounded-full  cursor-pointer">
          Sign in
        </button>
      </nav>
    </header>
  );
};
