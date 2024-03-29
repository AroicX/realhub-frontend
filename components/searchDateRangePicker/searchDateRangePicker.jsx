import React from "react";
import moment from "moment";
import Helmet from "react-helmet";
import SVG from "react-inlinesvg";

import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

import classes from "./searchDateRangePicker.module.css";

import { formatDate, parseDate } from "react-day-picker/moment";

export default class SearchDateRangePicker extends React.Component {
  constructor(props) {
    super(props);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.state = {
      from: undefined,
      to: undefined,
    };
  }

  showFromMonth() {
    const { from, to } = this.state;
    if (!from) {
      return;
    }
    if (moment(to).diff(moment(from), "months") < 2) {
      this.to.getDayPicker().showMonth(from);
    }
  }

  handleFromChange(from) {
    // Change the from date and focus the "to" input field
    this.setState({ from });
  }

  handleToChange(to) {
    this.setState({ to }, this.showFromMonth);
  }

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <div
        className={`${classes.DateRangeContainer} InputFromTo flex m-auto pb-5 `}
      >
        <div className="flex flex-col justify-start">
          <label className="my-1" htmlFor="date-in">
            Check In
          </label>
          <div className="border border-black mr-3 flex items-center ">
            <DayPickerInput
              value={from}
              placeholder="Check in"
              formatDate={formatDate}
              parseDate={parseDate}
              dayPickerProps={{
                selectedDays: [from, { from, to }],
                disabledDays: { after: to },
                toMonth: to,
                modifiers,
                numberOfMonths: 2,
                onDayClick: () => this.to.getInput().focus(),
              }}
              inputProps={{
                style: {
                  outline: "none",
                  width: "100%",
                  boxSizing: "boder-box",
                  color: "#978f8b",
                },
              }}
              onDayChange={this.handleFromChange}
            />
            <SVG className="mr-4" src="/svg/arrow_down.svg"></SVG>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <label className="my-1" htmlFor="date-in">
            Check Out
          </label>
          <div className="border border-black flex items-center">
            <span className="InputFromTo-to">
              <DayPickerInput
                ref={(el) => (this.to = el)}
                value={to}
                placeholder="Check out"
                formatDate={formatDate}
                parseDate={parseDate}
                dayPickerProps={{
                  selectedDays: [from, { from, to }],
                  disabledDays: { before: from },
                  modifiers,
                  month: from,
                  fromMonth: from,
                  numberOfMonths: 2,
                }}
                inputProps={{
                  style: {
                    outline: "none",
                    with: "100%",
                    boxSizing: "border-box",
                    color: "#978f8b",
                  },
                }}
                onDayChange={this.handleToChange}
              />
            </span>
            <SVG className="mr-4" src="/svg/arrow_down.svg"></SVG>
          </div>
        </div>
        <Helmet>
          <style>{`
  .InputFromTo .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
  }
  .InputFromTo .DayPicker-Day {
    border-radius: 0 !important;
    border: none !important;
  }
  .InputFromTo .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .InputFromTo .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
  .InputFromTo .DayPickerInput-Overlay {
    display: flex;
    flex-direction: column;
    width: 34.375em;
    top: 1.2em;
    flex-wrap: none !important;
  }
  .InputFromTo-to .DayPickerInput-Overlay {
    margin-left: -12.375em;
    top: 1.2em;
  }
`}</style>
        </Helmet>
      </div>
    );
  }
}
