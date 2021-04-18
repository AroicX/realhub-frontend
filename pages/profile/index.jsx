import React from "react";
import List from "@/components/listings/list";
import Nav from "@/components/nav/nav";

const Profile = () => {
  return (
    <div className="pb-20">
      <Nav custom={true} />
      <div className="md:px-6 px-4">
        <div className="font-unna text-2xl md:text-4xl mt-10">My Profile</div>
        <div className="mt-8 flex flex-row font-inter mt-10">
          <img src="/images/joy.png" className="w-24 h-24 rounded-full" />
          <div className="ml-4">
            <div className="text-lg font-bold">Joy Kenneth</div>
            <div className="text-dark-gray text-xs mt-1">
              Email: joykenneth@gmail.com
            </div>
            <div className="text-dark-gray text-xs mt-1">
              Tel: 0703-078-6526
            </div>
            <button className="bg-black text-white text-sm px-2 py-2 mt-3">
              Send a Message
            </button>
          </div>
        </div>
        <div className="text-2xl mt-4 mb-6 flex flex-row justify-between mt-10">
          <div>Listing</div>
          <button className="px-3 text-sm py-2 bg-black text-white">
            Add a New Listing
          </button>
        </div>
        <div className="grid grid:cols-none md:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-20">
          <List image="images/image2.png" />
          <List image="images/image4.png" />
          <List image="images/image3.png" />
          <List image="images/image2.png" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
