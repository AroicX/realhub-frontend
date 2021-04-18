import React from "react";
import SVG from "react-inlinesvg";

export default function Header({ text, back }) {
  return (
    <div className="flex justify-between mb-4 w-full">
      <div className="font-unna text-xl sm:text-2xl">{text}</div>
      <div className="flex cursor-pointer">
        <SVG src="/svg/left.svg"></SVG>
        <div onClick={back} className="ml-2" className="font-semibold ">
          Back
        </div>
      </div>
    </div>
  );
}
