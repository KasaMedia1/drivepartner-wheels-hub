import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product, ProductType } from "@/data/products";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  setCartOpen: (open: boolean) => void;
  getTotal: () => number;
  getItemCount: () => number;
  getItemsByType: (type: ProductType) => CartItem[];
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      addItem: (product) =>
        set((state) => {
          const existing = state.items.find((i) => i.product.id === product.id);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
              ),
              isOpen: true,
            };
          }
          return { items: [...state.items, { product, quantity: 1 }], isOpen: true };
        }),
      removeItem: (productId) =>
        set((state) => ({
          items: state.items.filter((i) => i.product.id !== productId),
        })),
      updateQuantity: (productId, quantity) =>
        set((state) => ({
          items:
            quantity <= 0
              ? state.items.filter((i) => i.product.id !== productId)
              : state.items.map((i) =>
                  i.product.id === productId ? { ...i, quantity } : i
                ),
        })),
      clearCart: () => set({ items: [] }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      setCartOpen: (open) => set({ isOpen: open }),
      getTotal: () =>
        get().items.reduce((sum, i) => {
          const price = i.product.type === "inchiriere" ? (i.product.pricePerDay ?? 0) : i.product.price;
          return sum + price * i.quantity;
        }, 0),
      getItemCount: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
      getItemsByType: (type) => get().items.filter((i) => i.product.type === type),
    }),
    {
      name: "drivepartner-cart",
      partialize: (state) => ({ items: state.items }),
    }
  )
);
