import AnimateOnScroll from "@/components/AnimateOnScroll";

const AboutPage = () => (
  <div className="py-12 md:py-20">
    <div className="container-main max-w-3xl">
      <AnimateOnScroll>
        <span className="font-heading text-xs font-semibold uppercase tracking-wider text-primary">Despre noi</span>
        <h1 className="mt-2 font-heading text-3xl font-bold md:text-4xl">E-bike Zone</h1>
        <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Drivepartner Bikes s-a născut din pasiunea pentru ciclism și convingerea că mobilitatea pe două roți merită o experiență premium. Suntem o echipă de ingineri, designeri și cicliști dedicați care cred că fiecare drum poate fi transformat cu bicicleta potrivită.
          </p>
          <p>
            Oferim o gamă curată de biciclete electrice premium, fiecare selectată și testată riguros pentru performanță, fiabilitate și design. Fie că alegi să cumperi sau să închiriezi, îți garantăm o experiență de top — de la primul click până la primul kilometru.
          </p>
          <p>
            Sediul nostru este în București, dar livrăm în toată România. Fiecare bicicletă vine asamblată profesional, calibrată și gata de drum.
          </p>
          <h2 className="font-heading text-xl font-bold text-foreground pt-4">Valorile noastre</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
              <span><strong className="text-foreground">Calitate fără compromis</strong> — Selectăm doar modele cu componente de top și garanție completă.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
              <span><strong className="text-foreground">Transparență totală</strong> — Prețuri clare, specificații detaliate, fără surprize.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
              <span><strong className="text-foreground">Serviciu premium</strong> — Suport tehnic dedicat și service autorizat.</span>
            </li>
          </ul>
        </div>
      </AnimateOnScroll>
    </div>
  </div>
);

export default AboutPage;
