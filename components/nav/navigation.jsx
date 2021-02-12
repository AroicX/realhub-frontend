import { useState } from 'react'
import Link from '../link'
import SVG from 'react-inlinesvg'
import AuthModal from '../auth/AuthModal'
import Search from '../global/search'
import useScroll from '@/hooks/useScroll'

export default function Navigation({}) {
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
      className={`w-full ${
        isSticky ? 'nav-sticky' : ''
      } border border-gray-md`}
    >
      <AuthModal
        showmodal={isAuthModal}
        modalHandler={toggleAuthModal}
        type={type}
      />

      <div className="inner-nav flex flex-col lg:flex-row justify-between">
        <Link to="/" className="font-inter--bold flex m-5">
          <SVG className="my-0 mx-5" src={`/svg/logo.svg`}></SVG>
          Realhub Africa
        </Link>

        <Search css="my-2" />

        <Link
          to="#"
          className="relative dropdown m-5"
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
                  className="font-sm my-2"
                  onClick={() => toggleAuthModal('create')}
                >
                  Create Acoount
                </p>
                <p
                  className="font-sm my-2"
                  onClick={() => toggleAuthModal('login')}
                >
                  Login
                </p>
                <hr />
                <Link to="/" className="font-sm my-2">
                  List your home
                </Link>
                <Link to="/" className="font-sm my-2">
                  Contact Support
                </Link>
              </ul>
            </div>
          )}
        </Link>
      </div>
    </nav>
  )
}
