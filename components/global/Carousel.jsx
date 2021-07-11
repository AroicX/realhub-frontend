import React, { useEffect } from 'react'
import Slider from 'react-slick'

export default function Carousel({ images, height }) {
  useEffect(() => {
    console.log(images)
  }, [])

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    // appendDots: (dots) => (
    //   <div>
    //     <ul style={{ margin: '0px' }}> {dots} </ul>
    //   </div>
    // ),
    // customPaging: (i) => (
    //   <div className="border border-black rounded-sm cursor-pointer">
    //     {i + 1}
    //   </div>
    // ),
  }

  return (
    <div className="w-full">
      <Slider {...settings}>
        {images
          ? images?.map((img, key) => (
              <div>
                <img
                  // className="w-screen h-screen my-3 cover-full"
                  src={img.images.image}
                  alt="*"
                  // style={{ height: height }}
                />
              </div>
            ))
          : null}
      </Slider>
    </div>
  )
}
