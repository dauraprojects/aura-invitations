import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-composition.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 md:pt-0">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Column */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-6">
              <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-muted-foreground font-sans">
                Digital Wedding Invitation
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tight leading-[1.1] text-foreground" style={{ textWrap: "balance" }}>
                Kemenangan Cinta, Abadi dalam Detail Digital.
              </h1>
              <p className="text-base md:text-lg text-foreground/60 font-sans leading-relaxed max-w-md">
                Buat undangan pernikahan digital premium yang merefleksikan keanggunan Anda dalam hitungan menit.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl">
                Mulai Desain Undangan Anda
              </Button>
              <Button variant="ghost-gold" size="xl" className="font-sans">
                Lihat Katalog
              </Button>
            </div>
            <p className="text-xs text-muted-foreground font-sans">
              Selesai dalam 5 menit · Gratis untuk dicoba
            </p>
          </div>

          {/* Visual Column */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              <img
                src={heroImage}
                alt="D'Aura Project - Undangan Pernikahan Digital Premium"
                className="w-full h-auto image-outline shadow-card"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold/30" aria-hidden="true" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border border-gold/20" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
