import React from 'react'
import SVG from 'react-inlinesvg'

export default function ListingHeader({}) {
  return (
    <>
      <div className="w-full p-2 ">
        <div className="flex flex-col sm:flex-row sm:items-center pb-4 border-b border-secondary mb-2">
          <div className="unna text-lg flex-1">Your listed properties</div>
          <button className="font-semibold text-base text-white bg-black mt-0 p-3 ">
            Add a New Listing
          </button>
        </div>
        <div className="flex flex-row border-secondary border-b-2 text-gray">
          <button className="p-2 border-b text-black font-semibold text-md">
            Properties
          </button>
          <button className="p-2 text-md">Tour Requests</button>
        </div>
        <div className="pt-12 flex flex-col items-center">
          <div>
            <SVG
              src="/svg/house.svg"
              className="max-h-50 cursor-pointer"
              height="350px"
            ></SVG>
          </div>
          <div className="mt-10 unna text-2xl mb-5">
            You do not have a home listed yet.
          </div>
          <button className="font-semibold text-base text-white bg-black mt-3 p-3">
            Add a New Listing
          </button>
        </div>
      </div>
    </>
  )
}