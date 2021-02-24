import React, { useState } from "react";
import Header from "@/components/dashboard/header";
import Stepone from "./stepone";
import StepThree from "./stepThree";
import StepFour from "./stepFour";
import StepTwo from "./stepTwo";
import Upload from "./upload";
import StepFive from "./stepFive";
import StepSix from "./stepSix";
import StepSeven from "./stepSeven";
import StepEight from "./stepEight";
import Item from "@/components/dashboard/item";
import Allset from "./allset";
import {
  stepEight,
  stepFive,
  stepFour,
  stepOne,
  stepSeven,
  stepSix,
  stepThree,
  stepTwo,
  success,
  upload,
} from "@/utils/steps";

export default function Add() {
  const [step, setStep] = useState(stepOne);

  return (
    <div className="container relative max-w-full h-screen overflow-auto">
      <div className="p-8 sm:p-16 pb-0 sm:pb-0">
        <Header />
        <div className="flex flex-col sm:flex-row sm:items-center pb-4 border-b border-secondary mb-9">
          <div className="unna text-2xl flex-1">Add a new listing</div>
        </div>
        <div className="flex 2xl:flex-row flex-row justify-center items-start mt-20">
          {step === stepEight && <Item />}
          {step === stepEight && (
            <div className="hidden 2xl:block mt-40">
              <hr className="border-dotted w-80 h-2 mr-5 ml-5 mt-30" />
            </div>
          )}

          <div className="flex items-center justify-center mb-10">
            <form className="bg-white md:w-90 w-full box-border pt-8 border border-dark">
              {step === stepOne && <Stepone setStep={setStep} />}
              {step === stepTwo && <StepTwo setStep={setStep} />}
              {step === stepThree && <StepThree setStep={setStep} />}
              {step === upload && <Upload setStep={setStep} />}
              {step === stepFour && <StepFour setStep={setStep} />}
              {step === stepFive && <StepFive setStep={setStep} />}
              {step === stepSix && <StepSix setStep={setStep} />}
              {step === stepSeven && <StepSeven setStep={setStep} />}
              {step === stepEight && <StepEight setStep={setStep} />}
              {step === success && <Allset setStep={setStep} />}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
