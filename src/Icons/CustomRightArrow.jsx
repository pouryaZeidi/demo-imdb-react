import React from 'react';
import { CiSquareChevRight } from "react-icons/ci";
import style from '@/styles/customArrow.module.css';

const CustomRightArrow = ({ onClick }) => {
  return (
    <button className={`${style.customArrow} ${style.customRightArrow}`} onClick={onClick}>
      < CiSquareChevRight  size={80} />
    </button>
  );
};

export default CustomRightArrow;
