import React, { useState } from 'react'
import Alert from '@/components/dashboard/alert'
import DropDown from '@/components/forms/dropdown'

export default function Stepone({ currentStep, setStep, formdata, propagate }) {
  const [data, setData] = useState({
    listing_type: formdata?.listing_type || null,
    is_apartment: formdata?.is_apartment || null,
  })

  const handleSelected = (string) => {
    setData({ ...data, listing_type: string })
  }
  const handleStep = () => {
    propagate(data)
    setStep(currentStep + 1)
    // console.log(data)
  }

  return (
    <>
      <div className="unna sm:ml-8 ml-4 text-lg">Listing Details</div>
      <hr className="mt-5 border-light mb-8" />
      <div className="sm:ml-8 ml-4 text-dark mb-6">
        Select your type of listing.
      </div>
      <div className="sm:pl-8 pl-4 pr-4 sm:pr-8 mb-14">
        <DropDown
          placeholder={
            data.listing_type ? data.listing_type : 'Select A listing Type'
          }
          options={['Apartment', 'House', 'Coworking Space']}
          value={handleSelected}
        />

        <div className="text-lg mb-5">
          <div className="font-bold">Great!</div>
          <div>Is your apartment serviced?</div>
        </div>
        <div className="flex flex-row items-center mb-8">
          <input
            type="radio"
            name="is_apartment"
            className="w-5 h-5"
            onChange={() => setData({ ...data, is_apartment: 1 })}
            checked={data.is_apartment === 1 ? true : false}
          />
          <div className="ml-3.5 mr-8 text-lg">Yes</div>
          <input
            type="radio"
            name="is_apartment"
            className="w-5 h-5 mr-3.5"
            onChange={() => setData({ ...data, is_apartment: 2 })}
            checked={data.is_apartment === 2 ? true : false}
          />
          <div>No</div>
        </div>
        <Alert
          content="Service criteria - apartment must be fully serviced with at least, Water,
      24hrs Light, Cable TV, and Security."
        />
        <button
          onClick={() => handleStep()}
          className="w-full bg-black sm:pl-10 pr-5 pl-5 pt-3 pb-3 mt-7 sm:pr-10 sm:pb-5 sm:pt-5 text-white"
        >
          Continue
        </button>
      </div>
    </>
  )
}
