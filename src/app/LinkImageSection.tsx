"use client"
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

interface SectionProps {
  img: string;
  children: React.ReactNode;
}

export default function LinkImageSection({ img, children }: SectionProps) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ['start end', 'end start']
    })

    const clipPath = useTransform(scrollYProgress, [0, 0.5, 1], ["inset(100% 0px 0%)", "inset(0% 0px 0%)", "inset(0% 0px 100%)"])
    const imageZoom = useTransform(scrollYProgress, [0, 1], ["scale(1)", "scale(1.5)"])

    useEffect(() => {
      return scrollYProgress.onChange((latest) => {
        console.log(latest);
      });
    }, [scrollYProgress]);
    return(
        <section className="relative z-20 pointer-events-none uppercase">
          <div className="px-[5vw] md:h-[100vh] h-[70vh] flex justify-center items-center">
            <h2 className="w-10/12 text-center text-[14.8vw]">
              <a className="pointer-events-auto text-center flex items-center justify-center">
                {children}
              </a>
            </h2>
          </div>
          <div>
            <div ref={ref} className="px-[5vw] flex items-center justify-center">
              <figure className="h-[40vh] lg:w-4/12 w-10/12">
              </figure>
            </div>
            <figure className="z-50 pointer-events-none px-[5vw] fixed w-screen md:h-screen h-[100svh] top-0 left-0 flex items-center justify-center">
              <motion.div className="h-[90vh] lg:w-5/12 w-10/12 flex items-center justify-center" style={{clipPath}}> 
                <motion.img src={img} alt="" className="object-cover h-full w-full"  style={{ transform: imageZoom }}>
                </motion.img>
              </motion.div>
            </figure>
          </div>
        </section>
    )
}