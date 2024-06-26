'use client'
import React from 'react';
import Menu from "@/Menu";
import Loader from "@/Loader";
import Header from "@/Header";
import { Footer } from "@/Footer";
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

const LayoutWrapper = ({children}) => {
    const state = useSelector((state)=>state)
    console.log(state)
  return (
    <div>
        <Header/>
        {state?.appReducer?.isLoggedIn && <Menu/>}
        {children}
        {state?.appReducer?.isShowLoader && <Loader/>}
        <Footer/>
        <ToastContainer/>
    </div>
  );
}

export default LayoutWrapper;
