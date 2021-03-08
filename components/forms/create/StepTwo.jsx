import React, { useState } from 'react'
import Formheader from '@/components/dashboard/formheader'
import DropDown from '@/components/forms/dropdown'

export default function StepTwo({ currentStep, setStep, formdata, propagate }) {
  const [data, setData] = useState({
    lease_type: formdata?.lease_type || null,
  })

  const handleSelected = (string) => {
    setData({ ...data, lease_type: string })
  }
  const handleStep = () => {
    propagate(data)
    console.log(data)
    setStep(currentStep + 1)
  }

  return (
    <>
      <Formheader title="Lease Type" back={() => setStep(currentStep - 1)} />
      <div className="sm:mt-8 text-lg w-70 mb-7 sm:mb-12 w-auto sm:ml-8 ml-4 mr-4 sm:mr-8">
        Select a preferred lease term for your property.
      </div>

      <div className="sm:ml-8 mb-3 ml-4 text-lg ">Lease Type</div>
      <div className="sm:pl-8 pl-4 pr-4 sm:pr-8 mb-14">
        <DropDown
          placeholder={
            data.lease_type ? data.lease_type : 'Select A Lease Type'
          }
          options={['Rent', 'Short Lease']}
          value={handleSelected}
        />

        <button
          onClick={() => handleStep()}
          className="w-full bg-black sm:pl-10 pr-5 pl-5 pt-3 pb-3 sm:pr-10 sm:pb-5 sm:pt-5 text-white"
        >
          Continue
        </button>
      </div>
    </>
  )
}
