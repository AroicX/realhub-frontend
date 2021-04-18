import React from "react";
import SVG from "react-inlinesvg";
import Button from "../button";
import Header from "../header";
import Layout from "../layout";

export default function Card() {
  const back = () => {
    // console.log("clicked");
  };
  const onClick = () => {};
  return (
    <Layout>
      <Header text="Pay with card" back={back} />
      <hr className="w-full" />
      <div className="font-medium text-sm uppercase mt-4 w-full">
        <div className="mb-6">
          <div className="mb-3">Name on card</div>
          <input
            className="w-full md:px-5 md:py-6 px-3 py-4"
            placeholder="Osamudiamen Imasuen"
          />
        </div>
        <div className="mb-6">
          <div className="mb-3">Card Number</div>
          <input
            className="w-full md:px-5 md:py-6 px-3 py-4"
            placeholder="5399 4823 4299 9421 4992"
          />
        </div>

        <div className="flex md:flex-row flex-col">
          <div className="md:mr-5 md:mb-0 mb-6">
            <div className="mb-3">EXP</div>
            <input
              className="w-full md:px-5 md:py-6 px-3 py-4"
              placeholder="MM/YY"
            />
          </div>
          <div>
            <div className="mb-3">CVV</div>
            <input
              className="w-full md:px-5 md:py-6 px-3 py-4"
              placeholder="---"
            />
          </div>
        </div>
      </div>
      <Button text="Pay" onClick={onClick} />
      <div className="absolute -bottom-12">
        <div className="bg-light-green flex flex-row mb-8 rounded-xl px-1 flex sm:text-base text-xs px-2 py-1 items-center">
          <SVG src="/svg/badge-green.svg"></SVG>
          <div> Secured by Payment Platform</div>
        </div>
      </div>
    </Layout>
  );
}
