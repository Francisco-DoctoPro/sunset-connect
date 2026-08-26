"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { config } from "@/data/config";

const phrases = ["sí suman.", "te impulsan.", "abren posibilidades."];

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
      {/* Background graphic placeholder (Comunidad en movimiento) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 md:opacity-50 md:translate-x-1/4">
        <div className="flex flex-col gap-4 w-full max-w-4xl">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: i * 0.1,
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-[4px] md:h-[6px] w-full rounded-full"
              style={{
                backgroundColor: [
                  "var(--color-brand-coral)",
                  "var(--color-brand-yellow)",
                  "var(--color-brand-green)",
                  "var(--color-brand-pink)",
                  "var(--color-brand-cyan)",
                  "var(--color-brand-white)",
                  "var(--color-brand-coral)",
                  "var(--color-brand-yellow)",
                ][i],
                transform: `translateX(${Math.random() * 40}px)`,
                width: `${70 + Math.random() * 30}%`,
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
            className="font-sans font-bold text-5xl md:text-7xl lg:text-[8vw] leading-[1.05] tracking-tight flex flex-col"
          >
            <span className="block">Conexiones que</span>
            <span className="block h-[1.1em] relative overflow-hidden text-brand-yellow">
              {shouldReduceMotion ? (
                <span className="block absolute inset-0">{phrases[0]}</span>
              ) : (
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={index}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="block absolute inset-0"
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
