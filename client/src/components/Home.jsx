import React from 'react'

import Banner from '../home/Banner.jsx'
import BestSellerBooks from '../home/BestSellerBooks.jsx'
import FavBooks from '../home/FavBooks.jsx'
import PromoBanner from '../home/PromoBanner.jsx'

export default function Home() {
  return (
    <div className='min-h-screen'>
       <Banner/>
       <BestSellerBooks/>
       <FavBooks/>
       <PromoBanner/>
    </div>
  )
}
