import React, { useState } from "react";
import SVG from "react-inlinesvg";
import onClickOutside from "react-onclickoutside";

// Component Import
import DropDownItem from "./guestdropdownitem/guestdropdownitem";

// CSS Module Import
import classes from "./guestdropdown.module.css";

function GuestDropDown(props) {
  const DropDownItemsArray = [
    { name: "adult", description: "Ages 13 and above" },
    { name: "children", description: "Ages 2 - 12" },
    { name: "infants", description: "Under 2" },
  ];
  const [isActive, setIsActive] = useState(false);
  GuestDropDown.handleClickOutside = () => {
    setIsActive(false);
  };
  return (
    <div className={classes.DropDownContainer}>
      <div
        className={classes.DropDownButton}
        onClick={() => setIsActive(!isActive)}
      >
        {/* {!touched && (
          <SVG
            className={classes.GuestNumberImage}
            src="/svg/guest-number.svg"
          ></SVG>
        )} */}
        <p
          className={classes.GuestNumber}
        >{`Adult ${props.guests.adult}, Children ${props.guests.children}, Infants ${props.guests.infants}`}</p>
      </div>
      {isActive && (
        <div className={classes.DropDownContentContainer}>
          {DropDownItemsArray.map((item) => (
            <DropDownItem
              name={item.name}
              description={item.description}
              key={item.name}
              setGuest={props.setGuest}
              guests={props.guests}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => GuestDropDown.handleClickOutside,
};

export default onClickOutside(GuestDropDown, clickOutsideConfig);
