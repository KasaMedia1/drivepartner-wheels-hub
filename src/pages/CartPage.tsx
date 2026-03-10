import { Link } from "react-router-dom";
import { useCartStore } from "@/store/cartStore";
import { Minus, Plus, X, ShoppingCart } from "lucide-react";

const CartPage = () => {
  const { items, removeItem, updateQuantity, getTotal, getItemsByType } = useCartStore();
  const purchaseItems = getItemsByType("cumparare");
  const rentalItems = getItemsByType("inchiriere");
  const total = getTotal();

  if (items.length === 0) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <ShoppingCart className="mx-auto h-16 w-16 text-muted-foreground/30" />
          <h1 className="mt-4 font-heading text-2xl font-bold">Coșul este gol</h1>
          <p className="mt-2 text-muted-foreground">Adaugă produse pentru a continua</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link to="/cumpara" className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
              Cumpără
            </Link>
            <Link to="/inchiriaza" className="rounded-md bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground">
              Închiriază
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const renderItems = (cartItems: typeof items, label: string, accentColor: string) => {
    if (cartItems.length === 0) return null;
    return (
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className={`h-5 w-0.5 rounded-full ${accentColor}`} />
          <h2 className="font-heading text-lg font-semibold">{label}</h2>
        </div>
        <div className="space-y-4">
          {cartItems.map((item) => {
            const isRental = item.product.type === "inchiriere";
            const unitPrice = isRental ? item.product.pricePerDay! : item.product.price;
            return (
              <div key={item.product.id} className="flex gap-4 rounded-lg border border-border p-4">
                <img src={item.product.image} alt={item.product.name} className="h-24 w-24 rounded-md bg-accent object-contain p-2" />
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-heading text-sm font-semibold">{item.product.name}</h3>
                      <p className="text-xs text-muted-foreground">
                        {isRental ? "Închiriere" : "Cumpărare"} · {unitPrice.toLocaleString("ro-RO")} RON{isRental ? "/zi" : ""}
                      </p>
                    </div>
                    <button onClick={() => removeItem(item.product.id)} className="text-muted-foreground hover:text-foreground">
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-3">
                    <div className="flex items-center rounded-md border border-border">
                      <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="px-3 py-1.5">
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="min-w-[32px] text-center text-sm font-medium">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="px-3 py-1.5">
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <span className="font-heading font-bold">{(unitPrice * item.quantity).toLocaleString("ro-RO")} RON</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="py-12 md:py-20">
      <div className="container-main max-w-3xl">
        <h1 className="font-heading text-3xl font-bold mb-8">Coșul tău</h1>

        <div className="space-y-8">
          {renderItems(purchaseItems, "Produse de cumpărat", "bg-primary")}
          {renderItems(rentalItems, "Produse de închiriat", "bg-secondary")}
        </div>

        <div className="mt-8 rounded-lg border border-border p-6">
          <div className="flex items-center justify-between">
            <span className="text-lg text-muted-foreground">Total</span>
            <span className="font-heading text-2xl font-extrabold">{total.toLocaleString("ro-RO")} RON</span>
          </div>
          <button className="mt-4 w-full rounded-md bg-primary py-4 font-heading text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
            Finalizează comanda
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
