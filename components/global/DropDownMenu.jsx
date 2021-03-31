import React from 'react'
import SVG from 'react-inlinesvg'
export default function DropDownMenu({ menuname, list, cssClass }) {
  const [isActive, setIsActive] = React.useState()
  return (
    <div
      className={`relative dropdown ${cssClass}`}
      onClick={() => setIsActive(!isActive)}
    >
      <div className="flex font-inter--light font-15 mx-5 cursor-pointer">
        {menuname}
        <SVG className="mx-3" src="/svg/caret-down.svg" />
      </div>

      {isActive && (
        <div className={`dropdown-menu  ${isActive ? 'slide-down' : ''}`}>
          <ul className="flex flex-col">
            <>
              {list?.map((item) => (
                <p className="font-sm my-2 cursor-pointer">{item}</p>
              ))}
            </>
          </ul>
        </div>
      )}
    </div>
  )
}
