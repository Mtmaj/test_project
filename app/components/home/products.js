import Link from "next/link"
import Image from "next/image"
import LineImg from "@/public/images/line.png"


const ProductCard = ()=>{
    return(
        <div className="flex w-full justify-center">
            <div className="w-[90%] border-[1px] flex flex-col items-center bg-white gap-y-[10px] pb-[10px] border-[rgba(0,0,0,0.2)] transition-all duration-500 hover:shadow-md border-[0px]">
                <img src="https://gifto.biz/wp-content/uploads/2022/04/laminate-matt-namecard-02.jpg" className="object-cover w-full h-[150px]" />
                <span className="text-[18px]">کارت هوشمند</span>
                <span className="opacity-[0.8]">25000T</span>
                <div className="relative flex items-end justify-center cursor-pointer group">
                    <div className="w-full h-0 group-hover:h-full absolute bg-blue transition-all rounded"></div>
                    <Link href={"/"} className="z-[5] border-[1px] group-hover:text-white transition group-hover:border-transparent border-blue rounded text-[14px] px-[10px] py-[5px]" >دریافت محصول</Link>
                </div>
            </div>
        </div>
    )
}
const Products = ()=>{
    return (
        <div className="w-full md:px-[50px] px-[10px] mb-[20px] mx-auto items-center">
            <div className="w-full bg-black flex rounded-[20px] items-center  flex-col md:px-[20px] px-[10px] py-[20px] gap-y-[30px] ">
                <div className="flex flex-col items-start">
                    <span className="md:text-[25px] text-[20px] text-reguler z-[5]" style={{fontFamily:"Peyda-Bold"}}>برترین محصولات</span>
                    <div className="w-[70%] bg-[rgba(0,0,0,0.5)] h-[2px] rounded"></div>
                </div>
                <div className="grid md:grid-cols-4 grid-cols-2 w-full gap-y-[40px]">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
                <span className="border-[1px] border-[rgba(0,0,0,0.5)] hover:border-blue hover:bg-blue hover:text-white transition-all px-[20px] py-[5px] rounded cursor-pointer text-[14px]">مشاهده تمام موارد...</span>
            </div>
        </div>
    )
}

export default Products