import React from "react";
import SVG from "react-inlinesvg";
import Button from "../button";

import Layout from "../layout";

export default function Success() {
  return (
    <Layout>
      <SVG src="/svg/badge.svg"></SVG>
      <div className="font-unna text-center w-2/3 mt-6 text-2xl">
        Your payment has been completed and it is being held in our secure
        escrow until all parties have been satisfied
      </div>
      <Button text="Thank You! Return Home" />
    </Layout>
  );
}
