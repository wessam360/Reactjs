import React from 'react'
import Header from "./componenets/Header/header";
import Footer from "./componenets/Footer/Footer";
import { Outlet } from 'react-router-dom';
export default function 
() {
  return (
    <>
       <Header/>
    <Outlet/>
       <Footer/>
   

    </>
  )
}
