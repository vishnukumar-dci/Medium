import React, { useState } from "react";
import { Link } from "react-router-dom";
import hero from "../assets/hero.webp";
import { usePopup } from "../context/PopupContext";

export const LandingPage = () => {
  const { setIsLogin,setIsRegister,setIsWrite} = usePopup();

  return (
    <>
      <header className="w-full h-16 border-b flex items-center justify-between px-8 bg-[#F7F4ED]">
        <div className="flex items-center">
          <p className="h-8 w-auto text-3xl">Medium</p>
        </div>
        <nav className="flex items-center space-x-6 text-gray-700">
          <ul className="flex items-center space-x-6">
            <li className="cursor-pointer hover:text-black">
              <Link to="/about">Our story</Link>
            </li>
            <li className="cursor-pointer hover:text-black">Membership</li>
            <li className="cursor-pointer hover:text-black">
              <button onClick={(e) => setIsWrite(true)}>Write</button>
            </li>
            <li className="cursor-pointer hover:text-black">
              <button onClick={(e) => setIsRegister(true)}>Sign in</button>
            </li>
          </ul>
          <button
            className="ml-4 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
            onClick={(e) => setIsLogin(true)}
          >
            Get started
          </button>
        </nav>
      </header>

      <section className="flex w-full h-124 bg-[#F7F4ED]">
        <div className="w-3/4 flex flex-col justify-center px-20">
          <h2 className="text-8xl leading-tight font-serif">
            Human <br />
            stories & ideas
          </h2>
          <h4 className="text-2xl mt-6 text-gray-700">
            A place to read, write, and deepen your understanding
          </h4>
          <button
            className="mt-8 px-6 py-3 bg-black text-white rounded-full text-xl hover:bg-gray-800 transition w-1/4"
            onClick={(e) => setIsLogin(true)}
          >
            Start Reading
          </button>
        </div>
        <div className="w-1/4">
          <img src={hero} alt="" />
        </div>
      </section>

      <footer className="w-full h-16 border flex items-center justify-center bg-[#F7F4ED]">
        <nav className="flex items-center space-x-6 text-gray-500">
          <ul className="flex items-center  space-x-6">
            <li className="cursor-pointer hover:text-black">Help</li>
            <li className="cursor-pointer hover:text-black">Status</li>
            <li className="cursor-pointer hover:text-black">
              <Link to='/about'>About</Link>
            </li>
            <li className="cursor-pointer hover:text-black">Careers</li>
            <li className="cursor-pointer hover:text-black">Press</li>
            <li className="cursor-pointer hover:text-black">Blog</li>
            <li className="cursor-pointer hover:text-black">Privacy</li>
            <li className="cursor-pointer hover:text-black">Rules</li>
            <li className="cursor-pointer hover:text-black">Terms</li>
            <li className="cursor-pointer hover:text-black">Text to speech</li>
          </ul>
        </nav>
      </footer>
    </>
  );
};
