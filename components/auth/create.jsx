import { useState } from 'react'
import SVG from 'react-inlinesvg'
import PhoneInput from 'react-phone-number-input'

export default function CreateAccount({ view }) {
  const [next, setNext] = useState(1)

  const changeStep = (num) => {
    setNext(num)
  }

  const goBack = () => {
    let back = next - 1
    setNext(back)
  }

  return (
    <>
      {next === 1 && (
        <>
          {' '}
          <div className="w-full p-5 flex flex-col lg:flex-row justify-between">
            <h4 className="font-unna text-2xl">
              Create an account
              <br />
              with RealHubAfrica.
            </h4>

            <div className="flex flex-col my-5">
              <span className="font-sm font-light">
                Already have an acccount?
              </span>
              <span
                className="font-sm font-inner-bold underline cursor-pointer text-right"
                onClick={() => view('login')}
              >
                Login
              </span>
            </div>
          </div>
          <div className="px-2 flex flex-row ">
            <button className="w-full flex bg-facebook p-2 align-middle mx-2">
              <SVG className="m-1" src="/svg/facebook.svg"></SVG>
              <span className="text-white font-sm m-2">
                Login With Facebook
              </span>
            </button>
            <button className="w-full flex bg-google p-2 items-center mx-2">
              <SVG className="m-1 my-2" src="/svg/google.svg"></SVG>
              <span className="text-white font-sm m-2">Login With Google</span>
            </button>
          </div>
          <hr className="my-10 mx-5" style={{ width: '90%' }} />
          {/* <form className="my-10 relative"> */}
          <div className="form-group">
            <label htmlFor="email">EMAIL ADDRESS</label>
            <input
              className="form-control border border-black"
              type="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="form-group">
            <button
              className="w-full bg-black p-4 text-white text-sm"
              onClick={() => changeStep(2)}
            >
              Submit and continue
            </button>
          </div>
          <div className="flex-row px-2">
            <input type="checkbox" className="form-checkbox my-3 mx-3" />
            <span>Allow RealHubAfrica send you marketing emails.</span>
          </div>
          {/* </form> */}
        </>
      )}
      {next === 2 && (
        <>
          {' '}
          <hr />
          {/* <form className="my-10 relative"> */}
          <button className="flex p-5 font-inter cursor-pointer">
            <SVG className="m-1" src="/svg/back.svg"></SVG>
            <span className="my-0 font-12" onClick={goBack}>
              Back
            </span>
          </button>
          <div className="form-group">
            <label htmlFor="name">YOUR NAME</label>
            <input
              className="form-control border border-black"
              type="text"
              placeholder="Enter Your NAME"
            />
          </div>
          <div className="form-group">
            <label htmlFor="surname">SURNAME</label>
            <input
              className="form-control border border-black"
              type="text"
              placeholder="Enter Your SURNAME"
            />
            <span className="font-inter--light text-black font-10 my-1">
              This should match the name on your goverment issued ID.
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="dob">DATE OF BIRTH</label>
            <input
              className="form-control border border-black"
              type="date"
              placeholder="YYYY-MM-DD"
            />
            <span className="font-inter--light text-black font-10 my-1">
              You need to be 18+ to use our platform. This information is for
              internal use only and won’t be shared with other users of
              RealhubAfrica.
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="password">CREATE PASSWORD</label>

            <div className="with-password my-2">
              <input
                className="form-control"
                type="password"
                placeholder="Create Your Password"
              />

              <button className="mx-2 outline-none" type="button">
                Show
              </button>
            </div>
          </div>
          <div className="flex-col px-5 center text-center">
            <span className="font-inter--light text-black text-center font-10 my-1">
              By selecting “I Agree” below, I agree to RealHubAfrica’s Terms of
              Service, Payments Terms of Service, and Privacy Policy.
            </span>
            <br></br>
            <input type="checkbox" className="form-checkbox my-3 mx-3" />{' '}
            <span className="font-inter--light text-black text-center font-15 mb-10">
              I Agree
            </span>
          </div>
          <div className="form-group">
            <button
              className="w-full bg-black p-4 text-white text-sm"
              onClick={() => changeStep(3)}
            >
              Agree and Contiune
            </button>
          </div>
          {/* </form> */}
        </>
      )}
      {next === 3 && (
        <>
          {' '}
          <hr />
          {/* <form className="my-10 relative"> */}
          <button className="flex p-5 font-inter cursor-pointer">
            <SVG className="m-1" src="/svg/back.svg"></SVG>
            <span className="my-0 font-12" onClick={goBack}>
              Back
            </span>
          </button>
          <div className="w-full px-5 flex flex-col justify-between">
            <h4 className="font-unna text-3xl">
              Add and confirm your <br />
              phone number.
            </h4>

            <span className="font-inter--light text-black font-11 my-2">
              This would enable, hosts/guest reach you easily <br /> on
              RealHubAfrica
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="surname">Phone Number</label>

            <PhoneInput
              international
              countryCallingCodeEditable={false}
              defaultCountry="NG"
              // value={value}
              onChange={(e) => {
                console.log(e)
              }}
            />
            <span className="font-inter--light text-black font-10 my-1">
              We will send you a secure code to confirm your phone number
            </span>
          </div>
          <div className="form-group">
            <button
              className="w-full bg-black p-4 text-white text-sm"
              onClick={() => changeStep(4)}
            >
              Submit Phone Number
            </button>
          </div>
          {/* </form> */}
        </>
      )}
      {next === 4 && (
        <>
          {' '}
          <hr />
          {/* <form className="my-10 relative"> */}
          <button className="flex p-5 font-inter cursor-pointer">
            <SVG className="m-1" src="/svg/back.svg"></SVG>
            <span className="my-0 font-12" onClick={goBack}>
              Back
            </span>
          </button>
          <div className="form-group">
            <label htmlFor="otp" className="my-3">
              Enter the code we just sent to +2348172948113
              <span
                className="my-2 mx-3  underline cursor-pointer"
                onClick={goBack}
              >
                Change Phone Number
              </span>
            </label>
            <input
              className="form-control border border-black text-center text-black"
              type="number"
              placeholder=" - - - - "
              minLength="4"
              maxLength="4"
            />
            <span className="font-inter--light text-black font-10 my-1 mx-28">
              If you did not get a code, Click here so we can call you.
            </span>
          </div>
          <div className="form-group">
            <button
              className="w-full bg-black p-4 text-white text-sm"
              onClick={() => changeStep(5)}
            >
              Verify Number
            </button>
          </div>
          {/* </form> */}
        </>
      )}
      {next === 5 && (
        <>
          {' '}
          <hr />
          <div className="w-full p-5">
            <div className="w-full flex flex-col justify-center align-middle center items-center self-center py-10 text-center">
              <SVG className="m-1" src="/svg/badge.svg"></SVG>

              <h4
                className="font-unna text-2xl font-thin my-2"
                style={{ fontWeight: '100 !important' }}
              >
                You are all set.
                <br />
                Welcome once again to RealHubAfrica
              </h4>
              <span className="font-inter--light text-black font-12 ">
                What’s next? You can update your profile or <br /> explore our
                listings.
              </span>
            </div>

            <button className="w-full bg-black p-4 text-white text-sm">
              Update Profile
            </button>
            <button className="w-full bg-white p-4 text-black text-sm border border-black my-2">
              Skip for now, let me explore
            </button>
          </div>
        </>
      )}
    </>
  )
}
