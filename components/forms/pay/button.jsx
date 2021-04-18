import React from "react";

export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-black text-white w-full sm:text-base text-xs py-5 mt-16 mb-4"
    >
      {text}
    </button>
  );
}
