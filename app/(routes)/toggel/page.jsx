"use client"

import { useEffect, useState } from "react";

export default function(){
    const [is_on,setIsOn] = useState(false)
    if(!is_on){
    var y2 = "10%"
    var y2l = "60%"
    var y1l = "60%"
    var x1l = "10%"
    var x2l = "90%"
    }else{
        var y2 = "90%"
        var y2l = "90%"
        var y1l = "10%"
        var x1l = "90%"
        var x2l = "90%"
    }
    // var animation = document.getElementById("MyAnim")
    var n_1_l = null
    var n_2_l = null
    useEffect(()=>{
        n_1_l = document.getElementById("NLO")
        n_2_l = document.getElementById("NLl")
        if(is_on){
            document.body.style.backgroundColor = "#fff"
        }else{
            document.body.style.backgroundColor = "#000"
        }
    })
    
    function startAnimationToN() {
        
        y2 = ((Number(y2.split("%")[0]))+5) + "%"
        console.log(y2)
        if((Number(y2.split("%")[0])) >= 90){
            y2 = "90%"
        }
        y2l = ((Number(y2l.split("%")[0]))+(40 / 18)) + "%"
        if((Number(y2l.split("%")[0])) >= 90){
            y2l = "90%"
        }
        y1l = ((Number(y1l.split("%")[0]))-(40 / 12)) + "%"
        if((Number(y1l.split("%")[0])) <= 10){
            y1l = "10%"
        }
        x1l = ((Number(x1l.split("%")[0]))+5) + "%"
        if((Number(x1l.split("%")[0])) >= 90){
            x1l = "90%"
        }
        var y2_i = Number(y2.split("%")[0])
        var y2l_i = Number(y2l.split("%")[0])
        var y1l_i = Number(y1l.split("%")[0])
        var x2l_i = Number(x2l.split("%")[0])
        var x1l_i = Number(x1l.split("%")[0])
        n_1_l.setAttribute("y2",y2_i+"%")
        n_2_l.setAttribute("y2",y2l_i+"%")
        n_2_l.setAttribute("x2",x2l_i+"%")
        n_2_l.setAttribute("y1",y1l_i+"%")
        n_2_l.setAttribute("x1",x1l_i+"%")
        
        if((Number(y2.split("%")[0])) < 90)
            requestAnimationFrame(startAnimationToN)
    }
    function startAnimationToF() {
        y2 = ((Number(y2.split("%")[0]))-5) + "%"
        
        if((Number(y2.split("%")[0])) <= 10){
            y2 = "10%"
        }
        y2l = ((Number(y2l.split("%")[0]))-(40 / 18)) + "%"
        if((Number(y2l.split("%")[0])) <= 60){
            y2l = "60%"
        }
        
        y1l = ((Number(y1l.split("%")[0]))+(40 / 10)) + "%"
        if((Number(y1l.split("%")[0])) >= 60){
            y1l = "60%"
        }
        x1l = ((Number(x1l.split("%")[0]))-5) + "%"
        if((Number(x1l.split("%")[0])) <= 10){
            x1l = "10%"
        }
        console.log("ok")
        var y2_i = Number(y2.split("%")[0])
        var y2l_i = Number(y2l.split("%")[0])
        var y1l_i = Number(y1l.split("%")[0])
        var x2l_i = Number(x2l.split("%")[0])
        var x1l_i = Number(x1l.split("%")[0])
        n_1_l.setAttribute("y2",y2_i+"%")
        n_2_l.setAttribute("y2",y2l_i+"%")
        n_2_l.setAttribute("x2",x2l_i+"%")
        n_2_l.setAttribute("y1",y1l_i+"%")
        n_2_l.setAttribute("x1",x1l_i+"%")
        
        if((Number(y2.split("%")[0])) > 10){
            requestAnimationFrame(startAnimationToF)}
    }
   
    
    return (
        <div className="w-full h-full flex flex-col gap-y-[10px] items-center justify-center" >
            <span className={"text-[50px] transition-all duration-300 "+ (is_on?"text-black":"text-white")} dir="ltr">ME :</span>
            <div className="flex items-center gap-x-[30px] flex-row-reverse">
                <div className={" relative flex flex-row h-[90px] items-center transition-all duration-400 w-[170px] rounded-full shadow-inner gap-x-[2px] " + (is_on?"bg-[#008000]": "bg-[#FF0000]")}>
                    <div  className={"absolute w-full h-full flex flex-row items-center justify-start transition-all ease-in-out duration-500 " + (is_on?"opacity-0":"opacity-[1]") }>
                        <div className="relative w-[10px] h-[13px] scale-[5] mr-[40px]">
                            <div className="absolute  z-[1] w-full  h-[100%] flex items-end justify-end">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" >
                                    <line className="" x1="10%" y1="10%" x2={"10%"} y2={"90%"} markerEnd="url(#arrow)" strokeLinecap="round" stroke="white" stroke-width="18%">
                                    </line>
                                </svg>
                            </div>
                            <div className="absolute  z-[1] w-full h-[100%] flex items-end justify-end">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" >
                                    <line className="" x1="10%" y1="10%" x2={"90%"} y2={"10%"} markerEnd="url(#arrow)" strokeLinecap="round" stroke="white"  stroke-width="18%">
                                    </line>
                                </svg>
                            </div>
                            <div className="absolute  z-[1] w-full h-[100%] flex items-end justify-end">
                                <svg xmlns="http://www.w3.org/2000/svg"  width="100%" height="100%" >
                                    <line className="" x1="10%" y1="60%" x2={"90%"} y2={"60%"} markerEnd="url(#arrow)" strokeLinecap="round" stroke="white" stroke-width="18%">
                                    </line>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div onClick={()=>{
                            console.log(Number( y2.split("%")[0] ))
                            if((Number( y2.split("%")[0] )) <=10){
                                startAnimationToN()
                            }else if(90 >= (Number( y2.split("%")[0] ))){
                                startAnimationToF()
                            }
                            if(is_on == true){
                                setIsOn(false)
                            }else{
                                setIsOn(true)
                            }
                        }} className="absolute flex flex-row h-[80px] cursor-pointer items-center transition-all duration-400 w-[160px] rounded-full gap-x-[2px]">
                        <div className={"ease-in-out duration-300 change-w " + (is_on?"w-[0]":" w-full")}></div>
                        <div className={"box-border border-[15px] border-white transition-all rounded-full h-[70px] min-w-[70px] w-[70px] mx-[10px] ml-[5px] " + (is_on?"change-state-l":"change-state-r")}></div>
                    </div>
                    
                </div>
                <div className="relative w-[10px] h-[13px] scale-[5]">
                    <div className="absolute  z-[1] w-full  h-[100%] flex items-end justify-end">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" >
                            <line className="" x1="10%" y1="10%" x2={"10%"} y2={"90%"} markerEnd="url(#arrow)" strokeLinecap="round" style={{stroke:(is_on?"green":"red"),transition: "stroke 0.4s ease-in-out"}}  stroke-width="18%">
                            </line>
                        </svg>
                    </div>
                    <div className="absolute  z-[1] w-full h-[100%] flex items-end justify-end">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" >
                            <line className="" id="NLO" x1="10%" y1="10%" x2={"90%"} y2={"10%"} markerEnd="url(#arrow)" strokeLinecap="round" style={{stroke:(is_on?"green":"red"),transition: "stroke 0.4s ease-in-out"}}  stroke-width="18%">
                            </line>
                        </svg>
                    </div>
                    <div className="absolute  z-[1] w-full h-[100%] flex items-end justify-end">
                        <svg xmlns="http://www.w3.org/2000/svg"  width="100%" height="100%" >
                            <line className="" x1="10%" y1="60%" id="NLl" x2={"90%"} y2={"60%"} markerEnd="url(#arrow)" strokeLinecap="round" style={{stroke:(is_on?"green":"red"),transition: "stroke 0.4s ease-in-out"}} stroke-width="18%">
                            </line>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}