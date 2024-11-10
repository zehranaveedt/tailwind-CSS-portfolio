import React from "react";
import Heading from "./Heading"; 
import Card from "./Card";

const data=[
{
    id: 1,
    title: "Static Resume Builder",
    desc: "A typescript-based interactive resume build with HTML and CSS,allowing users to showcase their skills dynamically,",
    img: "/project 1.png",
    tags: ["HTML", "NODE", "CSS", "TYPESCRIPT"],
},

{
    id: 2,
    title: "Dynamic Resume Builder",
    desc: "A typescript-based Dynamic resume build with HTML and CSS,allowing users to showcase their skills dynamically.",
    img: "/project-2.png",
    tags: ["HTML", "NODE", "CSS", "TYPESCRIPT"],

},

{
    id: 3,
    title: "Countdown-Timer",
    desc: "A Next.js and Typescript powered website to track time with an interactive countdown feature.",
    img: "/project.3.png",
    tags: ["NEXT.JS", "NODE", "CSS", "TYPESCRIPT"],

},

]

export default function Projects(){
    return(
        <div id="projects" className="container pt-32">
            <Heading title="My projects"/>
            <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center shadow-white-shadow">
                {data.map((el) => (<Card 
                key={el.id}
                title={el.title}
                desc={el.desc}
                img={el.img}
                tags={el.tags}
            />))}
            </div>
           
        </div>
    )
}