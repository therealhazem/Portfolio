'use client'

import { DownloadResume, GithubProfile } from "./MyButton";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const flipIn = {
    hidden: { rotateY: 90, opacity: 0 },
    visible: {
        rotateY: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const Hero = () => {
    return (
        <motion.main
            className="flex max-md:flex-col w-full items-center justify-evenly px-4 my-12 max-md:my-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            role="region"
            aria-label="Introduction"
        >
            {/* Name Block: only one h1 for SEO */}
            <motion.div
                className="mt-[-30px] max-md:block hidden flex-col"
                variants={fadeInUp}
            >
                <h1
                    className="
            font-fineday text-start max-md:text-[15vw] max-md:text-center
            bg-gradient-to-r from-blue-700 via-cyan-400 to-blue-700
            bg-[length:200%_200%] bg-clip-text text-transparent
            animate-gradientMove
            hover:animate-gradientMoveFast
            transition-all duration-1000 ease-in-out
          "
                >
                    Hazem Elgindy
                </h1>
                <h2 className="font-poppins font-semibold italic max-md:text-[5.1vw] max-md:mt-[-5.2vw]">
                    Software Engineer
                </h2>
            </motion.div>

            {/* Profile Image with lazy loading and fixed size hints */}
            <motion.a
                href="https://www.linkedin.com/in/hazemelgindy/"
                target="_blank"
                rel="noopener noreferrer"
                variants={flipIn}
                aria-label="Hazem Elgindy LinkedIn profile"
            >
                <motion.div
                    className="hover:size-[36vw] size-[35vw] max-md:size-full transition-all duration-700 rounded-3xl mt-[2vw] shadow-xl/20 hover:shadow-xl/30 relative overflow-hidden"
                >
                    <Image
                        src="/images/Hazem.jpeg"
                        alt="Portrait of Hazem Elgindy"
                        width={560}
                        height={560}
                        className="w-full h-full object-cover rounded-3xl"
                        priority
                        sizes="(max-width: 768px) 100vw, 35vw"
                    />
                </motion.div>
            </motion.a>

            {/* Content Section */}
            <motion.div
                className="max-w-[50%] max-md:max-w-full flex flex-col"
                variants={fadeInUp}
            >
                {/* Desktop Name Block hidden on mobile */}
                <div className="mt-[-1vw] max-md:hidden">
                    <h2
                        className="
              font-fineday text-[7.5vw] text-start
              bg-gradient-to-r from-blue-700 via-cyan-400 to-blue-700
              bg-[length:200%_200%] bg-clip-text text-transparent
              animate-gradientMove
              hover:animate-gradientMoveFast
              transition-all duration-1000 ease-in-out
            "
                    >
                        Hazem Elgindy
                    </h2>
                    <h3 className="font-poppins font-semibold text-[2.6vw] text-start italic mt-[-3vw]">
                        Software Engineer
                    </h3>
                </div>

                {/* About Me Section */}
                <div className="my-2">
                    <h3 className="font-poppins font-semibold text-[1.5vw] max-md:text-[6vw] text-center my-2">
                        About Me
                    </h3>
                    <div className="max-md:text-[4vw] font-poppins text-[0.9vw] text-gray-700 leading-relaxed">
                        <div className="max-md:text-[4vw] font-poppins text-[0.9vw] text-gray-700 leading-relaxed space-y-3 max-md:space-y-6">
                            <p>
                                I am a Software Engineer and Computer Science student with a deep passion
                                for technology, design, and creative problem solving. Since an early
                                age, I have been curious about how things work, always exploring, fixing
                                devices, and trying to improve the tools around me. That mindset led me
                                to programming, where I found the perfect space to build, express ideas,
                                and bring solutions to life.
                            </p>
                            <p>
                                I focus on web development, building clean, minimal, and elegant digital
                                experiences that are both functional and user friendly. I enjoy working
                                on personal and collaborative projects that combine logic with visual
                                design, and I am always looking to learn new technologies and take on
                                meaningful challenges.
                            </p>
                            <p>
                                Outside of coding, I find inspiration in many forms of art from music
                                and food to visual design and I use that creativity to shape how I
                                build and think. I am passionate about creating things that have impact,
                                and I am always excited to turn a new idea into something real.
                            </p>
                            <p className="mt-3 font-semibold text-center text-[0.9vw] max-md:text-[4vw] max-md:mt-2">
                                Let’s bring ideas to life.
                            </p>
                        </div>

                    </div>
                </div>

                {/* Action Buttons */}
                <motion.div
                    className="flex items-center justify-center gap-12 my-3"
                    variants={fadeInUp}
                    transition={{ delay: 0.3 }}
                >
                    <DownloadResume />
                    <GithubProfile />
                </motion.div>
            </motion.div>
        </motion.main>
    );
};

export default Hero;
