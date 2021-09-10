import React, { useState } from "react";
import { useRouter } from "next/router";
import Nav from "@/components/nav/nav";
import Pay from "@/components/forms/pay";

export default function index() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const back = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      router.back();
    }
  };

  const next = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div>
      <Nav custom={true} />
      <div className="px-5">
        <div>
          <div className="font-unna text-2xl sm:text-3xl mt-10">
            Pay for property
          </div>
        </div>
        <hr className="mt-4 mb-4" />
      </div>

      <Pay currentStep={currentStep} back={back} next={next} />
    </div>
  );
}
