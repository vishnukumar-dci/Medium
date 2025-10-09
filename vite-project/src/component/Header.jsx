import React, { useState } from "react";
import { usePopup } from "../context/PopupContext";
import profile from "../assets/profilelogo.png";

export const Header = () => {
  const { setIsLogin, setIsRegister, setIsWrite } = usePopup();
  

  return (
    <header className="w-full h-16 flex items-center justify-between px-8 bg-white border-b border-gray-200">
      <div className="flex items-center gap-6">
        <p className="text-3xl font-serif">Medium</p>

        <div className="relative flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="absolute left-3 w-5 h-5 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-1 rounded-full text-sm w-56 focus:outline-none "
          />
        </div>
      </div>

      <nav className="flex items-center space-x-4 text-gray-700">
        <button
          onClick={() => setIsWrite(true)}
          className="flex items-center gap-1 text-sm hover:text-black transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
          Write
        </button>

        <button
          onClick={() => setIsLogin(true)}
          className="px-4 py-1 bg-green-700 text-white rounded-full text-sm font-medium hover:bg-green-800 transition"
        >
          Sign up
        </button>

        <button
          onClick={() => setIsRegister(true)}
          className="px-4 py-1 rounded-full text-sm hover:bg-gray-100 transition"
        >
          Sign in
        </button>

        <button className="w-10 h-10 rounded-full overflow-hidden border border-gray-300 focus:ring bg-black">
          <img
            src={profile}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </button>
      </nav>
    </header>
  );
};

const Profile = () =>{
  return(
    <div>
      Hello
    </div>
  )
}