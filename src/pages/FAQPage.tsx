import AnimateOnScroll from "@/components/AnimateOnScroll";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Cum pot comanda o biciclet\u0103?",
    a: 'Navigheaz\u0103 la sec\u021Biunea "Cump\u0103r\u0103", alege modelul dorit \u0219i adaug\u0103-l \u00een co\u0219. Urmeaz\u0103 pa\u0219ii de finalizare a comenzii. Livrarea se face \u00een toat\u0103 Rom\u00e2nia.',
  },
  {
    q: "Cum func\u021Bioneaz\u0103 \u00eenchirierea?",
    a: 'Alege bicicleta din sec\u021Biunea "\u00CEnchiriaz\u0103", selecteaz\u0103 perioada dorit\u0103 \u0219i completeaz\u0103 rezervarea. Ridicarea se face de la sediul nostru din Bucure\u0219ti sau putem organiza livrarea contra cost.',
  },
  {
    q: "Ce este inclus \u00een pre\u021Bul de \u00eenchiriere?",
    a: "Fiecare \u00eenchiriere include casc\u0103, lac\u0103t, kit de repara\u021Bii \u0219i asigurare de baz\u0103. Unele modele includ \u0219i GPS tracker.",
  },
  {
    q: "Care sunt condi\u021Biile de retur?",
    a: "Ai 14 zile calendaristice de la primire pentru a returna produsul, \u00een ambalajul original, f\u0103r\u0103 urme de utilizare. Costurile de transport retur sunt suportate de cump\u0103r\u0103tor.",
  },
  {
    q: "Oferi\u021Bi garan\u021Bie?",
    a: "Da, toate bicicletele noi beneficiaz\u0103 de garan\u021Bie de 2 ani pentru cadru \u0219i componente, plus garan\u021Bie extins\u0103 de 5 ani pentru cadru.",
  },
  {
    q: "Livra\u021Bi \u00een afara Bucure\u0219tiului?",
    a: "Da, livr\u0103m \u00een toat\u0103 Rom\u00e2nia prin curier rapid. Timpul de livrare este de 2-5 zile lucr\u0103toare, \u00een func\u021Bie de localitate.",
  },
];

const FAQPage = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="py-12 md:py-20">
      <div className="container-main max-w-3xl">
        <AnimateOnScroll>
          <span className="font-heading text-xs font-semibold uppercase tracking-wider text-primary">FAQ</span>
          <h1 className="mt-2 font-heading text-3xl font-bold md:text-4xl">{"\u00CEntreb\u0103ri frecvente"}</h1>
          <p className="mt-3 text-muted-foreground">{"R\u0103spunsuri la cele mai frecvente \u00eentreb\u0103ri despre produsele \u0219i serviciile noastre."}</p>
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
