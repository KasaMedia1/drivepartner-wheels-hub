import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [sent, setSent] = useState(false);

  return (
    <div className="py-12 md:py-20">
      <div className="container-main max-w-4xl">
        <AnimateOnScroll>
          <span className="font-heading text-xs font-semibold uppercase tracking-wider text-primary">Contact</span>
          <h1 className="mt-2 font-heading text-3xl font-bold md:text-4xl">Contactează-ne</h1>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Ai o întrebare? Scrie-ne și te contactăm în cel mai scurt timp.
          </p>
        </AnimateOnScroll>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 text-primary shrink-0" />
              <div>
                <p className="text-sm font-semibold">Email</p>
                <p className="text-sm text-muted-foreground">drive.partner@yahoo.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-primary shrink-0" />
              <div>
                <p className="text-sm font-semibold">Telefon</p>
                <p className="text-sm text-muted-foreground">+40 728 126 988</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-primary shrink-0" />
              <div>
                <p className="text-sm font-semibold">Sediu</p>
                <p className="text-sm text-muted-foreground">Str. Bicicletei nr. 42, București</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Nume"
                required
                className="rounded-md border border-border bg-card px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="rounded-md border border-border bg-card px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <input
              type="text"
              placeholder="Subiect"
              required
              className="w-full rounded-md border border-border bg-card px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <textarea
              placeholder="Mesajul tău"
              rows={5}
              required
              className="w-full resize-none rounded-md border border-border bg-card px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            {sent ? (
              <div className="rounded-md bg-primary/10 p-4 text-center text-sm font-medium text-primary">
                Mesajul tău a fost trimis! Te vom contacta în cel mai scurt timp.
              </div>
            ) : (
              <button
                type="submit"
                className="w-full rounded-md bg-primary py-3 font-heading text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Trimite mesajul
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
