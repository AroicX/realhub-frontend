import React, { useState } from "react";
import Formheader from "@/components/dashboard/formheader";
import { stepOne, stepThree } from "@/utils/steps";

export default function StepTwo({ setStep }) {
  const [drop, setDrop] = useState(false);
  const back = () => {
    setStep(stepOne);
  };
  return (
    <>
      <Formheader title="Lease Type" back={back} />
      <div className="sm:mt-8 text-lg w-70 mb-7 sm:mb-12 w-auto sm:ml-8 ml-4 mr-4 sm:mr-8">
        Select a preferred lease term for your property.
      </div>

      <div className="sm:ml-8 mb-3 ml-4 font-medium text-sm">LEASE TYPE</div>
      <div className="sm:pl-8 pl-4 pr-4 sm:pr-8 mb-14">
        <div
          onClick={() => setDrop(!drop)}
          className="cursor-pointer relative text-bright sm:pl-6 sm:pr-6 pr-3 pl-3 box-border pt-4 pb-4 sm:pt-5 sm:pb-5 border w-full mb-8 flex flex-row"
        >
          <div className="flex-1 sm:text-lg text-xs">Select</div>
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
                Short Lease
              </div>
              <div
                onClick={() => setDrop(false)}
                className="pt-5 pb-5 pl-6 border-b border-gray cursor-pointer"
              >
                Rent
              </div>
            </div>
          )}
        </div>
        <button
          onClick={() => setStep(stepThree)}
          className="w-full bg-light sm:pl-10 pr-5 pl-5 pt-3 pb-3 sm:pr-10 sm:pb-5 sm:pt-5 text-white"
        >
          Continue
        </button>
      </div>
    </>
  );
}
