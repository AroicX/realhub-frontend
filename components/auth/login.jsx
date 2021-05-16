import { useState, useRef, useEffect } from 'react'
import SVG from 'react-inlinesvg'
import { useUser } from '@/hooks/useUser'
import { useRouter } from 'next/router'

export default function Login({ modalHandler }) {
  const router = useRouter()
  const [togglePassword, setTogglePassword] = useState(false)
  // get user hook
  const { login, errorMessage, setErrorMessage, loading } = useUser()

  // useEffect(() => {
  //   setErrorMessage(null)
  // }, [loading])
  // use ref to get form data
  const formRef = useRef(null)
  // handle form submit
  const loginHandler = async (e) => {
    e.preventDefault()
    const link = localStorage.getItem('be-authorized')
    const formData = new FormData(e.target)
    const { signEmail, signPassword } = Object.fromEntries(formData)

    const resetForm = () => {
      modalHandler()
      formRef.current.reset()
    }
    await login({ email: signEmail, password: signPassword }, resetForm)
    localStorage.removeItem('be-authorized')
    if (link) router.push(link)
  }
  !loading && errorMessage && console.log(errorMessage)

  return (
    <>
      <div className="px-2 flex flex-row ">
        <button className="w-full flex bg-facebook p-2 align-middle mx-2">
          <SVG className="m-1" src="/svg/facebook.svg"></SVG>
          <span className="text-white font-sm m-2">Login With Facebook</span>
        </button>
        <button className="w-full flex bg-google p-2 items-center mx-2">
          <SVG className="m-1 my-2" src="/svg/google.svg"></SVG>
          <span className="text-white font-sm m-2">Login With Google</span>
        </button>
      </div>

      <hr className="my-10 mx-5" style={{ width: '90%' }} />

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

      <form className="my-10 relative" onSubmit={loginHandler} ref={formRef}>
        <div className="form-group">
          <label htmlFor="email">EMAIL ADDRESS</label>
          <input
            id="signEmail"
            name="signEmail"
            className="form-control border border-black"
            type="email"
            placeholder="Enter Your Email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">PASSWORD</label>
          <span className="absolute top-0 right-0 underline font-sm cursor-pointer">
            Forgot Password?
          </span>
          <div className="with-password my-2">
            <input
              id="signPassword"
              name="signPassword"
              className="form-control"
              type={`${togglePassword ? 'text' : 'password'}`}
              placeholder="Enter Your Password"
            />

            <button
              className="mx-2"
              type="button"
              onClick={() => setTogglePassword(!togglePassword)}
            >
              {`${togglePassword ? 'Hide' : 'Show'}`}
            </button>
          </div>
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="w-full bg-black p-4 text-white text-sm"
            disabled={loading}
          >
            Login To My Account
            {loading && <span className="ml-3 spinner spinner-white"></span>}
          </button>
        </div>
      </form>
    </>
  )
}
