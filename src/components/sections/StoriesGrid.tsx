import { config } from "@/data/config";
import Image from "next/image";
import Link from "next/link";

export function StoriesGrid() {
  const featuredStory = config.stories.find(s => s.isFeatured) || config.stories[0];
  const otherStories = config.stories.filter(s => s.id !== featuredStory.id).slice(0, 2);

  return (
    <section id="historias" className="bg-brand-white text-brand-midnight py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-16">
        
        <div className="flex flex-col gap-6 max-w-2xl">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-8 bg-brand-midnight/50" />
            <span className="font-sans font-semibold tracking-widest uppercase text-sm text-brand-midnight/80">
              Desde la comunidad
            </span>
          </div>
          <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-[4vw] leading-[1.05] tracking-tight text-balance">
            Ideas, logros y colaboraciones que vale la pena conocer.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Featured Story */}
          <Link href={`/historias/${featuredStory.slug}`} scroll={false} className="lg:col-span-7 flex flex-col gap-6 group cursor-pointer">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[20px] bg-brand-cream">
              <Image
                src={featuredStory.image}
                alt={featuredStory.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-sans text-xs font-bold tracking-widest uppercase text-brand-coral">
                {featuredStory.category}
              </span>
              <h3 className="font-sans font-bold text-3xl md:text-4xl leading-tight group-hover:text-brand-cobalt transition-colors">
                {featuredStory.title}
              </h3>
              <p className="font-sans text-brand-midnight/80 text-lg leading-relaxed max-w-xl">
                {featuredStory.summary}
              </p>
            </div>
          </Link>

          {/* Other Stories */}
          <div className="lg:col-span-5 flex flex-col gap-12 lg:gap-0 justify-between">
            {otherStories.map((story, idx) => (
              <div key={story.id} className="flex flex-col">
                <Link href={`/historias/${story.slug}`} scroll={false} className="flex flex-col sm:flex-row lg:flex-col gap-6 group cursor-pointer">
                  <div className="relative w-full sm:w-1/2 lg:w-full aspect-[16/9] lg:aspect-[2/1] overflow-hidden rounded-[16px] bg-brand-cream shrink-0">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                    />
                  </div>
                  <div className="flex flex-col gap-2 justify-center">
                    <span className="font-sans text-[10px] font-bold tracking-widest uppercase text-brand-coral">
                      {story.category}
                    </span>
                    <h3 className="font-sans font-bold text-xl md:text-2xl leading-snug group-hover:text-brand-cobalt transition-colors">
                      {story.title}
                    </h3>
                    <p className="font-sans text-brand-midnight/70 text-sm leading-relaxed">
                      {story.summary}
                    </p>
                  </div>
                </Link>
                {idx === 0 && <div className="hidden lg:block h-[1px] w-full bg-brand-midnight/10 my-6" />}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mt-8 border-t border-brand-midnight/10 pt-8">
          <Link href="/historias" className="shrink-0 group/btn bg-brand-cobalt text-brand-white px-8 py-4 rounded-full font-sans font-bold hover:bg-brand-midnight transition-all flex items-center gap-3">
            Ver todas las historias
            <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
          </Link>
          <a href={`mailto:${config.social.email}?subject=Quiero compartir una noticia`} className="font-sans font-semibold text-brand-midnight/60 hover:text-brand-midnight text-sm transition-colors flex items-center gap-2">
            Comparte una noticia
          </a>
        </div>

      </div>
    </section>
  );
}
