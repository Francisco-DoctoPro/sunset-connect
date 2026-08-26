"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { config } from "@/data/config";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300",
        scrolled ? "bg-brand-cobalt/90 backdrop-blur-lg border-b border-white/10 shadow-sm py-4" : "bg-transparent py-6"
      )}
    >
      <div className="flex items-center gap-3">
        <Link href="/" className="font-sans font-bold text-xl tracking-tight text-brand-white flex items-center gap-3">
          <div className="flex flex-col gap-[3px]">
            {/* Simple CSS-based profile lines as placeholder for the logo */}
            <div className="h-[2px] w-6 bg-brand-green" />
            <div className="h-[2px] w-7 bg-brand-yellow translate-x-2" />
            <div className="h-[2px] w-6 bg-brand-coral" />
          </div>
        </Link>
      </div>
      
      <nav className="hidden md:flex items-center gap-10 font-sans font-medium text-brand-white/80">
        <Link href="/directorio" className="hover:text-white transition-colors">La comunidad</Link>
        <Link href="/#historias" className="hover:text-white transition-colors">Historias</Link>
        <Link href="/#partners" className="hover:text-white transition-colors">Partners</Link>
      </nav>

      <div>
        <Link href={config.lumaUrl} target="_blank" rel="noopener noreferrer">
          <Button variant={scrolled ? "primary" : "white"} size="sm">
            Solicitar invitación
          </Button>
        </Link>
      </div>
    </header>
  );
}
