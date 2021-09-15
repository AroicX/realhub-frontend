import React, { useState } from 'react'
import Formheader from '@/components/dashboard/formheader'
import DropDown from '@/components/forms/dropdown'
import Select from 'react-select'

let colourOptions = [
  { value: 'Gym', label: 'Gym' },
  { value: 'Concierge', label: 'Concierge' },
  { value: 'Pool', label: 'Pool' },
  { value: 'Outdoor', label: 'Outdoor' },
  { value: `CCTV Camera's`, label: `CCTV Camera's` },
]

export default function StepFour({
  currentStep,
  setStep,
  formdata,
  propagate,
}) {
  const [data, setData] = useState({
    bedrooms: formdata?.bedrooms || null,
    bathrooms: formdata?.bathrooms || null,
    amenities: formdata?.amenities || colourOptions,
  })

  const back = () => {
    setStep(currentStep - 1)
  }

  const handleSelected = (e, param) => {
    param === 'bedrooms' ? setData({ ...data, bedrooms: e }) : false
    param === 'bathrooms' ? setData({ ...data, bathrooms: e }) : false
  }

  const handleStep = () => {
    data.amenities = JSON.stringify(data.amenities)
    propagate(data)
    console.log(data)
    setStep(currentStep + 1)
  }

  return (
    <>
      <Formheader title="Just a few more details on your property and we will be all set" back={back} />
      <div className="sm:pl-8 sm:pr-8 pl-4 pr-4">
        <div className="mb-3 font-medium text-sm uppercase">
          Bedrooms
        </div>
        <div className="mb-8">
          <DropDown
            placeholder={
              data.bedrooms ? data.bedrooms : 'Select Number of Bedrooms'
            }
            options={['1 ', '2 ', '3', '4', '5', '6', '7', '8', '9', '10']}
            value={(e) => handleSelected(e, 'bedrooms')}
          />
        </div>
        <div className="mb-3 font-medium text-sm uppercase">
          Number of Bathrooms
        </div>
        <div className="mb-14">
          <DropDown
            placeholder={
              data.bathrooms ? data.bathrooms : 'Select Number of Bathrooms'
            }
            options={['1 ', '2 ', '3', '4', '5', '6', '7', '8', '9', '10']}
            value={(e) => handleSelected(e, 'bathrooms')}
          />
          <div className="mb-3 font-medium text-sm uppercase">
            What Amenities Do you Have Avaliable?
          </div>
          <div className="mb-14">
            <Select
              defaultValue={[colourOptions[2], colourOptions[3]]}
              isMulti
              name="amenities"
              options={data.amenities}
              className="basic-multi-select form-control"
              classNamePrefix="select"
              placeholder="Select Amenities"
              onChange={(e) => console.log(e)}
            />
          </div>
          <button
            onClick={() => handleStep()}
            className="w-full bg-black sm:pl-10 pr-5 pl-5 pt-3 pb-3 sm:pr-10 sm:pb-5 sm:pt-5 text-white"
          >
            Continue
          </button>
        </div>
      </div>
    </>
  )
}
