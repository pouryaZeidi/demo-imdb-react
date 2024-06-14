import React from 'react'
import style from '@/styles/Upnextitem.module.css'
import { IoPlayCircleOutline } from "react-icons/io5";

const UpNextItem = () => {
  return (
    <div className={style.nextContainer} >
      <div className={style.movieLine}>
        <div className={style.picofMovie}>
          <img src={'/whatwhatch.jpg'} alt="whattowatch" className={style.img}  />
        </div>
        <div className={style.picsTitle} >
          <div className={style.playLine}>
              <IoPlayCircleOutline className={style.playButton} />
              <p className={style.timer} >1:30</p>
          </div>
          <div>
            <h2 className={style.txtMovie}>5 Queer-Themed Picks That Celebrate Young Love</h2>
            <p className={style.subTitle}>"Heartstopper" and More</p>
          </div>
        </div>

      </div>









      <div className={style.movieLine}></div>
      <div className={style.movieLine}></div>
    </div>
  )
}

export default UpNextItem