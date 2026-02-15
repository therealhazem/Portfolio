'use client'

import { motion } from 'framer-motion'
import Link from 'next/link';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const WorksAt = () => {
    return (
        <motion.div
            className='flex flex-col items-center'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <motion.div
                variants={fadeInUp}
            >
                <motion.h3
                    className="font-poppins font-semibold text-[1.5vw] max-md:text-[6vw] text-center mt-6 max-md:mt-8 z-10"
                    variants={fadeInUp}
                >
                    Works at
                </motion.h3>
                <motion.h4
                    className="font-poppins text-[1vw] max-md:text-[3.5vw] text-center italic font-light text-gray-400/50 mt-[-8px] mb-6 max-md:mb-4 z-0"
                    variants={fadeInUp}
                    transition={{ delay: 0.2 }}
                >
                    Where i spread my magic now
                </motion.h4>
            </motion.div>
            <motion.div>
                <Link href="https://arqa-website.vercel.app/">
                    <motion.img
                        src="/images/ARQA.png"
                        className="lg:max-w-[20vw] max-w-[50vw]"
                        alt="ARQA Logo"
                        variants={scaleIn}
                        transition={{ delay: 0.4, ease: "easeOut" }}
                    />
                </Link>
            </motion.div>
        </motion.div>
    )
}

export default WorksAt