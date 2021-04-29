import React from "react";

export default function Item({name, price, bedrooms, bathrooms}) {
  return (
    <div className="max-w-mdhidden 2xl:flex 2xl:flex-col">
      <div className="relative">
        <img src="/png/image10.png" alt="*" />
        <div className="bg-white absolute bottom-0 right-0 pl-6 pr-11 pt-2 pb-2">
          <div className="text-xs text-lightdark">STARTING FROM</div>
          <div className="text-2xl font-semibold">₦700,000</div>
        </div>
      </div>
      <div className="font-semibold	text-lg mt-4">
        Chill Marble Home - Kaduna Nigeria
      </div>
      <div className="text-sm text-lightdark">
        5 Bedrooms • 3 Bathrooms • Kitchen • Swimming Pool
      </div>
      <div className="flex flex-row mt-2">
        <img src="/svg/location.svg" alt="*" />
        <div className="ml-2 text-sm text-lightdark">Barnawa, Kaduna</div>
      </div>
    </div>
  );
}


// import React from "react";

// export default function Item({name, price, bedrooms, bathrooms, address, image}) {
//   return (
//     <div className="max-w-mdhidden 2xl:flex 2xl:flex-col">
//       <div className="relative">
//         <img src={image} alt="*" />
//         <div className="bg-white absolute bottom-0 right-0 pl-6 pr-11 pt-2 pb-2">
//           <div className="text-xs text-lightdark">STARTING FROM</div>
//           <div className="text-2xl font-semibold">₦{price}</div>
//         </div>
//       </div>
//       <div className="font-semibold	text-lg mt-4">
//         {name}
//       </div>
//       <div className="text-sm text-lightdark">
//         {bedrooms} Bedrooms • {bathrooms} Bathrooms • Kitchen • Swimming Pool
//       </div>
//       <div className="flex flex-row mt-2">
//         <img src="/svg/location.svg" alt="*" />
//         <div className="ml-2 text-sm text-lightdark">{address}</div>
//       </div>
//     </div>
//   );
// }
