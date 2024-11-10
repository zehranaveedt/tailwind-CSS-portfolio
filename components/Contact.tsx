import React from "react";
import { MdMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";


const Contact =() => {
    return(
        <div id="contact" className="pt-32 container">
            <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-8">
                    <h2 className="text-5xl" data-aos="zoom-in-up">Get in Touch</h2>
                    <p className="text-gray-600 text-[180x] pt-2" data-aos="zoom-in-up">
                        Drop me a line, give me a call, or send me a message by submitting the form.
                    </p>
                    <div className="flex gap-3 items-center" data-aos="zoom-in-up">
                    <MdMailOutline  size={30}/> xyz@gmail.com
                    </div>
                    <div className="flex gap-3 items-center" data-aos="zoom-in-up">
                    <BsTelephone   size={30}/> (021) 000-0000
                    </div>
                </div>
                <div className="space-y-8">
                    <div className="flex flex-col gap-2" data-aos="zoom-in-up">
                        <label htmlFor="name">Name</label>
                        <input  type="text"
                        className="h-[40px] bg-transparent border border-purple-700 w-full px-4 focus:outline-none focus:ring-2 focus:ring-purple-700"
                        id="name"/>
                    </div>
                    <div className="flex flex-col gap-2" data-aos="zoom-in-up">
                        <label htmlFor="email">Email</label>
                        <input  type="text"
                        className="h-[40px] bg-transparent border border-purple-700 w-full px-4 focus:outline-none focus:ring-2 focus:ring-purple-700"
                        id="email"/>
                    </div>
                    <div className="flex flex-col gap-2" data-aos="zoom-in-up">
                        <label htmlFor="msg">Message</label>
                        <textarea
                        className="bg-transparent border border-purple-700 w-full px-4 focus:outline-none focus:ring-2 focus:ring-purple-700"
                        id="message" rows={8}>
                        </textarea>
                    </div>
                    <button data-aos="zoom-in-up" className="bg-purple-700 p-3 px-6 font-semibold hover:bg-accent-dark transition-colors duration-200"> Send</button>
                </div>
            </div>
        </div>
    )
}



export default Contact