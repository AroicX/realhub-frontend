import Link from '@/components/link'
import React from 'react'

export default function StepCompleted() {
  return (
    <div className="flex items-center flex-col pt-16 pl-7 pr-7">
      <img src="/svg/done.svg" alt="*" />
      <div className="text-center unna text-2xl mt-8 mb-8">
        You are all set!
        <div>Give us 48hrs to Verify your listing</div>
      </div>
      <Link to="/listings">
        <button className="text-white bg-black ml-7 mr-7 w-full pt-5 pb-5 mb-24">
          Thank You!
        </button>
      </Link>
    </div>
  )
}
