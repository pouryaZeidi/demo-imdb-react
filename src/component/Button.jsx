import React from "react";
import style from "@/styles/Button.module.css";
import Link from "next/link";

const Button = ({
  children,
  btnInputleft,
  btnInputright,
  color,
  btnYellow,
  btnWatch,
  href,
  leftIcon,
  rightIcon,
  onClick,
  id
}) => {
  
  return (
    <>
      {href ? (
        <Link id={id} href={href} className={`${style.btn} ${ btnInputleft ? style.btnInputleft : ""} ${btnInputright ? style.btnInputright : ""} ${btnYellow ? style.btnYellow : null} ${btnWatch ? style.btn : null}`} style={color ? { backgroundColor: color } : null} 
        >
            {leftIcon ? leftIcon   : null}
            <span className={style.txt}>{children}</span>
            {rightIcon ? rightIcon : null}
        </Link>
      ) : (
        
        <button id={id} onClick={onClick} className={`${style.btn} ${ btnInputleft ? style.btnInputleft : "" } ${btnInputright ? style.btnInputright : ""} ${btnYellow ? style.btnYellow : null} ${btnWatch ? style.btn : null}`} style={color ? { backgroundColor: color } : null} 
        >
            {leftIcon ? leftIcon : null}
            <span className={style.txt}>{children}</span>
            {rightIcon ? rightIcon : null}
          </button>
      )}
    </>
  );
};
export default Button;
