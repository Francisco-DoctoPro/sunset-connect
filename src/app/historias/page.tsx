import { config } from "@/data/config";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Historias - Sunset Connect",
  description: "Noticias, logros y colaboraciones de nuestra comunidad.",
};

export default function HistoriasPage() {
  return (
    <main className="min-h-screen bg-brand-midnight text-brand-white flex flex-col selection:bg-brand-coral selection:text-brand-white">
      <Header />
      
      <div className="flex-1 max-w-[1440px] w-full mx-auto px-6 md:px-12 pt-32 pb-24">
        <div className="flex flex-col gap-6 mb-16 max-w-3xl">
          <h1 className="font-sans font-bold text-5xl md:text-7xl tracking-tight">
            Noticias y Logros
          </h1>
          <p className="font-serif text-xl md:text-2xl text-brand-white/80">
            Descubre las últimas actualizaciones, colaboraciones e hitos de las personas que forman parte de Sunset Connect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {config.stories.map((story) => (
            <Link 
              key={story.id} 
              href={`/historias/${story.slug}`}
              scroll={false}
              className="flex flex-col gap-4 group cursor-pointer"
            >
              <div className="relative aspect-[16/9] md:aspect-[4/3] w-full overflow-hidden rounded-[16px] bg-brand-cream">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-col gap-2 mt-2">
                <span className="font-sans text-xs font-bold tracking-widest uppercase text-brand-coral">
                  {story.category}
                </span>
                <h3 className="font-sans font-bold text-2xl leading-tight group-hover:text-brand-cyan transition-colors">
                  {story.title}
                </h3>
                <p className="font-sans text-brand-white/70 text-sm leading-relaxed mt-1">
                  {story.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
