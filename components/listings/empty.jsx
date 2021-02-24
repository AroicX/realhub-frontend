import React from "react";
import Header from "@/components/dashboard/header";

export default function Empty() {
  return (
    <div className="container max-w-full p-10 sm:p-16 h-screen overflow-auto">
      <Header />
      <div className="flex flex-col sm:flex-row sm:items-center pb-4 border-b border-secondary mb-9">
        <div className="unna text-2xl flex-1">Your listed properties</div>
        <button className="font-semibold text-base text-white bg-black mt-3 sm:mt-0 sm:pl-10 pr-5 pl-5 pt-2 pb-2 sm:pr-10 sm:pb-5 sm:pt-5">
          Add a New Listing
        </button>
      </div>
      <div className="flex flex-row border-secondary border-b-2 text-gray">
        <div className="pb-3.5 border-b pl-5 pr-5 text-black font-semibold text-lg">
          Properties
        </div>
        <div className="pb-3.5 pl-5 pr-5">Tour Requests</div>
      </div>
      <div className="pt-12 flex flex-col items-center">
        <div>
          <img src="/svg/house.svg" alt="*" />
        </div>
        <div className="mt-10 unna text-2xl mb-5">
          You do not have a home listed yet.
        </div>
        <button className="font-semibold text-base text-white bg-black mt-3 sm:mt-0 sm:pl-10 pr-5 pl-5 pt-2 pb-2 sm:pr-10 sm:pb-5 sm:pt-5">
          Add a New Listing
        </button>
      </div>
    </div>
  );
}
