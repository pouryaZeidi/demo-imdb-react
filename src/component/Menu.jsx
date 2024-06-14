import React from 'react'
import style from '@/styles/Menu.module.css'

const Menu = ({showMenu,onClick,id}) => {
  return (
    <div className={`${style.menuContainer} ${showMenu ? style.showMenu : ''}`}>
        <span id={id} className={style.closebtnMenu} onClick={onClick}>X</span>
    </div>
  )
}
export default Menu