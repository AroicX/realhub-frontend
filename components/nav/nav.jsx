import { useState } from 'react'
import Link from '../link'
import SVG from 'react-inlinesvg'
import AuthModal from '../auth/AuthModal'
import useScroll from '@/hooks/useScroll'
import { useUser } from '@/hooks/useUser'

export default function Nav({}) {
  const { user, logout } = useUser()

  console.log(user)

  const [isActive, setIsActive] = useState(false)
  const [isAuthModal, setIsAuthModal] = useState(false)
  const [type, setType] = useState('login')
  const { isSticky, element } = useScroll()

  const toggleAuthModal = (qry) => {
    setType(qry)
    setIsAuthModal(!isAuthModal)
    document.querySelector('body').classList.toggle('no-scroll')
  }

  return (
    <nav
      ref={element}
      className={`w-full p-1 ${
        isSticky ? 'nav-sticky' : ''
      } border border-gray-md`}
    >
      <AuthModal
        showmodal={isAuthModal}
        modalHandler={toggleAuthModal}
        type={type}
      />

      <div className="inner-nav flex flex-col lg:flex-row justify-between py-2">
        <Link to="/" className="font-inter--bold flex">
          <SVG className="my-0 mx-5" src={`/svg/logo.svg`}></SVG>
          Realhub Africa
        </Link>

        <div className="flex flex-col lg:flex-row hide">
          <Link
            to="/"
            className="font-inter--light text-blue-md font-13 mx-5 flex flex-col justify-between"
          >
            Make a choice
            <SVG className="my-1 mx-7" src={`/svg/span.svg`}></SVG>
          </Link>
          <Link to="/listings" className="font-inter--light font-13 mx-5">
            View all listings
          </Link>
          <Link to="/" className="font-inter--light font-13 mx-5">
            Become a host
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row hide">
          <div
            className="relative dropdown"
            onClick={() => setIsActive(!isActive)}
          >
            <div className="flex font-inter--light font-15 mx-5 cursor-pointer">
              {' '}
              <SVG className="my-0 mx-5" src={`/svg/account.svg`}></SVG>
              {user ? user.user.name : 'Account'}
            </div>

            {isActive && (
              <div className={`dropdown-menu ${isActive ? 'slide-down' : ''}`}>
                <ul className="flex flex-col">
                  {user ? (
                    <>
                      {' '}
                      <p
                        className="font-sm my-2 cursor-pointer"
                        onClick={() => logout()}
                      >
                        LogOut
                      </p>
                      <hr />
                      <Link
                        to="/dashboard"
                        className="font-sm my-2 cursor-pointer"
                      >
                        List your home
                      </Link>
                      <Link to="/" className="font-sm my-2 cursor-pointer">
                        Contact Support
                      </Link>
                    </>
                  ) : (
                    <>
                      {' '}
                      <p
                        className="font-sm my-2 cursor-pointer"
                        onClick={() => toggleAuthModal('create')}
                      >
                        Create Acoount
                      </p>
                      <p
                        className="font-sm my-2 cursor-pointer"
                        onClick={() => toggleAuthModal('login')}
                      >
                        Login
                      </p>
                    </>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
