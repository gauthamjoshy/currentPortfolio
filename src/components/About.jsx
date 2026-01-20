import React from 'react'
import sideImg from '../assets/sideImg.jpg'
import { FaUserGraduate } from 'react-icons/fa'

function About() {
    return (
        <>
            <div id="about" className="pt-24">
                <div className="text-center">
                    <h2 className="text-lg font-medium">Get To Know More</h2>
                    <h1 className="text-5xl font-bold">About Me</h1>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mt-16 px-6">
                    <img
                        src={sideImg}
                        className="w-full max-w-md object-cover rounded-3xl shadow-xl hover:scale-105 transition"
                    />

                    <div className="space-y-8">
                        <div className="bg-white shadow-lg p-8 rounded-3xl text-center border hover:scale-105 transition">
                            <FaUserGraduate className="text-6xl mx-auto mb-4" />
                            <h2 className="text-2xl font-bold">Education</h2>
                            <p className="text-lg font-semibold mt-2">B-Tech in Computer Science</p>
                            <p className="text-gray-600 mt-1">
                                From A P J Abdul Kalam Technological University
                            </p>
                        </div>

                        <div className="p-8 border rounded-3xl shadow-lg leading-relaxed text-left md:text-justify">
                            Hi, I'm Gautham Joshy, a Full Stack Developer passionate about building clean, responsive, and user-focused web applications. I recently graduated in Computer Science and am currently working as an intern, gaining hands-on experience with real-world development.
                            I specialize in React, Node.js, Express, and MongoDB, and enjoy turning ideas into functional, efficient, and visually appealing solutions. As a continuous learner, I explore new technologies and best practices to grow as a developer and deliver meaningful impact through my work.

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About


