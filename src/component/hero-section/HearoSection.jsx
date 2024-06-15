import React from 'react'
import TopMovie from './top-movie/TopMovie'
import UpNext from './up-next/UpNext'
import style from '@/styles/Herosection.module.css'

const HearoSection = () => {
  return (
    <div className={style.heroContainer} >
        <TopMovie/>
        <UpNext  />
    </div>
  )
}

export default HearoSection