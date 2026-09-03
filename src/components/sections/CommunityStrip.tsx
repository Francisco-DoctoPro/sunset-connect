"use client";

import { config } from "@/data/config";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function CommunityStrip() {
  const displayMembers = config.members.slice(0, 4);

  return (
    <section id="comunidad" className="bg-brand-cobalt text-brand-white py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-16 md:gap-24">
        
        <div className="flex flex-col gap-6 max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-8 bg-brand-white/50" />
            <span className="font-sans font-semibold tracking-widest uppercase text-sm text-brand-white/80">
              Personas que deberías conocer
            </span>
          </div>
          <h2 className="font-sans font-bold text-4xl md:text-6xl lg:text-[5vw] leading-[1.05] tracking-tight text-balance">
            Distintas trayectorias.<br/>Una misma energía.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayMembers.map((member, idx) => (
            <motion.div 
              key={member.id} 
              className="flex flex-col gap-6 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[20px] bg-brand-midnight/50">
                <motion.div
                  className="w-full h-full"
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: idx * 0.5 }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={`object-cover ${"imagePosition" in member && member.imagePosition ? member.imagePosition : "object-center"} grayscale group-hover:grayscale-0 transition-all duration-700`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-brand-cobalt/20 group-hover:bg-transparent transition-colors duration-500 mix-blend-overlay" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-sans font-bold text-2xl">{member.name}</h3>
                <p className="font-sans text-brand-white/70 text-xs tracking-widest uppercase font-bold">
                  {member.role} · {member.project}
                </p>
                <div className="h-[1px] w-full bg-brand-white/10 my-1" />
                <p className="font-sans text-brand-white/90 leading-relaxed text-sm md:text-base">
                  {member.building}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mt-8">
          <div className="max-w-2xl">
            <p className="font-serif text-3xl md:text-5xl leading-[1.1] text-brand-white/90 tracking-tight">
              La comunidad no se construye solamente con lo que has logrado, sino con lo que estás dispuesto a aportar.
            </p>
          </div>
          <Link href="/directorio" className="shrink-0 group/btn bg-brand-white text-brand-cobalt px-8 py-4 rounded-full font-sans font-bold hover:bg-brand-white/90 transition-all flex items-center gap-3">
            Conoce a la comunidad
            <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
