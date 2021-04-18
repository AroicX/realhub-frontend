import React from "react";

export default function Layout({ children }) {
  return (
    <div className="custom__input flex justify-center font-inter text-primary h-full p-4 lg:p-0 relative">
      <div className="lg:mx-0 w-full lg:w-2/4 pt-8 pb-4 border mt-4 px-8 mb-10 flex items-center flex-col">{children}</div>
    </div>
  );
}
