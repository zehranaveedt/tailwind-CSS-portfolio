import React from "react";
import Navbar from "./Navbar";
export default function Hero(){
    return(
        <div id="hero" className="min-h-screen bg-no-repeat bg-[url(/pic.jpg)] bg-left lg:bg-[20%] bg: bg-cover rounded-full top-24" 
        style={{backgroundSize: "25%"}}>
            <Navbar/>
            <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
                <div className="hidden lg:block"></div>
                <div className="text[80px] sm:text-[100px] font-medium leading-tight flex justify-center items-center -mt-32">
                    <div>
                        <p data-aos="zoom-in-up"><i>I,m</i></p>
                        <p data-aos="zoom-in-up"><i>Zehra</i></p>
                        <p data-aos="zoom-in-up"><i>Naveed</i></p>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}