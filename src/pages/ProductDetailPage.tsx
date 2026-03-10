import { useParams, Link } from "react-router-dom";
import { getProductBySlug, getSimilarProducts } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import { ShoppingCart, ChevronLeft } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { useState } from "react";

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
  const similar = getSimilarProducts(product);
  const backPath = isRental ? "/inchiriaza" : "/cumpara";

  return (
    <div className="py-8 md:py-16">
      <div className="container-main">
        {/* Back */}
        <Link to={backPath} className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground">
          <ChevronLeft className="h-4 w-4" />
          Înapoi
        </Link>

        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          {/* Gallery */}
          <div>
            <div className="aspect-square overflow-hidden rounded-lg bg-accent">
              <img
                src={product.gallery[selectedImg]}
                alt={product.name}
                className="h-full w-full object-contain p-8"
              />
            </div>
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
          </div>

          {/* Info - sticky */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            {isRental && (
              <span className="inline-block rounded-md bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground">
                ÎNCHIRIERE
              </span>
            )}
            <h1 className="mt-3 font-heading text-2xl font-bold md:text-3xl">{product.name}</h1>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-heading text-3xl font-extrabold">
                {isRental ? `${product.pricePerDay} RON` : `${product.price.toLocaleString("ro-RO")} RON`}
              </span>
              {isRental && <span className="text-sm text-muted-foreground">/zi</span>}
            </div>

            <p className="mt-4 leading-relaxed text-muted-foreground">{product.longDescription}</p>

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
            {!product.available && (
              <div className="mt-6 rounded-md bg-accent p-4 text-center text-sm text-muted-foreground">
                Momentan indisponibil
              </div>
            )}

            {/* Specs */}
            <div className="mt-8">
              <h3 className="font-heading text-sm font-semibold mb-3">Specificații</h3>
              <div className="divide-y divide-border rounded-md border border-border">
                {Object.entries(product.specs).map(([key, val]) => (
                  <div key={key} className="flex justify-between px-4 py-2.5 text-sm">
                    <span className="text-muted-foreground">{key}</span>
                    <span className="font-medium">{val}</span>
                  </div>
                ))}
              </div>
            </div>

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
          </div>
        </div>

        {/* Similar */}
        {similar.length > 0 && (
          <div className="mt-20">
            <h2 className="font-heading text-xl font-bold mb-6">Produse similare</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {similar.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
