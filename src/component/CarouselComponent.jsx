import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from '@/styles/Carousel.module.css'

const CarouselComponent = ({newResponsive,Component,data}) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
<>
{data ?     <Carousel responsive={{...responsive,...newResponsive}} className={style.carouselComponent} containerClass={style.containerClass} itemClass={style.itemClass} sliderClass={style.sliderClass}>
      {data.map((item)=><Component item={item} />)}
  </Carousel> : null}
</>
  )
}





export default CarouselComponent