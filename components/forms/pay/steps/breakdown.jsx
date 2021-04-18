import React from "react";
import Button from "../button";
import Header from "../header";
import Layout from "../layout";

export default function BreakDown() {
  const onClick = () => {};
  return (
    <Layout>
      <Header text="Price breakdown" />
      <hr className="w-full" />
      <div className="font-medium mt-4 w-full">
        Here is a breakdown of what you’ll be paying for:
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 justify-between items-center mt-10 gap-y-14 text-lg md:text-2xl font-light text-primary">
        <div>Price (1 Night)</div>
        <div className="hidden md:block border-b border-dotted h-0"></div>
        <div className="text-right">₦70,000</div>
        <div>Service Charge</div>
        <div className="hidden md:block border-b border-dotted h-0"></div>
        <div className="text-right">₦9,000</div>
      </div>
      <hr className="mt-16 w-full" />

      <div className="w-full flex justify-between text-2xl font-medium mt-6">
        <div>Total</div>
        <div>₦79,000</div>
      </div>

      <Button text="Make Payment" onClick={onClick} />
    </Layout>
  );
}
