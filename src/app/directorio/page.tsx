"use client";

import { useState } from "react";
import { config } from "@/data/config";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MemberModal } from "@/components/ui/MemberModal";
import { motion } from "framer-motion";

export default function DirectoryPage() {
  const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);
  
  const selectedMember = config.members.find(m => m.id === selectedMemberId) || null;

  return (
    <main className="min-h-screen bg-brand-cobalt text-brand-white flex flex-col selection:bg-brand-coral selection:text-brand-white">
      <Header />
      
      <div className="flex-1 max-w-[1440px] w-full mx-auto px-6 md:px-12 pt-32 pb-24">
        <div className="flex flex-col gap-6 mb-16 max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-sans font-bold text-5xl md:text-7xl tracking-tight"
          >
            Directorio de Miembros
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-xl md:text-2xl text-brand-white/80"
          >
            Conoce a las personas que están impulsando el futuro de nuestra comunidad.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
          {config.members.map((member, idx) => (
            <motion.button 
              key={member.id} 
              onClick={() => setSelectedMemberId(member.id)}
              className="flex flex-col text-left gap-4 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + (idx * 0.05) }}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[16px] bg-brand-midnight/50">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-brand-cobalt/10 group-hover:bg-transparent transition-colors duration-500 mix-blend-overlay" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-sans font-bold text-lg leading-tight group-hover:text-brand-cyan transition-colors">{member.name}</h3>
                <p className="font-sans text-brand-white/60 text-xs tracking-widest uppercase font-semibold">
                  {member.project}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <Footer />

      <MemberModal 
        member={selectedMember} 
        isOpen={!!selectedMemberId} 
        onClose={() => setSelectedMemberId(null)} 
      />
    </main>
  );
}
