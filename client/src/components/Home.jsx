import React from 'react'

import Banner from '../home/Banner.jsx'
import BestSellerBooks from '../home/BestSellerBooks.jsx'

export default function Home() {
  return (
    <div className='min-h-screen'>
       <Banner/>
       <BestSellerBooks/>
    </div>
  )
}
