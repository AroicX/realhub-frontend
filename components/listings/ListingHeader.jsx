import React from 'react'
import Link from '../link'

export default function ListingHeader({ selectedTab, handleTab }) {
  return (
    <>
      <div className="w-full p-2 mt-14 lg:mt-0">
        <div className="flex flex-col sm:flex-row sm:items-center p-4 border-b border-secondary mb-2">
          <div className="unna text-lg flex-1">Your listed properties</div>
          <Link
            to="/app/listings/create"
            className="font-semibold text-base text-white bg-black mt-0 p-3 "
          >
            Add a New Listing
          </Link>
        </div>
        {/*  */}
        <div className="flex flex-row border-secondary border-b-2 text-gray mt-5 ">
          <button
            className={`p-2 text-black  text-md transition-all ${
              selectedTab === 'property-list'
                ? 'font-semibold listings-tab-active'
                : ''
            }`}
            onClick={() => handleTab('property-list')}
          >
            Properties
          </button>
          <button
            className={`p-2 text-black mx-5 text-md transition-all${
              selectedTab === 'tours' ? 'font-semibold listings-tab-active' : ''
            }`}
            onClick={() => handleTab('tours')}
          >
            Tour Requests
          </button>
          <button
            className={`p-2 text-black mx-5 text-md transition-all${
              selectedTab === 'payments'
                ? 'font-semibold listings-tab-active'
                : ''
            }`}
            onClick={() => handleTab('payments')}
          >
            Payments
          </button>
        </div>
        {/*  */}
      </div>
    </>
  )
}
