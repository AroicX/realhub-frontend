import { useContext, useEffect, useState } from "react";
import Layout from "@/components/layout/layout";
import DropDownMenu from "@/components/global/DropDownMenu";
import { MapComponent } from "@/components/global/MapComponent";
import Link from "@/components/link";
import SVG from "react-inlinesvg";
import { ListingContext } from "@/hooks/listing";
import { useRouter } from "next/router";

// const previewCategories = [
//   {
//     name: "Eco-Friendly Food Packs",
//     desc: "(Food packs and packaging)",
//     btn: "Eco-Friendly",
//     src:
//       "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1610220919/printivo/Rectangle_6-4_pp5pv4.png",
//     cost: "7,999",
//     url: "",
//   },
//   {
//     name: "Wedding Package",
//     desc: "(We handle all wedding prints)",
//     btn: "Wedding Package",
//     src:
//       "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1610220920/printivo/Rectangle_6-5_noumgr.png",
//     cost: "7,999",
//     url: "",
//   },

//   {
//     name: "Wedding Package",
//     desc: "(We handle all wedding prints)",
//     btn: "Wedding Package",
//     src:
//       "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1610220920/printivo/Rectangle_6-5_noumgr.png",
//     cost: "7,999",
//     url: "",
//   },
//   {
//     name: "Corporate Products",
//     desc: "(Office and business prints)",
//     btn: "Corporate Products",
//     src:
//       "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1610220920/printivo/Rectangle_6-6_xldjwk.png",
//     cost: "7,999",
//     url: "",
//   },
//   {
//     name: "Art Station",
//     desc: "(Print posters and get frames)",
//     btn: "Art Station",
//     src:
//       "https://res.cloudinary.com/dmwfd0zhh/image/upload/v1610220919/printivo/Rectangle_6-7_snwek3.png",
//     cost: "7,999",
//     url: "",
//   },
// ];

export default function Listing() {
  const router = useRouter();
  const [grid, setGrid] = useState(4);
  const [showMap, setShowMap] = useState(false);
  const { listings } = useContext(ListingContext);

  const handleMap = () => {
    if (grid === 4) {
      setGrid(2);
      setShowMap(!showMap);
    } else {
      setGrid(4);
      setShowMap(!showMap);
    }
  };

  useEffect(() => {
    console.log(listings);
  }, [listings]);

  return (
    <Layout type="navigation" title="Listing">
      <div className="w-full flex flex-col lg:flex-row h-auto ">
        <h4 className="font-unna font-32 text-gray p-5 mt-14 lg:mt-0 mx-2">
          Properties to rent near you.
        </h4>

        <div className="flex">
          <DropDownMenu
            type="custom"
            menuname="Price"
            cssClass="my-10 relative"
          >
            <div>
              <div className="font-semibold mt-4 mb-3 text-lg">
                Input a price range
              </div>
              <div className="grid grid-cols-2 gap-x-3 mt-4 mb-10 text-xs">
                <div>MINIMUM PRICE</div>
                <div> MAXIMUM PRICE</div>
                <input
                  placeholder="₦700,000.00"
                  className="border pl-2 w-36 h-10 border-black mt-2"
                />
                <input
                  placeholder="₦1,700,000.00"
                  className="border pl-2 w-36 h-10 border-black mt-2"
                />
              </div>
              <hr className="border-black" />
              <div className="flex flex-row mt-4 items-center">
                <div className="flex-1 cursor-pointer">Clear</div>
                <div>
                  <button className="text-white bg-dark-green px-6 py-3 cursor-pointer">
                    Update
                  </button>
                </div>
              </div>
            </div>
          </DropDownMenu>
          <DropDownMenu
            className="custom"
            menuname="Property Type"
            cssClass="my-10 relative"
            type="custom"
          >
            <div className="font-semibold mt-4 mb-3 text-lg">
              What type of property are you interested in?
            </div>
            <hr />
            <div className="text-xs">
              <div className="uppercase font-semibold mt-4">Apartment Type</div>
              <div className="flex mt-2">
                <input type="radio" />
                <div className="ml-2">Serviced</div>
              </div>
              <div className="flex mt-2 mb-6">
                <input type="radio" />
                <div className="ml-2">Unserviced</div>
              </div>
              <hr className="border-black mb-6" />
              <div className="flex">
                <div className="flex-1">
                  <div className="uppercase font-semibold mt-4">House Type</div>
                  <div className="flex mt-2">
                    <input type="radio" />
                    <div className="ml-2">Duplex</div>
                  </div>
                  <div className="flex mt-2">
                    <input type="radio" />
                    <div className="ml-2">Bungalow</div>
                  </div>
                  <div className="flex mt-2">
                    <input type="radio" />
                    <div className="ml-2">Container</div>
                  </div>
                  <div className="flex mt-2 mb-6">
                    <input type="radio" />
                    <div className="ml-2">Mansion</div>
                  </div>
                </div>
                <div>
                  <div className="uppercase mt-4">NUMBER OF BEDROOMS</div>
                  <input
                    placeholder="2 Bedrooms"
                    className="border pl-2 w-36 h-10 border-black mt-2"
                  />
                </div>
              </div>
              <hr className="border-black mb-6" />
              <div className="uppercase font-semibold mt-4">Workspace Type</div>
              <div className="flex mt-2">
                <input type="radio" />
                <div className="ml-2">Co-working</div>
              </div>
              <div className="flex mt-2">
                <input type="radio" />
                <div className="ml-2">Private office</div>
              </div>
              <hr className="border-black mb-4 mt-6" />
              <div className="flex flex-row mt-3 items-center">
                <div className="flex-1 cursor-pointer">Clear</div>
                <div>
                  <button className="text-white bg-dark-green px-6 py-3 cursor-pointer">
                    Update
                  </button>
                </div>
              </div>
            </div>
          </DropDownMenu>
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
                  router.push("/listings/" + listing.id);
                }}
                className="r-listings"
                key={key}
              >
                <div className="img-container">
                  <img
                    src={JSON.parse(listing.images)?.[0].image}
                    alt={listing.property_name}
                  />
                  <div className="price">
                    <span className="uppercase font-inter--light font-10">
                      Starting from
                    </span>
                    <br />
                    <b>₦ {listing.price}</b>
                  </div>
                </div>

                <div className="description p-2 mx-3">
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
                  to={"/listings/" + listing.id}
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
  );
}
