import LogoImg from "@/public/images/logo.jpg"
import Image from "next/image"
import Link from "next/link"
import {HiOutlineMenu} from "react-icons/hi"
const Header = ()=>{

    return (
        <div className="w-full md:px-[0px] px-[20px] md:py-[0px] py-[10px] fixed z-[100]">
            <div className="drop-shadow justify-between w-full flex flex-row items-center bg-white   gap-x-[50px] md:px-[50px] px-[15px] py-[10px]">
                <div className="md:w-fit w-full flex justify-start">
                    <Image src={LogoImg} alt="KhatamCard" className="md:w-[60px] w-[40px]"/>
                </div>
                
                <div className="md:flex flex-row gap-x-[50px] hidden">
                    <Link className="text-[16px] hover:text-blue transition-all font-bold opacity-[0.8] hover:opacity-[1]" href={"/"}>محصولات</Link> 
                    <Link className="text-[16px] hover:text-blue transition-all font-bold opacity-[0.8] hover:opacity-[1]" href={"/"}>مقالات</Link>
                    <Link className="text-[16px] hover:text-blue transition-all font-bold opacity-[0.8] hover:opacity-[1]" href={"/"}>درباره ما</Link>  
                </div>
                <span className="whitespace-nowrap text-white w-full text-[18px] justify-center md:hidden flex">خاتم کارت</span>
                <span className="text-[17px] md:block hidden">09945059496</span>
                <div className="w-full md:hidden flex justify-end">
                    <HiOutlineMenu className="" size={30} />
                </div>
            </div>
        </div>
        
    )
}

export default Header