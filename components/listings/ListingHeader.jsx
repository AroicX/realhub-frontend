import React from 'react'
import SVG from 'react-inlinesvg'

export default function ListingHeader({}) {
  return (
    <>
      <div className="w-full p-2 mt-14 lg:mt-0">
        <div className="flex flex-col sm:flex-row sm:items-center p-4 border-b border-secondary mb-2">
          <div className="unna text-lg flex-1">Your listed properties</div>
          <button className="font-semibold text-base text-white bg-black mt-0 p-3 ">
            Add a New Listing
          </button>
        </div>
        {/*  */}
        <div className="flex flex-row border-secondary border-b-2 text-gray">
          <button className="p-2 border-b text-black font-semibold text-md">
            Properties
          </button>
          <button className="p-2 text-md">Tour Requests</button>
        </div>
        {/*  */}

        {/*  */}
        <div className="flex flex-col items-center">
          {/* <SVG
            src="/svg/house.svg "
            className="pt-16 my-5 cursor-pointer svg-sm"
          ></SVG> */}

          <div className="mt-10 unna text-lg mb-5">
            You do not have a home listed yet.
          </div>
          <button className="font-semibold text-base text-white bg-black mt-3 p-3">
            Add a New Listing
          </button>
        </div>
        {/*  */}
      </div>
    </>
  )
}
