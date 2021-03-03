import React from 'react'
import Formheader from '@/components/dashboard/formheader'

export default function StepSeven({ currentStep, setStep }) {
  const back = () => {
    setStep(currentStep - 1)
  }
  return (
    <>
      <Formheader title="Lets talk Numbers" back={back} />
      <div className="sm:pl-8 sm:pr-8 pl-4 pr-4">
        <div className="mt-8 text-lg w-70 mb-5 w-auto">
          A beautiful home such as yours comes with a fair price. So how much
          will it be?
        </div>
        <div className="mb-3 font-medium text-sm uppercase">Price</div>
        <input
          placeholder="₦ 700,000.00"
          className="placeholder-secondary pl-6 pr-6 box-border pt-5 pb-5 sm:pt-5 border w-full mb-2 flex flex-row outline-none"
        />
        <div className="flex flex-row items-start">
          <div className="flex flex-row items-start text-sm font-medium flex-1 mr-2">
            <img className="mt-1 mr-2.5" src="/svg/attention.svg" alt="*" />
            <div>
              Our service charge is
              <span className="text-lightgreen ml-1">1.7%</span> of the rent
            </div>
          </div>
          <div className="text-lightgreen text-sm w-5/12 sm:flex-none flex justify-end align-end text-right">
            You recieve: ₦692,000.00
          </div>
        </div>
        <div className="mb-3 font-medium text-sm uppercase mt-6">Duration</div>
        <div className="text-bright sm:pl-6 sm:pr-6 pr-3 pl-3 box-border pt-4 pb-4 sm:pt-5 sm:pb-5 border w-full mb-8 flex flex-row">
          <div className="flex-1 sm:text-lg text-xs">Per Night</div>
          <img className="cursor-pointer" src="/svg/Dropdown.svg" alt="*" />
        </div>
        <button
          onClick={() => setStep(currentStep + 1)}
          className="mt-8 sm:mb-14 mb-7 w-full bg-black mb-14 sm:pl-10 pr-5 pl-5 pt-3 pb-3 sm:pr-10 sm:pb-5 sm:pt-5 text-white"
        >
          Continue
        </button>
      </div>
    </>
  )
}
