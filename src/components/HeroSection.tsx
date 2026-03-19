import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-composition.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pt-28 pb-16 md:pt-32 lg:pt-36">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
        <div className="max-w-3xl space-y-5 md:space-y-6">
          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            Digital Wedding Invitation
          </p>
          <h1
            className="text-3xl font-light leading-[1.08] tracking-tight text-foreground md:text-4xl lg:text-5xl"
            style={{ textWrap: "balance" }}
          >
            Kemenangan Cinta, Abadi dalam Detail Digital.
          </h1>
          <p className="mx-auto max-w-2xl font-sans text-sm leading-relaxed text-foreground/60 md:text-base">
            Buat undangan pernikahan digital premium yang merefleksikan keanggunan Anda dalam hitungan menit.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="hero" size="xl">
            Mulai Desain Undangan Anda
          </Button>
          <Button variant="ghost-gold" size="xl" className="font-sans">
            Lihat Katalog
          </Button>
        </div>

        <p className="mt-5 font-sans text-xs text-muted-foreground">
          Selesai dalam 5 menit · Gratis untuk dicoba
        </p>

        <div className="relative mt-12 w-full max-w-6xl lg:mt-16">
          <div className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
          <div className="relative">
            <img
              src={heroImage}
              alt="D'Aura Project - Undangan Pernikahan Digital Premium"
              className="mx-auto w-full max-w-6xl h-auto image-outline shadow-card"
            />
            <div className="absolute -left-3 top-10 h-20 w-20 border border-gold/20 md:-left-6 md:h-28 md:w-28" aria-hidden="true" />
            <div className="absolute -right-3 bottom-8 h-24 w-24 border border-gold/30 md:-right-6 md:h-32 md:w-32" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
