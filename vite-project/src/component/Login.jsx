import React from "react";

export const Login = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-[#FFFFFF] space-x-6 mt-2 shadow-lg w-2/4 h-full relative rounded">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          ✕
        </button>
        <div className="flex flex-col items-center p-8">
          <h2 className="text-3xl mb-7">Welcome back.</h2>
          <button className="px-2 py-3 border rounded-4xl mb-5 ">
            Sign up with Google
          </button>
          <button className="px-2 py-3 border rounded-4xl mb-4 ">
            Sign up with Facebook
          </button>
          <button className="px-2 py-3 border rounded-4xl mb-4 ">
            Sign up with Apple
          </button>
          <button className="px-2 py-3 border rounded-4xl mb-4 ">
            Sign up with X
          </button>
          <button className="px-2 py-3 border rounded-4xl mb-4 ">
            Sign up with email
          </button>
          <h3 className="mt-8">
            No account? <button>Create one</button>
          </h3>
          <p className="mt-6 ">Forgot email or trouble signing in? Get help.</p>
          <p className="mt-6">
            By clicking "Sign in", you accept Medium's Terms of Service and
            Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};
