'use client'

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

const WorkCard = ({ img, title, desc, live, code, vid }) => {
    const [hover, setHover] = useState(false);
    const videoRef = useRef(null);

    const handleMouseEnter = useCallback(() => {
        setHover(true);
        const video = videoRef.current;
        if (video) {
            video.currentTime = 0;
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {});
            }
        }
    }, []);

    const handleMouseLeave = useCallback(() => {
        setHover(false);
        if (videoRef.current) {
            videoRef.current.pause();
        }
    }, []);

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="max-w-[37vw] max-md:max-w-full mx-4 max-md:transition-none max-md:hover:translate-y-0 max-md:hover:max-w-full transition-all duration-500 hover:translate-y-[-2vw] hover:max-w-[38vw]"
        >
            <a
                target="_blank"
                href={live}
                rel="noopener noreferrer"
                className="block relative w-full mb-2"
                aria-label={`View live demo of ${title}`}
            >
                <div className="max-md:rounded-2xl rounded-3xl shadow-xl/15 hover:shadow-xl/30 relative w-full overflow-hidden">
                    {/* Image - maintains container size */}
                    <Image
                        src={img}
                        alt={title}
                        width={800}
                        height={600}
                        className="max-md:rounded-2xl rounded-3xl w-full h-auto object-cover"
                        sizes="(max-width: 768px) 100vw, 37vw"
                    />
                    
                    {/* Video - overlays on hover (preload=metadata for performance) */}
                    <video
                        ref={videoRef}
                        src={vid}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className={`max-md:rounded-2xl rounded-3xl w-full h-full object-cover absolute inset-0 transition-opacity duration-300 ${
                            hover ? "opacity-100" : "opacity-0"
                        }`}
                        style={{ width: '100%', height: '100%' }}
                        aria-hidden={!hover}
                    />
                </div>
            </a>

            <h1 className="font-inter font-semibold text-[1.7vw] max-md:text-[5vw] mt-4">{title}</h1>
            <p className="font-inter font-light text-[1vw] max-md:text-[4vw] text-gray-700 text-balance">{desc}</p>

            <div className="flex flex-row justify-between items-center mt-3 gap-3">
                <a
                    target="_blank"
                    href={live}
                    rel="noopener noreferrer"
                    className="cursor-pointer rounded-2xl w-full h-[3vw] max-md:h-[10vw] flex items-center justify-center font-semibold text-[1.1vw] bg-black text-white hover:text-black hover:bg-amber-500 transition-all duration-300 hover:text-[1.15vw] max-md:text-[4.1vw] max-md:hover:text-[4.2vw] hover:translate-y-[-5px] shadow-lg"
                    aria-label={`Live demo of ${title}`}
                >
                    Live Demo
                </a>
                <a
                    target="_blank"
                    href={code}
                    rel="noopener noreferrer"
                    className="cursor-pointer rounded-2xl w-full h-[3vw] max-md:h-[10vw] flex items-center justify-center font-semibold text-[1.1vw] bg-gray-300 text-black hover:bg-amber-500 transition-all duration-300 hover:text-[1.15vw] max-md:text-[4.1vw] max-md:hover:text-[4.2vw] hover:translate-y-[-5px] shadow-lg"
                    aria-label={`GitHub repository for ${title}`}
                >
                    GitHub Code
                </a>
            </div>
        </div>
    );
};

export default WorkCard;
