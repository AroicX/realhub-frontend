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
    property_desc: formdata?.property_desc || "",
    policy_res: formdata?.policy_res || "",
  })

  const handleStep = () => {
    propagate(data)
    console.log(data)
    setStep(currentStep + 1)
  }
  return (
    <>
      <Formheader back={back} title="Please give us a brief description of your property and any policies or restrictions for future guests" />
      <div className="sm:pl-8 sm:pr-8 pl-4 pr-4">
        <div className="mb-3 font-medium text-sm uppercase">
          Property discription
        </div>
        <textarea
          placeholder="Start typing here..."
          className="placeholder-primary pl-6 pr-6 mb-6 box-border pt-4 pb-32 sm:pt-5 border w-full mb-8 flex flex-row outline-none"
          value={data.property_desc}
          onChange={(e) => setData({ ...data, property_desc: e.target.value })}
        >
          </textarea>
        <div className="mb-3 font-medium text-sm uppercase">
          Policy / restrictions
        </div>
        <textarea
          placeholder="Start typing here..."
          className="placeholder-primary pl-6 pr-6 mb-6 box-border pt-4 pb-32 sm:pt-5 border w-full mb-8 flex flex-row outline-none"
          value={data.policy_res}
          onChange={(e) => setData({ ...data, policy_res: e.target.value })}
        >
          </textarea>
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
