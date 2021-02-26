import Link from '../link'
import SVG from 'react-inlinesvg'

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="flex flex-col lg:flex-row justify-between px-5">
        <div className="flex flex-col jub">
          <div className="flex">
            <SVG className="mx-3 my-0" src="/svg/logo.svg"></SVG>
            <h4 className="font-inter--bold mb-1">RealHubAfrica</h4>
          </div>
          <span className="font-sm mx-3">
            © 2021 RealHubAfrica. All rights reserved.
          </span>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col p-5 lg:p-0 my-5 lg:my-0">
            <span className="font-inter--light font-sm">Host</span>

            <Link to="/" className="font-inter font-13 my-3">
              Host your home
            </Link>
            <Link to="/" className="font-inter font-13 my-3">
              Read our guidelines
            </Link>
            <Link to="/" className="font-inter font-13 my-3">
              Locations we cover
            </Link>
            <Link to="/" className="font-inter font-13 my-3">
              Support
            </Link>
          </div>

          <div className="flex flex-col  p-5 lg:p-0 lg:mx-20 ">
            <span className="font-inter--light font-sm">Company</span>

            <Link to="/" className="font-inter font-13 my-3">
              Privacy Policy
            </Link>
            <Link to="/" className="font-inter font-13 my-3">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
