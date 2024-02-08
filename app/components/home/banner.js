"use client"

import LineImg from "@/public/images/line.png"
import Image from "next/image"
import Link from "next/link"
import {useEffect,useState} from "react"
import {AiOutlineArrowLeft} from "react-icons/ai"

const Shape = ()=>{
    return (
        <svg className="md:w-[500px] w-[400px] ml-[40px]" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                <stop offset="0%" stopColor="rgba(238, 95, 95, 1)"></stop>
                <stop offset="100%" stopColor="rgba(255, 133.477, 70.633, 1)"></stop>
            </linearGradient>
            </defs>
            <path
            className="shapeanim"
            fill="url(#sw-gradient)"
            stroke="url(#sw-gradient)"
            strokeWidth="0"
            d="M21.5-31.9c7.4 3.3 15.2 7.4 18.8 13.9 3.7 6.5 3.1 15.3 1.3 23.5-1.9 8.2-5.1 15.8-10.5 20.8-5.3 5-12.9 7.4-20.7 10.3-7.9 3-16 6.4-23.4 5.3-7.5-1-14.4-6.6-19-13.4-4.5-6.7-6.8-14.7-7.7-22.7-1-8-.7-16.1 1.9-23.6 2.6-7.5 7.6-14.5 14.3-18.1 6.7-3.7 15.1-4 22.8-2.9C7-37.7 14-35.2 21.5-31.9z"
            transform="translate(55 55)"
            style={{
                WebkitTransition: "all 0.3s ease 0s",
                transition: "all 0.3s ease 0s",
            }}
            ></path>
        </svg>
    )
}


const Banner = ()=>{
    const [is_first,set_is_first] = useState(true)
    useEffect(()=>{
        if(is_first){
            TextAnimation()
            set_is_first(false)
        }
    })
    async function TextAnimation(){
        var texts = ["انتخابی مطمئن و راحت","سابقه کار بالا","کار با حرفه ای ها","لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاولوژی مورد نیاز، و "]
        var myspan = document.getElementById("aboutmebanner")
        var lastText = myspan.innerHTML
        while(true){
            for(var i = 0;i<texts.length;i++){
                for(var j = 0;j<texts[i].length+1;j++){
                    myspan.innerHTML = lastText + texts[i].substring(0,j)
                    await sleep(100)     
                }
                await sleep(500)
                for(var j = texts[i].length-1;j>=0;j--){
                    myspan.innerHTML = lastText + texts[i].substring(0,j)
                    await sleep(100)     
                }
                await sleep(500)
            }
        }
    }
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    return (
        <div className="flex lg:flex-row flex-col justify-between md:px-[80px] px-[30px] md:mt-[0] mt-[30px] items-center gap-y-[30px]">
            <div className="w-full flex justify-center lg:ml-[200px]">
                <div className="flex flex-col md:items-start items-center gap-y-[20px] md-w-fit w-full">
                    <div className="relative flex items-end">
                        <span className="md:text-[40px] text-[30px] text-bold z-[5]" style={{fontFamily:"Peyda-Bold"}}>خاتم کارت</span>
                        <Image src={LineImg} alt="Line" className="absolute mb-[-15px] mr-[-10px]" />
                    </div>
                    <p id="aboutmebanner" className="min-h-[80px] md:text-start text-center md:text-[25px] text-[18px] md:w-[500px] w-full overflow-y-hidden" style={{fontFamily:"Peyda-Bold"}} >چرا ما ؟ : </p>
                    <div className="flex w-full flex-row gap-x-[15px]">
                        <Link className="px-[25px] py-[5px] flex items-center w-full justify-center md:text-[18px] text-[14px] rounded border-1 bg-gradient-to-r from-blue md:w-fit to-[rgba(255,133.477,70.633,1)] text-white drop-shadow hover:drop-shadow-xl transition-all duration-500" href={"/"}>محصولات</Link>
                        <Link className="md:px-[25px] py-[5px] justify-center md:text-[18px] w-full text-[14px]  rounded border-1 border-green border-[1px] text-black md:w-fit  drop-shadow hover:drop-shadow-xl bg-transparent hover:bg-green hover:text-white transition-all duration-500 hover:border-transparent flex flex-row items-center gap-x-[10px] hover:gap-x-[15px]" href={"/"}>اطلاعات بیشتر <AiOutlineArrowLeft/></Link>
                    </div>
                </div>
            </div>
            <div className="relative flex items-center justify-center ml-[-50px]">
                 <Shape />
                 <img width={400} src="https://d4l6e04z43qjx.cloudfront.net/img/logo-design/busniess_card_mockup.png" className="absolute z-[5] h-[350px] md:ml-[90px] ml-[180px] object-cover imganim transition-all" />
            </div>
           
        </div>
    )
}

export default Banner