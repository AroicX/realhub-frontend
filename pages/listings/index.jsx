import { useContext, useEffect, useState } from 'react'
import Layout from '@/components/layout/layout'
import { MapComponent } from '@/components/global/MapComponent'
import Link from '@/components/link'
import SVG from 'react-inlinesvg'
import { ListingContext } from '@/hooks/listing'
import { useRouter } from 'next/router'
import Carousel from '@/components/global/Carousel'
import GuestDropDown from '@/components/dropdowns/guestdropdown/guestdropdown';

export default function Listing() {
  const router = useRouter()

  const [grid, setGrid] = useState(4)
  const [showMap, setShowMap] = useState(false)
  const { listings } = useContext(ListingContext)
  const [priceMenu, setPriceMenu] = useState(false)
  const [propertyMenu, setPropertyMenu] = useState(false)
  const [guests, setGuest] = useState({adult: 1, children: 1, infants: 1})

  // useEffect(() => {
  //   setPropertyMenu(false)
  // }, [priceMenu])

  // useEffect(() => {
  //   setPriceMenu(false)
  // }, [propertyMenu])

  const handleMap = () => {
    if (grid === 4) {
      setGrid(2)
      setShowMap(!showMap)
    } else {
      setGrid(4)
      setShowMap(!showMap)
    }
  }

  return (
    <Layout type="navigation" title="Listing">
      <div className="w-full flex flex-col lg:flex-row justify-between  h-auto ">
        <h4 className="font-unna font-32 text-gray p-5 mt-14 lg:mt-0 mx-2">
          Properties to rent near you.
        </h4>

        <div className="flex flex-col lg:flex-row ">
          {/* price dropdown menu*/}

          <main className="m-auto">
            <div className="r_css_drop">
              <button className="r_css_drop-btn flex font-inter--light font-15 text-black ">
                Price
                <SVG className="mx-3" src="/svg/caret-down.svg" />
              </button>
              <div className="r_css_drop-content">
                <p className="m-auto p-2 text-md font-inter">
                  Input a price range
                </p>
                <div className="flex flex-col lg:flex-row justify-between ">
                  <div className="flex flex-col p-2 m-auto">
                    <span className="my-2">Minimum Price</span>
                    <input
                      className="p-2 py-3 border border-black rounded-sm text-xs font-inter outline-none"
                      type="number"
                      placeholder="$1,000,000"
                      autoFocus={true}
                      min="20000"
                      // onInput={validity.valid || (value = '')}
                    />
                  </div>
                  <div className="flex flex-col p-2 m-auto">
                    <span className="my-2">Maximum Price </span>
                    <input
                      className="p-2 py-3 border border-black rounded-sm text-xs font-inter outline-none"
                      placeholder="$7,000,000"
                      type="number"
                      min="0"
                    />
                  </div>
                </div>

                <hr />
                <div className="flex justify-between mt-2">
                  <button>Clear</button>
                  <button className="bg-green-700 p-2 text-white font-inter rounded-sm">
                    Update
                  </button>
                </div>
              </div>
            </div>
          </main>

          {/* price dropdown menu*/}

          {/* property dropdown menu*/}

          <main className="m-auto">
            <div className="r_css_drop">
              <button className="r_css_drop-btn flex font-inter--light font-15 text-black ">
                Property Type
                <SVG className="mx-3" src="/svg/caret-down.svg" />
              </button>
              <div className="r_css_drop-content">
                {/*  */}
                <p className="m-auto p-2 text-md font-inter--bold">
                  What type of property are you interested in?
                </p>
                <div className="flex flex-col my-5 p-1 ">
                  <span className="font-inter  m-0.5 mx-0  font-12 uppercase">
                    Apartment Type
                  </span>

                  <div className="flex flex-col">
                    <div className="flex my-1">
                      <input className="my-0.5" type="radio" name="apartment" />
                      <label className="mx-1 font-12" htmlFor="apartment">
                        Serviced
                      </label>
                    </div>
                    <div className="flex my-1">
                      <input className="my-0.5" type="radio" name="apartment" />
                      <label className="mx-1 font-12" htmlFor="apartment">
                        Unserviced
                      </label>
                    </div>
                  </div>
                  <hr className="m-1" />

                  <div className="flex my-2">
                    <div className="flex flex-col">
                      <span className="font-inter m-0.5 mx-0 font-12 uppercase">
                        House Type
                      </span>
                      <div className="flex flex-col">
                        <div className="flex my-1">
                          <input className="my-0.5" type="radio" name="house" />
                          <label className="mx-1 font-12" htmlFor="house">
                            Duplex
                          </label>
                        </div>
                        <div className="flex my-1">
                          <input className="my-0.5" type="radio" name="house" />
                          <label className="mx-1 font-12" htmlFor="house">
                            Bungalow
                          </label>
                        </div>
                        <div className="flex my-1">
                          <input className="my-0.5" type="radio" name="house" />
                          <label className="mx-1 font-12" htmlFor="house">
                            TownHouse
                          </label>
                        </div>
                        <div className="flex my-1">
                          <input className="my-0.5" type="radio" name="house" />
                          <label className="mx-1 font-12" htmlFor="house">
                            Container
                          </label>
                        </div>
                        <div className="flex my-1">
                          <input className="my-0.5" type="radio" name="house" />
                          <label className="mx-1 font-12" htmlFor="house">
                            Mansion
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="m-1" />
                  <span className="font-inter  m-0.5 mx-0  font-12 uppercase">
                    Workspace Type
                  </span>
                  <div className="flex flex-col">
                    <div className="flex my-1">
                      <input className="my-0.5" type="radio" name="work-type" />
                      <label className="mx-1 font-12" htmlFor="work-type">
                        Co-working
                      </label>
                    </div>
                    <div className="flex my-1">
                      <input className="my-0.5" type="radio" name="work-type" />
                      <label className="mx-1 font-12" htmlFor="work-type">
                        Private Office
                      </label>
                    </div>
                  </div>
                </div>

                <hr />
                <div className="flex justify-between mt-2">
                  <button>Clear</button>
                  <button className="bg-green-700 p-2 text-white font-inter rounded-sm">
                    Update
                  </button>
                </div>
                {/*  */}
              </div>
            </div>
          </main>

          {/* property dropdown menu*/}
        </div>

        <button
          className="my-5 flex flex-row border border-black px-6 py-3 text-black"
          onClick={() => handleMap()}
        >
          Open Map
          <SVG className=" mx-2" src="/svg/map.svg" />
        </button>
      </div>

      <div className="w-full flex justify-center p-3">
        <div className="flex ">
          {/*  */}
          <div className="flex bg-white border border-black">
            <span className="m-auto">
              <SVG className="m-3" src="/svg/search.svg"></SVG>
            </span>

            <input
              className="form-control px-2 pr-5 outline-none"
              type="text"
              name="city"
              placeholder="Choose a city"
            />
          </div>

          <div className="flex bg-white border border-black">
            <span className="m-auto">
              <SVG className="m-3" src="/svg/date-in.svg"></SVG>
            </span>

            <input
              className="form-control px-2 outline-none text-gray-400"
              type="date"
              name="date-in"
              placeholder="Check in"
            />
          </div>
          <div className="flex bg-white border border-black">
            <span className="m-auto">
              <SVG className="m-3" src="/svg/date-out.svg"></SVG>
            </span>

            <input
              className="form-control px-2 outline-none text-gray-400"
              type="date"
              name="date-out"
              placeholder="Check in"
            />
          </div>
          {/* <div className="flex bg-white border border-black">
            <span className="m-auto">
              <SVG className="m-3" src="/svg/guest-number.svg"></SVG>
            </span>

            <input
              className="form-control px-2 outline-none text-gray-400"
              type="number"
              name="date-out"
              placeholder="Number of Guests"
            />
          </div> */}
          <GuestDropDown setGuest={setGuest} guests={guests}/>
          <button type="submit" className="bg-black text-white p-3 w-48">
            Search
          </button>

          {/*  */}
        </div>
      </div>

      <div
        className={`w-full relative grid grid-cols-1 ${
          showMap ? 'lg:grid-cols-2' : ''
        }   p-5`}
      >
        <div className={`grid grid-cols-1 lg:grid-cols-${grid} gap-8`}>
          {/* grid */}
          {listings &&
            listings.map((listing, key) => (
              <div
                onClick={() => {
                  router.push('/listings/' + listing.id)
                }}
                className="r-listings"
                key={key + 1}
              >
                <div className="img-container" key={key + 1}>
                  <Carousel
                    key={key + 1}
                    images={JSON.parse(listing.images)}
                    height="300px"
                  />

                  <div className="price">
                    <span className="uppercase font-inter--light font-10">
                      Starting from
                    </span>
                    <br />
                    <b>₦ {listing.price}</b>
                  </div>
                </div>

                <div className="description p-2 mx-3 mt-5">
                  <p className="font-inter font-15">{listing.property_name}</p>
                  <span className="font-inter--light font-13">
                    {listing.bathrooms} Bedroom {listing.bedrooms} Bathrooms
                    Kitchen Swimming Pool
                  </span>
                  <span className="font-inter--light font-13 block">
                    {listing.address}
                  </span>
                </div>

                <br />
                <Link
                  to={'/listings/' + listing?.id}
                  className="w-50 p-3 px-5 mx-5 my-5 bg-black text-white"
                >
                  View Listing
                </Link>
              </div>
            ))}
          {/* grid */}
        </div>

        {showMap && (
          <div className={`w-full  p-2 m-2 transition-all ease-in-out`}>
            <MapComponent
              isMarkerShown
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        )}
      </div>

      {/*  */}
    </Layout>
  )
}
