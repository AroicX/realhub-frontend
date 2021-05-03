import React from "react";

const List = ({ image,address, name }) => {
  return (
    <div className="font-inter">
      <div className="w-full h-80">
        <img className="w-full h-full" src={image} />
        <div className="flex flex-row mt-2 items-start">
          <div className="flex-1">
            <div>{name}</div>
            <div className="flex flex-row mt-2">
              <img src="/svg/location.svg" alt="*" />
              <div className="ml-2">{address}</div>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="flex items-start justify-start font-unna text-4xl mt-0 mr-2">
              5.0
            </div>
            <div className="h-8">
              <div className="flex flex-row">
                <img src="/svg/star.svg" alt="*" />
                <img src="/svg/star.svg" alt="*" />
                <img src="/svg/star.svg" alt="*" />
                <img src="/svg/star.svg" alt="*" />
                <img src="/svg/star.svg" alt="*" />
              </div>
              <div className="text-xs text-right">Ratings</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
