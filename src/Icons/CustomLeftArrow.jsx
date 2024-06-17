import React from 'react';
import { CiSquareChevLeft } from "react-icons/ci";
import style from '@/styles/customArrow.module.css';

const CustomLeftArrow = ({onClick}) => {
  return (
    <button className={`${style.customArrow} ${style.customLeftArrow}`} onClick={onClick}>
      < CiSquareChevLeft size={80}  />
    </button>
  );
};

export default CustomLeftArrow;
