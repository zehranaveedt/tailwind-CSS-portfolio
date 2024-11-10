import React from "react";

const Skills = () => {
    return(

        <div id="skills" className="container pt-32">
            <div className="grid md:grid-cols-2 gap-20 items-center">
                <div data-aos="zoom-in-up">
                    <h2 className="text-4xl md:text-5xl">Tecnology I work with</h2>
                    <p className="text-gray-500">I am proficient in HTML, CSS, and JavaScript, with a strong understanding of creating responsive and visually appealing web interfaces. My work primarily focuses on Next.js, where I bring modern web applications to life by combining functionality and aesthetics. My skills allow me to develop seamless, user-friendly experiences with a high standard of code quality. I continuously explore innovative solutions to enhance the efficiency and appeal of my projects.</p>
                </div>
                <div >
                    <div className="grid grid-cols-2 text-purple-600 text-3xl sm:text-4xl">
                        <div className="space-y-2">
                        <h2 data-aos="zoom-in-up">Typescript</h2>
                        <h2 data-aos="zoom-in-up">React.js</h2>
                        <h2 data-aos="zoom-in-up">Next.js</h2>
                    </div>
                    <div className="space-y-2">
                        <h2 data-aos="zoom-in-up">Tailwind</h2>
                        <h2 data-aos="zoom-in-up">CSS</h2>
                        <h2 data-aos="zoom-in-up">Node.js</h2>
                    </div>
                </div>
            </div>
            </div>

        </div>
    )
}

export default Skills