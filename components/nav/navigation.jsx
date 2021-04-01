import { useState } from 'react'
import Link from '../link'
import SVG from 'react-inlinesvg'
import AuthModal from '../auth/AuthModal'
import Search from '../global/search'
import useScroll from '@/hooks/useScroll'
import { useUser } from '@/hooks/useUser'

export default function Navigation({}) {
  const { user, logout } = useUser()
  const [menu, setMenu] = useState(false)

  const [isActive, setIsActive] = useState(false)
  const [isAuthModal, setIsAuthModal] = useState(false)
  const [type, setType] = useState('login')
  const { isSticky, element } = useScroll()

  const handleMobileMenun = () => {
    setMenu(!menu)

    document.querySelector('body').classList.toggle('no-scroll')
  }

  const toggleAuthModal = (qry) => {
    setType(qry)
    setMenu(false)

    setIsAuthModal(!isAuthModal)
    document.querySelector('body').classList.toggle('no-scroll')
  }

  return (
    <nav
      ref={element}
      className={`w-full ${isSticky ? 'nav-sticky' : ''} border border-gray-md`}
    >
      <AuthModal
        showmodal={isAuthModal}
        modalHandler={toggleAuthModal}
        type={type}
      />

      <div className="inner-nav flex flex-col lg:flex-row justify-between">
        <Link to="/" className="font-inter--bold flex m-5 show-desktop">
          <SVG className="my-0 mx-5" src={`/svg/logo.svg`}></SVG>
          Realhub Africa
        </Link>

        <button
          ref={element}
          className={`mobile-handler show-mobile ${
            isSticky ? 'nav-sticky--mobile' : ''
          }`}
          onClick={() => handleMobileMenun()}
        >
          <SVG className="my-0 mx-5 svg-white" src={`/svg/logo.svg`}></SVG>
          Menu
        </button>

        <div className="show-desktop">
          <Search css="my-2" />
        </div>

        <div
          className="relative dropdown m-5 hide"
          onClick={() => setIsActive(!isActive)}
        >
          <div className="flex font-inter--light font-15 mx-5">
            {' '}
            <SVG className="my-0 mx-5" src={`/svg/account.svg`}></SVG>
            Account
          </div>

          {isActive && (
            <div className={`dropdown-menu ${isActive ? 'slide-down' : ''}`}>
              <ul className="flex flex-col">
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
                <hr />
                <Link to="/app/listings/create" className="font-sm my-2 cursor-pointer">
                  List your home
                </Link>
                <Link to="/" className="font-sm my-2 cursor-pointer">
                  Contact Support
                </Link>
              </ul>
            </div>
          )}
        </div>

        {/* mobile header */}

        <div
          className={`flex flex-col lg:flex-row mobile-header ${
            menu ? 'mobile-header__active' : ''
          }`}
        >
          <div className="flex flex-col lg:flex-row ">
            <Search css="m-5" />

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
                            onClick={() => logout()}
                          >
                            LogOut
                          </p>
                          <hr />
                          <Link
                            to="/app/listings/create"
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
