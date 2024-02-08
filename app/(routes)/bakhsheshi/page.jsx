export default function HomePage(){
    return (
        <>
            <div className="w-full flex flex-row px-[50px] py-[15px] items-center justify-between bg-gray-400">
                <div className="flex flex-row items-center gap-x-[50px]">
                    <span className="text-white cursor-pointer">خانه</span>
                    <span className="text-white cursor-pointer">درباره ما</span>
                </div>
                <span className="text-white cursor-pointer">ورود/ثبت نام</span>
            </div>
            <div className="w-full mt-4 flex flex-row items-center">
                <div className="w-full">
                    <img className="h-[500px] object-contain" src="https://s3-alpha-sig.figma.com/img/edcb/6ef0/d95e7573b5c1d55c67f9f94f28bed9fb?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m8~wY-sujjenC-YWFavFTRYBxLAFw5YuuJ4Rk5G8AncpdelXkU06hb3JN08yzyY2dxrhZkh0w-Ta3mEWwgLdTFN0dwn4YYYgMjLlVZTekoC9md6VIqW~LjR2~6Bg0MtsmoQjKxuzH5MCM6segPsbqmos3S3h79cvXjz10qnhe2~ZBgykyO7W6cgWsPuNduG54j4kftQTReG-Z0jjlpOlZLp1s9iKBOts7TxDYv0vCVnkCKzSMqDPmHINO5cu2wLvSe3iLRrttmcVyeNXqUtg79gfboevuLhSI98LwwL~1mUGY9Y6fa9Z6V5xUjZufEbErorAWbOiT8YpJlR2-ePP6w__"></img>
                </div>
                <div className="w-full flex flex-col items-center justify-center">
                    <span className="font-bold text-[18px]">پرداخت هوشمند ، حامی کره دوست داشتنی! </span>
                    <span className="w-[300px] items-center text-center">با حذف رسید های کاغذی سالانه از قطع <strong className="font-bold">یک</strong> میلیون درخت جلو گیری میشود </span> 
                </div>
                <div className="w-full h-full justify-end items-end mt-[100px]">
                    <img src="https://s3-alpha-sig.figma.com/img/9f96/3391/66ba46178f71bdfeeaac3c891db877f4?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L-lJdQxGCXziuQD-RdJr8pdciMLx5IUryqeLG4vkG1xCElMuQbbgaULUMEav1uSUOlgLvAZIemBZ-8JD1NrftMZnjV7VwcG9qPUlBGbPVxwNnBZiKvDyXwz8aQDTolDCc3NpxRhuJ8yNjBawFtgXqxJmSRPEcX9SfyNhwnmKQ0dJsh-8aKO6XiT9Z5H8vlIdOt-Zb8T9YPbSLTz112FuJLF1PomXIHhil~RG8Pc4QFuKaHmTs0mZf4CMTjvEBfzYipadxKeS~LMzDRG91rX0aU0-KKgf49Q7HQEc6t3lA9cPhNSXPDgoyANXSDJpEZMdAiCzCRRx4suOLphZ~Pkt0w__"></img>
                </div>
            </div>
            <div className="w-full h-[500px] mt-5 bg-[#FFD782] py-[30px] rounded-md flex flex-row justify-around">
                <div className="flex flex-col items-center justify-center">
                    <span className="font-[800] text-[24px]">خداحافظی با صف های طولانی!</span>
                    <span className="text-[18px] mt-3">کمتر از 3 ثانیه برای هر واکنش</span>
                </div>
                <img src="https://s3-alpha-sig.figma.com/img/a01b/49d8/98ee6a48cc332942e9a994ca31ef8c82?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=icK4EJV7nadBs9-4Ffv8DRxDpN9e9DukvIrAlTiVq0a~AFI~2ZByZUbp2xthP9~rmV9eSRQuRkktT0OFegHX-eu02KzndtsMLmmLo9fidIoBLZPCFeyIqQ8H39nQvVgZ0vkRYw4v~P4fgo4vMDfwq-RqnTQJUZGba05vS0FYbgDiNJT83wA7WTPiD4ZgUaJ4O06JfzW6lpvAh5vT21PQ1P4oONW2o-5jK7Ncii0JW5K-iWERJh0e9q3QfQUAnVxijeXbik4VCGUAYZ5FsP4NhgQFu~aaOa8VLeMq01RBVhPplUI914Z5KlXTZOgAARslRSWNS-4DzG-UDKf60JyfCQ__"></img>
            </div>
            <div className="w-full mt-5 h-[500px] bg-[#4D94B6] py-[30px] rounded-md flex flex-row justify-around">
                <div className="flex flex-col items-center justify-center">
                    <span className="font-[800] text-white text-[24px]">صرفه جویی در۴۰۰ هزار لیتر آب </span>
                    <span className="text-[18px] text-white mt-3">آب مایه حیات!</span>
                </div>
                <img src="https://s3-alpha-sig.figma.com/img/ad0a/5816/3751fd27f25cb65194ce492bcdaf4f02?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z~MXiA-y47wQTqijajpCibgOlB3hOdb3cttmjrqt3BYB8SI3~VPrFKngaAhsYFvP5wDtemtcSp3pmukYA4A6s-t3hlhjUJKJ2YwRvIQqq0KTi4xwyiBImWbCezl405RSTGDwyEyiArOC5ysXGjgZY-07xuApz0QJMDul19Q44o0aQircVUktPCPk0oMD9oFosOnbIUz~mX-TNAxSF0S1MmyPvJHqnbPc3PrlzyDclJM6TVgm8q9x4ZrCj39b1rwYKouGxIRYfH~c5ecQh0dY9X07XDXn2XpxXFcnpbOR12MckJoZgzQ1M9eA-d9jF8p~kgqCgMm4y69UdOkuAYeZZA__"></img>
            </div>
            <div className="w-full mt-5 h-[500px] bg-[#7A9E93] py-[30px] rounded-md flex flex-row justify-around">
                <div className="flex flex-col items-center justify-center">
                    <span className="font-[800] text-white text-[24px]">صرفه جویی در مصرف 3 میلیون درخت</span>
                    <span className="text-[18px] text-white mt-3">هر درخت سالانه 118 کیلوگرم اکسیژن تولید میکند!</span>
                </div>
                <img src="https://s3-alpha-sig.figma.com/img/af93/77b4/62a96a85e002705205adc1731e657500?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TZV3X5VnKwpyNMSD1HDEh8jb-~Y0-p3pflBUHDv6M37UjOgFzWjhX9RmaG3NIwHNHOvdTJb3lt4flzn9l96w7eSwNBs2Rk-Zz1dtNqujjJWMYK5jvP3rQIO9jP26ppnvZoZvItX4XiWEInjk23wDMw~4Xl3XVmVwEGfRWI0~jPw3JlLtH5uHtcpVkZAq6dJd9uGAl6C81c1nBftuccOmoe9HbmrDv6C-DiNpXWams0L5FQjJvEv92T9AksLuGA2dAi74U5ICutHcsBtsnCELOmH1kpgSfRQq07sTgo8rL5-y5QcpA-qQ7as~SrGStzz0BNcD9aN~CechodgWkSxwjQ__"></img>
            </div>
            <div className="h-[50px]"></div>
        </>
    )
}