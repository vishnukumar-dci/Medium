import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
      <footer className="w-full fixed bottom-0 h-16 border  flex items-center justify-center">
        <nav className="flex items-center space-x-6 text-gray-500">
          <ul className="flex items-center  space-x-6">
            <li className="cursor-pointer ">Help</li>
            <li className="cursor-pointer ">Status</li>
            <li>
              <Link className="cursor-pointer " to="/about">
                About
              </Link>
            </li>
            <li>
              <Link to='/career' className="cursor-pointer ">Careers</Link>
            </li>
            <li>
              <button
                className="cursor-pointer"
                onClick={() => {
                  window.location.href = "mailto:developer.myspaces@gmail.com";
                }}
              >
                Press
              </button>
            </li>
            <li>
              <Link to='/blog' className="cursor-pointer ">Blog</Link>
            </li>
            <li>
              <Link to='/privacy' className="cursor-pointer ">Privacy</Link>
            </li>
            <li>
              <Link to='/rules' className="cursor-pointer ">Rules</Link>
            </li>
            <li>
              <Link to='/terms' className="cursor-pointer ">Terms</Link>
            </li>
            <li>
              <a
                className="cursor-pointer hover:text-black"
                href="https://speechify.com/medium/"
              >
                Text to speech
              </a>
            </li>
          </ul>
        </nav>
      </footer>
  );
};
