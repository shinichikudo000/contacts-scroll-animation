"use client"
import { useRef } from "react";
import LinkImageSection from "./LinkImageSection";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end']
  })

  const fade = useTransform(scrollYProgress, [0, 0.03, 0.95, 1], [1, 0.50, 0.50, 1])
  const zoom = useTransform(scrollYProgress, [0, 0.03, 0.95, 1], ["scale(1)", "scale(0.85)", "scale(0.85)",  "scale(1)"])
  return (
    <main className="relative h-[100vh] w-[100vw]">
      <motion.div className="h-full w-full fixed z-10 text-[16px] flex justify-center items-center" style={{transform: zoom, opacity: fade}}>
        <nav className="flex flex-col w-[15.8em] overflow-hidden whitespace-nowrap uppercase">
          <div className="flex justify-between">
            <h1>Juan Dela Cruz</h1>
            <div className="w-[1em] h-[1em]">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"> <path fill="#fff" stroke="#000" strokeWidth=".3" d="m9.145 7.98 3.069 4.394-2.019 1.415-3.07-4.638-.124-.188-.126.188-3.07 4.589-2.02-1.415 3.021-4.346.116-.167-.193-.061-4.54-1.444.745-2.341L5.57 5.602l.2.071V.15H8.18v5.522l.2-.07 4.685-1.636.745 2.34-4.588 1.445-.195.06.117.168Z"></path> </svg>
            </div>
          </div>
          <div>
            <h1>Freelance Design Director</h1>
          </div>
          <div className="flex justify-between">
            <h1>18.19</h1>
            <h1>-</h1>
            <h1>Selected Works</h1>
          </div>
          <ul className="flex justify-between mt-6">
            <li>
              <p>Info</p>
            </li>
            <li>
              <p>Contact</p>
            </li>
          </ul>
        </nav>
      </motion.div>
      <div className="pt-[150vh]">
        <div ref={ref} className="pb-[150vh]">
          <LinkImageSection img="/image/image1.jpg">Aphrodite</LinkImageSection>
          <LinkImageSection img="/image/image2.jpg">Zeus</LinkImageSection>
          <LinkImageSection img="/image/image3.jpg">Artemis</LinkImageSection>
          <LinkImageSection img="/image/image4.jpg">Hermes</LinkImageSection>
          <LinkImageSection img="/image/image5.jpg">Phoebe</LinkImageSection>
          <LinkImageSection img="/image/image6.jpg">Poseidon</LinkImageSection>
          <LinkImageSection img="/image/image7.jpg">Dionysus</LinkImageSection>
        </div>
      </div>
    </main>
  );
}
