import React from 'react'
import style from '@/styles/Section2.module.css'
import CarouselComponent from '../CarouselComponent'
import FeaturedTodayItem from './FeaturedTodayItem'
import data from '@/../data/topMovie.json'
import { CiSquareChevRight } from "react-icons/ci";
import IconRight from '@/Icons/IconRight'

const Section2 = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 2,
          slidesToSlide: 2
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2,
          slidesToSlide: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
      };
      const Goleft ={

      }
  return (
    <div className={style.FeaturedTodayContainer}>
      <h2 className={style.headTitle}>Featured today</h2>
      <CarouselComponent Component={FeaturedTodayItem} data={data} newResponsive={responsive} />
    </div>
  )
}

export default Section2