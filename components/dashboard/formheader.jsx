import React from 'react'

export default function Formheader({ title, back }) {
  return (
    <>
      <div className="flex flex-row sm:pr-8 sm:pl-8 pl-4 pr-4 items-start">
        <div className="font-unna text-lg flex-1">{title}</div>
        <div className="flex flex-row items-center mt-1 cursor-pointer">
          <img src="/svg/left.svg" alt="*" />
          <div onClick={back}>Back</div>
        </div>
      </div>
      <hr className="mt-5 border-black mb-8" />
    </>
  )
}
