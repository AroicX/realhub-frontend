import { isEmpty } from '@/utils/helpers'
import { useEffect, useState } from 'react'
import SVG from 'react-inlinesvg'

export default function DatePicker({ handleDates }) {
  const [picker, setPicker] = useState(false)
  const [dates, setDates] = useState({
    date_in: '',
    date_out: '',
  })

  useEffect(() => {
    setPicker(false)
  }, [])

  const handleSumbit = () => {
    handleDates(dates)
    setTimeout(() => {
      setPicker(false)
    }, 100)
  }

  return (
    <main>
      <div className="search_css_drop">
        <button className="search_css_drop-btn flex font-inter--light font-15 mx-5 cursor-pointer justify-center">
          <SVG className="m-2" src="/svg/search_calendar.svg"></SVG>
        </button>
        <div className="search_css_drop-content -mt-1">
          <p className="p-2 text-md font-inter--bold">Input a time range</p>

          <div className="flex m-auto pb-5">
            <div className="flex flex-col justify-start">
              <label className="my-1" htmlFor="date-in">
                Check In
              </label>
              <input
                className="p-1 border border-black"
                type="date"
                name="date-in"
                onChange={(e) =>
                  setDates({ ...dates, date_in: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col justify-start">
              <label className="my-1" htmlFor="date-in">
                Check Out
              </label>
              <input
                className="p-1 border border-black"
                type="date"
                name="date-in"
                onChange={(e) =>
                  setDates({ ...dates, date_out: e.target.value })
                }
              />
            </div>
          </div>

          <div className="w-full  flex">
            <input
              className="w-screen text-black border px-2 pr-5 outline-none my-1 mx-2"
              type="text"
              name="city"
              placeholder="Chose a city"
            />
          </div>

          <br />

          <hr />
          <div className="flex justify-end mt-2">
            <button
              className="bg-green-700 p-2 text-white font-inter rounded-sm"
              onClick={handleSumbit}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
