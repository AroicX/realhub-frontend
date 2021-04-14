import React from 'react'
import SVG from 'react-inlinesvg'
import Link from '../link'

export default function Tours({}) {
  return (
    <div className="flex flex-col items-center">
      <SVG
        src="/svg/tours-calendar.svg"
        className="pt-16 my-5 cursor-pointer svg-sm"
      ></SVG>

      <div className="mt-10 unna text-lg mb-5">
        No one has booked a tour request yet.
      </div>
    </div>
  )
}
