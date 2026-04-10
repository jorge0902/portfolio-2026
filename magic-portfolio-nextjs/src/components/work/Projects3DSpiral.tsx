"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Column, Text, Media, Heading } from "@once-ui-system/core";

// Registrar plugin siempre fuera del componente o dentro del bloque estable
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Projects3DSpiral({ projects }: { projects: any[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    if (!innerRef.current || !containerRef.current) return;
    
    // Matamos animaciones anteriores para no duplicarlas durante el Hot Reload
    ScrollTrigger.getAll().forEach(t => t.kill());

    const totalCards = projects.length;
    const yStep = 450; 

    gsap.set(innerRef.current, { clearProps: "all" });

    gsap.to(innerRef.current, {
        rotationY: -360, 
        y: -(totalCards - 1) * yStep, 
        ease: "none",
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            snap: {
                snapTo: 1 / (totalCards - 1),
                duration: 0.5,
                ease: "power2.inOut"
            },
            onUpdate: (self) => {
                const progress = self.progress;
                const activeIndex = Math.round(progress * (totalCards - 1));
                
                cardsRef.current.forEach((card, i) => {
                    if (card) {
                       if (i === activeIndex) {
                           card.style.filter = "brightness(1.1) grayscale(0)";
                           card.style.border = "1px solid var(--brand-strong)";
                           card.style.opacity = "1";
                       } else {
                           card.style.filter = "brightness(0.4) grayscale(0.7)";
                           card.style.border = "1px solid rgba(255,255,255,0.05)";
                           card.style.opacity = "0.3";
                       }
                    }
                });
            }
        }
    });

    return () => {
       ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, { dependencies: [projects], scope: containerRef });

  const innerStyle = {
      position: "relative" as const,
      width: "480px",
      height: "280px",
      transformStyle: "preserve-3d" as const,
  };

  const dummyImages = [
      "/images/gallery/horizontal-1.jpg",
      "/images/gallery/horizontal-2.jpg",
      "/images/gallery/horizontal-3.jpg",
      "/images/gallery/vertical-1.jpg",
      "/images/gallery/vertical-2.jpg",
  ];

  return (
    <div ref={containerRef} style={{ height: `${projects.length * 80}vh`, width: "100%", position: "relative" }}>
      <div style={{ position: "sticky", top: 0, width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", perspective: "1200px", zIndex: 5, overflow: "hidden" }}>
        
        <div style={{
            position: "absolute", fontSize: "15vw", fontWeight: 900, opacity: 0.05, pointerEvents: "none",
            width: "100%", textAlign: "center", top: "50%", transform: "translateY(-50%)", color: "var(--brand-strong)", zIndex: 1
        }}>
            PROYECTOS
        </div>

        <div ref={innerRef} style={{ ...innerStyle, zIndex: 10 }}>
            {projects.map((project, i) => {
                const imgUrl = project.metadata.images && project.metadata.images.length > 0 ? project.metadata.images[0] : dummyImages[i % dummyImages.length];
                
                // MATH directa: las juntamos más con translateZ a 500 y bajando el spacing vertical (yStep a 300)
                const rotation = (360 / projects.length) * i;
                const translateY = i * 300;
                const translateZ = 450;
                
                return (
                <div 
                    key={project.slug}
                    ref={(el) => { if (el) cardsRef.current[i] = el; }}
                    style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "16px",
                        overflow: "hidden",
                        background: "rgba(10,10,10,0.85)",
                        backdropFilter: "blur(30px)",
                        backfaceVisibility: "hidden",
                        transition: "filter 0.5s, border 0.5s, opacity 0.5s",
                        display: "flex", flexDirection: "row",
                        transform: `rotateY(${rotation}deg) translateZ(${translateZ}px) translateY(${translateY}px)`
                    }}
                >
                    <div style={{ width: "40%", height: "100%", position: "relative" }}>
                        <Media src={imgUrl} objectFit="cover" alt={project.metadata.title} />
                        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent, rgba(10,10,10,1))" }} />
                    </div>
                    
                    <Column justifyContent="center" padding="24" style={{ width: "60%", height: "100%", position: "relative", zIndex: 2 }}>
                        <Heading as="h4" variant="heading-strong-l" marginBottom="8" style={{ color: "white" }}>
                            {project.metadata.title}
                        </Heading>
                        <Text variant="body-default-xs" style={{ color: "rgba(255,255,255,0.7)" }} wrap="balance">
                            {project.metadata.summary}
                        </Text>
                    </Column>
                </div>
            )})}
        </div>
      </div>
    </div>
  );
}
