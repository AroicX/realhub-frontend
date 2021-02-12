import { useState } from 'react'

import Search from '@/components/global/search'
import Layout from '@/components/layout/layout'

const previewCategories = [
  {
    name: 'Eco-Friendly Food Packs',
    desc: '(Food packs and packaging)',
    btn: 'Eco-Friendly',
    src:
      'https://res.cloudinary.com/dmwfd0zhh/image/upload/v1610220919/printivo/Rectangle_6-4_pp5pv4.png',
    cost: '7,999',
    url: '',
  },
  {
    name: 'Wedding Package',
    desc: '(We handle all wedding prints)',
    btn: 'Wedding Package',
    src:
      'https://res.cloudinary.com/dmwfd0zhh/image/upload/v1610220920/printivo/Rectangle_6-5_noumgr.png',
    cost: '7,999',
    url: '',
  },

  {
    name: 'Wedding Package',
    desc: '(We handle all wedding prints)',
    btn: 'Wedding Package',
    src:
      'https://res.cloudinary.com/dmwfd0zhh/image/upload/v1610220920/printivo/Rectangle_6-5_noumgr.png',
    cost: '7,999',
    url: '',
  },
  {
    name: 'Corporate Products',
    desc: '(Office and business prints)',
    btn: 'Corporate Products',
    src:
      'https://res.cloudinary.com/dmwfd0zhh/image/upload/v1610220920/printivo/Rectangle_6-6_xldjwk.png',
    cost: '7,999',
    url: '',
  },
  {
    name: 'Art Station',
    desc: '(Print posters and get frames)',
    btn: 'Art Station',
    src:
      'https://res.cloudinary.com/dmwfd0zhh/image/upload/v1610220919/printivo/Rectangle_6-7_snwek3.png',
    cost: '7,999',
    url: '',
  },
]

export default function Listing() {
  return (
    <Layout type="navigation" title="Listing">
      <div className="w-full flex flex-col lg:flex-row justify-between">
        <h4 className="font-unna--italic font-22 text-gray p-5 italic mx-2">
          Houses to rent <br /> near you.
        </h4>
      </div>

      <div className="w-full p-5">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* grid */}
          {previewCategories.map((house, key) => (
            <div className="r-listings">
              <div className="img-container">
                <img src={'./images/image1.png'} alt="*" />
                <div className="price">
                  <span className="uppercase font-inter--light font-10">
                    Starting from
                  </span>
                  <br />
                  <b># 7000,000</b>
                </div>
              </div>

              <div className="description p-2 mx-3">
                <p className="font-inter font-15">
                  Chill Marble Home - Kaduna Nigeria
                </p>
                <span className="font-inter--light font-11">
                  5 Bedroom 3 Bathrooms Kitchen Swimming Pool
                </span>
                <span className="font-inter--light font-10 block">
                  Barnawa Kaduna
                </span>
              </div>

              <button className="w-50 p-3 px-5 mx-5 bg-black text-white">
                View Listing
              </button>
            </div>
          ))}
          {/* grid */}
        </div>
      </div>

      {/*  */}
    </Layout>
  )
}
