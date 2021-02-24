import React from "react";

export default function Header() {
  return (
    <div className="flex flex-row border-b border-primary pb-5 mb-11">
      <div className="flex flex-row items-center sm:flex-1 md:flex-none">
        <img src="/svg/logo.svg" alt="*" />
        <div className="ml-2.5 text-secondary font-semibold text-2xl font-body">
          RealHubAfrica
        </div>
      </div>
      <div className="md:flex hidden flex-row text-base justify-center flex-1">
        <div className="font-mono">Make a choice</div>
        <div className="lg:ml-14 lg:mr-14 ml-5 mr-5">View all listings</div>
        <div>Become a host</div>
      </div>

      <div className="hidden sm:flex flex-row justify-end items-center">
        <img src="/svg/profile.svg" alt="*" />
        <div className="ml-2.5">Account</div>
      </div>
    </div>
  );
}
