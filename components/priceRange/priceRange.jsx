import React, { useState } from "react";

// CSS IMPORT
import classes from "./priceRange.module.css";

export default function PriceRange(props) {

  const minPriceHandler = (e) => {
    props.setMinPrice(e.target.value);
  };

  const maxPriceHandler = (e) => {
    props.setMaxPrice(e.target.value);
  };
  return (
    <div className={classes.PriceRangeContainer}>
      <div className={classes.RangeTrack}></div>
      <input
        type="range"
        value={props.minPrice}
        max="1700000"
        min="700000"
        className={classes.MaxPrice}
        onChange={(e) => minPriceHandler(e)}
      />
      <input
        type="range"
        value={props.maxPrice}
        max="1700000"
        min="700000"
        className={classes.MaxPrice}
        onChange={(e) => maxPriceHandler(e)}
      />
    </div>
  );
}
