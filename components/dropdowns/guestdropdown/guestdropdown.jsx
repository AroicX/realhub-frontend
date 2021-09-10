import React, { useState } from "react";
import SVG from "react-inlinesvg";

// Component Import
import DropDownItem from "./guestdropdownitem/guestdropdownitem";

// CSS Module Import
import classes from "./guestdropdown.module.css";

export default function GuestDropDown(props) {
  const DropDownItemsArray = [
    { name: "adult", description: "Ages 13 and above"},
    { name: "children", description: "Ages 2 - 12"},
    { name: "infants", description: "Under 2"},
  ];
  const [isActive, setIsActive] = useState(false);
  const [touched, setTouched] = useState(false);
  return (
    <div className={classes.DropDownContainer}>
      <div
        className={classes.DropDownButton}
        onClick={() => setIsActive(!isActive)}
      >
        {!touched && (
          <SVG
            className={classes.GuestNumberImage}
            src="/svg/guest-number.svg"
          ></SVG>
        )}

        {touched && (
          <p className={classes.GuestNumber}>{`Adult ${props.guests.adult}, Children ${props.guests.children}, Infants ${props.guests.infants}`}</p>
        )}
      </div>
      {isActive && (
        <div className={classes.DropDownContentContainer}>
          {DropDownItemsArray.map((item) => (
            <DropDownItem
              name={item.name}
              description={item.description}
              key={item.name}
              setGuest={props.setGuest}
              setTouched={setTouched}
              guests={props.guests}
            />
          ))}
        </div>
      )}
    </div>
  );
}
