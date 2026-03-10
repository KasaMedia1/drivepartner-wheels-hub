import { useRef } from "react";
import { Link } from "react-router-dom";
import { getProductsByType } from "@/data/products";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import duottsF20Hero from "@/assets/duotts-f20-hero.png";
import livratoriHeroBg from "@/assets/livratori-hero-bg.jpg";
import { ChevronLeft, ChevronRight, Truck, Clock, Award, Phone, MessageCircle } from "lucide-react";

const allBuyProducts = getProductsByType("cumparare");

const rentalModels = allBuyProducts.map((p) => ({
  name: p.name,
  image: p.image,
  pricePerWeek: 200,
  slug: p.slug,
}));

const RentPage = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <>
      {/* ═══ HERO — Livratori + F20 Offer ═══ */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src={livratoriHeroBg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-foreground/80" />
        </div>

        <div className="container-main relative z-10 grid items-center gap-8 py-16 md:py-24 lg:grid-cols-[1fr_auto]">
          {/* Left — Text */}
          <div className="text-primary-foreground">
            <span className="inline-block rounded-full bg-primary/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Program livratori
            </span>
            <h1 className="mt-5 font-heading text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              Vrei să devii livrator?
            </h1>
            <p className="mt-4 text-base text-primary-foreground/80 md:text-lg">
              DrivePartner te ajută cu tot procesul. Te activăm rapid ca partener pe platformele de livrare. Cel mai mic comision, plăți la timp și suport pe WhatsApp.
            </p>

            {/* F20 Offer Card */}
            <div className="mt-8 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-primary">
                <Award className="h-5 w-5" />
                <span className="font-heading text-sm font-bold uppercase tracking-wider">Ofertă specială</span>
              </div>
              <h3 className="mt-3 font-heading text-xl font-bold text-primary-foreground md:text-2xl">
                DUOTTS F20 — <span className="text-primary">400 RON/săptămână</span>
              </h3>
              <div className="mt-4 space-y-2">
                <div className="flex items-start gap-2.5 text-sm text-primary-foreground/80">
                  <Truck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Bicicletă electrică retro cu motor 1000W, ideală pentru livrări</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-primary-foreground/80">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>După <strong className="text-primary-foreground">7 luni</strong> de închiriere, bicicleta devine a ta!</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-primary-foreground/80">
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Suport dedicat pe WhatsApp pentru orice problemă</span>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://www.drivepartner.ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-primary px-6 py-3 font-heading text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Devino livrator
                </a>
                <Link
                  to="/contact-inchiriere"
                  className="rounded-md border border-primary-foreground/20 px-6 py-3 font-heading text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  Contactează-ne
                </Link>
              </div>
            </div>
          </div>

          {/* Right — Logo + Bike Image */}
          <div className="flex items-center justify-center">
            <img
              src={duottsF20Hero}
              alt="DUOTTS F20 — Bicicletă pentru livratori"
              className="max-h-[400px] w-auto rounded-lg object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ═══ Benefits Bar ═══ */}
      <div className="border-b border-border bg-card py-8">
        <div className="container-main grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { icon: "🚲", title: "Biciclete premium", desc: "Modele DUOTTS de top" },
            { icon: "💰", title: "De la 200 RON/săpt", desc: "Prețuri accesibile" },
            { icon: "🔑", title: "Rent-to-Own", desc: "Devine a ta după 7 luni" },
            { icon: "🛠️", title: "Service inclus", desc: "Mentenanță gratuită" },
          ].map((b, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-2xl">{b.icon}</span>
              <div>
                <p className="font-heading text-sm font-bold">{b.title}</p>
                <p className="text-xs text-muted-foreground">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ All Models Carousel ═══ */}
      <section className="py-16 md:py-24">
        <div className="container-main">
          <AnimateOnScroll>
            <div className="mb-10 flex items-end justify-between">
              <div>
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-secondary">
                  Închiriere
                </span>
                <h2 className="mt-2 font-heading text-2xl font-bold md:text-3xl">
                  Toate modelele disponibile
                </h2>
                <p className="mt-2 max-w-lg text-sm text-muted-foreground">
                  Alege bicicleta electrică potrivită pentru tine. Prețuri de la 200 RON/săptămână cu opțiunea rent-to-own.
                </p>
              </div>
              <div className="hidden gap-2 md:flex">
                <button
                  onClick={() => scroll("left")}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-accent"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-accent"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Scrollable cards */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {rentalModels.map((model, i) => (
              <div
                key={i}
                className="group flex w-[280px] shrink-0 snap-start flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-lg"
              >
                <div className="aspect-square overflow-hidden bg-accent">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-heading text-sm font-semibold">{model.name}</h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="font-heading text-lg font-bold text-primary">de la 200 RON</span>
                    <span className="text-xs text-muted-foreground">/săptămână</span>
                  </div>
                  <p className="mt-1.5 text-[11px] text-muted-foreground">
                    Rent-to-own disponibil după 7 luni
                  </p>
                  <Link
                    to="/contact-inchiriere"
                    className="mt-4 flex items-center justify-center gap-1.5 rounded-md bg-secondary py-2.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    Contactează-ne
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RentPage;
