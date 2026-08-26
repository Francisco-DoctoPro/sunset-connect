"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { config } from "@/data/config";

const phrases = [
  <span key="1">sí<br/>suman.</span>,
  <span key="2">te<br/>impulsan.</span>,
  <span key="3">abren<br/>posibilidades.</span>
];

const graphicLines = [
  { color: "var(--color-brand-green)", width: "80%", delay: 0 },
  { color: "var(--color-brand-cyan)", width: "65%", delay: 0.1 },
  { color: "var(--color-brand-coral)", width: "85%", delay: 0.2 },
  { color: "var(--color-brand-yellow)", width: "100%", delay: 0.3 },
  { color: "var(--color-brand-green)", width: "75%", delay: 0.4 },
  { color: "var(--color-brand-pink)", width: "95%", delay: 0.5 },
  { color: "var(--color-brand-cyan)", width: "80%", delay: 0.6 },
  { color: "var(--color-brand-white)", width: "90%", delay: 0.7 },
  { color: "var(--color-brand-coral)", width: "70%", delay: 0.8 },
  { color: "var(--color-brand-yellow)", width: "88%", delay: 0.9 },
  { color: "var(--color-brand-pink)", width: "60%", delay: 1.0 },
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <section className="relative min-h-[90svh] flex items-center justify-center pt-24 pb-16 px-6 md:px-12 overflow-hidden">
      {/* Background graphic (Dynamic and aligned to right to avoid text overlap) */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[55%] flex items-center justify-end opacity-40 md:opacity-60 pointer-events-none z-0">
        <div className="flex flex-col gap-4 md:gap-5 w-full items-end">
          {graphicLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ 
                x: shouldReduceMotion ? 0 : [0, -30, 0],
                opacity: shouldReduceMotion ? 1 : [0.7, 1, 0.7] 
              }}
              transition={{
                x: {
                  duration: 3 + (i % 3),
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                opacity: {
                  duration: 2 + (i % 2),
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                // Initial entrance animation mixed in
                default: { duration: 0.8, delay: line.delay, ease: "easeOut" }
              }}
              className="h-[3px] md:h-[5px] rounded-l-full"
              style={{
                backgroundColor: line.color,
                width: line.width,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto w-full relative z-10 grid md:grid-cols-2 gap-12 items-center mt-12 md:mt-0">
        <div className="flex flex-col gap-6 md:gap-8 max-w-2xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="h-[1px] w-8 bg-brand-white/50" />
            <span className="font-sans font-semibold tracking-widest uppercase text-sm text-brand-white/80">
              Sunset Connect · Comunidad Curada
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-bold text-5xl md:text-7xl lg:text-[7vw] leading-[1.05] tracking-tight"
          >
            <span className="sr-only">Conexiones que sí suman, te impulsan y abren posibilidades.</span>
            <span className="block mb-1 md:mb-2" aria-hidden="true">Conexiones que</span>
            <span className="relative block overflow-hidden text-brand-yellow" aria-hidden="true">
              {/* Invisible longest phrase to reserve space and prevent layout shifts on any screen size */}
              <span className="invisible block pointer-events-none">
                abren<br/>posibilidades.
              </span>
              
              {shouldReduceMotion ? (
                <span className="absolute inset-0">{phrases[0]}</span>
              ) : (
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={index}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    {phrases[index]}
                  </motion.span>
                </AnimatePresence>
              )}
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-lg md:text-xl lg:text-2xl text-brand-white/80 max-w-xl leading-relaxed text-balance"
          >
            Una comunidad de emprendedores, ejecutivos, artistas y creativos que se reúne para descubrir proyectos, compartir historias y crear nuevas posibilidades.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <Button variant="primary" size="lg" asChild>
              <Link href={config.lumaUrl} target="_blank" rel="noopener noreferrer">
                Solicitar invitación
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#comunidad">
                Descubrir la comunidad
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
