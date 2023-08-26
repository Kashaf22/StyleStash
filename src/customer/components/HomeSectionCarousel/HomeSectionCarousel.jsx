import React from "react";
import HomeCardSection from "../HomeSectionCard/HomeCardSection";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "react-alice-carousel/lib/alice-carousel.css";
import { Button } from '@mui/material'
import { useState } from "react";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { menTops } from "../../../Data/menTops";
const HomeSectionCarousel = ({data, sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4},
  };
  const slidePrev=()=>setActiveIndex(activeIndex-1);
  const slideNext=()=>setActiveIndex(activeIndex+1);

  const syncActiveIndex=({item})=>setActiveIndex(item)

  const items = data.map((item) => <HomeCardSection product ={item}/>);
  return (
    <div className="px-4 lg:px-8">
        <h2 className="text-2xl font-extrabold text-gray-800 py-5"> {sectionName}</h2>
      <div className="relative p-5 border">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !== items.length-4 && <Button onClick= {slideNext} variant = "contained"className="z-50" sx= {{position: 'absolute', top: '8rem', right: '0rem' , transform:'translateX(50%) rotate(90deg)', bgcolor: 'white'}} aria-label="next">
            <KeyboardArrowLeftIcon sx= {{transform:"rotate(90deg)", color: 'black'}}/>
        </Button>}
        {activeIndex !== 0 && <Button onClick= {slidePrev} variant = "contained"className="z-50" sx= {{position: 'absolute', top: '8rem', left: '0rem' , transform:'translateX(-50%) rotate(-90deg)', bgcolor: 'white'}} aria-label="next">
            <KeyboardArrowLeftIcon sx= {{transform:"rotate(90deg)", color: 'black'}}/>
        </Button>}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
