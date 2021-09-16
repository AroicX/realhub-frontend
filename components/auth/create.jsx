import { useState, useRef, useEffect } from 'react'
import SVG from 'react-inlinesvg'
import PhoneInput from 'react-phone-number-input'
import { useUser } from '@/hooks/useUser'
import Toastr from 'toastr'

export default function CreateAccount({ view, modalHandler }) {
  const {
    verifyAccount,
    validateUser,
    createAccount,
    errorMessage,
    setErrorMessage,
    loading,
  } = useUser()

  useEffect(() => {
    setErrorMessage(null)
  }, [loading])
  const [togglePassword, setTogglePassword] = useState(false)
  const [passwordValidator, setPasswordValidator] = useState(null)

  const [user, setUser] = useState({
    email: '',
    name: ' ',
    lastname: '',
    password: '',
    dob: '',
    phone: '',
  })
  const formRef = useRef(null)

  // use user hook

  const [next, setNext] = useState(1)
  const [accountToken, setAccountToken] = useState('')

  const changeStep = (num) => {
    setErrorMessage(null)
    setNext(num)
  }

  const goBack = () => {
    setErrorMessage(null)
    let back = next - 1
    setNext(back)
  }

  const accountVerfication = async () => {
    const callback = (data) => {
      if (data.status) {
        changeStep(5)
        Toastr.success(data.message)
        setErrorMessage(null)
      }
    }
    await verifyAccount(accountToken, callback)
  }

  const validateEmail = async () => {
    const query = { value: user.email, type: 'email' }
    const callback = (data) => {
      data.status ? changeStep(2) : ''
    }
    await validateUser(query, callback)
  }
  const validatePhone = async () => {
    const query = { value: user.phone.replace('+234', '0'), type: 'phone' }
    const callback = (data) => {
      data.status ? changeStep(4) : ''
      register(user)
    }
    await validateUser(query, callback)
  }
  const validatePassword = (e) => {
    let value = e.target.value
    setUser({ ...user, password: value })

    var lowerCaseLetters = /[a-z]/g
    if (value.match(lowerCaseLetters)) {
      setPasswordValidator(null)
    } else {
      return setPasswordValidator('Password must contain a lowercase letter')
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g
    if (value.match(upperCaseLetters)) {
      setPasswordValidator(null)
    } else {
      return setPasswordValidator('Password must contain an uppercase letter')
    }

    // // Validate numbers
    var numbers = /[0-9]/g
    if (value.match(numbers)) {
      setPasswordValidator(null)
    } else {
      return setPasswordValidator('Password must contain a number ')
    }

    // // Validate length
    if (value.length >= 8) {
      setPasswordValidator(null)
    } else {
      return setPasswordValidator('Password must be up to 8 character ')
    }
    // // Validate symbol
    var symbol = /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
    if (value.match(symbol)) {
      setPasswordValidator(null)
    } else {
      return setPasswordValidator('Password contain a symbol')
    }
  }
  const register = async (userdata) => {
    setErrorMessage(null)
    let data = {
      name: userdata.name + ' ' + userdata.lastname,
      phone: `0${userdata.phone}`,
      email: userdata.email,
      dob: userdata.dob,
      password: userdata.password,
    }
    const callback = (data) => {
      Toastr.success(
        `Please check your mail ${user.email} for verfication code.`,
      )
      setErrorMessage(null)
    }
    const onError = (data) => {
      // console.log(data)
    }

    createAccount(data, callback, onError)
  }

  !loading && errorMessage && Toastr.error(errorMessage)

  return (
    <>
      {/* <form ref={formRef}> */}
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
            <a
              href={`${process.env.NEXT_PUBLIC_BASE_URL}/facebook`}
              className="w-full flex bg-facebook p-2 align-middle mx-2"
            >
              <SVG className="m-1" src="/svg/facebook.svg"></SVG>
              <span className="text-white font-sm m-2">
                Login With Facebook
              </span>
            </a>
            <a
              href={`${process.env.NEXT_PUBLIC_BASE_URL}/google`}
              className="w-full flex bg-google p-2 items-center mx-2"
            >
              <SVG className="m-1 my-2" src="/svg/google.svg"></SVG>
              <span className="text-white font-sm m-2">Login With Google</span>
            </a>
          </div>
          <hr className="my-10 mx-5" style={{ width: '90%' }} />
          {/* <form className="my-10 relative"> */}
          {errorMessage && (
            <div
              className="p-3 m-5 bg-red-md text-white cursor-pointer"
              onClick={() => setErrorMessage(null)}
            >
              <div className="flex">
                <SVG src="/svg/close.svg" className="mr-3 svg-white"></SVG>
                <span> {errorMessage}</span>
              </div>
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">EMAIL ADDRESS</label>

            <input
              name="email"
              className="form-control border border-black"
              type="email"
              placeholder="Enter Your Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className="form-group">
            <button
              className="w-full bg-black p-4 text-white text-sm"
              onClick={() => validateEmail()}
            >
              Submit and continue
            </button>
          </div>
          <div className="flex-row px-2">
            <input type="checkbox" className="form-checkbox my-3 mx-3" />
            <span>Allow RealHubAfrica send you marketing emails.</span>
          </div>
          <span
            className="flex justify-items-center center justify-center m-5 underline font-sm cursor-pointer"
            onClick={() => setNext(4)}
          >
            Skip To Verify Account
          </span>
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
              name="firstname"
              placeholder="Enter Your NAME"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="surname">SURNAME</label>
            <input
              name="lastname"
              className="form-control border border-black"
              type="text"
              placeholder="Enter Your SURNAME"
              value={user.lastname}
              onChange={(e) => setUser({ ...user, lastname: e.target.value })}
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
              value={user.dob}
              onChange={(e) => setUser({ ...user, dob: e.target.value })}
            />
            <span className="font-inter--light text-black font-10 my-1">
              You need to be 18+ to use our platform. This information is for
              internal use only and won’t be shared with other users of
              RealhubAfrica.
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="password">CREATE PASSWORD</label>
            {passwordValidator && (
              <div
                className="p-3 my-0.5  bg-red-md text-white cursor-pointer"
                onClick={() => setPasswordValidator(null)}
              >
                <div className="flex">
                  <SVG src="/svg/close.svg" className="mr-3 svg-white"></SVG>
                  <span> {passwordValidator}</span>
                </div>
              </div>
            )}

            <div className="with-password my-2">
              <input
                className="form-control"
                type={`${togglePassword ? 'text' : 'password'}`}
                placeholder="Create Your Password"
                value={user.password}
                onChange={(e) => validatePassword(e)}
                autoComplet="off"
                name="word"
              />

              <button
                className="mx-2 outline-none"
                type="button"
                onClick={() => setTogglePassword(!togglePassword)}
              >
                {`${togglePassword ? 'Hide' : 'Show'}`}
              </button>
            </div>
            <span className="font-inter--light text-black font-11 my-1">
              Password must contain at least 8 characters, uppercase and
              lowercase letters, and a special character
            </span>
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
          {errorMessage && (
            <div
              className="p-3 m-5 bg-red-md text-white cursor-pointer"
              onClick={() => setErrorMessage(null)}
            >
              <div className="flex">
                <SVG src="/svg/close.svg" className="mr-3 svg-white"></SVG>
                <span> {errorMessage}</span>
              </div>
            </div>
          )}
          <div className="form-group">
            <label htmlFor="surname">Phone Number</label>

            <PhoneInput
              international
              countryCallingCodeEditable={false}
              defaultCountry="NG"
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e })}
            />
            <span className="font-inter--light text-black font-10 my-1">
              We will send you a secure code to confirm your phone number
            </span>
          </div>
          <div className="form-group">
            <button
              className="w-full bg-black p-4 text-white text-sm"
              onClick={() => validatePhone()}
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
            {errorMessage && (
              <div
                className="p-3 m-5 bg-red-md text-white cursor-pointer"
                onClick={() => setErrorMessage(null)}
              >
                <div className="flex">
                  <SVG src="/svg/close.svg" className="mr-3 svg-white"></SVG>
                  <span> {errorMessage}</span>
                </div>
              </div>
            )}
            <label htmlFor="otp" className="my-3">
              Enter the code we just sent to {user.phone}
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
              value={accountToken}
              onChange={(e) => setAccountToken(e.target.value)}
            />
            <span className="font-inter--light text-black font-10 my-1 mx-28">
              If you did not get a code, Click here so we can call you.
            </span>
          </div>
          <div className="form-group">
            <button
              className="w-full bg-black p-4 text-white text-sm"
              onClick={() => accountVerfication()}
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
      {/* </form> */}
    </>
  )
}
