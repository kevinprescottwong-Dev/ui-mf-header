import "./index.scss";
import React from "react";

export default function Header(props) {
  return (
    <header
      className="flex items-center justify-between 
    w-full 
    bg-blue-500 
    p-3 
    sticky top-0 
    bg-gradient-to-r from-indigo-500"
    >
      {props.title ?? "MF Header"}
      <div>
        <button
          className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg"
          onClick={console.log}
        >
          Login
        </button>
      </div>
    </header>
  );
}
