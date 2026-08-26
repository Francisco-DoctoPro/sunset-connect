import Link from "next/link";
import { config } from "@/data/config";

export function Footer() {
  return (
    <footer className="bg-brand-midnight text-brand-white/70 py-16 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-t border-brand-white/10 pt-12">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-[3px]">
            <div className="h-[2px] w-6 bg-brand-white" />
            <div className="h-[2px] w-7 bg-brand-white translate-x-2" />
            <div className="h-[2px] w-6 bg-brand-white" />
          </div>
          <p className="font-sans text-base max-w-xs text-balance">
            Hecho por y para personas que están aportando a la comunidad.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-sm font-sans uppercase tracking-widest font-medium">
          <Link href={config.social.instagram} className="hover:text-brand-white transition-colors" target="_blank" rel="noopener noreferrer">Instagram</Link>
          <Link href={config.social.linkedin} className="hover:text-brand-white transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
          <a href={`mailto:${config.social.email}`} className="hover:text-brand-white transition-colors">Email</a>
          <Link href="#" className="hover:text-brand-white transition-colors">Privacidad</Link>
        </div>
      </div>
    </footer>
  );
}
