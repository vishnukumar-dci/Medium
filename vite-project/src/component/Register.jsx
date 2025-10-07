import React, { useState } from "react";

export const Register = ({ isOpen, onClose ,heading}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-[#FFFFFF] space-x-6 shadow-lg w-2/4 h-110 relative rounded">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          ✕
        </button>
        <div className="flex flex-col items-center p-8">
          {heading}
          <button className="px-2 py-3 border rounded-4xl mb-4 ">
            Sign up with Google
          </button>
          <button className="px-2 py-3 border rounded-4xl mb-4 ">
            Sign up with Facebook
          </button>
          <button className="px-2 py-3 border rounded-4xl mb-4 ">
            Sign up with email
          </button>
          <h3 className="mt-8">
            Already have an account? <button >Sign in</button>
          </h3>
          <p className="mt-6 ">
            By clicking "Sign up", you accept Medium's Terms of Service and
            Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};


