import { useEffect, useState } from 'react'
import Link from '../link'
import SVG from 'react-inlinesvg'
import AuthModal from '../auth/AuthModal'
import useScroll from '@/hooks/useScroll'
import { useUser } from '@/hooks/useUser'

export default function Nav({ custom }) {
  const { user, logout } = useUser()

  // console.log(user)

  const [menu, setMenu] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [isAuthModal, setIsAuthModal] = useState(false)
  const [type, setType] = useState('login')
  const { isSticky, element } = useScroll()

  const handleMobileMenun = () => {
    if (menu) {
      setMenu(false)
      document.querySelector('body').classList.toggle('active-scroll')
    } else {
      setMenu(true)
      document.querySelector('body').classList.toggle('no-scroll')
    }
  }

  const toggleAuthModal = (qry) => {
    setType(qry)
    setMenu(false)

    if (isAuthModal) {
      setIsAuthModal(false)
      document.querySelector('body').classList.toggle('active-scroll')
    } else {
      setIsAuthModal(true)
      document.querySelector('body').classList.toggle('no-scroll')
    }
  }

  useEffect(() => {
    const authRequired = localStorage.getItem('be-authorized')
    if (authRequired) {
      setIsAuthModal(true)
    }
  }, [])

  return (
    <nav
      ref={element}
      className={`${
        custom && custom.inbox && custom.message ? 'hidden md:block' : ''
      } w-full p-1 ${isSticky ? 'nav-sticky' : ''} border-b border-gray-md`}
    >
      <AuthModal
        showmodal={isAuthModal}
        modalHandler={toggleAuthModal}
        type={type}
      />

      <div className="inner-nav flex flex-col lg:flex-row  justify-between py-2">
        <Link to="/" className="font-inter--bold flex show-desktop">
          <SVG className="my-0 mx-5" src={`/svg/logo.svg`}></SVG>
          <span className="text-2xl font-inter--light m-auto"> 10ANCY</span>
        </Link>

        <button
          ref={element}
          className={`mobile-handler show-mobile ${
            isSticky ? 'nav-sticky--mobile' : ''
          }`}
          onClick={() => handleMobileMenun()}
        >
          <SVG className="my-0 mx-5 svg-white" src={`/svg/logo.svg`}></SVG>
          <span className="m-auto mx-1">Menu</span>
        </button>

        <div className="flex flex-col lg:flex-row hide">
          {/* <Link
            to="/"
            className={`font-inter--light ${
              !custom ? "text-blue-md" : ""
            }font-13 m-auto mx-5 flex flex-col justify-between`}
          >
            Make a choice
            {!custom && <SVG className="my-1 mx-7" src={`/svg/span.svg`}></SVG>}
          </Link> */}
          <Link
            to="/listings"
            className="font-inter--light font-13 m-auto mx-5"
          >
            View all listings
          </Link>
          <Link
            to="/app/listings"
            className="font-inter--light font-13 m-auto mx-5"
          >
            Become a host
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row hide">
          <Link
            to="/app/notifications"
            className="m-auto mr-14 flex items-center"
          >
            <SVG src="/svg/bell.svg"></SVG>
          </Link>
          <Link to="/app/inbox" className="m-auto mr-5 flex items-center">
            <SVG src="/svg/message.svg"></SVG>
          </Link>

          
          <div
            className="relative dropdown m-auto"
            onClick={() => setIsActive(!isActive)}
          >
            <div className="flex font-inter--light font-15 mx-5 cursor-pointer">
              {' '}
              <SVG className="my-0 mx-5" src={`/svg/account.svg`}></SVG>
              {user ? user.user?.name : 'Account'}
            </div>

            {isActive && (
              <div className={`dropdown-menu ${isActive ? 'slide-down' : ''}`}>
                <ul className="flex flex-col">
                  {user ? (
                    <>
                      {' '}
                      <p
                        className="font-sm my-2 cursor-pointer"
                        onClick={() => {
                          logout()
                          window.location.href = '/'
                        }}
                      >
                        LogOut
                      </p>
                      <hr />
                      <Link
                        to="/app/listings"
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

        {/* mobile header */}

        <div
          className={`flex flex-col lg:flex-row mobile-header ${
            menu ? 'mobile-header__active mt-5' : ''
          }`}
        >
          {/* <button
            className="modal--close m-5 mb-0 p-2"
            //  onClick={modalHandler}
          >
            <span className="mx-2">Close</span>
            <SVG src="/svg/close.svg"></SVG>
          </button> */}

          <div className="flex flex-col lg:flex-row my-3">
            <Link to="/" className="font-inter--bold flex">
              <SVG className="my-0 mx-5" src={`/svg/logo.svg`}></SVG>
              <span className="m-auto mx-1 fon-inter--reg text-lg">10ANCY</span>
            </Link>
            {/* <Link
              to="/"
              className="font-inter--light text-blue-md font-13 mx-5 flex flex-col justify-between"
            >
              Make a choice
            </Link> */}
            <Link to="/listings" className="font-inter--light font-13 mx-5">
              View all listings
            </Link>
            <Link to="/app/listings" className="font-inter--light font-13 mx-5">
              Become a host
            </Link>
            <Link to="/app/inbox" className="font-inter--light font-13 mx-5">
              Inbox
            </Link>
            <Link
              to="/app/notifications"
              className="font-inter--light font-13 mx-5"
            >
              Notifications
            </Link>

            <div className="flex flex-col lg:flex-row my-5 ml-5">
              <div
                className="relative dropdown"
                onClick={() => setIsActive(!isActive)}
              >
                <div className="flex font-inter--light font-15 mx-5 cursor-pointer">
                  {' '}
                  {/* <SVG className="my-0 mx-5" src={`/svg/account.svg`}></SVG> */}
                  {user ? user.user?.name : 'My Account'}
                </div>

                {isActive && (
                  <div
                    className={`dropdown-menu  ${isActive ? 'slide-down' : ''}`}
                  >
                    <ul className="flex flex-col">
                      {user ? (
                        <>
                          {' '}
                          <p
                            className="font-sm my-2 cursor-pointer"
                            onClick={() => {
                              logout()
                              window.location.href = '/'
                            }}
                          >
                            LogOut
                          </p>
                          <hr />
                          <Link
                            to="/app/listings"
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
        </div>
        {/* mobile header */}
      </div>
    </nav>
  )
}
