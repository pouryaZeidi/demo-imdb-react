import Navbar from '@/component/Navbar'
import React from 'react'
import { Inter } from "next/font/google";
import style from '@/styles/Layout.module.css'
const inter = Inter({ subsets: ["latin"] });
const Layout = ({children}) =>{
  return (
    <div className={`${inter.className} ${style.container}`}>
        <div className={style.navContainer}>
            <Navbar/>
        </div>
        <div className={style.pages}>{children}</div>
        <footer>footer</footer>
    </div>
  )
}

export default Layout