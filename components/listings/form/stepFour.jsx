import React from 'react'
import Formheader from '@/components/dashboard/formheader'

export default function StepFour({ currentStep, setStep }) {
  const back = () => {
    setStep(currentStep - 1)
  }
  return (
    <>
      <Formheader title="Tell Us More About Your Property" back={back} />
      <div className="sm:pl-8 sm:pr-8 pl-4 pr-4">
        <div className="mt-8 text-lg w-70 mb-5 w-auto">
          Just a few more details on your property and we will be all set.
        </div>
        <div className="mb-3 font-medium text-sm uppercase">
          Number of Bedrooms
        </div>
        <div className="mb-8">
          <div className="text-bright sm:pl-6 pl-3 pr-3 sm:pr-6 box-border pt-4 pb-4 sm:pt-5 sm:pb-5 border w-full mb-8 flex flex-row">
            <div className="flex-1 sm:text-lg text-xs">3 - Bedrooms</div>
            <img className="cursor-pointer" src="/svg/Dropdown.svg" alt="*" />
          </div>
        </div>
        <div className="mb-3 font-medium text-sm uppercase">
          Number of Bathrooms
        </div>
        <div className="mb-14">
          <div className="text-bright pl-3 pr-3 sm:pl-6 sm:pr-6 box-border pt-4 pb-4 sm:pt-5 sm:pb-5 border w-full mb-8 flex flex-row">
            <div className="flex-1 sm:text-lg text-xs">2 - Bathrooms</div>
            <img className="cursor-pointer" src="/svg/Dropdown.svg" alt="*" />
          </div>
          <div className="mb-3 font-medium text-sm uppercase">
            What Amenities Do you Have Avaliable?
          </div>
          <div className="mb-14">
            <div className="text-bright sm:pl-6 sm:pr-6 pl-3 pr-3 box-border pt-4 pb-4 sm:pt-5 sm:pb-5 border w-full mb-8 flex flex-row items-start">
              <div className="flex-1 flex flex-row flex-wrap">
                <div className="bg-gray pl-4 pr-4 rounded-2xl pt-2 pb-2 flex flex-row mr-4 mb-4">
                  <div className="mr-3">Gym</div>
                  <img src="/svg/cancel-sm.svg" alt="*" />
                </div>
                <div className="bg-gray pl-4 pr-4 rounded-2xl pt-2 pb-2 flex flex-row mr-4 mb-4">
                  <div className="mr-3">Concierge</div>
                  <img src="/svg/cancel-sm.svg" alt="*" />
                </div>
                <div className="bg-gray pl-4 pr-4 rounded-2xl pt-2 pb-2 flex flex-row mr-4">
                  <div className="mr-3">Pool</div>
                  <img src="/svg/cancel-sm.svg" alt="*" />
                </div>
              </div>
              <img className="cursor-pointer" src="/svg/Dropdown.svg" alt="*" />
            </div>
          </div>
          <button
            onClick={() => setStep(currentStep + 1)}
            className="w-full bg-black sm:pl-10 pr-5 pl-5 pt-3 pb-3 sm:pr-10 sm:pb-5 sm:pt-5 text-white"
          >
            Continue
          </button>
        </div>
      </div>
    </>
  )
}
