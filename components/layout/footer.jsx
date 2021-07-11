import Link from '../link'
import SVG from 'react-inlinesvg'

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="flex flex-col lg:flex-row justify-between px-5">
        <div className="flex flex-col jub">
          <div className="flex">
            <SVG className="mx-3 my-0" src="/svg/logo.svg"></SVG>
            <h4 className="font-inter--reg m-auto mx-0 text-2xl">10ANCY</h4>
          </div>
          <span className="font-sm m-3">
            © 2021 RealHubAfrica. All rights reserved.
          </span>
        </div>

        <div className="flex flex-row lg:flex-row m-auto">
          <Link to="/" className="m-auto mr-14 flex items-center">
            <SVG src="/svg/icon_facebook.svg"></SVG>
          </Link>
          <Link to="/" className="m-auto mr-14 flex items-center">
            <SVG src="/svg/icon_twitter.svg"></SVG>
          </Link>
          <Link to="/" className="m-auto mr-14 flex items-center">
            <SVG src="/svg/icon_instagram.svg"></SVG>
          </Link>
          <Link to="/" className="m-auto mr-14 flex items-center">
            <SVG src="/svg/icon_youtube.svg"></SVG>
          </Link>
          <Link
            to="mailto:realhubafricaa@gmail.com"
            className="m-auto mr-14 flex items-center"
          >
            <SVG src="/svg/icon_mail.svg"></SVG>
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col p-5 lg:p-0 my-5 lg:my-0">
            <span className="font-inter--light text-md">Host</span>

            <Link to="/" className="font-inter--reg text-sm my-3">
              Read our guidelines
            </Link>
            <Link to="/" className="font-inter--reg text-sm my-3">
              Locations we cover
            </Link>
            <Link to="/" className="font-inter--reg text-sm my-3">
              Support
            </Link>
          </div>

          <div className="flex flex-col  p-5 lg:p-0 lg:mx-20 ">
            <span className="font-inter--light text-md ">Company</span>

            <Link to="/" className="font-inter--reg text-sm my-3">
              Privacy Policy
            </Link>
            <Link to="/" className="font-inter--reg text-sm my-3">
              Terms of Service
            </Link>
            <Link to="/" className="font-inter--reg text-sm my-3">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
