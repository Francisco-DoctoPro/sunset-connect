"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

interface Member {
  id: string;
  name: string;
  role: string;
  project: string;
  building: string;
  bio?: string;
  image: string;
  link?: string;
}

interface MemberModalProps {
  member: Member | null;
  isOpen: boolean;
  onClose: () => void;
}

export function MemberModal({ member, isOpen, onClose }: MemberModalProps) {
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.paddingRight = '0px';
      document.body.style.overflow = 'unset';
    }
    return () => { 
      document.body.style.paddingRight = '0px';
      document.body.style.overflow = 'unset'; 
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && member && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-brand-midnight/90 backdrop-blur-md cursor-pointer"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, type: "spring", bounce: 0.15 }}
            className="relative w-full max-w-5xl h-[90vh] md:h-[80vh] bg-brand-cream text-brand-midnight rounded-[24px] overflow-hidden flex flex-col md:flex-row shadow-2xl cursor-auto"
          >
            <button 
              onClick={onClose}
              className="md:hidden absolute top-4 right-4 z-10 bg-brand-midnight text-brand-white w-10 h-10 rounded-full flex items-center justify-center font-bold"
            >
              ✕
            </button>

            <div className="relative w-full md:w-5/12 h-64 md:h-full shrink-0 bg-brand-midnight">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>

            <div className="flex-1 overflow-y-auto p-8 md:p-16 flex flex-col relative">
              
              <div className="hidden md:flex justify-end absolute top-8 right-8">
                <button 
                  onClick={onClose}
                  className="text-brand-midnight/50 hover:text-brand-midnight transition-colors font-sans text-xs font-bold tracking-widest uppercase flex items-center gap-2"
                >
                  Cerrar ✕
                </button>
              </div>

              <div className="flex flex-col gap-2 mb-10 md:mt-4">
                <h2 className="font-sans font-bold text-4xl md:text-5xl tracking-tight leading-[1.1]">
                  {member.name}
                </h2>
                <p className="font-sans text-brand-coral font-bold tracking-widest uppercase text-xs md:text-sm mt-3">
                  {member.role} · {member.project}
                </p>
              </div>

              <div className="flex flex-col gap-8 font-sans text-lg md:text-xl leading-relaxed text-brand-midnight/80 mb-12 max-w-2xl">
                <p className="font-bold text-brand-midnight text-xl md:text-2xl tracking-tight leading-[1.2]">
                  {member.building}
                </p>
                {member.bio && (
                  <p className="font-serif text-brand-midnight/70 leading-relaxed text-lg md:text-xl">
                    {member.bio}
                  </p>
                )}
              </div>

              {member.link && (
                <div className="mt-auto pt-8">
                  <a 
                    href={member.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 font-sans font-bold text-brand-white bg-brand-midnight hover:bg-brand-cobalt px-8 py-4 rounded-full transition-colors"
                  >
                    Visitar proyecto
                    <span>→</span>
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
