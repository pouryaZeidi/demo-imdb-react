import React, { useEffect, useState } from 'react'
import TopMovieData from './TopMovieData'
import style from '@/styles/Topmovie.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import response from '@/../data/topMovie.json'
import { MoonLoader } from 'react-spinners';
import { constantStyles } from '@/Constant/constant';

const TopMovie = () => {
  const [data,setData] = useState(null)
  const [loading , setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setData(response)
      setLoading(false)
    },100);
  },[])

  return (
    <>
    { loading ? <div className={style.container}><MoonLoader size={50} color={constantStyles.white} /></div> :  <div className={style.container}>
      {data ?     <Carousel className={style.Carousel}>
      {data?.map((item)=><div key={item?.id} className={style.topMovie} style={{backgroundImage:`url(${item?.img})`}} >
            <TopMovieData data={item} />
          </div>)}
    </Carousel> : <h2>Data not available</h2>}
    </div>}
    </>
  )
}

export default TopMovie