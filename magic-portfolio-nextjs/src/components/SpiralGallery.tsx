"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Column, Flex, Media } from "@once-ui-system/core";

const GravityLetter = ({ letter, index, scrollYProgress }: { letter: string, index: number, scrollYProgress: MotionValue<number> }) => {
  const seed = index * 123.456;
  const randomY = 400 + (seed % 600); // 400 to 1000px drop
  const randomRot = -90 + (seed % 180); // -90 to 90 deg
  const randomX = -200 + (seed % 400); // spread left to right

  // Letters fall at slightly different times based on their index
  const start = 0.4 + (index % 10) * 0.015;
  const end = start + 0.3;

  // React hook rules compliant
  const y = useTransform(scrollYProgress, [start, end], [0, randomY]);
  const x = useTransform(scrollYProgress, [start, end], [0, randomX]);
  const rotate = useTransform(scrollYProgress, [start, end], [0, randomRot]);
  const opacity = useTransform(scrollYProgress, [end - 0.1, end + 0.1], [1, 0]);

  return (
    <motion.span style={{ display: "inline-block", y, x, rotate, opacity, whiteSpace: "pre" }}>
      {letter}
    </motion.span>
  );
};

export const SpiralGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Background images
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [-5, -25]);
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  
  const y2 = useTransform(scrollYProgress, [0, 1], ["10%", "-120%"]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [5, 20]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);

  const y3 = useTransform(scrollYProgress, [0, 1], ["50%", "-160%"]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [-10, 5]);

  const textToShatter = "Ingeniería Interactiva";

  return (
    <Column ref={containerRef} fillWidth position="relative" style={{ height: "300vh" }}>
      <Flex 
        fillWidth 
        position="sticky" 
        style={{ top: 0, height: "100vh", overflow: "hidden", perspective: "1000px" }}
        vertical="center" 
        horizontal="center"
        background="page"
      >
        <Column position="absolute" style={{ top: "20%", zIndex: 10 }}>
            {/* Título que se fragmenta */}
            <h2 className="font-display heading-strong-xl" style={{ 
               color: "var(--brand-strong)", 
               textShadow: "0 0 40px rgba(16,185,129,0.3)",
               textAlign: "center",
               fontSize: "3rem"
            }}>
              {textToShatter.split("").map((char, index) => (
                <GravityLetter key={index} letter={char} index={index} scrollYProgress={scrollYProgress} />
              ))}
            </h2>
        </Column>

        <Flex position="relative" style={{ width: "100%", maxWidth: "1200px", height: "100%" }}>
          <motion.div
            style={{
              position: "absolute", top: "35%", left: "5%", width: "40%", y: y1, rotateZ: rotate1, scale: scale1,
              borderRadius: "24px", overflow: "hidden", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8)", zIndex: 2
            }}
          >
            <Media src="/images/gallery/horizontal-1.jpg" priority aspectRatio="16/9" alt="Gallery Image 1" />
          </motion.div>

          <motion.div
            style={{
              position: "absolute", top: "25%", right: "5%", width: "35%", y: y2, rotateZ: rotate2, scale: scale2,
              borderRadius: "16px", overflow: "hidden", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8)", zIndex: 1
            }}
          >
             <Media src="/images/gallery/horizontal-2.jpg" priority aspectRatio="4/3" alt="Gallery Image 2" />
          </motion.div>

          <motion.div
            style={{
              position: "absolute", top: "60%", left: "30%", width: "40%", y: y3, rotateZ: rotate3,
              borderRadius: "24px", overflow: "hidden", zIndex: 3, boxShadow: "0 35px 60px -15px rgba(0, 0, 0, 1)"
            }}
          >
            <Media src="/images/gallery/horizontal-3.jpg" priority aspectRatio="16/9" alt="Gallery Image 3" />
          </motion.div>
        </Flex>
      </Flex>
    </Column>
  );
};
