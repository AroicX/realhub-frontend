import React from 'react'
import Formheader from '@/components/forms/create/node_modules/@/components/dashboard/formheader'

export default function Upload({ currentStep, setStep }) {
  return (
    <>
      <Formheader title="Upload Images" />
      <div className="sm:pl-8 sm:pr-8 pl-4 pr-4">
        <div className="mt-8 font-10 text-gray-600 max-w-70 mb-10">
          We’d love to see some images of <br /> your listing. You can upload as
          much as 30 Images.
        </div>

        <div className="grid md:grid-cols-3 justify-center gap-x-5 gap-y-8">
          <div className="relative maxh-80">
            <img src="/png/image1.png" alt="*" />
            <img
              className="absolute top-0 right-0"
              src="/svg/cancel.svg"
              alt="*"
            />
          </div>
          <div className="relative maxh-80">
            <img src="/png/image2.png" alt="*" />
            <img
              className="absolute top-0 right-0"
              src="/svg/cancel.svg"
              alt="*"
            />
          </div>
          <div className="relative maxh-80">
            <img src="/png/image3.png" alt="*" />
            <img
              className="absolute top-0 right-0"
              src="/svg/cancel.svg"
              alt="*"
            />
          </div>
          <div className="relative maxh-80">
            <img src="/png/image4.png" alt="*" />
            <img
              className="absolute top-0 right-0"
              src="/svg/cancel.svg"
              alt="*"
            />
          </div>
          <div className="relative maxh-80">
            <img src="/png/image5.png" alt="*" />
            <img
              className="absolute top-0 right-0"
              src="/svg/cancel.svg"
              alt="*"
            />
          </div>
          <div className="relative maxh-80">
            <img src="/png/image6.png" alt="*" />
            <img
              className="absolute top-0 right-0"
              src="/svg/cancel.svg"
              alt="*"
            />
          </div>
          <div className="relative maxh-80">
            <img src="/png/image7.png" alt="*" />
            <img
              className="absolute top-0 right-0"
              src="/svg/cancel.svg"
              alt="*"
            />
          </div>
          <div className="relative maxh-80">
            <img src="/png/image8.png" alt="*" />
            <img
              className="absolute top-0 right-0"
              src="/svg/cancel.svg"
              alt="*"
            />
          </div>
          <div className="relative maxh-80">
            <img src="/png/image9.png" alt="*" />
            <img
              className="absolute top-0 right-0"
              src="/svg/cancel.svg"
              alt="*"
            />
          </div>
        </div>
      
      
      
        <div className="w-full bg-ash pt-7 items-center flex flex-col mt-12">
          <img
            className="mb-5"
            src="/svg/gallery.svg"
            alt="*"
            width={24}
            height={24}
          />
          <div className="text-lg mb-6"> Add more images</div>
        </div>
        <button
          onClick={() => setStep(currentStep + 1)}
          className="w-full bg-black sm:pl-10 pr-5 pl-5 pt-3 pb-3 sm:pr-10 sm:pb-5 sm:pt-5 text-white mt-8 mb-12"
        >
          Continue
        </button>
      </div>
    </>
  )
}
