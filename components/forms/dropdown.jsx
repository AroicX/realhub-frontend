import React, { useState } from 'react'
import SVG from 'react-inlinesvg'

export default function DropDown({ placeholder, options, value }) {
  const [toggle, setToggle] = useState(false)
  const [selected, setSelected] = useState(null)

  const handleSelected = (string) => {
    setToggle(false)
    setSelected(string)
    value(string)
  }

  return (
    <div>
      <div className="mt-1 relative">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded="false"
          aria-labelledby="listbox-label"
          className={`relative text-bright sm:pl-6 sm:pr-6 pl-3 pr-3 box-border pt-4 pb-4 sm:pt-5 sm:pb-5 border w-full  flex flex-row ${
            toggle ? '' : 'mb-8'
          }`}
          onClick={() => setToggle(!toggle)}
        >
          <span className="flex items-center">
            <span className="ml-3 block truncate">
              {selected ? selected : placeholder}
            </span>
          </span>
          <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <SVG src="/svg/Dropdown.svg"></SVG>
          </span>
        </button>

        {toggle && (
          <div
            className={`absolute mt-1 w-full rounded-md bg-white shadow-lg `}
          >
            <ul
              tabIndex="-1"
              role="listbox"
              aria-labelledby="listbox-label"
              aria-activedescendant="listbox-item-3"
              className="max-h-56  py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
            >
              {/* list */}

              {options.map((item, key) => (
                <li
                  key={item}
                  id="listbox-item-0"
                  role="option"
                  className={`relative p-5 pl-7 border-b select-none  hover:bg-black hover:text-white cursor-pointer ${
                    selected === item ? 'bg-black text-white' : ''
                  }`}
                  onClick={() => handleSelected(item)}
                >
                  <div className="flex items-center">
                    <span className="ml-3 block font-normal truncate">
                      {item}
                    </span>
                  </div>

                  {selected === item && (
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                      <SVG src="/svg/check-mark.svg"></SVG>
                    </span>
                  )}
                </li>
              ))}

              {/* list */}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
