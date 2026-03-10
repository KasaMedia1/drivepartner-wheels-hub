import { X, Plus, Minus, ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { Link } from "react-router-dom";

const CartPanel = () => {
  const { items, isOpen, setCartOpen, removeItem, updateQuantity, getTotal, getItemsByType } = useCartStore();

  if (!isOpen) return null;

  const purchaseItems = getItemsByType("cumparare");
  const rentalItems = getItemsByType("inchiriere");
  const total = getTotal();

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-50 bg-foreground/30" onClick={() => setCartOpen(false)} />

      {/* Panel */}
      <div className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-card shadow-2xl animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            <h2 className="font-heading text-lg font-semibold">Coșul tău</h2>
          </div>
          <button onClick={() => setCartOpen(false)} className="rounded-md p-2 transition-colors hover:bg-accent">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <ShoppingCart className="h-12 w-12 text-muted-foreground/30" />
              <p className="mt-4 font-heading text-sm font-semibold">Coșul este gol</p>
              <p className="mt-1 text-xs text-muted-foreground">Adaugă produse pentru a continua</p>
            </div>
          ) : (
            <div className="space-y-6">
              {purchaseItems.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-4 w-0.5 rounded-full bg-primary" />
                    <h3 className="font-heading text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Produse de cumpărat
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {purchaseItems.map((item) => (
                      <CartItemRow key={item.product.id} item={item} accentClass="bg-primary" />
                    ))}
                  </div>
                </div>
              )}

              {rentalItems.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-4 w-0.5 rounded-full bg-secondary" />
                    <h3 className="font-heading text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Produse de închiriat
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {rentalItems.map((item) => (
                      <CartItemRow key={item.product.id} item={item} accentClass="bg-secondary" />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border px-6 py-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Total</span>
              <span className="font-heading text-xl font-bold">{total.toLocaleString("ro-RO")} RON</span>
            </div>
            <Link
              to="/cos"
              onClick={() => setCartOpen(false)}
              className="block w-full rounded-md bg-primary py-3 text-center font-heading text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Finalizează comanda
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

function CartItemRow({ item, accentClass }: { item: { product: any; quantity: number }; accentClass: string }) {
  const { removeItem, updateQuantity } = useCartStore();
  const isRental = item.product.type === "inchiriere";
  const unitPrice = isRental ? item.product.pricePerDay : item.product.price;

  return (
    <div className="flex gap-3 rounded-md border border-border p-3">
      <div className={`relative w-0.5 self-stretch rounded-full ${accentClass}`} />
      <img src={item.product.image} alt={item.product.name} className="h-16 w-16 rounded-md bg-accent object-contain p-1" />
      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-sm font-semibold leading-tight">{item.product.name}</p>
            <p className="text-xs text-muted-foreground">
              {unitPrice.toLocaleString("ro-RO")} RON{isRental ? "/zi" : ""}
            </p>
          </div>
          <button onClick={() => removeItem(item.product.id)} className="text-muted-foreground transition-colors hover:text-foreground">
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center rounded-md border border-border">
            <button
              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
              className="px-2 py-1 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Minus className="h-3 w-3" />
            </button>
            <span className="min-w-[24px] text-center text-xs font-medium">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
              className="px-2 py-1 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Plus className="h-3 w-3" />
            </button>
          </div>
          <span className="text-sm font-semibold">
            {(unitPrice * item.quantity).toLocaleString("ro-RO")} RON
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartPanel;
