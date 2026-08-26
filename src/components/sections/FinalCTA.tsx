import { config } from "@/data/config";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="bg-brand-cobalt text-brand-white py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      
      {/* Background Graphic */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none flex flex-col justify-center gap-4 translate-x-1/4">
        <div className="h-[4px] md:h-[6px] w-full bg-brand-coral rounded-full" />
        <div className="h-[4px] md:h-[6px] w-3/4 bg-brand-yellow rounded-full translate-x-12" />
        <div className="h-[4px] md:h-[6px] w-5/6 bg-brand-green rounded-full translate-x-4" />
      </div>

      <div className="max-w-[1440px] mx-auto flex flex-col gap-8 relative z-10">
        
        <h2 className="font-sans font-bold text-4xl md:text-6xl lg:text-[5vw] leading-[1.05] tracking-tight max-w-4xl text-balance">
          La próxima conversación puede cambiar lo que estás construyendo.
        </h2>
        
        <p className="font-sans text-xl md:text-2xl text-brand-white/80 max-w-2xl leading-relaxed text-balance">
          Cuéntanos quién eres, qué estás creando y qué podrías aportar a la comunidad.
        </p>
        
        <div className="mt-6">
          <Button variant="primary" size="lg" asChild>
            <Link href={config.lumaUrl} target="_blank" rel="noopener noreferrer">
              Solicitar invitación
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}
