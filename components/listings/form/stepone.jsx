import React, { useState } from "react";
import Alert from "@/components/dashboard/alert";
import { stepTwo } from "@/utils/steps";

export default function Stepone({ setStep }) {
  const [drop, setDrop] = useState(false);
  return (
    <>
      <div className="unna sm:ml-8 ml-4 text-2xl">Listing Details</div>
      <hr className="mt-5 border-light mb-8" />
      <div className="sm:ml-8 ml-4 text-dark mb-6">
        Select your type of listing.
      </div>
      <div className="sm:pl-8 pl-4 pr-4 sm:pr-8 mb-14">
        <div className="relative text-bright sm:pl-6 sm:pr-6 pl-3 pr-3 box-border pt-4 pb-4 sm:pt-5 sm:pb-5 border w-full mb-8 flex flex-row">
          <div
            onClick={() => setDrop(!drop)}
            className="flex-1 sm:text-lg text-xs cursor-pointer"
          >
            Select A listing Type
          </div>
          <img
            className="cursor-pointer"
            src="/svg/Dropdown.svg"
            alt="*"
          />
          {drop && (
            <div className="absolute left-0 top-18 bg-white w-full border border-gray">
              <div
                onClick={() => setDrop(false)}
                className="pt-5 pb-5 pl-6 border-b border-gray cursor-pointer"
              >
                Apartment
              </div>
              <div
                onClick={() => setDrop(false)}
                className="pt-5 pb-5 pl-6 border-b border-gray cursor-pointer"
              >
                House
              </div>
              <div className="pt-5 pb-5 pl-6 cursor-pointer">
                Coworking Space
              </div>
            </div>
          )}
        </div>
        <div className="text-lg mb-5">
          <div className="font-bold">Great!</div>
          <div>Is your apartment serviced?</div>
        </div>
        <div className="flex flex-row items-center mb-8">
          <input type="radio" className="w-5 h-5" />
          <div className="ml-3.5 mr-8 text-lg">Yes</div>
          <input type="radio" className="w-5 h-5 mr-3.5" />
          <div>No</div>
        </div>
        <Alert
          content="Service criteria - apartment must be fully serviced with at least, Water,
      24hrs Light, Cable TV, and Security."
        />
        <button
          onClick={() => setStep(stepTwo)}
          className="w-full bg-light sm:pl-10 pr-5 pl-5 pt-3 pb-3 mt-7 sm:pr-10 sm:pb-5 sm:pt-5 text-white"
        >
          Continue
        </button>
      </div>
    </>
  );
}
