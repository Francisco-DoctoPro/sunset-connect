import { config } from "@/data/config";

export function Manifesto() {
  return (
    <section className="bg-brand-cream text-brand-midnight py-24 md:py-32 px-6 md:px-12 selection:bg-brand-cobalt selection:text-white">
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-12 gap-12 md:gap-24">
        
        <div className="md:col-span-5 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-8 bg-brand-midnight/50" />
            <span className="font-sans font-semibold tracking-widest uppercase text-sm text-brand-midnight/80">
              Por qué existimos
            </span>
          </div>
          <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-[4vw] leading-[1.05] tracking-tight text-balance">
            {config.manifesto.title}
          </h2>
        </div>

        <div className="md:col-span-7 flex flex-col gap-12">
          <p className="font-sans text-2xl md:text-3xl leading-relaxed text-brand-midnight/90 font-medium text-balance">
            {config.manifesto.text}
          </p>

          <div className="flex flex-col gap-8 mt-8 border-t border-brand-midnight/10 pt-12">
            {config.manifesto.principles.map((principle, idx) => (
              <div key={idx} className="flex gap-4 items-start group">
                <div className="mt-3 h-[2px] w-6 bg-brand-coral shrink-0 group-hover:w-10 transition-all duration-300" />
                <p className="font-sans text-lg md:text-xl text-brand-midnight/80">
                  <span className="font-bold text-brand-midnight">{principle.name}</span> — {principle.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
