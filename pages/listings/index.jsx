import { useContext, useEffect, useState } from 'react'
import Layout from '@/components/layout/layout'
import DropDownMenu from '@/components/global/DropDownMenu'
import { MapComponent } from '@/components/global/MapComponent'
import Link from '@/components/link'
import SVG from 'react-inlinesvg'
import { ListingContext } from '@/hooks/listing'
import { useRouter } from 'next/router'
import Carousel from '@/components/global/Carousel'

export default function Listing() {
  const router = useRouter()

  const [grid, setGrid] = useState(4)
  const [showMap, setShowMap] = useState(false)
  const { listings } = useContext(ListingContext)
  const [priceMenu, setPriceMenu] = useState(false)
  const [propertyMenu, setPropertyMenu] = useState(false)

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
      <div className="w-full flex flex-col lg:flex-row h-auto ">
        <h4 className="font-unna font-32 text-gray p-5 mt-14 lg:mt-0 mx-2">
          Properties to rent near you.
        </h4>

        <div className="flex flex-col lg:flex-row ">
          {/* price dropdown menu*/}
          <div
            className="dropdown  relative w-72  m-auto"
            onClick={() => setPriceMenu(true)}
            onDoubleClick={() => setPriceMenu(false)}
          >
            <div className="flex font-inter--light font-15 mx-5 cursor-pointer justify-center">
              <span>Price</span>
              <SVG className="mx-3" src="/svg/caret-down.svg" />
            </div>

            {priceMenu && (
              <div
                className={`dropdown-menu dropdown-listing ${
                  priceMenu ? 'slide-down' : ''
                }`}
                // style={{ width: '350px auto !important' }}
              >
                <p className="m-auto p-2 text-md font-inter">
                  Input a price range
                </p>
                <div className="flex flex-col lg:flex-row justify-between ">
                  <div className="flex flex-col p-2 m-auto">
                    <span className="my-2">Minimum Price</span>
                    <input
                      className="p-2 py-3 border border-black rounded-sm text-xs font-inter outline-none"
                      type="number"
                      placeholder="#7,000,000"
                      autoFocus={true}
                    />
                  </div>
                  <div className="flex flex-col p-2 m-auto">
                    <span className="my-2">Maximum Price </span>
                    <input
                      className="p-2 py-3 border border-black rounded-sm text-xs font-inter outline-none"
                      type="number"
                      placeholder="#7,000,000"
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
            )}
          </div>
          {/* price dropdown menu*/}

          {/* property dropdown menu*/}
          <div
            className="dropdown relative w-72  m-auto"
            onClick={() => setPropertyMenu(true)}
            onDoubleClick={() => setPropertyMenu(false)}
          >
            <div className="flex font-inter--light font-15 mx-5 cursor-pointer justify-center">
              <span>Property Type</span>
              <SVG className="mx-3" src="/svg/caret-down.svg" />
            </div>

            {propertyMenu && (
              <div
                className={`dropdown-menu dropdown-listing ${
                  propertyMenu ? 'slide-down' : ''
                }`}
                style={{ width: '450px auto !important' }}
              >
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
              </div>
            )}
          </div>
          {/* property dropdown menu*/}
        </div>

        <button
          className="absolute right-10 my-5 flex flex-row border border-black px-6 py-3 text-black"
          onClick={() => handleMap()}
        >
          Open Map
          <SVG className=" mx-2" src="/svg/map.svg" />
        </button>
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
                key={key}
              >
                <div className="img-container">
                  <Carousel
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
                  to={'/listings/' + listing.id}
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
