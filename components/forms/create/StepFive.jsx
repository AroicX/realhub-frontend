import React, { useState } from 'react'
import Formheader from '@/components/dashboard/formheader'

export default function StepFive({
  currentStep,
  setStep,
  formdata,
  propagate,
}) {
  const back = () => {
    setStep(currentStep - 1)
  }

  const [data, setData] = useState({
    property_desc: formdata?.property_desc || null,
    policy_res: formdata?.policy_res || null,
  })

  const handleStep = () => {
    propagate(data)
    console.log(data)
    setStep(currentStep + 1)
  }
  return (
    <>
      <Formheader back={back} title="Other Property Information / Policy" />
      <div className="sm:pl-8 sm:pr-8 pl-4 pr-4">
        <div className="mt-8 text-lg w-70 mb-6 w-auto">
          Give us a brief discription of your property. We’d also love to know
          if you have any policy/restrictions for tenants.
        </div>
        <div className="mb-3 font-medium text-sm uppercase">
          Property discription
        </div>
        <input
          placeholder="Start typing here..."
          className="placeholder-primary pl-6 pr-6 mb-6 box-border pt-4 pb-32 sm:pt-5 border w-full mb-8 flex flex-row outline-none"
          value={data.property_desc}
          onChange={(e) => setData({ ...data, property_desc: e.target.value })}
        />
        <div className="mb-3 font-medium text-sm uppercase">
          Policy / restrictions
        </div>
        <input
          placeholder="Start typing here..."
          className="placeholder-primary pl-6 pr-6 mb-6 box-border pt-4 pb-32 sm:pt-5 border w-full mb-8 flex flex-row outline-none"
          value={data.policy_res}
          onChange={(e) => setData({ ...data, policy_res: e.target.value })}
        />
        <button
          onClick={() => handleStep()}
          className="w-full bg-black mb-14 sm:pl-10 pr-5 pl-5 pt-3 pb-3 sm:pr-10 sm:pb-5 sm:pt-5 text-white"
        >
          Continue
        </button>
      </div>
    </>
  )
}
