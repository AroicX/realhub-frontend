import React, { useState } from "react";
import SVG from "react-inlinesvg";
import Button from "../button";
import Header from "../header";
import Layout from "../layout";

export default function Card(props) {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExp, setCardExp] = useState("");
  const [cardCvv, setCardCvv] = useState("");

  const paymentDetails = {
    card_name: cardName,
    card_number: cardNumber,
    card_exp: cardExp,
    card_cvv: cardCvv
  }

  const back = () => {
    props.back();
  };
  const onClick = () => {
    console.log(paymentDetails);
    props.next();
  };

  const cardExpHandler = (cardExpValue) => {
    return setCardExp(cardExpValue)
  }

  return (
    <Layout>
      <Header text="Pay with card" back={back} />
      <hr className="w-full" />
      <div className="font-medium text-sm uppercase mt-4 w-full">
        <div className="mb-6">
          <div className="mb-3">Name on card</div>
          <input
            className="w-full md:px-5 md:py-6 px-3 py-4"
            placeholder="Osamudiamen Imasuen"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <div className="mb-3">Card Number</div>
          <input
            className="w-full md:px-5 md:py-6 px-3 py-4"
            placeholder="5399 4823 4299 9421 4992"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>

        <div className="flex md:flex-row flex-col">
          <div className="md:mr-5 md:mb-0 mb-6">
            <div className="mb-3">EXP</div>
            <input
              className="w-full md:px-5 md:py-6 px-3 py-4"
              placeholder="MM/YY"
              value={cardExp}
              onChange={(e) => cardExpHandler(e.target.value)}
            />
          </div>
          <div>
            <div className="mb-3">CVV</div>
            <input
              className="w-full md:px-5 md:py-6 px-3 py-4"
              placeholder="---"
              value={cardCvv}
              onChange={(e) => setCardCvv(e.target.value)}
            />
          </div>
        </div>
      </div>
      <Button text="Pay" onClick={onClick} />
      <div className="absolute -bottom-12">
        <div className="bg-light-green flex flex-row mb-8 rounded-xl px-1 flex sm:text-base text-xs px-2 py-1 items-center">
          <SVG src="/svg/badge-green.svg"></SVG>
          <div> Secured by Payment Platform</div>
        </div>
      </div>
    </Layout>
  );
}
