import React, { useEffect, useState } from 'react'
import response from '@/../data/topMovie.json'
import CarouselComponent from '@/component/CarouselComponent';
import TopMovieItem from './TopMovieItem';
import style from '@/styles/Topmovie.module.css'
const TopMovie = () => {
  const [data,setData] = useState(null)
  const [loading , setLoading] = useState(false)
  const responsive = {
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide:2
    }
  };
  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setData(response)
      setLoading(false)
    },100);
  },[])

  return (
    <div className={style.topMovie} >
      <CarouselComponent Component={TopMovieItem} data={data} loading={loading}/>
    </div>
    
  )
}

export default TopMovie