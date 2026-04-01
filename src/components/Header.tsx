import { Link, useLocation } from "react-router-dom";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useState } from "react";
import logo from "@/assets/logo.png";
import logoText from "@/assets/logo-text.png";

const Header = () => {
  const { toggleCart, getItemCount } = useCartStore();
  const itemCount = getItemCount();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md">
      <div className="container-main flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 font-heading text-lg font-bold tracking-tight md:text-xl">
          <img src={logo} alt="E-bike Zone" className="h-[90px] w-auto md:h-28" />
          <img src={logoText} alt="E-bike Zone" className="h-[100px] w-auto md:h-[120px]" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          <Link
            to="/cumpara"
            className={`rounded-md px-5 py-2.5 font-heading text-sm font-semibold transition-colors ${
              isActive("/cumpara")
                ? "bg-primary text-primary-foreground"
                : "text-foreground hover:bg-accent"
            }`}
          >
            Cumpără
          </Link>
          <Link
            to="/inchiriaza"
            className={`rounded-md px-5 py-2.5 font-heading text-sm font-semibold transition-colors ${
              isActive("/inchiriaza")
                ? "bg-secondary text-secondary-foreground"
                : "text-foreground hover:bg-accent"
            }`}
          >
            Închiriază
          </Link>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-2">
          <button className="hidden rounded-md p-2.5 text-foreground transition-colors hover:bg-accent md:flex" aria-label="Caută">
            <Search className="h-5 w-5" />
          </button>
          <button className="hidden rounded-md p-2.5 text-foreground transition-colors hover:bg-accent md:flex" aria-label="Cont">
            <User className="h-5 w-5" />
          </button>
          <button
            onClick={toggleCart}
            className="relative rounded-md p-2.5 text-foreground transition-colors hover:bg-accent"
            aria-label="Coș"
          >
            <ShoppingCart className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                {itemCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-md p-2.5 text-foreground md:hidden"
            aria-label="Meniu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="border-t border-border bg-card px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-1 pt-2">
            <Link
              to="/cumpara"
              onClick={() => setMobileOpen(false)}
              className="rounded-md px-4 py-3 font-heading text-sm font-semibold transition-colors hover:bg-accent"
            >
              Cumpără
            </Link>
            <Link
              to="/inchiriaza"
              onClick={() => setMobileOpen(false)}
              className="rounded-md px-4 py-3 font-heading text-sm font-semibold transition-colors hover:bg-accent"
            >
              Închiriază
            </Link>
            <Link
              to="/despre"
              onClick={() => setMobileOpen(false)}
              className="rounded-md px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-accent"
            >
              Despre noi
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="rounded-md px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-accent"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
