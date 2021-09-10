import React, { useState } from "react";

// Styles import
import classes from "./toggleCurrency.module.css";

export default function ToggleCurrency(props) {
  return (
    <div className={classes.ToggleCurencyContainer}>
      <p
        className={classes.DollarPlaceHolder}
        onClick={() => props.setCurrency("dollar")}
      >
        $
      </p>
      <div className={classes.MainToggleContainer}>
        <div className={classes.ToggleLine}></div>
        <div
          className={classes.Toggle}
          style={{
            left: props.currency === "dollar" ? 0 : "",
            right: props.currency === "naira" ? 0 : "",
          }}
        ></div>
      </div>
      <p
        className={classes.NairaPlaceHolder}
        onClick={() => props.setCurrency("naira")}
      >
        ₦
      </p>
    </div>
  );
}
