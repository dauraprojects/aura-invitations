import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-composition.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden px-6 pt-28 pb-10 md:pt-32 lg:pt-36 lg:pb-14">
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative flex flex-col items-center">
          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center rounded-sm border border-border/40 bg-background/80 px-6 py-7 text-center shadow-card backdrop-blur-sm md:px-10 md:py-9">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              Digital Wedding Invitation
            </p>
            <h1
              className="mt-3 text-3xl font-light leading-[1.08] tracking-tight text-foreground md:text-4xl lg:text-[3.25rem]"
              style={{ textWrap: "balance" }}
            >
              Kemenangan Cinta, Abadi dalam Detail Digital.
            </h1>
            <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-foreground/60 md:text-base">
              Buat undangan pernikahan digital premium yang merefleksikan keanggunan Anda dalam hitungan menit.
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="hero" size="xl">
                Mulai Desain Undangan Anda
              </Button>
              <Button variant="ghost-gold" size="xl" className="font-sans">
                Lihat Katalog
              </Button>
            </div>

            <p className="mt-4 font-sans text-xs text-muted-foreground">
              Selesai dalam 5 menit · Gratis untuk dicoba
            </p>
          </div>

          <div className="relative -mt-8 w-full max-w-6xl md:-mt-10 lg:-mt-14">
            <div
              className="absolute left-1/2 top-[45%] h-[70%] w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={heroImage}
                alt="D'Aura Project - Undangan Pernikahan Digital Premium"
                className="mx-auto h-auto w-full image-outline shadow-card"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-transparent" aria-hidden="true" />
              <div className="absolute -left-3 top-20 h-20 w-20 border border-gold/20 md:-left-6 md:h-28 md:w-28" aria-hidden="true" />
              <div className="absolute -right-3 bottom-8 h-24 w-24 border border-gold/30 md:-right-6 md:h-32 md:w-32" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
