import React, { useState } from 'react'
import SVG from 'react-inlinesvg'
import DropDown from '../forms/dropdown'
import DropDownMenu from '../global/DropDownMenu'
import Link from '../link'

export default function ListingPayment({}) {
  const [payments, setPayments] = useState(null)

  return (
    <>
      <div className="w-full p-5">
        <div className="relative flex justify-between">
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
          <div className="absolute top-7 right-0 px-4 flex bg-cream-md">
            <div
              className="flex flex-col p-2 mx-5"
              style={{ height: '20px !important' }}
            >
              <p className="font-inter--light text-black font-12 my-1">
                Total Amount Made
              </p>
              <span className="font-inter--normal text-black font-16 ">
                ₦14,000,000.00
              </span>
            </div>
            <div
              className="flex flex-col p-2 mx-5"
              style={{ height: '20px !important' }}
            >
              <p className="font-inter--light text-black font-12 my-1">
                Total Amount Withdrawn
              </p>
              <span className="font-inter--normal text-black font-16 ">
                ₦8,000,000.00
              </span>
            </div>
            <DropDownMenu
              menuname={
                <SVG
                  src="/svg/dropdown-menu.svg"
                  className="pt-16 my-5 cursor-pointer svg-sm"
                ></SVG>
              }
              cssClass="mt-8 absolute right-0 top-0"
              list={['Withdraw']}
            />
          </div>
        </div>

        <div className="flex flex-col justify-evenly">
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
              <p>Feb 20th, 2021 - Feb 20th, 2022</p>
              <span className="font-inter--light text-black font-12 my-2">
                1 Year
              </span>
            </div>

            <div className="flex flex-row">
              <button className="tour-status bg-green-300 font-bold mr-10">
                Rent
              </button>
            </div>
            <div className="flex flex-col">
              <p className="font-bold my-3">₦700,000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
