import React from "react";

import classes from "./citydropdown.module.css";

export default function CityDropDown(props) {
  const availableCity = ["abuja", "kano", "minna", "kaduna", "lagos", "ibadan"];

  let lowerCaseCity = props.searchCity.toLowerCase();

  const filteredCity = availableCity.filter((city) =>
    city.includes(lowerCaseCity)
  );
  if (filteredCity.length === 0) {
    props.setIsCityDropActive(false);
  }

  const textSelectedHandler = (city) => {
      props.setSearchCity(city);
      props.setIsCityDropActive(false);
  }
  return (
    <div className={classes.CityDropDownContainer}>
      {filteredCity.map((city) => (
        <div
          className={classes.CityDropItem}
          key={city}
          onClick={() => textSelectedHandler(city)}
        >
          <p className={classes.CityName}>{city}</p>
        </div>
      ))}
    </div>
  );
}
