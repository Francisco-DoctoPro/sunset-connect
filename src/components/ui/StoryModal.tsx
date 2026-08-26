"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Story {
  id: string;
  category: string;
  title: string;
  summary: string;
  content?: string;
  image: string;
}

export function StoryModal({ story }: { story: Story }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);

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

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      router.back();
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-brand-midnight/90 backdrop-blur-md cursor-pointer"
            onClick={handleClose}
          />
          
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, type: "spring", bounce: 0.15 }}
            className="relative w-full max-w-5xl h-[90vh] md:h-[85vh] bg-brand-cream text-brand-midnight rounded-[24px] overflow-hidden flex flex-col md:flex-row shadow-2xl cursor-auto"
          >
            <button 
              onClick={handleClose}
              className="md:hidden absolute top-4 right-4 z-10 bg-brand-midnight text-brand-white w-10 h-10 rounded-full flex items-center justify-center font-bold"
            >
              ✕
            </button>

            <div className="relative w-full md:w-5/12 h-64 md:h-full shrink-0 bg-brand-midnight">
              <Image
                src={story.image}
                alt={story.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>

            <div className="flex-1 overflow-y-auto p-8 md:p-16 flex flex-col relative">
              
              <div className="hidden md:flex justify-end absolute top-8 right-8">
                <button 
                  onClick={handleClose}
                  className="text-brand-midnight/50 hover:text-brand-midnight transition-colors font-sans text-xs font-bold tracking-widest uppercase flex items-center gap-2"
                >
                  Cerrar ✕
                </button>
              </div>

              <div className="flex flex-col gap-4 mb-10 md:mt-4">
                <span className="font-sans text-brand-coral font-bold tracking-widest uppercase text-xs md:text-sm">
                  {story.category}
                </span>
                <h2 className="font-sans font-bold text-4xl md:text-5xl tracking-tight leading-[1.1]">
                  {story.title}
                </h2>
              </div>

              <div className="flex flex-col gap-6 font-sans text-lg md:text-xl leading-relaxed text-brand-midnight/80 max-w-2xl">
                <p className="font-bold text-brand-midnight text-xl md:text-2xl tracking-tight leading-[1.3] mb-4">
                  {story.summary}
                </p>
                {story.content && (
                  <div className="whitespace-pre-wrap font-serif text-brand-midnight/80">
                    {story.content}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
