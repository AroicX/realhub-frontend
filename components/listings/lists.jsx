import React from "react";
import Header from "@/components/dashboard/header";
import Item from "@/components/dashboard/item";

export default function Lists() {
  return (
    <div className="container max-w-full p-10 sm:p-16">
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
      <div className="pt-12 flex flex-col items-start">
        <Item />
        <div className="flex flex-row mt-6">
          <button className="mr-6 font-semibold text-base text-white bg-black sm:pl-10 pr-5 pl-5 pt-2 pb-2 sm:pr-10 sm:pb-5 sm:pt-5">
            View Listing
          </button>
          <button className="font-semibold text-base bg-grey sm:pl-10 pr-5 pl-5 pt-2 pb-2 sm:pr-10 sm:pb-5 sm:pt-5">
            Edit Listing
          </button>
        </div>
      </div>
    </div>
  );
}
