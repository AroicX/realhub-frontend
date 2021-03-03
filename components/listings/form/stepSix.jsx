import React from 'react'
import Alert from '@/components/dashboard/alert'
import Formheader from '@/components/dashboard/formheader'

export default function StepSix({ currentStep, setStep }) {
  const back = () => {
    setStep(currentStep - 1)
  }
  return (
    <>
      <Formheader title="Location" back={back} />
      <div className="sm:pl-8 sm:pr-8 pl-4 pr-4">
        <div className="mt-8 text-lg w-70 mb-5 w-auto">
          Where is your property located? Please provide the exact address
        </div>
        <div className="mb-3 font-medium text-sm uppercase">Address </div>
        <input
          placeholder="No.4, Maha Close, Barnawa Kaduna"
          className="placeholder-secondary pl-6 pr-6 box-border pt-5 pb-5 sm:pt-5 border w-full mb-2 flex flex-row outline-none"
        />
        <Alert content="Full address would only be disclosed to guests who have booked." />
        <img className="sm:mt-20 mt-10" src="/png/map.png" alt="*" />
        <button
          onClick={() => setStep(currentStep + 1)}
          className="sm:mt-20 sm:mb-14 mt-10 mb-7 w-full bg-black mb-14 sm:pl-10 pr-5 pl-5 pt-3 pb-3 sm:pr-10 sm:pb-5 sm:pt-5 text-white"
        >
          Continue
        </button>
      </div>
    </>
  )
}
