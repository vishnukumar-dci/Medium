import React, { useState } from "react";
import { Link } from "react-router-dom";
import hero from "../assets/hero.webp";
import { usePopup } from "../context/PopupContext";
import { Footer } from "../component/Footer";

export const LandingPage = () => {
  const { setIsLogin,setIsRegister,setIsWrite} = usePopup();

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className="w-full fixed top-0 h-16 border-b flex items-center justify-between px-8 bg-[#F7F4ED]">
          <div className="flex items-center">
            <p className="h-8 w-auto text-3xl">Medium</p>
          </div>
          <nav className="flex items-center space-x-6 text-gray-700">
            <ul className="flex items-center space-x-6">
              <li>
                <Link to="/about" className="cursor-pointer">
                  Our story
                </Link>
              </li>
              <li>
                <Link to="/membership" className="cursor-pointer">
                  Membership
                </Link>
              </li>
              <li>
                <button
                  className="cursor-pointer "
                  onClick={(e) => setIsWrite(true)}
                >
                  Write
                </button>
              </li>
              <li>
                <button
                  className="cursor-pointer hover:text-black"
                  onClick={(e) => setIsRegister(true)}
                >
                  Sign in
                </button>
              </li>
            </ul>
            <button
              className="ml-4 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition cursor-pointer"
              onClick={(e) => setIsLogin(true)}
            >
              Get started
            </button>
          </nav>
        </header>

        <section className="flex flex-grow w-full bg-[#F7F4ED]">
          <div className="w-3/4 flex flex-col justify-center px-20">
            <h2 className="text-8xl leading-tight font-serif">
              Human <br />
              stories & ideas
            </h2>
            <h4 className="text-2xl mt-6 text-gray-700">
              A place to read, write, and deepen your understanding
            </h4>
            <button
              className="mt-8 px-6 py-3 bg-black text-white rounded-full text-xl hover:bg-gray-800 transition w-1/4 cursor-pointer"
              onClick={(e) => setIsLogin(true)}
            >
              Start Reading
            </button>
          </div>
          <div className="w-1/4">
            <img src={hero} alt="" />
          </div>
        </section>

        <div className="bg-[#F7F4ED]">
          <Footer />
        </div>
      </div>
    </>
  );
};
