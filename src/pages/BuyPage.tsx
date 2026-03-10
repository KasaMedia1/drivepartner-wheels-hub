import { useState, useMemo } from "react";
import { getProductsByType, type BikeCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const categories: { value: BikeCategory | "all"; label: string }[] = [
  { value: "all", label: "Toate" },
  { value: "mountain", label: "Mountain" },
  { value: "urban", label: "Urban" },
  { value: "pliant", label: "Pliant" },
  { value: "road", label: "Road" },
  { value: "cargo", label: "Cargo" },
];

type SortOption = "recomandate" | "pret-asc" | "pret-desc";

const BuyPage = () => {
  const allProducts = getProductsByType("cumparare");
  const [category, setCategory] = useState<BikeCategory | "all">("all");
  const [sort, setSort] = useState<SortOption>("recomandate");
  const [availableOnly, setAvailableOnly] = useState(false);

  const filtered = useMemo(() => {
    let result = [...allProducts];
    if (category !== "all") result = result.filter((p) => p.category === category);
    if (availableOnly) result = result.filter((p) => p.available);
    if (sort === "pret-asc") result.sort((a, b) => a.price - b.price);
    if (sort === "pret-desc") result.sort((a, b) => b.price - a.price);
    return result;
  }, [category, sort, availableOnly]);

  return (
    <div className="py-12 md:py-20">
      <div className="container-main">
        <AnimateOnScroll>
          <div className="mb-10">
            <span className="font-heading text-xs font-semibold uppercase tracking-wider text-primary">Magazin</span>
            <h1 className="mt-2 font-heading text-3xl font-bold md:text-4xl">Cumpără biciclete</h1>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Explorează gama noastră de biciclete electrice premium. Fiecare model este creat pentru performanță și durabilitate.
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
                    ? "bg-primary text-primary-foreground"
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

        {/* Grid */}
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
  );
};

export default BuyPage;
