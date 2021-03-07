import React from 'react'
import Formheader from '@/components/dashboard/formheader'
import DropDown from '@/components/forms/dropdown'
import Select from 'react-select'

let colourOptions = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

export default function StepFour({ currentStep, setStep }) {
  const back = () => {
    alert('going')
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
          <DropDown
            placeholder="Select Number of Bedrooms"
            options={['1 Bedroom', '2 Bedrooms', '3 Bedrooms']}
            value={(e) => console.log(e)}
          />
        </div>
        <div className="mb-3 font-medium text-sm uppercase">
          Number of Bathrooms
        </div>
        <div className="mb-14">
          <DropDown
            placeholder="Select Number of Bathrooms"
            options={['1 Bathroom', '2 Bathrooms', '3 Bathrooms']}
            value={(e) => console.log(e)}
          />
          <div className="mb-3 font-medium text-sm uppercase">
            What Amenities Do you Have Avaliable?
          </div>
          <div className="mb-14">
            <Select
              defaultValue={[colourOptions[2], colourOptions[3]]}
              isMulti
              name="amenities"
              options={colourOptions}
              className="basic-multi-select form-control"
              classNamePrefix="select"
              placeholder="Select Amenities"
            />
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
