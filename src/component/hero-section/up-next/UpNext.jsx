import React from 'react';
import style from "@/styles/Upnext.module.css";
import UpNextItem from './UpNextItem';

const UpNext = () => {
  return (
    <div className={style.headTitle}>
      <div className={style.textDiv}>
        <h2 className={style.txtTitle}>UpNext</h2> 
      </div>
      <UpNextItem/>
    </div>
  );
}

export default UpNext;
