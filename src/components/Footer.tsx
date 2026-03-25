import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-main py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="font-heading text-lg font-bold">
              <span className="text-kinetic">●</span> Drivepartner Bikes
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Biciclete premium pentru fiecare drum. Cumpără sau închiriază modelul potrivit pentru tine.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold mb-4">Navigare</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/cumpara" className="transition-colors hover:text-foreground">Cumpără</Link></li>
              <li><Link to="/inchiriaza" className="transition-colors hover:text-foreground">Închiriază</Link></li>
              <li><Link to="/despre" className="transition-colors hover:text-foreground">Despre noi</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-foreground">Contact</Link></li>
              <li><Link to="/faq" className="transition-colors hover:text-foreground">FAQ</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/termeni" className="transition-colors hover:text-foreground">Termeni și condiții</Link></li>
              <li><Link to="/termeni" className="transition-colors hover:text-foreground">Politica de confidențialitate</Link></li>
              <li><Link to="/termeni" className="transition-colors hover:text-foreground">Politica de retur</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>drive.partner@yahoo.com</li>
              <li>+40 728 126 988</li>
              <li>București Sector 3, Calea Vitan Nr. 152</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a href="https://www.facebook.com/profile.php?id=61581026780386" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="Facebook">FB</a>
              <a href="https://www.instagram.com/drive.partner/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="Instagram">IG</a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Drivepartner Bikes. Toate drepturile rezervate.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
