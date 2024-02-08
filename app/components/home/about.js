"use client"

import {BsFillBoxSeamFill} from "react-icons/bs"
import LineImg from "@/public/images/line.png"
import Image from "next/image"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';


// import required modules
import { EffectCards } from 'swiper/modules';
const ItemsAbout = (props)=>{
    return (
        <div className="w-full flex items-center justify-center flex-col gap-y-[20px]">
            <div className="cursor-pointer flex items-center justify-center w-16 h-16 relative group z-[5]">
                <div className="w-16 h-16 absolute bg-blue opacity-[0.5] group-hover:opacity-[1]  group-hover:bg-blue rounded group-hover:rotate-45 transition-all"></div>
                {props.icon}
            </div>
            <span className="" style={{fontFamily:"Peyda-Bold"}}>{props.text}</span>
        </div>
    )
}

const About = ()=>{
    return (
        <div className="w-full flex flex-col items-center gap-y-[50px] my-[40px]">
            <div className="flex flex-col items-start">
                <span className="md:text-[25px] text-[20px] text-reguler z-[5]" style={{fontFamily:"Peyda-Bold"}}>درباره ما</span>
                <div className="w-[70%] bg-[rgba(0,0,0,0.5)] h-[2px] rounded"></div>
            </div>
            <div className="container grid md:grid-cols-2 grid-cols-1 justify-center gap-y-[50px]">
                <div className="w-full grid lg:grid-cols-3 grid-cols-2 justify-center px-[20px] items-center gap-y-[50px]">
                    <ItemsAbout icon={<BsFillBoxSeamFill className="z-[5] group-hover:text-white" size={25} />} text={"ارسال سریع"} />
                    <ItemsAbout icon={<BsFillBoxSeamFill className="z-[5] group-hover:text-white" size={25} />} text={"ارسال سریع"} />
                    <ItemsAbout icon={<BsFillBoxSeamFill className="z-[5] group-hover:text-white" size={25} />} text={"ارسال سریع"} />
                    <ItemsAbout icon={<BsFillBoxSeamFill className="z-[5] group-hover:text-white" size={25} />} text={"ارسال سریع"} />
                    <ItemsAbout icon={<BsFillBoxSeamFill className="z-[5] group-hover:text-white" size={25} />} text={"ارسال سریع"} />
                    <ItemsAbout icon={<BsFillBoxSeamFill className="z-[5] group-hover:text-white" size={25} />} text={"ارسال سریع"} />
                </div>
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper w-[80%] my-auto"
                >
                    <SwiperSlide><img src="https://gifto.biz/wp-content/uploads/2022/04/laminate-matt-namecard-02.jpg" className="w-full h-full object-cover" /></SwiperSlide>
                    <SwiperSlide><img src="https://gifto.biz/wp-content/uploads/2022/04/laminate-matt-namecard-02.jpg" className="w-full h-full object-cover" /></SwiperSlide>
                    <SwiperSlide><img src="https://gifto.biz/wp-content/uploads/2022/04/laminate-matt-namecard-02.jpg" className="w-full h-full object-cover" /></SwiperSlide>
                    <SwiperSlide><img src="https://gifto.biz/wp-content/uploads/2022/04/laminate-matt-namecard-02.jpg" className="w-full h-full object-cover" /></SwiperSlide>
                    <SwiperSlide><img src="https://gifto.biz/wp-content/uploads/2022/04/laminate-matt-namecard-02.jpg" className="w-full h-full object-cover" /></SwiperSlide>
                    <SwiperSlide><img src="https://gifto.biz/wp-content/uploads/2022/04/laminate-matt-namecard-02.jpg" className="w-full h-full object-cover" /></SwiperSlide>
                    <SwiperSlide><img src="https://gifto.biz/wp-content/uploads/2022/04/laminate-matt-namecard-02.jpg" className="w-full h-full object-cover" /></SwiperSlide>
                    <SwiperSlide><img src="https://gifto.biz/wp-content/uploads/2022/04/laminate-matt-namecard-02.jpg" className="w-full h-full object-cover" /></SwiperSlide>
                    
                </Swiper>
            </div>
            
        </div>
        
    )
}

export default About