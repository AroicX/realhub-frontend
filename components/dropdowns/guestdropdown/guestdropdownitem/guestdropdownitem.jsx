import React, { useState } from "react";
import SVG from "react-inlinesvg";

import classes from "./guestdropdownitem.module.css";

export default function GuestDropDownItem(props) {
  const [itemValue, setItemValue] = useState(props.guests[props.name]);
  const subtractItemValue = () => {
    if (itemValue > 0) {
      props.setTouched(true);
      props.setGuest((guest) => {
        guest[props.name] = itemValue - 1;
        return { ...guest };
      });
      setItemValue(itemValue - 1);
    }
  };

  const addItemValue = () => {
    props.setTouched(true);
    props.setGuest((guest) => {
      guest[props.name] = itemValue + 1;
      return { ...guest };
    });
    setItemValue(itemValue + 1);
  };
  return (
    <div className={classes.DropDownItemContainer}>
      <div className={classes.ItemDetails}>
        <p className={`${classes.ItemTitle} font-inter`}>{props.name}</p>
        <p className={classes.ItemDescription}>{props.description}</p>
      </div>
      <div className={classes.ItemQuantity}>
        <SVG
          className={classes.MinusSignImage}
          src="/svg/minus_sign.svg"
          onClick={subtractItemValue}
        ></SVG>
        <p className={classes.ItemSize}>{itemValue}</p>
        <SVG
          className={classes.PlusSignImage}
          src="/svg/plus_sign.svg"
          onClick={addItemValue}
        ></SVG>
      </div>
    </div>
  );
}
