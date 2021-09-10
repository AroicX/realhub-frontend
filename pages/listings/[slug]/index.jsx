import { useEffect, useState } from "react";
import SVG from "react-inlinesvg";
import useWheel from "@/hooks/useWheel";
import { useRouter } from "next/router";
import Layout from "@/components/layout/layout";
import Modal from "@/components/global/modal";
import BookingModal from "@/components/booking/bookingModal";
import { MapComponent } from "@/components/global/MapComponent";
import api from "@/services/api";
import Link from "@/components/link";
import Carousel from "@/components/global/Carousel";
import { useUser } from "@/hooks/useUser";

const ListingPage = () => {
  const currentUser = useUser();
  const { isCollapse } = useWheel();
  const [listing, setListing] = useState({});
  const router = useRouter();
  const slug = router.query.slug;

  const getListing = async () => {
    const { data } = await api.get("/listings?status=OPEN&id=" + slug);
    const details = data.data[0];
    details.images = JSON.parse(details.images);
    details.amenities = JSON.parse(details.amenities);
    setListing(details);
  };
  useEffect(() => {
    if (slug) getListing(slug);
  }, [slug]);

  const [bookingModal, setBookingModal] = useState(false);

  const toggleBookingModal = () => {
    setBookingModal(!bookingModal);
    document.querySelector("body").classList.toggle("no-scroll");
  };

  // const {
  //   property_desc,
  //   bathrooms,
  //   bedrooms,
  //   address,
  //   property_name,
  //   price,
  //   images,
  // } = listing;
  return (
    <Layout type="nav">
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
                {listing && listing.property_name}
              </h2>
              <span className="font-inter--light text-gray-700 font-18">
                {listing && listing.address}
              </span>
            </div>
            <div className="s__listing--carousel">
              {/* <img src={"/images/big_house.png"} alt="*" /> */}
              <Carousel images={listing.images} height="800px" />
            </div>

            <div className="s__listing--price">
              <h3 className="font-inter--bold text-black font-28 my-2">
                ₦{listing && listing.price}
              </h3>

              <div className="flex flex-row">
                <span className="font-inter--light text-black font-12 mx-0">
                  {listing && listing.bedrooms} Bedrooms
                </span>

                <span className="font-inter--light text-black font-12 mx-3">
                  {listing && listing.bathrooms} Bathrooms
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
                {listing && listing.property_desc}
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
                  {" "}
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
                  {" "}
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
            {/* <div className="s__booking__container">
                <button className="s__booking--button">
                  <SVG src="/svg/calendar.svg"></SVG>
                  <span> 01-12-2021</span>
                  <SVG src="/svg/caret-down.svg"></SVG>
                </button>
                <button className="s__booking--button">
                  <span>Adults</span>
                  <SVG src="/svg/caret-down.svg"></SVG>
                </button>

                <button className="s__booking--button">
                  <SVG src="/svg/calendar.svg"></SVG>
                  <span> 20-12-2021</span>
                  <SVG src="/svg/caret-down.svg"></SVG>
                </button>
                <button className="s__booking--button">
                  <span>Children</span>
                  <SVG src="/svg/caret-down.svg"></SVG>
                </button>
              </div> */}
            <button
              className="bg-green-600 text-white p-3 px-12  my-5"
              onClick={() => router.push(`/listings/${slug}/pay`)}
            >
              Pay For Property
            </button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="mt-10">
              <h2 className="font-inter--bold text-black font-14 my-2">
                Location
              </h2>
              <hr />
              <span className="font-inter--normal text-black my-2 text-sm py-2">
                {listing.address}
              </span>{" "}
              <br />
              <MapComponent
                className="w-full my-5"
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCCuptTb-p50eqTGVfgD8jQDjPr5fBI-m0"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `200px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen relative flex flex-col lg:flex-col p-5 overflow-hidden">
        <div className="w-full">
          <p className="font-inter--bold text-black font-14 my-2">
            Apartment Type
          </p>
          <p className="font-inter--light text-gray-700 font-13">Mansion</p>
          <hr className="my-3" />
        </div>

        <div className="w-full ">
          <p className="font-inter--bold text-black font-14 my-2">Amenities</p>
          <p className="font-inter--light text-gray-700 font-13">
            {listing?.amenities?.map((ele) => `${ele.label}, `)}
          </p>
          <hr className="my-3" />
        </div>

        <div className="my-5 w-screen flex flex-col lg:flex-row justify-between ">
          <div className="w-screen">
            <p className="font-inter--bold text-black font-14 my-2">
              Apartment Services
            </p>
            <p className="font-inter--light text-gray-700 font-13">
              Water, Cabel TV, 24hrs Light, Fiber Internet, <br /> Security,
              Smoke Alarms, Air Conditioners, Water Heaters
            </p>
            <hr className="my-3" />
          </div>

          {currentUser?.user?.user?.id != listing?.userId?.id && (
            <Link
              className="flex w-full m-auto lg:ml-20 cursor-pointer"
              to={"/app/profile/" + listing?.userId?.id}
            >
              <img
                className="w-20 h-20 rounded-full mr-4"
                src="/png/person.png"
              />
              <div>
                <div className="font-semibold mt-2 text-xl">
                  Apartment Owner
                </div>
                <div className="">{listing?.userId?.name}</div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ListingPage;
