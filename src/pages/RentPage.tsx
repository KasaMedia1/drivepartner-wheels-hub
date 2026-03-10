import { useState, useMemo } from "react";
import { getProductsByType, type BikeCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import livratoriBanner from "@/assets/livratori-banner.png";

const categories: { value: BikeCategory | "all"; label: string }[] = [
  { value: "all", label: "Toate" },
  { value: "mountain", label: "Mountain" },
  { value: "urban", label: "Urban" },
  { value: "fat-tire", label: "Fat Tire" },
];

type SortOption = "recomandate" | "pret-asc" | "pret-desc";

const RentPage = () => {
  const allProducts = getProductsByType("inchiriere");
  const [category, setCategory] = useState<BikeCategory | "all">("all");
  const [sort, setSort] = useState<SortOption>("recomandate");
  const [availableOnly, setAvailableOnly] = useState(false);

  const filtered = useMemo(() => {
    let result = [...allProducts];
    if (category !== "all") result = result.filter((p) => p.category === category);
    if (availableOnly) result = result.filter((p) => p.available);
    if (sort === "pret-asc") result.sort((a, b) => (a.pricePerDay ?? 0) - (b.pricePerDay ?? 0));
    if (sort === "pret-desc") result.sort((a, b) => (b.pricePerDay ?? 0) - (a.pricePerDay ?? 0));
    return result;
  }, [category, sort, availableOnly]);

  return (
    <>
      {/* Livratori Banner */}
      <section className="text-center">
        <div className="bg-muted pt-4 pb-1 md:pt-6 md:pb-2">
          <div className="container-main">
            <h2 className="font-heading text-2xl md:text-4xl font-bold">Vrei să devii livrator?</h2>
            <p className="mt-1 text-muted-foreground text-sm md:text-base">
              DrivePartner te ajută cu tot procesul.
            </p>
          </div>
        </div>
        <img src={livratoriBanner} alt="Devino livrator - DrivePartner" className="w-full h-auto block" />
        <div className="bg-muted pt-1 pb-4 md:pt-2 md:pb-6">
          <a
            href="https://www.drivepartner.ro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-primary px-8 py-3.5 font-heading text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Devino livrator
          </a>
        </div>
      </section>

      <div className="py-12 md:py-20">
        <div className="container-main">
          <AnimateOnScroll>
            <div className="mb-10">
              <span className="font-heading text-xs font-semibold uppercase tracking-wider text-secondary">Închiriere</span>
              <h1 className="mt-2 font-heading text-3xl font-bold md:text-4xl">Închiriază biciclete</h1>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Închiriază o bicicletă electrică premium pentru o zi, un weekend sau o vacanță întreagă. Toate modelele includ echipament complet.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Filters */}
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <div className="flex flex-wrap gap-1.5">
              {categories.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setCategory(c.value)}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                    category === c.value
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-accent text-foreground hover:bg-border"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
            <div className="ml-auto flex items-center gap-3">
              <label className="flex items-center gap-2 text-xs text-muted-foreground">
                <input
                  type="checkbox"
                  checked={availableOnly}
                  onChange={(e) => setAvailableOnly(e.target.checked)}
                  className="rounded"
                />
                Doar disponibile
              </label>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="rounded-md border border-border bg-card px-3 py-1.5 text-xs"
              >
                <option value="recomandate">Recomandate</option>
                <option value="pret-asc">Preț crescător</option>
                <option value="pret-desc">Preț descrescător</option>
              </select>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="py-20 text-center text-muted-foreground">Nu am găsit produse cu filtrele selectate.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default RentPage;
