import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import heroBg1 from "@/assets/hero-bg-1.png";
import heroBg2 from "@/assets/hero-bg-2.png";
import heroBg3 from "@/assets/hero-bg-3.png";
import { getProductsByType } from "@/data/products";
import { reviews } from "@/data/reviews";
import ProductCard from "@/components/ProductCard";
import ReviewCard from "@/components/ReviewCard";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const heroImages = [heroBg1, heroBg2, heroBg3];

const Index = () => {
  const buyProducts = getProductsByType("cumparare").slice(0, 3);
  const rentProducts = getProductsByType("inchiriere").slice(0, 3);
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center">
        {/* Background images */}
        {heroImages.map((img, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: currentImg === i ? 1 : 0,
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-foreground/60" />

        <div className="container-main relative z-10 py-16">
          <div className="max-w-xl">
            <span className="inline-block rounded-full bg-primary/20 px-4 py-1.5 font-heading text-xs font-semibold tracking-wider text-primary-foreground">
              DRIVEPARTNER BIKES
            </span>
            <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.1] text-primary-foreground md:text-5xl lg:text-6xl">
              Biciclete premium pentru fiecare drum
            </h1>
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/80 md:text-lg">
              Alege să cumperi sau să închiriezi modelul potrivit pentru oraș, aventură sau mobilitate de zi cu zi.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/cumpara"
                className="rounded-md bg-primary px-6 py-3.5 font-heading text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Descoperă ofertele de cumpărare
              </Link>
              <Link
                to="/inchiriaza"
                className="rounded-md bg-secondary px-6 py-3.5 font-heading text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90"
              >
                Descoperă ofertele de închiriere
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED BUY */}
      <AnimateOnScroll>
        <section className="py-16 md:py-24">
          <div className="container-main">
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-primary">Cumpără</span>
                <h2 className="mt-2 font-heading text-2xl font-bold md:text-3xl">Modele de vânzare</h2>
              </div>
              <Link to="/cumpara" className="text-sm font-medium text-primary underline-offset-4 hover:underline">
                Vezi toate →
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {buyProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* FEATURED RENT */}
      <AnimateOnScroll>
        <section className="bg-card py-16 md:py-24">
          <div className="container-main">
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-secondary">Închiriază</span>
                <h2 className="mt-2 font-heading text-2xl font-bold md:text-3xl">Modele de închiriat</h2>
              </div>
              <Link to="/inchiriaza" className="text-sm font-medium text-secondary underline-offset-4 hover:underline">
                Vezi toate →
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rentProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* VIDEO REVIEW */}
      <AnimateOnScroll>
        <section className="py-16 md:py-24">
          <div className="container-main">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-muted-foreground">Review</span>
                <h2 className="mt-2 font-heading text-2xl font-bold md:text-3xl">
                  Bicicleta electrică DUOTTS F20
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Bicicleta electrică retro combină inteligent designul vintage al bicicletelor clasice de pistă cu cea mai avansată tehnologie de biciclete electrice, creând o operă de artă mobilă. Vezi review complet!
                </p>
              </div>
              <div className="aspect-video overflow-hidden rounded-lg bg-accent">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/UIyS0rmY9ig"
                  title="Review Bicicleta electrică DUOTTS F20"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* REVIEWS */}
      <AnimateOnScroll>
        <section className="bg-card py-16 md:py-24">
          <div className="container-main">
            <div className="text-center mb-10">
              <span className="font-heading text-xs font-semibold uppercase tracking-wider text-muted-foreground">Testimoniale</span>
              <h2 className="mt-2 font-heading text-2xl font-bold md:text-3xl">
                Ce spun clienții noștri
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {reviews.map((r) => (
                <ReviewCard key={r.id} review={r} />
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </>
  );
};

export default Index;
