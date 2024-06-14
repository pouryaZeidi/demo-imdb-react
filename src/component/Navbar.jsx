import React, { useState } from 'react'
import style from '@/styles/Navbar.module.css'
import Image from 'next/image'
import NavbarItems from './Navbaritems'
import Iconhamburger from '@/Icons/Iconhamburger'
import { constantStyles } from '@/Constant/constant'
import InputComponent from './InputComponent'
import IconSearch from '@/Icons/IconSearch'
import IconBookmark from '@/Icons/IconBookmark'
import IconDown from '@/Icons/IconDown'
import VerticalDivider from './VerticalDivider'
import Button from './Button'
import Menu from './Menu'

const Navbar = () => {

  const [state,setState] = useState({showMenu:false,showSearchBox:false,showLanguagebar:false,showAllbtn:false})
  const clickHandler = (event) => {
    const id = event.currentTarget.id
    setState({...state ,[id]:!state[id]})
}
console.log(state)
  return (
    <nav className={style.conatiner}>
         <div className={style.hamburgerContainer}>
          <Iconhamburger size={22} color={constantStyles.white} />
         </div>
        <img src={'/IMDblogo.svg'} alt="imdb" name={'imgImdblogo'}  style={{width:'64px', height:'32px'}} />
        <NavbarItems id={'showMenu'} onClick={clickHandler} name={'menu'} iconLeft={<Iconhamburger size={22} color={constantStyles.white} />} text={"Menu"}/>
        <div className={style.searchContainer}>
          <InputComponent id={'showAllbtn'}   btnRightIcon={<IconDown size={10} color={constantStyles.black} />} name={'input'}  btnleft onClick={clickHandler}  btnText={"All"} btnColor={constantStyles.white} placeholder={"Search IMDb"} rightIcon={<IconSearch size={20} color={constantStyles.gray}/>}/>
          <div id='showAllbtn' className={`${style.containerAllbtn} ${state.showAllbtn ? style.showAll : ''}`} onMouseLeave={clickHandler}>
          <span>Baraye mesal arz mikonam</span>
          </div>
        </div>
        <div className={style.space}/>
        <div id={'showSearchBox'} className={style.searchIcon} onClick={clickHandler}> <IconSearch size={20} color={constantStyles.white}/> </div>
        <NavbarItems name={'imdbPro'} href={"/"} img={"/imdbpro.png"} imgw={52} imgh={14}/>
        <VerticalDivider name={'verticalline'} color={constantStyles.verticalBorder} />
        <NavbarItems name={'whatchlist'} href={"/"} iconLeft={<IconBookmark size={24} color={constantStyles.white }/>} text={"Watchlist"} />
        <NavbarItems name={'signin'} href={"/registration"} text={"Sign In"} />
        <div className={style.showLanguagebar} > 
          <NavbarItems id={'showLanguagebar'} onClick={clickHandler} name={'lan'} iconRight={<IconDown size={14} color={constantStyles.white }/>} text={"EN"}/>
          <div id={'showLanguagebar'} className={`${style.lanContainer} ${state.showLanguagebar ? style.Showlan : ''}`} onMouseLeave={clickHandler}>1</div>
        </div>
        <div className={style.btnUseapp} >
          <Button btnYellow >Use app</Button>
        </div>
        <div className={`${style.searchBox} ${state.showSearchBox ? style.showSearchBox : ''}`}>
          <input className={style.inputSearchBox} placeholder={"Search IMDb"} />
          <span id='showSearchBox' className={style.closebtn} onClick={clickHandler}>X</span>
        </div>
        <Menu  showMenu={state.showMenu} onClick={clickHandler} id={'showMenu'} />
    </nav>
  )
}

export default Navbar