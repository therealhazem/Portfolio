'use client'

import { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import { motion } from "framer-motion";


const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};


const data1 = [
    { name: "HTML", src: "/images/marquee/html.png" },
    { name: "CSS", src: "/images/marquee/css-3.png" },
    { name: "JavaScript", src: "/images/marquee/js.png" },
    { name: "TypeScript", src: "/images/marquee/typescript.png" },
    { name: "Next", src: "/images/marquee/Next.svg" },
    { name: "React", src: "/images/marquee/React.png" },
    { name: "Tailwind", src: "/images/marquee/Tailwind.png" },
    { name: "ShadCN", src: "/images/marquee/ShadCn.png" },
    { name: "Sanity", src: "/images/marquee/Sanity.svg" },
    { name: "Bootstrap", src: "/images/marquee/Bootstrap.png" },
]

const data2 = [
    { name: "Python", src: "/images/marquee/python.png" },
    { name: "C++", src: "/images/marquee/c++.png" },
    { name: "Flask", src: "/images/marquee/Flask.png" },
    { name: "AXIOS", src: "/images/marquee/Axios.png" },
    { name: "GIT", src: "/images/marquee/Git.png" },
    { name: "GitHub", src: "/images/marquee/GitHub.png" },
    { name: "Vite", src: "/images/marquee/Vitejs.png" },
    { name: "npm", src: "/images/marquee/Npm.png" },
    { name: "Postman", src: "/images/marquee/postman.webp" },
    { name: "Figma", src: "/images/marquee/Figma.png" },
]


const InfinityMarque = () => {
    const [gradwidth, setgradwidth] = useState(330);

    useEffect(() => {
        const updatewidth = () => {
            setgradwidth(window.innerWidth > 768 ? 330 : 150)
        }
        updatewidth();
        window.addEventListener("resize", updatewidth);
        return () => window.removeEventListener("resize", updatewidth);
    }, [])

    return (
        <>
            {/* <h3 className="font-poppins font-semibold text-[1.5vw] max-md:text-[6vw] text-center mt-12 max-md:mt-8 z-10">
                Technologies
            </h3>
            <h4 className="font-poppins text-[1vw] max-md:text-[3.5vw] text-center italic font-light text-gray-400/50 mt-[-8px] mb-8 max-md:mb-6 z-0">
                Always reaching higher through new tech.
            </h4> */}

            <motion.div
                id="Work"
                className="flex flex-col"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.h3
                    className="font-poppins font-semibold text-[1.5vw] max-md:text-[6vw] text-center mt-12 max-md:mt-8 z-10"
                    variants={fadeInUp}
                >
                    Technologies
                </motion.h3>

                <motion.h4
                    className="font-poppins text-[1vw] max-md:text-[3.5vw] text-center italic font-light text-gray-400/50 mt-[-8px] mb-8 max-md:mb-6 z-0"
                    variants={fadeInUp}
                    transition={{ delay: 0.2 }}
                >
                    Always reaching higher through new tech.
                </motion.h4>

            </motion.div>

            {/* First Marquee */}
            <div className="max-md:w-full w-[90%] mx-auto mb-10">
                <Marquee
                    gradientWidth={gradwidth}
                    autoFill={true}
                    speed={30}
                    pauseOnHover={true}
                    gradient={true}
                >
                    {data1.map((img, index) => (
                        <div key={index} className="mx-5 max-md:mx-2 flex items-center justify-center">
                            <img
                                className="max-md:max-h-[10vw] max-md:max-w-[15vw] max-h-[4vw] max-w-[7vw] transition-all duration-500 object-contain"
                                alt={img.name}
                                src={img.src}
                            />
                        </div>
                    ))}
                </Marquee>
            </div>

            {/* Second Marquee */}
            <div className="max-md:w-full w-[90%] mx-auto my-10 mb-10 max-md:mb-8">
                <Marquee
                    direction="right"
                    gradientWidth={gradwidth}
                    autoFill={true}
                    speed={30}
                    pauseOnHover={true}
                    gradient={true}
                >
                    {data2.map((img, index) => (
                        <div key={index} className="mx-5 max-md:mx-2 flex items-center justify-center">
                            <img
                                className="max-md:max-h-[10vw] max-md:max-w-[15vw] max-h-[4vw] max-w-[6.5vw] transition-all duration-500 object-contain"
                                alt={img.name}
                                src={img.src}
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </>
    )
}

export default InfinityMarque
