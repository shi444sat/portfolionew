import React, { useEffect } from 'react'
import ProjectCard from './ProjectCard'
import AOS from 'aos';
import 'aos/dist/aos.css';
import pro1 from '../../assets/project1.png';
import pro3 from '../../assets/project3.png';
import pro2 from '../../assets/project2.png';



const Project = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration in ms
            once: true,     // whether animation should happen only once
        });
    }, []);
    return (
        <div id='Projects' className='p-10 md:pt-20 text-white'>
            <div data-aos="fade-down" className="text-center mb-8">

                <div data-aos="fade-down" className="text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 ">Projects  </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-2"></div>
                </div>
                <p className="text-gray-400 mt-4 text-lg font-semibold">
                    A showcase of the projects I have worked on, highlighting my skills and experience in various technologies
                </p>
            </div>
            {/* <h1 data-aos="fade-down"  className='text-2xl md:text-4xl text-white font-bold'>Projects </h1> */}
            <div className='py-12 px-2 w-full md:justify-center flex flex-wrap gap-8'>
                <ProjectCard aos="fade-right" imgsrc={pro1} title="Content Management System" href={"https://priyavats.in"} main="A fully dynamic & responsive website for creative content." />
                <ProjectCard aos="fade-left" imgsrc={pro2} title="3×3×3 LED Cube with Raspberry Pi Pico" href={"https://youtu.be/pgK3A_iLGBI"} sourselink={"https://github.com/shi444sat/Rasberrypie"} main= "Built a 3D LED cube using Raspberry Pi Pico and controlled it via MicroPython." />
                <ProjectCard aos="fade-right" imgsrc={pro3} title="Hand Detection With OpenCV & Media Pipe" href={"https://youtu.be/PDdTVN4PuPA"} sourselink={"https://github.com/shi444sat/Hand-Detection"} main="Show Middle Finger Your System Go Boom!!!!!." />
            </div>
        </div>
    )
}

export default Project