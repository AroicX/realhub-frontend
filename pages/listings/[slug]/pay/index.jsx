import React from "react";
import Nav from "@/components/nav/nav";
import Pay from "@/components/forms/pay";

export default function index() {
  return (
    <div>
      <Nav custom={true} />
      <div className="px-5">
        <div>
          <div className="font-unna text-2xl sm:text-3xl mt-10">Pay for property</div>
        </div>
        <hr className="mt-4 mb-4" />
      </div>

      <Pay />
    </div>
  );
}
