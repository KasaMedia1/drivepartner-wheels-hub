import { useParams, Link } from "react-router-dom";
import { getProductBySlug, getSimilarProducts } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import { ShoppingCart, ChevronLeft, Zap, MapPin, Gauge, Battery, Bike, Weight, Check } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const highlightIcons = {
  motor: Zap,
  range: MapPin,
  torque: Gauge,
  battery: Battery,
  speed: Bike,
  weight: Weight,
};

const ProductDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug ?? "");
  const { addItem } = useCartStore();
  const [selectedImg, setSelectedImg] = useState(0);

  if (!product) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl font-bold">Produs negăsit</h1>
          <Link to="/" className="mt-4 inline-block text-sm text-primary underline">
            Înapoi acasă
          </Link>
        </div>
      </div>
    );
  }

  const isRental = product.type === "inchiriere";
  const isBuyProduct = product.type === "cumparare";
  const similar = getSimilarProducts(product);
  const backPath = isRental ? "/inchiriaza" : "/cumpara";
  const hasRichContent = isBuyProduct && product.highlights && product.features;

  // Split specs into two columns for rich layout
  const specEntries = Object.entries(product.specs);
  const specMid = Math.ceil(specEntries.length / 2);
  const specsLeft = specEntries.slice(0, specMid);
  const specsRight = specEntries.slice(specMid);

  return (
    <div>
      {/* ═══ HERO SECTION: Image + Info ═══ */}
      <div className="bg-card py-8 md:py-16">
        <div className="container-main">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="transition-colors hover:text-foreground">Acasă</Link>
            <span>/</span>
            <Link to={backPath} className="transition-colors hover:text-foreground">
              {isRental ? "Închiriere" : "Cumpără"}
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            {/* Gallery */}
            <div>
              <div className="aspect-square overflow-hidden rounded-lg bg-accent">
                <img
                  src={product.gallery[selectedImg]}
                  alt={product.name}
                  className="h-full w-full object-contain p-8"
                />
              </div>
              {product.gallery.length > 1 && (
                <div className="mt-3 flex gap-2">
                  {product.gallery.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImg(i)}
                      className={`h-16 w-16 overflow-hidden rounded-md border-2 bg-accent transition-colors ${
                        selectedImg === i ? "border-primary" : "border-border"
                      }`}
                    >
                      <img src={img} alt="" className="h-full w-full object-contain p-1" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <h1 className="font-heading text-2xl font-bold md:text-3xl lg:text-4xl">
                Bicicletă electrică {product.name}
              </h1>

              <div className="mt-5 flex items-baseline gap-3">
                <span className="font-heading text-3xl font-extrabold md:text-4xl">
                  {isRental
                    ? `${product.pricePerDay} RON`
                    : `${product.price.toLocaleString("ro-RO")} RON`}
                </span>
                {isRental && <span className="text-sm text-muted-foreground">/zi</span>}
              </div>

              {product.available ? (
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
                  <Check className="h-4 w-4" />
                  În stoc
                </div>
              ) : (
                <div className="mt-4 text-sm text-muted-foreground">Momentan indisponibil</div>
              )}

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                {product.longDescription}
              </p>

              {product.available && (
                <button
                  onClick={() => addItem(product)}
                  className={`mt-6 flex w-full items-center justify-center gap-2 rounded-md py-4 font-heading text-sm font-semibold text-primary-foreground transition-colors ${
                    isRental ? "bg-secondary hover:bg-secondary/90" : "bg-primary hover:bg-primary/90"
                  }`}
                >
                  <ShoppingCart className="h-4 w-4" />
                  {isRental ? "Rezervă acum" : "Adaugă în coș"}
                </button>
              )}

              {/* Rental conditions */}
              {isRental && product.rentalConditions && (
                <div className="mt-6">
                  <h3 className="font-heading text-sm font-semibold mb-3">Condiții de închiriere</h3>
                  <ul className="space-y-1.5">
                    {product.rentalConditions.map((c, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-secondary shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Simple specs for rental products */}
              {isRental && (
                <div className="mt-8">
                  <h3 className="font-heading text-sm font-semibold mb-3">Specificații</h3>
                  <div className="divide-y divide-border rounded-md border border-border">
                    {specEntries.map(([key, val]) => (
                      <div key={key} className="flex justify-between px-4 py-2.5 text-sm">
                        <span className="text-muted-foreground">{key}</span>
                        <span className="font-medium">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ═══ RICH CONTENT (only for buy products) ═══ */}
      {hasRichContent && (
        <>
          {/* ── Highlights Bar ── */}
          {product.highlights && product.highlights.length > 0 && (
            <div className="border-y border-border bg-background py-8">
              <div className="container-main">
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
                  {product.highlights.map((h, i) => {
                    const Icon = highlightIcons[h.icon];
                    return (
                      <div key={i} className="flex flex-col items-center text-center">
                        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
                          <Icon className="h-5 w-5 text-destructive" />
                        </div>
                        <span className="font-heading text-lg font-bold">{h.value}</span>
                        <span className="text-xs text-muted-foreground">{h.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ── Tagline Section ── */}
          {product.tagline && (
            <div className="py-16 md:py-24">
              <div className="container-main">
                <div className="grid gap-8 md:grid-cols-2 md:items-center">
                  <div>
                    <h2 className="font-heading text-2xl font-bold md:text-3xl lg:text-4xl">
                      {product.tagline}
                    </h2>
                  </div>
                  <div>
                    <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                      {product.taglineDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── Feature image (bike repeat) ── */}
          <div className="bg-gradient-to-b from-accent/50 to-background py-12">
            <div className="container-main flex justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-[500px] w-auto object-contain"
              />
            </div>
          </div>

          {/* ── Features Grid ── */}
          {product.features && product.features.length > 0 && (
            <div className="py-16 md:py-24">
              <div className="container-main">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {product.features.map((f, i) => (
                    <div key={i} className="group">
                      <div className="mb-4 aspect-[4/3] overflow-hidden rounded-lg bg-foreground">
                        <img
                          src={f.image || product.image}
                          alt={f.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <h3 className="font-heading text-base font-bold md:text-lg">{f.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {f.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── Detailed Specs (Accordion) ── */}
          <div className="border-t border-border bg-card py-16 md:py-24">
            <div className="container-main">
              <h2 className="mb-10 text-center font-heading text-2xl font-bold md:text-3xl">
                Detalii produs
              </h2>

              <Accordion type="single" collapsible defaultValue="specs" className="mx-auto max-w-5xl">
                <AccordionItem value="specs" className="border rounded-md px-6">
                  <AccordionTrigger className="font-heading text-base font-semibold">
                    Specificații tehnice
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid gap-x-12 gap-y-0 md:grid-cols-2">
                      {/* Left column */}
                      <div className="divide-y divide-border">
                        {specsLeft.map(([key, val]) => (
                          <div key={key} className="flex justify-between py-3 text-sm">
                            <span className="font-medium">{key}</span>
                            <span className="text-right text-muted-foreground">{val}</span>
                          </div>
                        ))}
                      </div>
                      {/* Right column */}
                      <div className="divide-y divide-border">
                        {specsRight.map(([key, val]) => (
                          <div key={key} className="flex justify-between py-3 text-sm">
                            <span className="font-medium">{key}</span>
                            <span className="text-right text-muted-foreground">{val}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </>
      )}

      {/* ═══ SIMILAR PRODUCTS ═══ */}
      {similar.length > 0 && (
        <div className="py-16 md:py-20">
          <div className="container-main">
            <h2 className="font-heading text-xl font-bold mb-6">Produse similare</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {similar.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
