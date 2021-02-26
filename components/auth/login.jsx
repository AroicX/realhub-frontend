import { useState, useRef, useEffect } from 'react'
import SVG from 'react-inlinesvg'
import { useUser } from '@/hooks/useUser'

export default function Login({ modalHandler }) {
  const [togglePassword, setTogglePassword] = useState(false)
  // get user hook
  const { login, errorMessage, setErrorMessage, loading } = useUser()

  useEffect(() => {
    setErrorMessage(null)
  }, [loading])
  // use ref to get form data
  const formRef = useRef(null)
  // handle form submit
  const loginHandler = async (e) => {
    e.preventDefault()
    console.log('done')
    const formData = new FormData(e.target)
    const { signEmail, signPassword } = Object.fromEntries(formData)
    console.log({ signEmail, signPassword })

    const resetForm = () => {
      modalHandler()
      formRef.current.reset()
    }
    await login({ email: signEmail, password: signPassword }, resetForm)
  }
  // !loading && errorMessage && console.log(errorMessage)

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

      <form className="my-10 relative">
        <div className="form-group">
          <label htmlFor="email">EMAIL ADDRESS</label>
          <input
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
              className="form-control"
              type="password"
              placeholder="Enter Your Password"
            />

            <button className="mx-2" type="button">
              Show
            </button>
          </div>
        </div>
        <div className="form-group">
          <button className="w-full bg-black p-4 text-white text-sm">
            Login To My Account
          </button>
        </div>
      </form>
    </>
  )
}
