import React from 'react'
import SVG from 'react-inlinesvg'
import Link from '../link'

export default function Empty({}) {
  return (
    <div className="flex flex-col items-center">
      <SVG
        src="/svg/house.svg "
        className="pt-16 my-5 cursor-pointer svg-sm"
      ></SVG>

      <div className="mt-10 unna text-lg mb-5">
        You do not have a home listed yet.
      </div>
      <Link
        to="/app/listings/create"
        className="font-semibold text-base text-white bg-black mt-3 p-3"
      >
        Add a New Listing
      </Link>
    </div>
  )
}
