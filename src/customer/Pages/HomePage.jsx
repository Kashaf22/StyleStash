import React from 'react'
import MainCarosel from '../components/HomeCarosel/MainCarosel'
import HomeSectionCarousel from '../components/HomeSectionCarousel/HomeSectionCarousel'
import { menTops } from '../../Data/menTops'

const HomePage = () => {
  return (
    <div>
      <MainCarosel/>
      <div className='z-4 space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10 relative'>
        <HomeSectionCarousel data ={menTops} sectionName={"Men Tops"}/>
        <HomeSectionCarousel data ={menTops} sectionName={"Women Tops"}/>
        <HomeSectionCarousel data ={menTops} sectionName={"Men Bottoms"}/>
        <HomeSectionCarousel data ={menTops} sectionName={"Men Shoes"}/>
        <HomeSectionCarousel data ={menTops} sectionName={"Women Bottoms"}/>
        <HomeSectionCarousel data ={menTops} sectionName={"Women Shoes"}/>
        </div>
    </div>
  )
}

export default HomePage
