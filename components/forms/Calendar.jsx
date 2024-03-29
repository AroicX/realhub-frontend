import DatePicker from 'react-datepicker'
import { useState } from 'react'

export default function Calendar() {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(
    new Date().setMonth(startDate.getMonth() + 1),
  )

  return (
    <div className="bg-gray-100">
      <div className="flex items-center max-w-2xl mx-auto justify-center space-x-4 p-3">
        <div className="relative">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            nextMonthButtonLabel=">"
            previousMonthButtonLabel="<"
          />
        </div>
        <div className="relative">
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            nextMonthButtonLabel=">"
            previousMonthButtonLabel="<"
          />
        </div>
      </div>
    </div>
  )
}
