import { Link } from "react-router-dom";
import { ShoppingCart, Phone } from "lucide-react";
import type { Product } from "@/data/products";
import { useCartStore } from "@/store/cartStore";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCartStore();
  const isRental = product.type === "inchiriere";
  const detailPath = isRental
    ? `/inchiriaza/${product.slug}`
    : `/cumpara/${product.slug}`;

  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-lg">
      {/* Image */}
      <Link to={detailPath} className="relative aspect-square overflow-hidden bg-accent">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {!product.available && (
          <div className="absolute inset-0 flex items-center justify-center bg-foreground/40">
            <span className="rounded-md bg-card px-3 py-1 font-heading text-xs font-semibold">
              Indisponibil
            </span>
          </div>
        )}
        {isRental && (
          <span className="absolute left-3 top-3 rounded-md bg-secondary px-2 py-1 text-[10px] font-bold text-secondary-foreground">
            ÎNCHIRIERE
          </span>
        )}
      </Link>

      {/* Info */}
      <div className="flex flex-1 flex-col p-4">
        <Link to={detailPath}>
          <h3 className="font-heading text-sm font-semibold leading-tight transition-colors group-hover:text-primary md:text-base">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2">
          {product.shortDescription}
        </p>

        <div className="mt-auto pt-4">
          <div className="flex items-baseline gap-1">
            <span className="font-heading text-lg font-bold text-primary">
              {isRental ? "de la 200 RON" : `${product.price.toLocaleString("ro-RO")} RON`}
            </span>
            {isRental && <span className="text-xs text-muted-foreground">/săptămână</span>}
          </div>

          <div className="mt-3 flex flex-col gap-2">
            <div className="flex gap-2">
              <Link
                to={detailPath}
                className="flex-1 rounded-md border border-border px-3 py-2 text-center text-xs font-medium transition-colors hover:bg-accent"
              >
                Vezi detalii
              </Link>
              {product.available && (
                <button
                  onClick={() => addItem(product)}
                  className={`flex items-center justify-center gap-1.5 rounded-md px-3 py-2 text-xs font-semibold text-primary-foreground transition-colors ${
                    isRental ? "bg-secondary hover:bg-secondary/90" : "bg-primary hover:bg-primary/90"
                  }`}
                >
                  <ShoppingCart className="h-3.5 w-3.5" />
                  {isRental ? "Rezervă" : "Adaugă"}
                </button>
              )}
            </div>
            <Link
              to="/contact-inchiriere"
              className="flex items-center justify-center gap-1.5 rounded-md border border-border px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <Phone className="h-3 w-3" />
              Contactează-ne
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
