import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from '@/styles/Carousel.module.css';
import CustomLeftArrow from '@/Icons/CustomLeftArrow';
import CustomRightArrow from '@/Icons/CustomRightArrow';

const CarouselComponent = ({ newResponsive, Component, data }) => {
  const responsive = {
    superLargeDesktop: {
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
      {data ?     
        <Carousel 
          responsive={{...responsive, ...newResponsive}} 
          className={style.carouselComponent} 
          containerClass={style.containerClass} 
          itemClass={style.itemClass} 
          sliderClass={style.sliderClass}  
          customLeftArrow={<CustomLeftArrow/>} 
          customRightArrow={<CustomRightArrow />}
        >
          {data.map((item, index) => <Component key={index} item={item} />)}
        </Carousel> 
      : null}
    </>
  );
}

export default CarouselComponent;
