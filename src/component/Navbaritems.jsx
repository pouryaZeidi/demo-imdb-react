import Image from "next/image"
import Link from "next/link"
import style from "@/styles/navbarItems.module.css"


const NavbarItems = ({href,img,iconLeft,iconRight,text,imgw,imgh,name,onClick,id}) => {
  return (
    <>
    {href ? 
    <Link id={id} data-name={name} href={href} className={style.container} >
        {img ? 
        <img src={img} alt="imdb pro"  style={{width:`${imgw}px`, height:`${imgh}px`}} />
        :
        <div className={style.content} >
            {iconLeft ? iconLeft:null}
            <span className= {style.title} > {text} </span>
            {iconRight ? iconRight:null}
        </div>
        }
    </Link>
    :
    <div id={id} onClick={onClick} data-name={name}  className={style.container}>
        <div className={style.content} >
            {iconLeft ? iconLeft:null}
            <span className= {style.title} > {text} </span>
            {iconRight ? iconRight:null}
        </div>
    </div>
    }
    </>
  )
}

export default NavbarItems