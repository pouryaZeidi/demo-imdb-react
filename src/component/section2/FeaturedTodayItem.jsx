import React from 'react'
import style from '@/styles/FeaturedTodayItem.module.css'
const FeaturedTodayItem = ({item}) => {
    console.log(item)
  return (
    <div className={style.carouselItem} >
        <div className={style.pic1} >
        <img src={item?.img} alt="Featured" className={style.pic1} />
        </div>



    </div>
  )
}

export default FeaturedTodayItem