import { useState } from 'react'
import SVG from 'react-inlinesvg'
import Link from '@/components/link'

export default function Search({ css }) {
  const [search, setSearch] = useState(null)
  return (
    // <div className="w-50">
    <div
      className={`r-search ${
        css ? css : ' m-5 lg:m-10  '
      } border border-black `}
    >
      <input
        className="form-control"
        type="text"
        placeholder="search for apartments by location"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">
        <SVG className="m-3" src="/svg/search.svg"></SVG>
      </button>

      {search && (
        <div className="r-search--result border border-black">
          <Link to="" className="card flex flex-row">
            <SVG
              className="m-3"
              src="/svg/image.svg"
              width="50px"
              height="50px"
            ></SVG>
            <div className="my-3">
              <h4 className="text-gray">Two Bedroom Apartment</h4>
              <span className="font-sm">Barnawa, Kaduna</span>
            </div>
          </Link>
          <Link to="" className="card flex flex-row">
            <SVG
              className="m-3"
              src="/svg/image.svg"
              width="50px"
              height="50px"
            ></SVG>
            <div className="my-3">
              <h4 className="text-gray">Two Bedroom Apartment</h4>
              <span className="font-sm">Barnawa, Kaduna</span>
            </div>
          </Link>
          <Link to="" className="card flex flex-row">
            <SVG
              className="m-3"
              src="/svg/image.svg"
              width="50px"
              height="50px"
            ></SVG>
            <div className="my-3">
              <h4 className="text-gray">Two Bedroom Apartment</h4>
              <span className="font-sm">Barnawa, Kaduna</span>
            </div>
          </Link>
          <Link to="" className="card flex flex-row">
            <SVG
              className="m-3"
              src="/svg/image.svg"
              width="50px"
              height="50px"
            ></SVG>
            <div className="my-3">
              <h4 className="text-gray">Two Bedroom Apartment</h4>
              <span className="font-sm">Barnawa, Kaduna</span>
            </div>
          </Link>
          <Link to="" className="card flex flex-row">
            <SVG
              className="m-3"
              src="/svg/image.svg"
              width="50px"
              height="50px"
            ></SVG>
            <div className="my-3">
              <h4 className="text-gray">Two Bedroom Apartment</h4>
              <span className="font-sm">Barnawa, Kaduna</span>
            </div>
          </Link>
          <Link to="" className="card flex flex-row">
            <SVG
              className="m-3"
              src="/svg/image.svg"
              width="50px"
              height="50px"
            ></SVG>
            <div className="my-3">
              <h4 className="text-gray">Two Bedroom Apartment</h4>
              <span className="font-sm">Barnawa, Kaduna</span>
            </div>
          </Link>
        </div>
      )}
    </div>
    // </div>
  )
}
