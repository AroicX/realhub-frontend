import React from "react";

export default function List({ list }) {
  return (
    <div className="max-w-mdhidden 2xl:flex 2xl:flex-col">
      <div className="relative">
        <img src="/png/image10.png" alt="*" />
        <div className="bg-white absolute bottom-0 right-0 pl-6 pr-11 pt-2 pb-2">
          <div className="text-xs text-lightdark">STARTING FROM</div>
          <div className="text-2xl font-semibold">₦{list.price}</div>
        </div>
      </div>
      <div className="font-semibold	text-lg mt-4">
        {list.property_name}
      </div>
      <div className="text-sm text-lightdark">
        {list.bedrooms} Bedrooms • {list.bathrooms} Bathrooms • Kitchen • Swimming Pool
      </div>
      <div className="flex flex-row mt-2">
        <img src="/svg/location.svg" alt="*" />
        <div className="ml-2 text-sm text-lightdark">{list.address}</div>
      </div>
    </div>
  );
}
