import { useState, useEffect, Children } from 'react'
import SVG from 'react-inlinesvg'

export default function Modal({
  showmodal,
  modalHandler,
  children,
  width,
  title,
}) {
  return (
    <div className={`modal  ${showmodal ? 'modal--active ' : ''}`}>
      <div
        className="modal--content"
        style={{ maxWidth: width ? width : 'auto' }}
      >
        {/*  */}

        <h2 className="absolute top-1  m-5 ">{title}</h2>
        <button className="modal--close m-5 mb-0 p-2" onClick={modalHandler}>
          <span className="mx-2">Close</span>
          <SVG src="/svg/close.svg"></SVG>
        </button>

        <div className="w-full p-5 flex flex-col  justify-between">
          {children}
        </div>

        {/*  */}
      </div>
    </div>
  )
}
