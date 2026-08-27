import { config } from "@/data/config";
import Image from "next/image";

export function PartnersRow() {
  return (
    <section id="partners" className="bg-brand-cream text-brand-midnight py-24 md:py-32 px-6 md:px-12 border-b border-brand-midnight/5">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-16">
        
        <div className="flex flex-col items-center text-center gap-6">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-12 bg-brand-midnight/30" />
            <span className="font-sans font-bold tracking-widest uppercase text-sm md:text-base text-brand-midnight/60">
              Comunidad de Partners y Sponsors
            </span>
            <div className="h-[1px] w-12 bg-brand-midnight/30" />
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-80 hover:opacity-100 transition-opacity duration-500">
          {config.partners.map((partner, idx) => {
            const content = (
              <div className="relative h-12 md:h-20 w-40 md:w-56 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            );

            if (partner.link) {
              return (
                <a key={idx} href={partner.link} target="_blank" rel="noopener noreferrer" className="block">
                  {content}
                </a>
              );
            }

            return <div key={idx}>{content}</div>;
          })}
        </div>

      </div>
    </section>
  );
}
