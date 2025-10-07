import React, { createContext, useContext, useState } from "react";
import { Login } from "../component/Login";
import { Register } from "../component/Register";

const PopupContext = createContext();

export const usePopup = () => useContext(PopupContext);

export const PopupProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [isWrite, setIsWrite] = useState(false);

  return (
    <PopupContext.Provider value={{ setIsLogin, setIsRegister, setIsWrite }}>
      {children}

      <Register
        isOpen={isLogin}
        onClose={() => setIsLogin(false)}
        heading={<h2 className="text-4xl mb-6">Join Medium.</h2>}
      />

      <Register
        isOpen={isWrite}
        onClose={() => setIsWrite(false)}
        heading={
          <h2 className="text-2xl mb-6">Create an account to start writing.</h2>
        }
      />

      <Login isOpen={isRegister} onClose={() => setIsRegister(false)} />
    </PopupContext.Provider>
  );
};
