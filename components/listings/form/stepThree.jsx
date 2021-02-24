import React from "react";
import Formheader from "@/components/dashboard/formheader";
import { stepFour, stepTwo, upload } from "@/utils/steps";

export default function StepThree({ setStep }) {
  const back = () => {
    setStep(stepTwo);
  };
  return (
    <>
      <Formheader title="Upload Images" back={back} />
      <div className="sm:pl-8 sm:pr-8 pr-4 pl-4">
        <div className="mt-8 text-lg w-70 mb-10 w-auto">
          We’d love to see some images of your listing. You can upload as much
          as 30 Images.
        </div>
        <div className="w-full bg-ash sm:pt-20 pt-10 items-center flex flex-col">
          <img
            className="mb-5"
            src="/svg/gallery.svg"
            alt="*"
            width={24}
            height={24}
          />
          <div className="text-lg mb-10 text-center ml-2 mr-2">
            Drag and drop images or
          </div>
          <button
            onClick={() => setStep(upload)}
            className="bg-darkgreen text-white pt-3 pb-3 pl-8 pr-8 mb-10 sm:mb-20"
          >
            Click Here to upload from your device
          </button>
        </div>
        <button
          onClick={() => setStep(stepFour)}
          className="w-full bg-light sm:pl-10 pr-5 pl-5 pt-3 pb-3 sm:pr-10 sm:pb-5 sm:pt-5 text-white mt-14 mb-12"
        >
          Continue
        </button>
      </div>
    </>
  );
}
