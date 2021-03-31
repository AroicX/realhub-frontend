import React, { useEffect, useState } from 'react'
import SVG from 'react-inlinesvg'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import PhoneInput from 'react-phone-number-input'
import next from 'next'
import { MAKE_BOOKING } from 'actions/requests'

export default function BookingModal({ close }) {
  const [step, setStep] = useState(1)

  const [booking, setBooking] = useState({
    listingId: 1,
    date: new Date(),
    time: '11:00',
    name: 'Gabriel Okunola',
    email: 'Arowosegbe67@gmail.com',
    phone: '7016762847',
  })

  const next = () => {
    if (step <= 3) {
      setStep(step + 1)
    }
  }

  const handleSumbit = () => {
    console.log(booking)
    const callback = (response) => {
      console.log(response)
      setStep(1)
      close()
    }
    const onError = (error) => {
      console.log(error)
    }

    MAKE_BOOKING(booking, callback, onError)
  }

  return (
    <>
      {step === 1 && (
        <>
          <b className="font-sm text-bold">Step {step}/3</b>
          <span className="font--inter font-sm">Pick an available date</span>

          <Calendar
            className="my-5 border-none"
            onChange={(data) => setBooking({ ...booking, date: data })}
            value={booking.date}
          />
          <button
            className="w-full bg-black p-4 text-white text-sm"
            onClick={() => next()}
          >
            Contiune
          </button>
        </>
      )}
      {step === 2 && (
        <>
          <button className="flex py-2 font-inter cursor-pointer">
            <SVG className="m-1" src="/svg/back.svg"></SVG>
            <span className="my-0 font-12" onClick={() => setStep(step - 1)}>
              Back
            </span>
          </button>
          <div className="flex flex-row justify-between my-5">
            <div className="flex flex-col ">
              <b className="font-sm text-bold">Step {step}/3</b>
              <span className="font--inter font-sm">
                Pick an available date
              </span>
            </div>

            <span className="font--inter font-sm">
              {booking.value?.toUTCString()}
            </span>
          </div>

          <div className="w-full flex flex-row border p-5">
            <input
              className="m-0.5 w-5 h-5"
              type="radio"
              name="time"
              onChange={() => setBooking({ ...booking, time: '11:00 AM' })}
              checked={booking.time === '11:00 AM' ? true : false}
            />
            <span className="mx-3">11:00 AM</span>
          </div>
          <div className="w-full flex flex-row border p-5">
            <input
              className="m-0.5 w-5 h-5"
              type="radio"
              name="time"
              onChange={() => setBooking({ ...booking, time: '1:00 PM' })}
              checked={booking.time === '1:00 PM' ? true : false}
            />
            <span className="mx-3">1:00 PM</span>
          </div>
          <div className="w-full flex flex-row border p-5">
            <input
              className="m-0.5 w-5 h-5"
              type="radio"
              name="time"
              onChange={() => setBooking({ ...booking, time: '2:00 PM' })}
              checked={booking.time === '2:00 PM' ? true : false}
            />
            <span className="mx-3">2:00 PM</span>
          </div>
          <div className="w-full flex flex-row border p-5">
            <input
              className="m-0.5 w-5 h-5"
              type="radio"
              name="time"
              onChange={() => setBooking({ ...booking, time: '3:00 PM' })}
              checked={booking.time === '3:00 PM' ? true : false}
            />
            <span className="mx-3">3:00 PM</span>
          </div>

          <button
            className="w-full bg-black p-4 my-5 text-white text-sm"
            onClick={() => next()}
          >
            Contiune
          </button>
        </>
      )}
      {step === 3 && (
        <>
          <button className="flex py-2 font-inter cursor-pointer">
            <SVG className="m-1" src="/svg/back.svg"></SVG>
            <span className="my-0 font-12" onClick={() => setStep(step - 1)}>
              Back
            </span>
          </button>
          <div className="flex flex-row justify-between my-5">
            <div className="flex flex-col ">
              <b className="font-sm text-bold">Step {step}/3</b>
              <span className="font--inter font-sm">
                Please provide a way for us to contact you and send your tour
                details.
              </span>
            </div>
          </div>

          <div className="form-fields">
            <label htmlFor="name">Your Name</label>
            <input
              id="signEmail"
              name="signEmail"
              className="form-control border border-black"
              type="name"
              placeholder="Enter Your Name"
              value={booking.name}
              onChange={(e) => setBooking({ ...booking, name: e.target.value })}
            />
          </div>
          <div className="form-fields">
            <label htmlFor="email">Email</label>
            <input
              id="signEmail"
              name="signEmail"
              className="form-control border border-black"
              type="email"
              placeholder="Enter Your Email"
              value={booking.email}
              onChange={(e) =>
                setBooking({ ...booking, email: e.target.value })
              }
            />
          </div>
          <div className="form-fields">
            <label htmlFor="surname">Phone Number(OPTIONAL)</label>

            <PhoneInput
              international
              countryCallingCodeEditable={false}
              defaultCountry="NG"
              value={booking.phone}
              onChange={(e) => setBooking({ ...booking, phone: e })}
            />
          </div>

          <button
            className="w-full bg-black p-4 my-5 text-white text-sm"
            onClick={() => next()}
          >
            Book Tour
          </button>
        </>
      )}
      {step === 4 && (
        <>
          <div className="w-full flex flex-col items-center center justify-center">
            <SVG className="my-5" src="/svg/booking-success.svg"></SVG>

            <p>Check your email for confirmation</p>
          </div>

          <button
            className="w-full bg-black p-4 my-5 text-white text-sm"
            onClick={() => handleSumbit()}
          >
            Happy Touring
          </button>
        </>
      )}
    </>
  )
}
