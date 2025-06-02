import React, { useEffect } from 'react'
import AboutImg from '../../assets/shivesh.jpg'
import { IoArrowForward } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true,
        });
    }, []);
    

    
    return (
        <div id='About' className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-7'>
            <div className='py-10 pb-24 w-full'>
                <div data-aos="fade-down" className="text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">About <span className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 text-3xl font-bold mb-6'>Me</span> </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-2"></div>
                </div>
                
                <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
                    {/* Improved Image Section */}
                    <div data-aos="zoom-in-up" className='w-full md:w-1/3 flex justify-center'>
                        <div className='relative group'>
                            <img 
                                src={AboutImg} 
                                alt="Shivesh Kumar Satyam" 
                                className='w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-transparent 
                                group-hover:border-cyan-400 transition-all duration-500 shadow-lg 
                                group-hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]'
                            />
                            <div className='absolute inset-0 rounded-full border-2 border-white/20 pointer-events-none'></div>
                            <div className='absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                        </div>
                    </div>
                    
                    <div className="w-full md:w-2/3 flex justify-center items-center">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            className="w-full text-white md:text-xl leading-relaxed tracking-wide"
                        >
                            <p className="text-gray-300">
                                Hii! I'm <span className="text-cyan-400 font-semibold">Shivesh Kumar Satyam</span>, I'm a first-year B.Tech student in Computer Science Engineering.
                                Alongside my coursework, I am pursuing a Data Science course with IIT Madras.
                                I'm passionate about computer science, artificial intelligence, machine learning, and modern electronics.
                            </p>
                            <p className="text-gray-300 mt-4">
                                When it comes to skills, I'm still an amateur in Cybersecurity,
                                Python, JavaScript, Java, and Electronics, but I'm steadily improving
                                through practice and projects.
                            </p>
                            <p className="text-gray-300 mt-4">
                                I'm more confident in Python, which
                                I've used to build basic automation. I enjoy experimenting,
                                learning by doing, and collaborating with others to grow my
                                knowledge and experience.
                            </p>
                        </div>
                    </div>
                </div>

                
                    
                          
                        
                  
                
            </div>
        </div>
    )
}

export default About;