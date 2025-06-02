import React from 'react'
import Skills from '../Skills/Skills';


import cer4 from "../../assets/Cert4.jpg"
import cer3 from "../../assets/Cert3.jpg"
import cer2 from "../../assets/Cert2.jpg"
import cer1 from "../../assets/Cert1.jpg"

const Certification = () => {
    const aboutinfo = [
        {
            img: cer4,
            heading: 'Hackathon',
            date: "May 2025",
            Skill: 'BlockChain',
            Platform: 'Geeks of gurukul',
            desc: " ✨ Excited to share that I have successfully participated in the Edu Blockchain Build Station Hackathon organized by Geeks of Gurukul in collaboration withCore ecosystem.",
            link: 'https://ibb.co/RkQYTc5n'

        },
        {
            img: cer3,
            heading: 'Hackathon',
            date: "20th-21st Dec 2025",
            Skill: 'Blockchain',
            Platform: 'Geeks Of Gurukul',
            desc: "✨ Excited to share that I have successfully participated in the Edu Blockchain Build Station Hackathon organized by Geeks of Gurukul, in collaboration with Rise In and Edu Chain, held on 20th–21st December 2024.",
            link: 'https://ibb.co/mVm5XhxX',


        },
        {
            img: cer2,
            heading: 'Inter-College Knowledge Competition',
            date: "8th Dec 2024",
            Skill: 'Competition',
            Platform: 'Vision Ias',
            desc: "✨ Excited to share that I was selected among the Top 5 finalists in the Intra-College round of Pratispardha-Bhopal, an inter-college knowledge competition organized by VisionIAS. 🏆",
            link: 'https://ibb.co/ZQwHY5d'

            
        },

        {
            img: cer1,
            heading: 'Admission to B.S. Degree in Data Science and Applications',
            date: "Sept 2024",
            Skill: 'Data Science',
            Platform: 'IIT Madras',
            desc: "✨ Excited to share that I have successfully secured admission to the Foundation level of the B.S. Degree in Data Science and Applications at the Indian Institute of Technology, Madras (IIT Madras)! 🇮🇳📊",

            link: 'https://ibb.co/9H86qXtH'
        },
        

    ]
    return (
        <>
            <section
                id="certification"
                className="py-24 pb-2 px-[8vw] w-full font-sans bg-[#050716aa] "
            >
                <div data-aos="fade-down" className="text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 ">Certification  </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-2"></div>
                    <p className='text-gray-400 mt-4 text-lg font-semibold'>My certifications reflect my commitment to continuous learning and skill development. Here's a glimpse of the courses and achievements I've completed across various platforms.</p>
                </div>
                <div className='py-10 px-1 flex  w-full'>
                    <ul className='gap-10  flex flex-wrap justify-center '>
                        {aboutinfo.map((ele, index) => {
                            const animationType = index % 2 === 0 ? 'fade-right' : 'fade-left';
                            return (
                                <div
                                    key={index}
                                    data-aos={animationType}
                                    className="w-64 md:w-96 h-auto flex items-start  p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(130,69,206,0.25)] hover:scale-105 hover:shadow-[0_0_25px_rgba(130,69,206,0.35)]   mb-10  transition-transform duration-500
                                    "
                                >
                                    <div className="flex-1  ">
                                        {ele.img && (
                                            <img
                                                src={ele.img}
                                                alt={`${ele.heading} certificate`}
                                                loading="lazy"
                                                className="w-full rounded-xl mb-4 object-cover"
                                            />
                                        )}
                                        <h3 className="text-2xl font-semibold text-white mb-2">{ele.heading}</h3>

                                        <p className="text-gray-300 text-sm mb-4">{ele.desc}</p>

                                        <div className="flex flex-col text-sm text-gray-400">
                                            <span><span className="font-medium text-white">Skill:</span> {ele.Skill}</span>
                                            <span><span className="font-medium text-white">Platform:</span> {ele.Platform}</span>
                                            <span><span className="font-medium text-white">Date:</span> {ele.date}</span>
                                        </div>
                                        <div>

                                            {ele.link && (
                                                <a
                                                    href={ele.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-block mt-3 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:scale-105 transition-transform text-sm"
                                                >
                                                    View Certificate
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>);
                        })}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Certification