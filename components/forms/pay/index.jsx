import React from "react";
import BreakDown from "./steps/breakdown";
import Card from "./steps/card";
import Success from "./steps/success";
import Terms from "./steps/terms";

export default function Pay(props) {
  const terms = props.currentStep === 1 ? true : false;
  const breakDown = props.currentStep === 2 ? true : false;
  const card = props.currentStep === 3 ? true : false;
  const success = props.currentStep === 4 ? true : false;
  return (
    <>
      {terms && <Terms back={props.back} next={props.next} />}
      {breakDown && <BreakDown back={props.back} next={props.next} />}
      {card && <Card back={props.back} next={props.next} />}
      {success && <Success back={props.back} next={props.next} />}
    </>
  );
}
