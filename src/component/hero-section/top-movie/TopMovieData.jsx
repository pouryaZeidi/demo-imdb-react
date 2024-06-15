import React from 'react'
import style from '@/styles/Topmoviedata.module.css'
import { BiSolidBookmarkPlus } from "react-icons/bi";
import { FaRegCirclePlay } from "react-icons/fa6";
import { GrLike } from "react-icons/gr";
import { FcLike } from "react-icons/fc";

const TopMovieData = ({data,itemHover}) => {
  return (
    <div className={style.topmoveData}>
      <div className={style.topmovieSub}>
        <img src={data?.img2} alt="subpadding" className={style.paddingsub} />
        <BiSolidBookmarkPlus className={style.Bookmark} />
      </div>
      <div className={style.playContainer}>
        <FaRegCirclePlay  className={`${style.playBtn} ${itemHover ? style.yellow : ''}`}/>
        <div className={style.playTitles}>
          <h2 className={style.txtPlay}>{data?.title}</h2>
          <p className={style.txtP}>{data?.subTitle}</p>
          <div className={style.icones}>
          <p className={style.likeIcones}>
          <GrLike />
          <span>{data?.like}</span>
          </p>
          <p className={style.likeIcones2}>
            {data?.heart ? <FcLike /> : null }
            <span>{data?.heart}</span>
          </p>
        </div>
        </div>
      </div>
      <div className={style.timerContainer}><span className={style.trailTime}>{data?.time}</span></div>
    </div>
  );
}

export default TopMovieData;
