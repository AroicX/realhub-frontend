import React, { useState } from 'react'

import Stepone from './stepOne'
import StepThree from './stepThree'
import StepFour from './stepFour'
import StepTwo from './stepTwo'
import StepFive from './stepFive'
import StepSix from './stepSix'
import StepSeven from './stepSeven'
import StepEight from './stepEight'
import Item from '@/components/dashboard/item'
import Allset from './allset'
import Layout from '@/components/layout/layout'

export default function AddListing() {
  const [step, setStep] = useState(1)

  return (
    <Layout>
      <div className="flex flex-col sm:flex-row sm:items-center p-4 border-b border-secondary mb-9">
        <div className="font--unna text-xl flex-1">Add a new listing</div>
      </div>
      <div className="flex 2xl:flex-row flex-row justify-center items-start mt-20">
        {step === 8 && <Item />}
        {step === 8 && (
          <div className="hidden 2xl:block mt-40">
            <hr className="border-dotted w-80 h-2 mr-5 ml-5 mt-30" />
          </div>
        )}

        <div className="flex items-center justify-center mb-10">
          <div className="bg-white md:w-90 w-full box-border pt-8 border border-black add-listing-form">
            {step === 1 && <Stepone setStep={setStep} currentStep={step} />}
            {step === 2 && <StepTwo setStep={setStep} currentStep={step} />}
            {step === 3 && <StepThree setStep={setStep} currentStep={step} />}
            {/* {step === 4 && <Upload setStep={setStep} currentStep={step} />} */}
            {step === 4 && <StepFour setStep={setStep} currentStep={step} />}
            {step === 5 && <StepFive setStep={setStep} currentStep={step} />}
            {step === 6 && <StepSix setStep={setStep} currentStep={step} />}
            {step === 7 && <StepSeven setStep={setStep} currentStep={step} />}
            {step === 8 && <StepEight setStep={setStep} currentStep={step} />}
            {step === 9 && <Allset setStep={setStep} currentStep={step} />}
          </div>
        </div>
      </div>
    </Layout>
  )
}
