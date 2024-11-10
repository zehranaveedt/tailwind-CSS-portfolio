import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState} from "react";



export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen ] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return(
        <div className="container pt-8">
            <div className="flex gap-5 querySelector sticky top-0 "></div>
            <div className="text-3xl  w-full font-bold h-14">Personal Portfolio</div>
        
            <div className="text-white flex lg:gap-16 ml-96 w-full">
            <ul className="gap-5 lg:gap-16 hidden md:flex ">
                <li className="menuLink"><a href="#hero">Home</a></li>
                <li className="menuLink"><a href="#about">About</a></li>
                <li className="menuLink"><a href="#projects">Projects</a></li>
                <li className="menuLink"><a href="/skills">Skills</a></li>
                <li className="menuLink"><a href="/contact">Contact</a></li>
            </ul>
            <br></br>

         <div className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? < AiOutlineClose size={30} /> :
            < AiOutlineMenu size={30} />
            }
         </div>
            </div>

            {isMenuOpen && (
                <ul className="flex flex-col gap-4 mt-4 md:hidden">
                    <li className="menuLink">
                    <a href="#hero" onClick={toggleMenu}>Home</a>
                    </li>

                    <li className="menuLink">
                    <a href="#about" onClick={toggleMenu}>About</a>
                    </li>

                    <li className="menuLink">
                    <a href="#projects" onClick={toggleMenu}>Projects</a>
                    </li>

                    <li className="menuLink">
                    <a href="#skills" onClick={toggleMenu}>Skills</a>
                    </li>

                    <li className="menuLink">
                    <a href="#contact" onClick={toggleMenu}>Contact</a>
                    </li>
                </ul>
            )

            }
        </div>
    )
}