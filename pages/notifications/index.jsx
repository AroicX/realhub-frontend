import Nav from "@/components/nav/nav";
import React from "react";

const Notifications = () => {
  return (
    <div>
      <Nav custom={true} />
      <div className="flex justify-center items-center font-inter md:px-0 px-4">
        <div className="w-full md:w-2/4">
          <div className="flex flex-row h-20 items-center">
            <div className="font-unna text-2xl md:text-4xl mt-10 h-full">Notifications</div>
            <div className="flex flex-row items-center h-full ml-8 flex-1">
              <button className="bg-black text-white px-2">3 new</button>
            </div>
            <div className="text-sm text-light-gray">Clear all</div>
          </div>
          <div className="border w-full px-4 pb-10">
            <div className="flex flex-row items-end border-b py-4">
              <img className="w-10 h-10" src="/images/rha.png" alt="*" />
              <div className="ml-8 flex-1">
                <div className="mb-2">New houses available for rent</div>
                <div className="text-lighter-gray text-xs">5 min ago</div>
              </div>
              <div className="text-sm text-light-gray">Clear</div>
            </div>
            <div className="flex flex-row items-end border-b py-4">
              <img className="w-10 h-10" src="/images/rha.png" alt="*" />
              <div className="ml-8 flex-1">
                <div className="mb-2">New houses available for rent</div>
                <div className="text-lighter-gray text-xs">5 min ago</div>
              </div>
              <div className="text-sm text-light-gray">Clear</div>
            </div>
            <div className="flex flex-row items-end border-b py-4">
              <img className="w-10 h-10" src="/images/rha.png" alt="*" />
              <div className="ml-8 flex-1">
                <div className="mb-2">New houses available for rent</div>
                <div className="text-lighter-gray text-xs">5 min ago</div>
              </div>
              <div className="text-sm text-light-gray">Clear</div>
            </div>
            <div className="flex flex-row items-end border-b py-4">
              <img className="w-10 h-10" src="/images/rha.png" alt="*" />
              <div className="ml-8 flex-1">
                <div className="mb-2">New houses available for rent</div>
                <div className="text-lighter-gray text-xs">5 min ago</div>
              </div>
              <div className="text-sm text-light-gray">Clear</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
