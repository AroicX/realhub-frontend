import React from 'react'
import Link from '@/components/link'
import { useRouter } from 'next/router'
import Carousel from '@/components/global/Carousel'

export default function List({ list }) {
  const router = useRouter()
  return (
    <div
      onClick={() => {
        router.push('/listings/' + list.id)
      }}
      className="r-listings pb-auto "
    >
      <div className="img-container">
        <Carousel images={JSON.parse(list.images)} height="300px" />
        <div className="price">
          <span className="uppercase font-inter--light font-10">
            Starting from
          </span>
          <br />
          <b>₦ {list.price}</b>
        </div>
      </div>

      <div className="description p-2 mx-3">
        <p className="font-inter font-15">{list.property_name}</p>
        <span className="font-inter--light font-13">
          {list.bathrooms} Bedroom {list.bedrooms} Bathrooms Kitchen Swimming
          Pool
        </span>
        <span className="font-inter--light font-13 block">{list.address}</span>
      </div>

      <br />
      <Link
        to={'/listings/' + list.id}
        className="w-50 p-3 px-5 mx-5 my-5 bg-black text-white"
      >
        View Property
      </Link>
    </div>
  )
}
