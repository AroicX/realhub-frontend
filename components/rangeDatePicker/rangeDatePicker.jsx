import React from 'react'
import moment from 'moment'
import Helmet from 'react-helmet'
import SVG from 'react-inlinesvg'

import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'

import classes from './rangeDatePicker.module.css'

import { formatDate, parseDate } from 'react-day-picker/moment'

export default class RangeDatePicker extends React.Component {
  constructor(props) {
    super(props)
    this.handleFromChange = this.handleFromChange.bind(this)
    this.handleToChange = this.handleToChange.bind(this)
    this.state = {
      from: undefined,
      to: undefined,
    }
  }

  showFromMonth() {
    const { from, to } = this.state
    if (!from) {
      return
    }
    if (moment(to).diff(moment(from), 'months') < 2) {
      this.to.getDayPicker().showMonth(from)
    }
  }

  handleFromChange(from) {
    // Change the from date and focus the "to" input field
    this.setState({ from })
  }

  handleToChange(to) {
    this.setState({ to }, this.showFromMonth)
  }

  render() {
    const { from, to } = this.state
    const modifiers = { start: from, end: to }
    return (
      <div
        className={`${classes.DateRangeContainer} InputFromTo bg-white border border-black `}
      >
        <div className={classes.MainDateContainer}>
          <SVG className={classes.DateImage} src="/svg/date_check_in.svg"></SVG>
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
              numberOfMonths: 1,
              onDayClick: () => this.to.getInput().focus(),
            }}
            inputProps={{
              style: {
                outline: 'none',
                width: '100%',
                boxSizing: 'boder-box',
                color: '#978f8b',
              },
            }}
            onDayChange={this.handleFromChange}
            disabledDays={[new Date(), { daysOfWeek: [0, 6] }]}
          />
        </div>
        <div className={classes.MainDateContainer}>
          <SVG
            className={classes.DateImage}
            src="/svg/date_check_out.svg"
          ></SVG>
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
                numberOfMonths: 1,
              }}
              inputProps={{
                style: {
                  outline: 'none',
                  with: '100%',
                  boxSizing: 'border-box',
                  color: '#978f8b',
                },
              }}
              onDayChange={this.handleToChange}
              disabledDays={[new Date(), { daysOfWeek: [0, 6] }]}
            />
          </span>
        </div>
      </div>
    )
  }
}
