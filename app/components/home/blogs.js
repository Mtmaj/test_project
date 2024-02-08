"use client"
import Link from "next/link"
const BlogCard = ()=>{
    return (
        <div className="w-full flex flex-col h-[400px] group bg-white border-[0.5px] border-[rgba(0,0,0,0.2)] ">
            <div className="w-full h-[250px] overflow-hidden relative">
                <img src="https://www.solopress.com/blog/wp-content/uploads/2020/11/Lorem-Ipsum.jpg" className="w-full absolute object-cover transition-all h-[250px] group-hover:scale-[1.2]" />
                <div className="absolute z-[1] bg-white w-full h-[200px] opacity-[0] group-hover:opacity-[0.2] transition-all"></div>
            </div>
            <div className="w-full h-full flex flex-col items-start px-[10px] py-[10px] gap-y-[8px]">
                <div className="flex items-end justify-between w-full">
                    <span className="font-bold">لورم ایپسوم</span>
                    <span className="text-[14px]">1402/07/13</span>
                </div>
                
                <p className="text-justify text-[14px]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</p>
                <div className="h-full"></div>
                <div className="w-full flex justify-center">
                    <div className="relative flex items-end justify-center cursor-pointer group">
                        <div className="w-full h-0 group-hover:h-full absolute bg-blue transition-all rounded"></div>
                        <Link href={"/"} className="z-[5] border-[1px] group-hover:text-white transition group-hover:border-transparent border-blue rounded text-[14px] px-[10px] py-[5px]" >نمایش مقاله</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
const BlogsHome = ()=>{
    return (
        <div className="container md:px-[90px] px-[40px] flex flex-col mx-auto items-start py-[40px] gap-y-[30px]">
            <span className="font-extrabold text-[19px]">مقالات و مطالب مفید</span>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-[15px] gap-y-[20px] w-full">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    )
}

export default BlogsHome