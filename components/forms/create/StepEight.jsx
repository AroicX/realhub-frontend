import React, { useState } from 'react'
import Formheader from '@/components/dashboard/formheader'
import Toastr from 'toastr'

export default function StepEight({
  currentStep,
  setStep,
  formdata,
  propagate,
  handleSumbit,
}) {
  const back = () => {
    setStep(currentStep - 1)
  }
  const [data, setData] = useState({
    property_name: formdata?.property_name || "",
  })

  const handleStep = () => {
    propagate(data)
    setTimeout(() => {
      handleSumbit()
    }, 1000)
  }
  return (
    <>
      <Formheader title="Tag your listing" back={back} />
      <div className="sm:pl-8 sm:pr-8 pl-4 pr-4">
        <div className="mt-8 text-lg w-70 w-auto">
          Every listing needs its own name.
        </div>
        <div className="text-gray mt-0.5"> “Gabby’s Kaduna Home”</div>
        <div className="mb-3 font-medium text-sm uppercase mt-5">
          Your Listing TiTle
        </div>
        <input
          placeholder="Gabby’s Minimalistic Home"
          className="placeholder-secondary pl-6 pr-6 box-border pt-5 pb-5 sm:pt-5 border w-full mb-2 flex flex-row outline-none"
          value={data.property_name}
          onChange={(e) => setData({ ...data, property_name: e.target.value })}
        />
        <button
          onClick={() => handleStep()}
          className="mt-8 sm:mb-14 mb-7 w-full bg-black mb-14 sm:pl-10 pr-5 pl-5 pt-3 pb-3 sm:pr-10 sm:pb-5 sm:pt-5 text-white"
        >
          Submit and Save
        </button>
      </div>
    </>
  )
}
