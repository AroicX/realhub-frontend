import { useState, useEffect } from 'react'
import SVG from 'react-inlinesvg'
import CreateAccount from './create'
import Login from './login'

export default function AuthModal({ showmodal, modalHandler, type }) {
  const [view, setView] = useState(type)
  const [step, setStep] = useState(true)

  useEffect(() => {
    setView(type)
  }, [type])

  const changeStep = (data) => {
    setStep(data)
  }

  return (
    <div className={`modal  ${showmodal ? 'modal--active ' : ''}`}>
      <div className="modal--content">
        {/*  */}
        {/* <h2 className="m-5 ">Create Account</h2> */}
        <button className="modal--close m-5 mb-0 p-2" onClick={modalHandler}>
          <span className="mx-2">Close</span>
          <SVG src="/svg/close.svg"></SVG>
        </button>

        {view === 'login' && (
          <>
            <div className="w-full p-5 flex flex-col lg:flex-row justify-between">
              <h4 className="font-unna text-2xl">
                Welcome back! <br /> Login to your account.
              </h4>

              <div className="flex flex-col my-5">
                <span className="font-sm font-light">
                  Don’t have an acccount?
                </span>
                <span
                  className="font-sm font-inner-bold underline cursor-pointer text-right"
                  onClick={() => setView('create')}
                >
                  Create Account
                </span>
              </div>
            </div>
            <Login modalHandler={modalHandler} />
          </>
        )}
        {view === 'create' && (
          <>
            <CreateAccount
              view={(data) => setView(data)}
              modalHandler={modalHandler}
            />
          </>
        )}

        {/*  */}
      </div>
    </div>
  )
}
