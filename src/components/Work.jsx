'use client'

import React from "react";
import WorkCard from "./WorkCard";
import { motion } from "framer-motion";


const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const projects = [
    {
        title: "ARQA Medical Website",
        img: "/videos/ARQA Website.png",
        vid: "https://res.cloudinary.com/dcpyxsfh2/video/upload/v1771192813/ARQA_Website_Video_jnu6he.mp4",
        desc: "Engineered and led the development of ARQA Medical’s official website from the ground up, architecting a scalable Next.js platform with TypeScript, Tailwind CSS, and a live Sanity CMS. Built dynamic systems for product management and content updates, while owning UI/UX, performance, SEO, and deployment.",
        live: "https://arqa-website.vercel.app/",
        code: "https://github.com/therealhazem/ARQA-Website",
    },
    {
        title: "Dashyboard",
        img: "/videos/Dashyboard.png",
        vid: "https://res.cloudinary.com/dkesm0hn8/video/upload/v1763254000/Dashyboard_Video_agcg78.mp4",
        desc: "Developed a customizable admin and analytics dashboard using Next.js, Tailwind, and ShadCN. It includes a responsive sidebar, charts, tables, forms, and theme toggling, built with reusable components to demonstrate clean, scalable dashboard architecture and UI development.",
        live: "https://dashyboard.vercel.app/",
        code: "https://github.com/therealhazem/Dashyboard",
    },
    {
        title: "YC Directory",
        img: "/videos/YC.png",
        vid: "https://res.cloudinary.com/dkesm0hn8/video/upload/v1763259236/YC_Video_xv9nzq.mp4",
        desc: "Built a modern startup directory with Next.js, TypeScript, Tailwind, and Sanity CMS. It enables pitch submissions, GitHub login, dynamic search, category filtering, view tracking, and Sentry monitoring. This project showcases my ability to create interactive, content-driven platforms for the startup ecosystem.",
        live: "https://yc-directory-therealhazem.vercel.app/",
        code: "https://github.com/therealhazem/YCdirectory",
    },
    {
        title: "Stormy Pools",
        img: "/videos/Stormy.png",
        vid: "https://res.cloudinary.com/dkesm0hn8/video/upload/v1763256149/Stormy_Video_tlusqu.mp4",
        desc: "Created a responsive website of over 15 pages for a UAE pool company using vanilla JavaScript, HTML, and Tailwind CSS. The focus was on accessibility, responsiveness, and strong visual branding, all built without JavaScript frameworks to highlight core frontend development skills.",
        live: "https://therealhazem.github.io/Stormy-Site/index.html",
        code: "https://github.com/therealhazem/Stormy-Site.git",
    },
    {
        title: "XORA SaaS",
        img: "/videos/Xora.png",
        vid: "https://res.cloudinary.com/dkesm0hn8/video/upload/v1763254238/Xora_Video_ldacb3.mp4",
        desc: "Designed and developed a mobile-focused, high-conversion landing page for a SaaS company. It features an elegant, dynamic layout combined with a clean, modern aesthetic crafted to capture user attention and boost engagement through smooth, intuitive interaction.",
        live: "https://xorasass.netlify.app/",
        code: "https://github.com/therealhazem/XORA.git",
    },
    {
        title: "HazemBook",
        img: "/videos/HazemBook.png",
        vid: "https://res.cloudinary.com/dkesm0hn8/video/upload/v1763255948/HazemBook_Video_zy5xf5.mp4",
        desc: "Built a social media app with core features like authentication, posts, and comments using vanilla JavaScript and Axios. APIs were tested with Postman, and the UI styled with Bootstrap. This project showcases my JavaScript skills and ability to develop complex apps without frameworks.",
        live: "https://hazembook.netlify.app/",
        code: "https://github.com/therealhazem/HazemBook.git",
    },
];

const Work = () => {
    return (
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
                Selected Projects
            </motion.h3>

            <motion.h4
                className="font-poppins text-[1vw] max-md:text-[3.5vw] text-center italic font-light opacity-60 text-gray-400/50 mt-[-8px] mb-10 max-md:mb-6 z-0"
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
            >
                Every project tells a story and I&apos;m still writing.
            </motion.h4>

            <div className="max-md:grid-cols-1 max-md:gap-y-[10vw] max-md:my-7 grid grid-flow-rows items-center justify-center grid-cols-2 gap-x-[5vw] gap-y-[3vw] my-6 max-md:mt-0 mx-auto px-4 max-md:px-2 mb-10 max-md:mb-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ delay: 0.15 * index, ease: "easeOut" }}
                    >
                        <WorkCard {...project} />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Work;
