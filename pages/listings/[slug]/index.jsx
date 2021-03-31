import { useEffect, useState } from 'react'
import SVG from 'react-inlinesvg'
import useWheel from '@/hooks/useWheel'
import { useRouter } from 'next/router'
import Layout from '@/components/layout/layout'
import Modal from '@/components/global/modal'
import BookingModal from '@/components/booking/bookingModal'

const ListingPage = () => {
  const { isCollapse } = useWheel()

  const router = useRouter()
  const slug = router.query.slug
  useEffect(() => {
    console.log(slug)
  }, [router])

  const [bookingModal, setBookingModal] = useState(false)

  const toggleBookingModal = () => {
    setBookingModal(!bookingModal)
    document.querySelector('body').classList.toggle('no-scroll')
  }

  return (
    <div>
      <Layout type="navigation">
        <Modal
          title="Book a Physical Tour"
          showmodal={bookingModal}
          modalHandler={toggleBookingModal}
          children={<BookingModal close={toggleBookingModal} />}
          width="400px"
        />
        <div className="w-full p-5 mt-14 lg:mt-0">
          <div className="flex flex-col lg:flex-row">
            <div className="s__listing">
              <div className="s__listing--header">
                <h2 className="font-unna font-40 text-black text-3xl">
                  Grey Berry Estate
                </h2>
                <span className="font-inter--light text-gray-700 font-18">
                  Barnawa, Kaduna
                </span>
              </div>
              <div className="s__listing--carousel">
                <img src={'/images/big_house.png'} alt="*" />
              </div>

              <div className="s__listing--price">
                <h3 className="font-inter--bold text-black font-28 my-2">
                  ₦700,000.00
                </h3>

                <div className="flex flex-row">
                  <span className="font-inter--light text-black font-12 mx-0">
                    3 Bedrooms
                  </span>

                  <span className="font-inter--light text-black font-12 mx-3">
                    3 Bathrooms
                  </span>
                  <span className="font-inter--light text-black font-12 mx-3">
                    3,212 Sqmt
                  </span>
                  <span className="font-inter--light text-black font-12 mx-3">
                    Swimming Pool
                  </span>
                </div>
              </div>

              <div className="s__listing--description ">
                <p className="font-inter--bold text-black font-14 my-2">
                  Property Description
                </p>

                <p className="font-inter--light text-black-700 font-18 ">
                  Southern Charmer available for sale in HOT EAST COBB area,
                  located right off Alabama rd near Fulton/Cobb border.
                  Shopping, dining, and easy access to 400 or 575! TOP LASSITER
                  High School District! 4 bedrooms, 2 1/2 ba, family room,
                  spacious kitchen with gorgeous granite, office OR Flex room,
                  formal dining AND partial basement. 2 car garage + extra
                  parking on driveway. Brand new paint, new hardwood floors &
                  new carpet!! Relax on your rocking chair front porch, or in
                  your private back yard. Peaceful culdesac in a friendly
                  neighborhood! The house currently has a renter in it. Their
                  lease does not expire till May 1. They are looking to renew
                  and work with the new owners. They are amazing renters and
                  have been there for 2 years
                </p>
              </div>

              {/*  */}
            </div>

            <div className="s__booking">
              <button className="s__booking--button">
                <div className="flex flex-row">
                  <SVG
                    className="m-3"
                    src="/svg/cube.svg"
                    width="50px"
                    height="50px"
                  ></SVG>
                  <span>
                    {' '}
                    Take a 3D tour <br /> of the apartment.
                  </span>
                </div>
                <SVG
                  className="my-7 mx-5"
                  src="/svg/caret.svg"
                  width="10px"
                  height="10px"
                ></SVG>
              </button>
              <button
                className="s__booking--button"
                onClick={() => toggleBookingModal()}
              >
                <div className="flex flex-row">
                  <SVG
                    className="m-3"
                    src="/svg/calendar.svg"
                    width="50px"
                    height="50px"
                  ></SVG>
                  <span>
                    {' '}
                    Book a physical <br />
                    tour of the house.
                  </span>
                </div>
                <SVG
                  className="my-7 mx-5"
                  src="/svg/caret.svg"
                  width="10px"
                  height="10px"
                ></SVG>
              </button>

              <button className="bg-green-600 text-white p-3 px-12  my-5">
                Pay For Property
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            <div className="s__listing">
              <div className="s__listing--description ">
                <div className="my-5">
                  <p className="font-inter--bold text-black font-14 my-2">
                    Apartment Type
                  </p>
                  <p className="font-inter--light text-gray-700 font-13">
                    Mansion
                  </p>
                  <hr className="my-3" />
                </div>
                <div className="my-">
                  <p className="font-inter--bold text-black font-14 my-2">
                    Amenities
                  </p>
                  <p className="font-inter--light text-gray-700 font-13">
                    Pool, Gym, Basketball Court
                  </p>
                  <hr className="my-3" />
                </div>
                <div className="my-5">
                  <p className="font-inter--bold text-black font-14 my-2">
                    Apartment Services
                  </p>
                  <p className="font-inter--light text-gray-700 font-13">
                    Water, Cabel TV, 24hrs Light, Fiber Internet, Security,
                    Smoke Alarms, Air Conditioners, Water Heaters
                  </p>
                  <hr className="my-3" />
                </div>
              </div>

              {/*  */}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default ListingPage
