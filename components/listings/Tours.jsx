import React, { useState } from 'react'
import SVG from 'react-inlinesvg'
import DropDown from '../forms/dropdown'
import DropDownMenu from '../global/DropDownMenu'
import Link from '../link'

export default function Tours({}) {
  const [tours, setTours] = useState(null)

  return (
    <>
      {!tours ? (
        <div className="flex flex-col items-center">
          <SVG
            src="/svg/tours-calendar.svg"
            className="pt-16 my-5 cursor-pointer svg-sm"
          ></SVG>

          <div className="mt-10 unna text-lg mb-5">
            No one has booked a tour request yet.
          </div>
        </div>
      ) : (
        <div className="w-full p-5">
          <div className="w-44 flex flex-col">
            <span className="font-inter--light text-black font-12 my-2">
              SORT BY
            </span>

            <DropDown
              css={'p-0'}
              placeholder={'All'}
              options={['All', 'Rent', 'Lease']}
              value={(e) => console.log(e)}
            />
          </div>

          <div className="flex flex-col justify-between">
            <div className="relative w-full flex justify-between border border-gray p-5 py-4 pb-2 my-3">
              <div className="flex flex-col">
                <p>Gabby’s Minimalistic Home</p>
                <span className="font-inter--light text-black font-12 my-2">
                  No.4 Branawa, Kaduna, Nigeria
                </span>
              </div>
              <div className="flex flex-col">
                <p>Osamudiamen Imasuen</p>
                <span className="font-inter--light text-black font-12 my-2">
                  +234 817 294 8113, sirmudiadavid@gmail.com
                </span>
              </div>
              <div className="flex flex-col">
                <p>Feb 20th, 2021</p>
                <span className="font-inter--light text-black font-12 my-2">
                  10:00am
                </span>
              </div>
              <div className="flex flex-row">
                <button className="tour-status bg-green-300 font-bold mr-10">
                  Tour Completed
                </button>
                <DropDownMenu
                  menuname={
                    <SVG
                      src="/svg/dropdown-menu.svg"
                      className="pt-16 my-5 cursor-pointer svg-sm"
                    ></SVG>
                  }
                  cssClass="mt-8 absolute right-0 top-0"
                  list={[
                    'Reschedule tour date',
                    'Unmark tour completion',
                    'Cancel',
                  ]}
                />
              </div>
            </div>

            <div className="relative w-full flex justify-between border border-gray p-5 py-4 pb-2 my-3">
              <div className="flex flex-col">
                <p>Gabby’s Minimalistic Home</p>
                <span className="font-inter--light text-black font-12 my-2">
                  No.4 Branawa, Kaduna, Nigeria
                </span>
              </div>
              <div className="flex flex-col">
                <p>Osamudiamen Imasuen</p>
                <span className="font-inter--light text-black font-12 my-2">
                  +234 817 294 8113, sirmudiadavid@gmail.com
                </span>
              </div>
              <div className="flex flex-col">
                <p>Feb 20th, 2021</p>
                <span className="font-inter--light text-black font-12 my-2">
                  10:00am
                </span>
              </div>
              <div className="flex flex-row">
                <button className="tour-status bg-yellow-300 font-bold mr-10">
                  Tour rescheduled
                </button>
                <DropDownMenu
                  menuname={
                    <SVG
                      src="/svg/dropdown-menu.svg"
                      className="pt-16 my-5 cursor-pointer svg-sm"
                    ></SVG>
                  }
                  cssClass="mt-8 absolute right-0 top-0"
                  list={[
                    'Reschedule tour date',
                    'Unmark tour completion',
                    'Cancel',
                  ]}
                />
              </div>
            </div>

            <div className="relative w-full flex justify-between border border-gray p-5 py-4 pb-2 my-3">
              <div className="flex flex-col">
                <p>Gabby’s Minimalistic Home</p>
                <span className="font-inter--light text-black font-12 my-2">
                  No.4 Branawa, Kaduna, Nigeria
                </span>
              </div>
              <div className="flex flex-col">
                <p>Osamudiamen Imasuen</p>
                <span className="font-inter--light text-black font-12 my-2">
                  +234 817 294 8113, sirmudiadavid@gmail.com
                </span>
              </div>
              <div className="flex flex-col">
                <p>Feb 20th, 2021</p>
                <span className="font-inter--light text-black font-12 my-2">
                  10:00am
                </span>
              </div>
              <div className="flex flex-row">
                <button className="tour-status bg-green-300 font-bold mr-10">
                  Tour Completed
                </button>
                <DropDownMenu
                  menuname={
                    <SVG
                      src="/svg/dropdown-menu.svg"
                      className="pt-16 my-5 cursor-pointer svg-sm"
                    ></SVG>
                  }
                  cssClass="mt-8 absolute right-0 top-0"
                  list={[
                    'Reschedule tour date',
                    'Unmark tour completion',
                    'Cancel',
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
