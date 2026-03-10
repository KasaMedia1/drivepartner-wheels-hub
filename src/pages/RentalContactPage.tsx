import { useState } from "react";
import { Link } from "react-router-dom";
import { getProductsByType } from "@/data/products";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const allProducts = getProductsByType("cumparare");

const RentalContactPage = () => {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    phone: "",
    email: "",
    vehicle: "",
    option: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="py-12 md:py-20">
      <div className="container-main max-w-5xl">
        <AnimateOnScroll>
          <div className="text-center">
            <span className="font-heading text-xs font-semibold uppercase tracking-wider text-primary">
              Închiriere & Cumpărare
            </span>
            <h1 className="mt-2 font-heading text-3xl font-bold md:text-4xl">
              Contactează-ne
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Completează formularul de mai jos și te vom contacta în cel mai
              scurt timp cu detalii despre vehiculul dorit.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          {/* Info column */}
          <div>
            <div className="rounded-xl border border-border bg-card p-6 space-y-6">
              <h3 className="font-heading text-base font-bold">
                Informații de contact
              </h3>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold">Email</p>
                  <p className="text-sm text-muted-foreground">
                    drive.partner@yahoo.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold">Telefon</p>
                  <p className="text-sm text-muted-foreground">
                    +40 728 126 988
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold">Sediu</p>
                  <p className="text-sm text-muted-foreground">
                    Str. Bicicletei nr. 42, București
                  </p>
                </div>
              </div>
            </div>

            {/* Quick info */}
            <div className="mt-6 rounded-xl border border-border bg-accent/50 p-6">
              <h3 className="font-heading text-sm font-bold">
                De ce să alegi DrivePartner?
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  Prețuri de la 200 RON/săptămână
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  Program rent-to-own — devine a ta după 7 luni
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  Service și mentenanță incluse
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  Livrare în toată România
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          {sent ? (
            <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-12 text-center">
              <CheckCircle className="h-16 w-16 text-primary" />
              <h3 className="mt-4 font-heading text-xl font-bold">
                Mesaj trimis cu succes!
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Te vom contacta în cel mai scurt timp cu detalii despre vehiculul
                dorit.
              </p>
              <Link
                to="/inchiriaza"
                className="mt-6 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Înapoi la închiriere
              </Link>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-border bg-card p-6 md:p-8"
            >
              <h3 className="mb-6 font-heading text-base font-bold">
                Completează formularul
              </h3>
              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    Nume și prenume *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    maxLength={100}
                    placeholder="Ion Popescu"
                    className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                {/* City + Phone */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                      Oraș *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      maxLength={100}
                      placeholder="București"
                      className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                      Număr de telefon *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      maxLength={15}
                      placeholder="0723 456 789"
                      className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    Adresă de email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={255}
                    placeholder="email@exemplu.ro"
                    className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                {/* Vehicle */}
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    Vehicul dorit *
                  </label>
                  <select
                    name="vehicle"
                    value={formData.vehicle}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Selectează modelul</option>
                    {allProducts.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Option: Închiriere / Cumpărare */}
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    Opțiune dorită *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex cursor-pointer items-center gap-2 rounded-md border border-border px-4 py-3 text-sm transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                      <input
                        type="radio"
                        name="option"
                        value="inchiriere"
                        checked={formData.option === "inchiriere"}
                        onChange={handleChange}
                        required
                        className="accent-primary"
                      />
                      Închiriere
                    </label>
                    <label className="flex cursor-pointer items-center gap-2 rounded-md border border-border px-4 py-3 text-sm transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                      <input
                        type="radio"
                        name="option"
                        value="cumparare"
                        checked={formData.option === "cumparare"}
                        onChange={handleChange}
                        className="accent-primary"
                      />
                      Cumpărare
                    </label>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-primary py-3.5 font-heading text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Send className="h-4 w-4" />
                  Trimite cererea
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default RentalContactPage;
