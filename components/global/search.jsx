import { useContext, useEffect, useState } from 'react'
import SVG from 'react-inlinesvg'
import Link from '@/components/link'
import { ListingContext } from '@/hooks/listing'

export default function Search({ css }) {
  const [search, setSearch] = useState(null)
  const { listings } = useContext(ListingContext)

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
          {listings &&
            listings.map(({ property_name, address, images }, id) => {
              return (
                <>
                  {property_name.includes(search) && (
                    <Link key={id} to="" className="card flex flex-row">
                      {/* <SVG
                        className="m-3"
                         src={JSON.parse(images)?.[0].image}

                        width="50px"
                        height="50px"
                      ></SVG> */}
                      <img
                        className="m-3"
                        src={JSON.parse(images)?.[0].image}
                        alt={property_name}
                        width="50px"
                        height="50px"
                      />
                      <div className="my-3">
                        <h4 className="text-gray">{property_name}</h4>
                        <span className="font-sm">{address}</span>
                      </div>
                    </Link>
                  )}
                </>
              )
            })}
        </div>
      )}
    </div>
    // </div>
  )
}
