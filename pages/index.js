import { useState } from "react";

import Search from "@/components/global/search";
import Layout from "@/components/layout/layout";
import Link from "@/components/link";

export default function Home() {
  return (
    <Layout>
      <div className='w-full flex flex-col lg:flex-row justify-between'>
        <h4 className='font-unna--italic font-22 text-gray p-5 italic'>
          What would you like to <br /> do today?
        </h4>
        <Search />
      </div>

      <div className='w-full p-5'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* grid */}
          <Link to='/listings' className='quick-listings'>
            <div className='circle'>
              <span></span>
            </div>
            <img src={"./images/image1.png"} alt='*' />
            <span className='font-unna--bold'> Shor-term Stay</span>
          </Link>
          <Link to='/listings' className='quick-listings'>
            <div className='circle'>
              <span></span>
            </div>
            <img src={"./images/image2.png"} alt='*' />
            <span className='font-unna--bold'> Rent</span>
          </Link>
          <Link to='/listings' className='quick-listings'>
            <div className='circle'>
              <span></span>
            </div>
            <img src={"./images/image3.png"} alt='*' />
            <span className='font-unna--bold'> List your home</span>
          </Link>

          {/* grid */}
        </div>
      </div>
    </Layout>
  );
}
