import { config } from "@/data/config";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = config.stories.find((s) => s.slug === slug);
  if (!story) return { title: "Historia no encontrada" };
  
  return {
    title: `${story.title} - Sunset Connect`,
    description: story.summary,
  };
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = config.stories.find((s) => s.slug === slug);
  
  if (!story) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-brand-cream text-brand-midnight flex flex-col selection:bg-brand-coral selection:text-brand-white">
      <Header />
      
      <article className="flex-1 max-w-[800px] w-full mx-auto px-6 md:px-12 pt-32 pb-24">
        
        <div className="flex flex-col gap-4 mb-10">
          <span className="font-sans text-xs font-bold tracking-widest uppercase text-brand-coral">
            {story.category}
          </span>
          <h1 className="font-sans font-bold text-4xl md:text-6xl tracking-tight leading-[1.1]">
            {story.title}
          </h1>
        </div>

        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[20px] mb-12">
          <Image
            src={story.image}
            alt={story.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 800px"
          />
        </div>

        <div className="font-sans text-lg md:text-xl leading-relaxed text-brand-midnight/80 flex flex-col gap-6">
          <p className="font-bold text-brand-midnight text-xl md:text-2xl leading-[1.3] mb-4">
            {story.summary}
          </p>
          {story.content && (
            <div className="whitespace-pre-wrap font-serif text-brand-midnight/90">
              {story.content}
            </div>
          )}
        </div>

      </article>

      <Footer />
    </main>
  );
}
