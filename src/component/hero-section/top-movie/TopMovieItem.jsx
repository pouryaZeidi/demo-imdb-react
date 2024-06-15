import React, { useState } from 'react'
import style from '@/styles/Topmovie.module.css'
import TopMovieData from './TopMovieData'

const TopMovieItem = ({item}) => {
    const [hover,setHover] = useState(false)
  return (
    <div
    onMouseEnter={()=>setHover(true)}
    onMouseLeave={()=>setHover(false)}
    key={item?.id} className={style.topMovieItem} style={{backgroundImage:`url(${item?.img})`}} >
        <TopMovieData data={item} itemHover={hover} />
    </div>
  )
}

export default TopMovieItem