import AnimateOnScroll from "@/components/AnimateOnScroll";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Cum pot comanda o bicicletă?",
    a: "Navighează la secțiunea „Cumpără", alege modelul dorit și adaugă-l în coș. Urmează pașii de finalizare a comenzii. Livrarea se face în toată România.",
  },
  {
    q: "Cum funcționează închirierea?",
    a: "Alege bicicleta din secțiunea „Închiriază", selectează perioada dorită și completează rezervarea. Ridicarea se face de la sediul nostru din București sau putem organiza livrarea contra cost.",
  },
  {
    q: "Ce este inclus în prețul de închiriere?",
    a: "Fiecare închiriere include cască, lacăt, kit de reparații și asigurare de bază. Unele modele includ și GPS tracker.",
  },
  {
    q: "Care sunt condițiile de retur?",
    a: "Ai 14 zile calendaristice de la primire pentru a returna produsul, în ambalajul original, fără urme de utilizare. Costurile de transport retur sunt suportate de cumpărător.",
  },
  {
    q: "Oferiți garanție?",
    a: "Da, toate bicicletele noi beneficiază de garanție de 2 ani pentru cadru și componente, plus garanție extinsă de 5 ani pentru cadru.",
  },
  {
    q: "Livrați în afara Bucureștiului?",
    a: "Da, livrăm în toată România prin curier rapid. Timpul de livrare este de 2-5 zile lucrătoare, în funcție de localitate.",
  },
];

const FAQPage = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="py-12 md:py-20">
      <div className="container-main max-w-3xl">
        <AnimateOnScroll>
          <span className="font-heading text-xs font-semibold uppercase tracking-wider text-primary">FAQ</span>
          <h1 className="mt-2 font-heading text-3xl font-bold md:text-4xl">Întrebări frecvente</h1>
          <p className="mt-3 text-muted-foreground">Răspunsuri la cele mai frecvente întrebări despre produsele și serviciile noastre.</p>
        </AnimateOnScroll>

        <div className="mt-10 divide-y divide-border rounded-lg border border-border">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
              >
                <span className="text-sm font-semibold pr-4">{faq.q}</span>
                <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-6 pb-4 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
