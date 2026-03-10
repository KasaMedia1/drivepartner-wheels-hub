import AnimateOnScroll from "@/components/AnimateOnScroll";

const TermsPage = () => (
  <div className="py-12 md:py-20">
    <div className="container-main max-w-3xl">
      <AnimateOnScroll>
        <span className="font-heading text-xs font-semibold uppercase tracking-wider text-primary">Legal</span>
        <h1 className="mt-2 font-heading text-3xl font-bold md:text-4xl">Termeni și condiții</h1>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground mb-3">1. Informații generale</h2>
            <p>
              Website-ul drivepartner.ro este operat de Drivepartner Bikes SRL, cu sediul în București, România. 
              Prin accesarea și utilizarea acestui website, acceptați în mod implicit acești termeni și condiții.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground mb-3">2. Produse și prețuri</h2>
            <p>
              Toate prețurile afișate pe site sunt exprimate în RON și includ TVA. Ne rezervăm dreptul de a modifica prețurile fără notificare prealabilă. Prețul aplicabil este cel din momentul plasării comenzii.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground mb-3">3. Comenzi și livrare</h2>
            <p>
              Comenzile se procesează în 1-2 zile lucrătoare. Livrarea se realizează prin curier rapid în 2-5 zile lucrătoare. Costul livrării este comunicat în momentul finalizării comenzii.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground mb-3">4. Dreptul de retragere</h2>
            <p>
              Conform legislației în vigoare, ai dreptul de a returna produsul în termen de 14 zile calendaristice de la primire, fără a invoca un motiv. Produsul trebuie returnat în ambalajul original, fără urme de utilizare.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground mb-3">5. Închiriere</h2>
            <p>
              Închirierea este supusă unui contract separat, semnat la ridicarea bicicletei. Este necesar un depozit rambursabil și un act de identitate valid. Condiţiile specifice sunt afișate pe pagina fiecărui produs de închiriere.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground mb-3">6. Politica de confidențialitate</h2>
            <p>
              Datele personale sunt prelucrate conform Regulamentului (UE) 2016/679 (GDPR). Nu partajăm datele tale cu terți fără consimțământul tău explicit, cu excepția operatorilor de livrare și procesare plăți.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground mb-3">7. Contact</h2>
            <p>
              Pentru orice nelămuriri legate de acești termeni, ne poți contacta la drive.partner@yahoo.com sau la telefon +40 728 126 988.
            </p>
          </section>
        </div>
      </AnimateOnScroll>
    </div>
  </div>
);

export default TermsPage;
