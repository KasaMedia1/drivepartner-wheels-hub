import bike1 from "@/assets/bike-1.png";
import bike2 from "@/assets/bike-2.png";
import bike6 from "@/assets/bike-6.png";

// DUOTTS product images
import duottsC29k from "@/assets/duotts-c29k.jpg";
import duottsC29pro from "@/assets/duotts-c29pro.jpg";
import duottsC29max from "@/assets/duotts-c29max.jpg";
import duottsC29lite from "@/assets/duotts-c29lite.jpg";
import duottsE29 from "@/assets/duotts-e29.jpg";
import duottsN26 from "@/assets/duotts-n26.jpg";
import duottsN26red from "@/assets/duotts-n26red.jpg";
import duottsF26pro from "@/assets/duotts-f26pro.jpg";
import duottsF26proSilver from "@/assets/duotts-f26pro-silver.jpg";
import duottsF20 from "@/assets/duotts-f20.jpg";
import duottsE26blu from "@/assets/duotts-e26blu.jpg";
import duottsE26 from "@/assets/duotts-e26.jpg";
import duottsF26lite from "@/assets/duotts-f26lite.jpg";
import duottsS26pro from "@/assets/duotts-s26pro.jpg";

// Individual feature images per product
import c29kMotor from "@/assets/features/c29k-motor.jpg";
import c29kBattery from "@/assets/features/c29k-battery.jpg";
import c29kBrakes from "@/assets/features/c29k-brakes.jpg";
import c29kGears from "@/assets/features/c29k-gears.jpg";
import c29kDisplay from "@/assets/features/c29k-display.jpg";
import c29kFrame from "@/assets/features/c29k-frame.jpg";
import c29proMotor from "@/assets/features/c29pro-motor.jpg";
import c29proGears from "@/assets/features/c29pro-gears.jpg";
import c29proDisplay from "@/assets/features/c29pro-display.jpg";
import c29proSuspension from "@/assets/features/c29pro-suspension.jpg";
import c29maxMotor from "@/assets/features/c29max-motor.jpg";
import c29maxBrakes from "@/assets/features/c29max-brakes.jpg";
import c29maxBattery from "@/assets/features/c29max-battery.jpg";
import c29maxGears from "@/assets/features/c29max-gears.jpg";
import c29liteDisplay from "@/assets/features/c29lite-display.jpg";
import c29liteGears from "@/assets/features/c29lite-gears.jpg";
import c29liteBrakes from "@/assets/features/c29lite-brakes.jpg";
import c29liteFrame from "@/assets/features/c29lite-frame.jpg";
import e29Torque from "@/assets/features/e29-torque.jpg";
import e29Gears from "@/assets/features/e29-gears.jpg";
import e29Brakes from "@/assets/features/e29-brakes.jpg";
import e29Tires from "@/assets/features/e29-tires.jpg";
import n26Dualmotor from "@/assets/features/n26-dualmotor.jpg";
import n26Battery from "@/assets/features/n26-battery.jpg";
import n26Gps from "@/assets/features/n26-gps.jpg";
import n26Suspension from "@/assets/features/n26-suspension.jpg";
import n26Fattire from "@/assets/features/n26-fattire.jpg";
import n26redMotor from "@/assets/features/n26red-motor.jpg";
import n26redBattery from "@/assets/features/n26red-battery.jpg";
import n26redGps from "@/assets/features/n26red-gps.jpg";
import n26redFrame from "@/assets/features/n26red-frame.jpg";
import f26proMotor from "@/assets/features/f26pro-motor.jpg";
import f26proBattery from "@/assets/features/f26pro-battery.jpg";
import f26proBrakes from "@/assets/features/f26pro-brakes.jpg";
import f26proDisplay from "@/assets/features/f26pro-display.jpg";
import f26silverMotor from "@/assets/features/f26silver-motor.jpg";
import f26silverFrame from "@/assets/features/f26silver-frame.jpg";
import f26silverBattery from "@/assets/features/f26silver-battery.jpg";
import f26silverBrakes from "@/assets/features/f26silver-brakes.jpg";
import f20Battery from "@/assets/features/f20-battery.jpg";
import f20Frame from "@/assets/features/f20-frame.jpg";
import f20Suspension from "@/assets/features/f20-suspension.jpg";
import f20Fattire from "@/assets/features/f20-fattire.jpg";
import e26bluColorframe from "@/assets/features/e26blu-colorframe.jpg";
import e26bluMotor from "@/assets/features/e26blu-motor.jpg";
import e26bluBattery from "@/assets/features/e26blu-battery.jpg";
import e26bluGears from "@/assets/features/e26blu-gears.jpg";
import e26bluSuspension from "@/assets/features/e26blu-suspension.jpg";
import e26bluBrakes from "@/assets/features/e26blu-brakes.jpg";
import e26Colorframe from "@/assets/features/e26-colorframe.jpg";
import e26Motor from "@/assets/features/e26-motor.jpg";
import e26Battery from "@/assets/features/e26-battery.jpg";
import e26Suspension from "@/assets/features/e26-suspension.jpg";
import f26liteMotor from "@/assets/features/f26lite-motor.jpg";
import f26liteBattery from "@/assets/features/f26lite-battery.jpg";
import f26liteFattire from "@/assets/features/f26lite-fattire.jpg";
import f26liteDisplay from "@/assets/features/f26lite-display.jpg";
import s26proMotor from "@/assets/features/s26pro-motor.jpg";
import s26proSuspension from "@/assets/features/s26pro-suspension.jpg";
import s26proBattery from "@/assets/features/s26pro-battery.jpg";
import s26proDisplay from "@/assets/features/s26pro-display.jpg";
import lifestyleMountain from "@/assets/features/lifestyle-mountain.jpg";
import lifestyleFattire from "@/assets/features/lifestyle-fattire.jpg";
import lifestyleRetro from "@/assets/features/lifestyle-retro.jpg";
import lifestyleTrekking from "@/assets/features/lifestyle-trekking.jpg";

export type ProductType = "cumparare" | "inchiriere";
export type BikeCategory = "mountain" | "urban" | "pliant" | "road" | "cargo" | "fat-tire" | "trekking" | "retro";

export interface ProductHighlight {
  icon: "motor" | "range" | "torque" | "battery" | "speed" | "weight";
  value: string;
  label: string;
}

export interface ProductFeature {
  title: string;
  description: string;
  image?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  type: ProductType;
  category: BikeCategory;
  image: string;
  gallery: string[];
  shortDescription: string;
  longDescription: string;
  price: number;
  pricePerDay?: number;
  specs: Record<string, string>;
  available: boolean;
  rentalConditions?: string[];
  highlights?: ProductHighlight[];
  features?: ProductFeature[];
  tagline?: string;
  taglineDescription?: string;
}

// Conversion rate: 1 EUR ≈ 4.97 RON
const EUR = 4.97;

export const products: Product[] = [
  // ═══════════════════════════════════════════
  // DUOTTS PRODUCTS — CUMPĂRARE
  // ═══════════════════════════════════════════
  {
    id: "d1",
    name: "DUOTTS C29-K Dual Battery",
    slug: "duotts-c29k-dual-battery",
    type: "cumparare",
    category: "mountain",
    image: duottsC29k,
    gallery: [duottsC29k, lifestyleMountain, c29kMotor],
    shortDescription: "E-bike mountain 29\" cu baterie dublă și autonomie excepțională.",
    longDescription: "DUOTTS C29-K cu baterie dublă oferă o autonomie impresionantă de până la 170 km în modul asistat. Echipat cu motor hub de 750W, frâne hidraulice Zoom și anvelope Chaoyang 29×2.1, este perfect pentru trasee lungi și ture de weekend.",
    price: Math.round(1169 * EUR),
    tagline: "Intervalul C29-K nu mai este limita",
    taglineDescription: "Bateria duală de mare capacitate oferă energie fiabilă pe distanțe lungi. Fie că este vorba de naveta zilnică sau de călătorii lungi, neîntrerupte, aceasta reduce frecvența de încărcare și te menține în mișcare chiar și atunci când drumul se întinde.",
    highlights: [
      { icon: "motor", value: "750 W", label: "Motor puternic" },
      { icon: "range", value: "150-170 km", label: "Rază extinsă de acțiune" },
      { icon: "torque", value: "65 Nm", label: "Cuplu maxim" },
      { icon: "battery", value: "48V 15+22.5Ah", label: "Baterie dublă" },
      { icon: "speed", value: "25 km/h", label: "Viteză maximă" },
      { icon: "weight", value: "150 kg", label: "Sarcină maximă" },
    ],
    features: [
      { title: "Motor fără perii de 750W", description: "Motor de ultimă generație care oferă putere imensă și eficiență maximă, combinând viteza cu funcționarea silențioasă. Cuceriți cu ușurință urcările și încărcăturile grele.", image: c29kMotor },
      { title: "Baterie dublă 15+22.5Ah", description: "Cu o baterie de 15+22.5 Ah, acceptă modul pedalare asistată timp de 150-170 km. Farurile luminează calea înainte, în timp ce furca față ușoară din aluminiu asigură o călătorie sigură.", image: c29kBattery },
      { title: "Frâne hidraulice pe disc", description: "Echipată standard cu frâne hidraulice pe disc, C29-K oferă o putere de frânare constantă și sigură în toate condițiile de mers. Sistemul hidraulic asigură o modulare lină și precisă a frânării.", image: c29kBrakes },
      { title: "Transmisie Shimano 21 viteze", description: "Dotat cu un sistem de transmisie Shimano cu 21 de viteze și o protecție pentru schimbătorul spate, C29-K asigură o mers lină și fiabilă pe orice tip de teren.", image: c29kGears },
      { title: "Display HD 2.4\" cu Bluetooth", description: "Ecran HD de 2,4 inch compatibil cu Bluetooth pentru aplicația Duotts. Monitorizează viteza, distanța, nivelul bateriei și modul de asistență în timp real.", image: c29kDisplay },
      { title: "Componente premium", description: "Cadru din aliaj de aluminiu, ghidon de 68 cm, manivelă de 170 mm, pedale din aliaj de aluminiu și portbagaj spate din oțel cu sarcină maximă de 25 kg.", image: c29kFrame },
    ],
    specs: {
      "Motor": "48V 750W Hub Motor",
      "Cuplu": "65 Nm",
      "Baterie": "48V 15AH + 48V 22.5AH (dublă)",
      "Încărcător": "54.6V 2A + 54.6V 3A",
      "Timp de încărcare": "6-8 ore",
      "Autonomie": "150-170 km (mod asistat)",
      "Viteză maximă": "25 km/h",
      "Cadru": "Aliaj de aluminiu",
      "Furculiță": "Suspensie aluminiu, cursă 100mm, cu blocare",
      "Frâne": "Hidraulice, rotor 160mm față și spate",
      "Anvelope": "Chaoyang 29×2.125, 30 TPI",
      "Transmisie": "Shimano Tourney 3×7 (21 viteze)",
      "Ghidon": "Aliaj de aluminiu, 68 cm",
      "Display": "HD 2.4\", Bluetooth, APP Duotts",
      "Greutate bicicletă": "32.5 kg",
      "Sarcină maximă": "150 kg",
      "Dimensiuni": "1860×1080×680 mm",
      "Certificare": "CE",
      "Grad protecție": "IPX4",
      "Temperatură funcționare": "-10°C până la 40°C",
      "Include": "2 încărcătoare, unealtă 16 in 1, pedale, pompă de aer, geantă telefon",
    },
    available: true,
  },
  {
    id: "d2",
    name: "DUOTTS C29 Pro",
    slug: "duotts-c29-pro",
    type: "cumparare",
    category: "mountain",
    image: duottsC29pro,
    gallery: [duottsC29pro, lifestyleMountain, c29proMotor],
    shortDescription: "E-bike mountain 29\" cu Shimano 21 viteze și conectivitate Bluetooth.",
    longDescription: "DUOTTS C29 Pro combină performanța unui motor de 750W cu transmisia Shimano 21 de viteze pentru control total pe orice teren. Cu Bluetooth și aplicație dedicată, monitorizezi fiecare aspect al călătoriei.",
    price: Math.round(849 * EUR),
    tagline: "Explorează fără limite cu C29 Pro",
    taglineDescription: "Motorul puternic de 750W și transmisia Shimano cu 21 de viteze îți oferă controlul total pe orice teren. Conectivitatea Bluetooth te ține informat în fiecare moment al călătoriei.",
    highlights: [
      { icon: "motor", value: "750 W", label: "Motor puternic" },
      { icon: "range", value: "60-90 km", label: "Autonomie asistat" },
      { icon: "torque", value: "65 Nm", label: "Cuplu maxim" },
      { icon: "battery", value: "48V 15Ah", label: "Baterie Li-Ion" },
      { icon: "speed", value: "50 km/h", label: "Viteză maximă" },
      { icon: "weight", value: "120 kg", label: "Sarcină maximă" },
    ],
    features: [
      { title: "Motor de 750W fără perii", description: "Motor hub puternic de 750W care oferă accelerare lină și putere suficientă pentru orice urcuș. Funcționare silențioasă și eficiență energetică de top.", image: c29proMotor },
      { title: "Shimano 21 de viteze", description: "Transmisie Shimano completă cu 21 de viteze pentru adaptare perfectă la orice tip de teren, de la urcări abrupte la drumuri plate.", image: c29proGears },
      { title: "Conectivitate Bluetooth & APP", description: "Monitorizează toate datele călătoriei prin aplicația DUOTTS: viteză, distanță, nivel baterie, calorii arse și multe altele.", image: c29proDisplay },
      { title: "Suspensie frontală cu blocare", description: "Furcă de suspensie din aluminiu cu cursă generoasă și opțiune de blocare pentru drumuri netede.", image: c29proSuspension },
    ],
    specs: {
      "Motor": "750W 48V Hub Motor",
      "Baterie": "48V 15AH (celule 18650)",
      "Transmisie": "Shimano 21 viteze",
      "Frâne": "Disc mecanice față și spate",
      "Viteză maximă": "50 km/h",
      "Autonomie": "60-90 km (mod asistat)",
      "Cadru": "Aliaj de aluminiu",
      "Anvelope": "29×2.125",
      "Suspensie": "Față cu blocare",
      "Display": "LCD multifuncțional, Bluetooth, APP",
      "Greutate": "28 kg",
      "Sarcină maximă": "120 kg",
    },
    available: true,
  },
  {
    id: "d3",
    name: "DUOTTS C29 Max",
    slug: "duotts-c29-max",
    type: "cumparare",
    category: "mountain",
    image: duottsC29max,
    gallery: [duottsC29max, lifestyleMountain, c29maxBrakes],
    shortDescription: "E-bike mountain cu motor 960W peak și frâne hidraulice față-spate.",
    longDescription: "DUOTTS C29 Max oferă putere de vârf de 960W și cuplu de 65 Nm pentru urcări abrupte. Frânele hidraulice față-spate și anvelopele 29×2.10 asigură siguranță maximă pe orice suprafață.",
    price: Math.round(1099 * EUR),
    tagline: "Putere de vârf pentru traseele tale",
    taglineDescription: "Cu un motor de 960W putere de vârf și frâne hidraulice pe ambele roți, C29 Max este construit pentru cei care nu fac compromisuri. Autonomia de până la 120 km te duce oriunde visezi.",
    highlights: [
      { icon: "motor", value: "960 W", label: "Putere de vârf" },
      { icon: "range", value: "100-120 km", label: "Autonomie asistat" },
      { icon: "torque", value: "65 Nm", label: "Cuplu maxim" },
      { icon: "battery", value: "48V 18Ah", label: "Baterie mare" },
      { icon: "speed", value: "25 km/h", label: "Viteză maximă" },
      { icon: "weight", value: "150 kg", label: "Sarcină maximă" },
    ],
    features: [
      { title: "Motor 250W nominal / 960W peak", description: "Motor puternic cu putere de vârf de 960W care oferă accelerare rapidă și forță pe urcări abrupte, menținând conformitatea cu reglementările EU.", image: c29maxMotor },
      { title: "Frâne hidraulice față și spate", description: "Sistem de frânare hidraulic complet pe ambele roți cu rotoare de 160mm pentru o putere de oprire excepțională în orice condiții.", image: c29maxBrakes },
      { title: "Baterie de 18Ah cu autonomie extinsă", description: "Bateria de 48V 18AH oferă o autonomie impresionantă de 100-120 km în modul de pedalare asistată, ideală pentru trasee lungi.", image: c29maxBattery },
      { title: "Shimano 7 viteze", description: "Transmisie Shimano fiabilă cu 7 viteze pentru pedalare eficientă pe orice tip de teren.", image: c29maxGears },
    ],
    specs: {
      "Motor": "250W nominal / 960W peak",
      "Cuplu": "65 Nm",
      "Baterie": "48V 18AH",
      "Transmisie": "Shimano 7 viteze",
      "Frâne": "Hidraulice față și spate, rotor 160mm",
      "Viteză maximă": "25 km/h",
      "Autonomie": "100-120 km (mod asistat)",
      "Cadru": "Aliaj de aluminiu",
      "Anvelope": "29×2.10",
      "Suspensie": "Furcă față",
      "Greutate": "30 kg",
      "Sarcină maximă": "150 kg",
    },
    available: true,
  },
  {
    id: "d4",
    name: "DUOTTS C29 Lite",
    slug: "duotts-c29-lite",
    type: "cumparare",
    category: "urban",
    image: duottsC29lite,
    gallery: [duottsC29lite, c29liteDisplay, c29liteGears],
    shortDescription: "E-bike accesibil cu display color multifuncțional.",
    longDescription: "DUOTTS C29 Lite este alegerea perfectă pentru cei care doresc un e-bike de calitate la un preț accesibil. Cu display color multifuncțional și Shimano 7 viteze, oferă o experiență completă.",
    price: Math.round(629 * EUR),
    tagline: "Partenerul tău electric de zi cu zi",
    taglineDescription: "Conceput pentru deplasări urbane fără efort, aventuri de weekend și libertate ecologică. C29 Lite oferă tot ce ai nevoie la un preț accesibil.",
    highlights: [
      { icon: "motor", value: "250 W", label: "Motor eficient" },
      { icon: "range", value: "65 km", label: "Autonomie asistat" },
      { icon: "torque", value: "40 Nm", label: "Cuplu" },
      { icon: "battery", value: "36V 13Ah", label: "Baterie Li-Ion" },
      { icon: "speed", value: "50 km/h", label: "Viteză maximă" },
      { icon: "weight", value: "120 kg", label: "Sarcină maximă" },
    ],
    features: [
      { title: "Display color multifuncțional", description: "Ecran color cu 3 butoane care afișează viteza, distanța, nivelul bateriei și modul de asistență selectat. Ușor de citit în orice condiții de lumină.", image: c29liteDisplay },
      { title: "Shimano 7 viteze", description: "Transmisie Shimano fiabilă cu 7 trepte pentru pedalare eficientă pe orice tip de teren urban sau suburban.", image: c29liteGears },
      { title: "Frâne pe disc mecanice", description: "Frâne disc mecanice față și spate pentru opriri sigure și previzibile. Întreținere simplă și cost redus.", image: c29liteBrakes },
      { title: "Preț accesibil, calitate premium", description: "Cel mai accesibil model din gama DUOTTS, fără compromisuri la capitolul calitate și fiabilitate.", image: c29liteFrame },
    ],
    specs: {
      "Motor": "36V 250W",
      "Baterie": "36V 13AH",
      "Transmisie": "Shimano 7 viteze",
      "Frâne": "Disc mecanice față și spate",
      "Viteză maximă": "50 km/h",
      "Autonomie": "65 km (mod asistat)",
      "Cadru": "Oțel",
      "Anvelope": "27.5×2.25\"",
      "Display": "Color multifuncțional cu 3 butoane",
      "Greutate": "26 kg",
      "Sarcină maximă": "120 kg",
    },
    available: true,
  },
  {
    id: "d5",
    name: "DUOTTS E29 Silver",
    slug: "duotts-e29-silver",
    type: "cumparare",
    category: "trekking",
    image: duottsE29,
    gallery: [duottsE29, lifestyleTrekking, e29Torque],
    shortDescription: "E-bike premium cu motor Bafang, senzor de cuplu și Shimano 14 viteze.",
    longDescription: "DUOTTS E29 Silver este un e-bike premium echipat cu motor Bafang de 250W, senzor de cuplu pentru pedalare naturală și transmisie Shimano 2×7 viteze. Conectivitatea Bluetooth și aplicația dedicată îți oferă control total.",
    price: Math.round(1359 * EUR),
    tagline: "Pedalare naturală cu senzor de cuplu",
    taglineDescription: "Motorul Bafang cu senzor de cuplu oferă cea mai naturală experiență de pedalare electrică. Puterea se adaptează instant la efortul tău, creând o senzație fluidă și intuitivă.",
    highlights: [
      { icon: "motor", value: "250 W", label: "Motor Bafang" },
      { icon: "range", value: "80-90 km", label: "Autonomie asistat" },
      { icon: "torque", value: "50 Nm", label: "Senzor de cuplu" },
      { icon: "battery", value: "48V 13.5Ah", label: "Baterie Li-Ion" },
      { icon: "speed", value: "25 km/h", label: "Viteză maximă" },
      { icon: "weight", value: "120 kg", label: "Sarcină maximă" },
    ],
    features: [
      { title: "Motor Bafang 250W cu senzor de cuplu", description: "Motor Bafang de înaltă calitate cu senzor de cuplu integrat pentru cea mai naturală experiență de pedalare. Puterea se adaptează la efortul tău în timp real.", image: e29Torque },
      { title: "Shimano 2×7 (14 viteze)", description: "Transmisie Shimano cu 14 trepte (2×7) pentru versatilitate maximă pe orice tip de teren, de la urcări la viteze de croazieră.", image: e29Gears },
      { title: "Frâne disc cu ulei", description: "Frâne hidraulice cu ulei față și spate pentru putere de frânare constantă în orice condiții meteo.", image: e29Brakes },
      { title: "Anvelope KENDA 27.5×2.6\"", description: "Anvelope KENDA de lățime generoasă pentru tracțiune excelentă și confort sporit pe drumuri variate.", image: e29Tires },
    ],
    specs: {
      "Motor": "Bafang 48V 250W",
      "Cuplu": "50 Nm",
      "Senzor": "Senzor de cuplu",
      "Baterie": "48V 13.5AH",
      "Transmisie": "Shimano 2×7 (14 viteze)",
      "Frâne": "Disc cu ulei față și spate",
      "Viteză maximă": "25 km/h (40 km/h deblocat)",
      "Autonomie": "35-45 km electric / 80-90 km asistat",
      "Cadru": "Aliaj de aluminiu",
      "Anvelope": "KENDA 27.5×2.6\"",
      "Display": "LCD, Bluetooth, APP",
      "Greutate": "27 kg",
      "Sarcină maximă": "120 kg",
    },
    available: true,
  },
  {
    id: "d6",
    name: "DUOTTS N26",
    slug: "duotts-n26",
    type: "cumparare",
    category: "fat-tire",
    image: duottsN26,
    gallery: [duottsN26, lifestyleFattire, n26Dualmotor],
    shortDescription: "E-bike dual motor 750W×2 cu baterie Samsung și tracking GPS.",
    longDescription: "DUOTTS N26 este un monstru de performanță cu două motoare de 750W, baterie Samsung de 20AH și display 4G LCD cu tracking în timp real. Sistemul anti-furt inteligent și anvelopele fat 26×4.0 îl fac perfect pentru orice aventură.",
    price: Math.round(1399 * EUR),
    tagline: "Putere și stil fără compromis",
    taglineDescription: "Dual motor 750W×2, baterie Samsung de 20AH și sistem GPS integrat. N26 este construit pentru aventurieri care vor totul: putere, autonomie și siguranță.",
    highlights: [
      { icon: "motor", value: "750W×2", label: "Dual motor" },
      { icon: "range", value: "100-120 km", label: "Autonomie asistat" },
      { icon: "torque", value: "65 Nm×2", label: "Cuplu dual" },
      { icon: "battery", value: "48V 20Ah", label: "Samsung cells" },
      { icon: "speed", value: "50 km/h", label: "Viteză maximă" },
      { icon: "weight", value: "150 kg", label: "Sarcină maximă" },
    ],
    features: [
      { title: "Dual motor 750W×2", description: "Două motoare independente de 750W cu cuplu combinat de 130 Nm pentru tracțiune și putere inegalabile pe orice teren.", image: n26Dualmotor },
      { title: "Baterie Samsung 20AH", description: "Celule Samsung de înaltă calitate oferă o autonomie de 100-120 km și o durabilitate excepțională pe termen lung.", image: n26Battery },
      { title: "Display 4G LCD cu GPS tracking", description: "Display inteligent cu conectivitate 4G, tracking GPS în timp real și port USB Type-C. Monitorizează-ți bicicleta oricând, oriunde.", image: n26Gps },
      { title: "Sistem anti-furt inteligent", description: "Sistem avansat de protecție anti-furt cu alerte în timp real și localizare GPS pentru liniștea ta sufletească.", image: n26Gps },
      { title: "Suspensie completă", description: "Suspensie față și spate pentru un confort excepțional pe orice tip de teren, de la asfalt la off-road.", image: n26Suspension },
      { title: "Anvelope fat 26×4.0", description: "Anvelope late de 4 inch pentru tracțiune maximă pe nisip, zăpadă, noroi sau pietriș.", image: n26Fattire },
    ],
    specs: {
      "Motor": "Dual 750W×2",
      "Cuplu": "65 Nm × 2",
      "Baterie": "48V 20AH Samsung",
      "Transmisie": "Shimano 7 viteze",
      "Frâne": "Hidraulice disc",
      "Viteză maximă": "50 km/h",
      "Autonomie": "100-120 km (mod asistat)",
      "Cadru": "Aliaj de aluminiu",
      "Anvelope": "26×4.0 fat",
      "Suspensie": "Față și spate",
      "Display": "4G LCD cu Type-C și Bluetooth",
      "Securitate": "Anti-theft cu GPS tracking",
      "Greutate": "35 kg",
      "Sarcină maximă": "150 kg",
    },
    available: true,
  },
  {
    id: "d7",
    name: "DUOTTS N26 Red",
    slug: "duotts-n26-red",
    type: "cumparare",
    category: "fat-tire",
    image: duottsN26red,
    gallery: [duottsN26red, lifestyleFattire, n26redGps],
    shortDescription: "Versiunea roșie a e-bike-ului dual motor N26 cu GPS tracking.",
    longDescription: "DUOTTS N26 Red – aceeași putere extremă în versiunea roșie. Dual motor 750W×2, baterie Samsung 20AH, display 4G LCD cu tracking real-time și sistem anti-furt inteligent.",
    price: Math.round(1399 * EUR),
    tagline: "Putere extremă în roșu aprins",
    taglineDescription: "Același N26 legendar, acum într-o culoare care nu trece neobservată. Dual motor, GPS tracking și baterie Samsung – totul în finisaj roșu premium.",
    highlights: [
      { icon: "motor", value: "750W×2", label: "Dual motor" },
      { icon: "range", value: "100-120 km", label: "Autonomie asistat" },
      { icon: "torque", value: "65 Nm×2", label: "Cuplu dual" },
      { icon: "battery", value: "48V 20Ah", label: "Samsung cells" },
      { icon: "speed", value: "50 km/h", label: "Viteză maximă" },
      { icon: "weight", value: "150 kg", label: "Sarcină maximă" },
    ],
    features: [
      { title: "Dual motor 750W×2", description: "Două motoare independente de 750W pentru tracțiune integrală și putere neegalată pe orice suprafață.", image: n26redMotor },
      { title: "Baterie Samsung 20AH", description: "Celule premium Samsung pentru autonomie extinsă de 100-120 km și durabilitate pe termen lung.", image: n26redBattery },
      { title: "GPS tracking & anti-furt", description: "Sistem integrat de localizare GPS și protecție anti-furt cu alerte în timp real pe telefon.", image: n26redGps },
      { title: "Design roșu premium", description: "Finisaj roșu vibrant pe cadru din aliaj de aluminiu, pentru o prezență vizuală puternică.", image: n26redFrame },
    ],
    specs: {
      "Motor": "Dual 750W×2",
      "Cuplu": "65 Nm × 2",
      "Baterie": "48V 20AH Samsung",
      "Transmisie": "Shimano 7 viteze",
      "Frâne": "Hidraulice disc",
      "Viteză maximă": "50 km/h",
      "Autonomie": "100-120 km (mod asistat)",
      "Cadru": "Aliaj de aluminiu",
      "Anvelope": "26×4.0 fat",
      "Suspensie": "Față și spate",
      "Display": "4G LCD cu Type-C și Bluetooth",
      "Culoare": "Roșu",
      "Greutate": "35 kg",
      "Sarcină maximă": "150 kg",
    },
    available: true,
  },
  {
    id: "d8",
    name: "DUOTTS F26 Pro",
    slug: "duotts-f26-pro",
    type: "cumparare",
    category: "fat-tire",
    image: duottsF26pro,
    gallery: [duottsF26pro, lifestyleFattire, f26proMotor],
    shortDescription: "E-bike dual motor 750W×2 cu baterie Samsung 20AH și Bluetooth.",
    longDescription: "DUOTTS F26 Pro combină puterea a două motoare de 750W cu bateria Samsung de 20AH pentru performanță de top. Suspensie frontală, frâne hidraulice și conectivitate Bluetooth completează pachetul.",
    price: Math.round(1399 * EUR),
    tagline: "Forță brută, control total",
    taglineDescription: "Două motoare de 750W, frâne hidraulice și anvelope fat de 4 inch. F26 Pro este construit pentru cei care caută performanță fără compromisuri pe orice teren.",
    highlights: [
      { icon: "motor", value: "750W×2", label: "Dual motor" },
      { icon: "range", value: "100-120 km", label: "Autonomie asistat" },
      { icon: "torque", value: "65 Nm×2", label: "Cuplu dual" },
      { icon: "battery", value: "48V 20Ah", label: "Samsung cells" },
      { icon: "speed", value: "55 km/h", label: "Viteză maximă" },
      { icon: "weight", value: "150 kg", label: "Sarcină maximă" },
    ],
    features: [
      { title: "Dual motor 750W×2", description: "Putere combinată de 1500W prin două motoare independente pentru accelerare rapidă și urcări ușoare.", image: f26proMotor },
      { title: "Baterie Samsung 20AH", description: "Celule Samsung premium pentru o autonomie de 100-120 km în modul de pedalare asistată.", image: f26proBattery },
      { title: "Frâne hidraulice pe disc", description: "Sistem de frânare hidraulic pe ambele roți pentru siguranță maximă la orice viteză.", image: f26proBrakes },
      { title: "Conectivitate Bluetooth & APP", description: "Aplicație DUOTTS dedicată pentru monitorizarea completă a bicicletei și a performanțelor tale.", image: f26proDisplay },
    ],
    specs: {
      "Motor": "Dual 750W×2",
      "Cuplu": "65 Nm × 2",
      "Baterie": "48V 20AH Samsung",
      "Transmisie": "Shimano 7 viteze",
      "Frâne": "Hidraulice disc",
      "Viteză maximă": "55 km/h",
      "Autonomie": "100-120 km (mod asistat)",
      "Cadru": "Aliaj de aluminiu",
      "Anvelope": "26×4.0 fat",
      "Suspensie": "Față",
      "Display": "LCD, Bluetooth, APP",
      "Greutate": "34 kg",
      "Sarcină maximă": "150 kg",
    },
    available: true,
  },
  {
    id: "d9",
    name: "DUOTTS F26 Pro Silver",
    slug: "duotts-f26-pro-silver",
    type: "cumparare",
    category: "fat-tire",
    image: duottsF26proSilver,
    gallery: [duottsF26proSilver, f26silverMotor, f26silverBrakes],
    shortDescription: "Versiunea argintie a e-bike-ului F26 Pro cu dual motor.",
    longDescription: "DUOTTS F26 Pro Silver – aceeași performanță excepțională în finisaj argintiu elegant. Dual motor 750W×2, baterie Samsung 20AH și conectivitate completă.",
    price: Math.round(1399 * EUR),
    tagline: "Eleganță argintie, putere brută",
    taglineDescription: "F26 Pro Silver combină finisajul premium argintiu cu performanța brutală a două motoare de 750W. Un e-bike care atrage privirile și domină traseul.",
    highlights: [
      { icon: "motor", value: "750W×2", label: "Dual motor" },
      { icon: "range", value: "100-120 km", label: "Autonomie asistat" },
      { icon: "torque", value: "65 Nm×2", label: "Cuplu dual" },
      { icon: "battery", value: "48V 20Ah", label: "Samsung cells" },
      { icon: "speed", value: "55 km/h", label: "Viteză maximă" },
      { icon: "weight", value: "150 kg", label: "Sarcină maximă" },
    ],
    features: [
      { title: "Dual motor 750W×2", description: "Tracțiune integrală cu două motoare de 750W pentru performanță maximă pe orice suprafață.", image: f26silverMotor },
      { title: "Finisaj argintiu premium", description: "Cadru din aliaj de aluminiu cu finisaj argintiu elegant, combinând estetica cu durabilitatea.", image: f26silverFrame },
      { title: "Baterie Samsung 20AH", description: "Autonomie extinsă de 100-120 km cu celule Samsung de înaltă calitate și fiabilitate dovedită.", image: f26silverBattery },
      { title: "Frâne hidraulice", description: "Sistem de frânare hidraulic pe ambele roți pentru opriri sigure și controlate.", image: f26silverBrakes },
    ],
    specs: {
      "Motor": "Dual 750W×2",
      "Cuplu": "65 Nm × 2",
      "Baterie": "48V 20AH Samsung",
      "Transmisie": "Shimano 7 viteze",
      "Frâne": "Hidraulice disc",
      "Viteză maximă": "55 km/h",
      "Autonomie": "100-120 km (mod asistat)",
      "Cadru": "Aliaj de aluminiu",
      "Anvelope": "26×4.0 fat",
      "Suspensie": "Față",
      "Culoare": "Argintiu",
      "Greutate": "34 kg",
      "Sarcină maximă": "150 kg",
    },
    available: true,
  },
  {
    id: "d10",
    name: "DUOTTS F20",
    slug: "duotts-f20",
    type: "cumparare",
    category: "retro",
    image: duottsF20,
    gallery: [duottsF20, lifestyleRetro, f20Battery],
    shortDescription: "E-bike retro cu baterie 52V 27AH și autonomie de 140 km.",
    longDescription: "DUOTTS F20 este un e-bike cu design retro care combină stilul vintage cu tehnologia modernă. Bateria puternică de 52V 27AH oferă o autonomie excepțională de până la 140 km în mod asistat.",
    price: Math.round(1369 * EUR),
    tagline: "Stil retro, tehnologie modernă",
    taglineDescription: "Design vintage care atrage privirile, combinat cu una dintre cele mai puternice baterii din gamă. F20 dovedește că stilul și performanța pot coexista.",
    highlights: [
      { icon: "motor", value: "750 W", label: "Motor puternic" },
      { icon: "range", value: "120-140 km", label: "Autonomie asistat" },
      { icon: "torque", value: "65 Nm", label: "Cuplu maxim" },
      { icon: "battery", value: "52V 27Ah", label: "Baterie mare" },
      { icon: "speed", value: "50 km/h", label: "Viteză maximă" },
      { icon: "weight", value: "150 kg", label: "Sarcină maximă" },
    ],
    features: [
      { title: "Baterie uriașă 52V 27AH", description: "Una dintre cele mai mari baterii din gamă, oferind o autonomie de 120-140 km în modul asistat. Ideală pentru călătorii lungi fără grija încărcării.", image: f20Battery },
      { title: "Design retro iconic", description: "Cadru cu design retro elegant care combină nostalgia cu tehnologia de ultimă generație.", image: f20Frame },
      { title: "Suspensie completă", description: "Suspensie față și spate pentru confort maxim pe orice tip de teren, inclusiv pe drumuri cu denivelări.", image: f20Suspension },
      { title: "Anvelope fat 20×4.0", description: "Anvelope late de 4 inch pe roți de 20\" pentru stabilitate și tracțiune excelente, cu un centru de greutate coborât.", image: f20Fattire },
    ],
    specs: {
      "Motor": "52V 750W single motor",
      "Cuplu": "65 Nm",
      "Baterie": "52V 27AH",
      "Transmisie": "Shimano 7 viteze",
      "Frâne": "Hidraulice disc",
      "Viteză maximă": "50 km/h",
      "Autonomie": "120-140 km (mod asistat)",
      "Cadru": "Aliaj de aluminiu, design retro",
      "Anvelope": "20×4.0 fat",
      "Suspensie": "Față și spate",
      "Greutate": "33 kg",
      "Sarcină maximă": "150 kg",
    },
    available: true,
  },
  {
    id: "d11",
    name: "DUOTTS blu E26",
    slug: "duotts-blu-e26",
    type: "cumparare",
    category: "fat-tire",
    image: duottsE26blu,
    gallery: [duottsE26blu, featureColorchange, featureTorquesensor],
    shortDescription: "E-bike premium cu cadru color-changing, motor Bafang și senzor de cuplu.",
    longDescription: "DUOTTS blu E26 este bijuteria gamei – cadru din aluminiu cu efect color-changing, motor Bafang de 750W, baterie Samsung 20AH și senzor de cuplu pentru pedalare ultra-naturală.",
    price: Math.round(1999 * EUR),
    tagline: "Bijuteria tehnologică a gamei",
    taglineDescription: "Cadru cu efect color-changing, motor Bafang cu senzor de cuplu și baterie Samsung. DUOTTS blu E26 redefinește ce înseamnă un e-bike premium.",
    highlights: [
      { icon: "motor", value: "750 W", label: "Motor Bafang" },
      { icon: "range", value: "100-120 km", label: "Autonomie asistat" },
      { icon: "torque", value: "65 Nm", label: "Senzor de cuplu" },
      { icon: "battery", value: "48V 20Ah", label: "Samsung cells" },
      { icon: "speed", value: "50 km/h", label: "Viteză maximă" },
      { icon: "weight", value: "150 kg", label: "Sarcină maximă" },
    ],
    features: [
      { title: "Cadru color-changing", description: "Cadru din aliaj de aluminiu cu efect color-changing unic care își schimbă nuanța în funcție de unghiul luminii.", image: featureColorchange },
      { title: "Motor Bafang 750W cu senzor cuplu", description: "Motor Bafang premium cu senzor de cuplu integrat pentru cea mai naturală și intuitivă experiență de pedalare electrică.", image: featureTorquesensor },
      { title: "Baterie Samsung 20AH", description: "Celule Samsung de top pentru fiabilitate pe termen lung și autonomie de 100-120 km în mod asistat.", image: featureBattery },
      { title: "Shimano 8 viteze", description: "Transmisie Shimano cu 8 trepte pentru versatilitate sporită și schimbări de viteză precise.", image: featureGears },
      { title: "Suspensie completă", description: "Amortizare față și spate pentru confort maxim pe drumuri dificile și trasee off-road.", image: featureSuspension },
      { title: "Frâne hidraulice premium", description: "Sistem de frânare hidraulic de înaltă performanță pentru opriri sigure la orice viteză.", image: featureBrakes },
    ],
    specs: {
      "Motor": "750W Bafang",
      "Cuplu": "65 Nm",
      "Senzor": "Senzor de cuplu",
      "Baterie": "48V 20AH Samsung",
      "Transmisie": "Shimano 8 viteze",
      "Frâne": "Hidraulice disc",
      "Viteză maximă": "50 km/h",
      "Autonomie": "100-120 km (mod asistat)",
      "Cadru": "Aliaj de aluminiu, efect Color-Changing",
      "Anvelope": "26×4.0 fat",
      "Suspensie": "Față și spate",
      "Greutate": "35 kg",
      "Sarcină maximă": "150 kg",
    },
    available: true,
  },
  {
    id: "d12",
    name: "DUOTTS E26",
    slug: "duotts-e26",
    type: "cumparare",
    category: "fat-tire",
    image: duottsE26,
    gallery: [duottsE26, featureColorchange, featureBattery],
    shortDescription: "E-bike premium cu cadru color-changing și motor Bafang 750W.",
    longDescription: "DUOTTS E26 oferă aceeași platformă premium ca și versiunea blu, cu cadru color-changing din aluminiu, motor Bafang 750W și senzor de cuplu pentru o experiență de pedalare naturală.",
    price: Math.round(1999 * EUR),
    tagline: "Premium fără compromisuri",
    taglineDescription: "Motor Bafang cu senzor de cuplu, cadru color-changing și baterie Samsung. E26 oferă performanță de top într-un pachet vizual spectaculos.",
    highlights: [
      { icon: "motor", value: "750 W", label: "Motor Bafang" },
      { icon: "range", value: "100-120 km", label: "Autonomie asistat" },
      { icon: "torque", value: "65 Nm", label: "Senzor de cuplu" },
      { icon: "battery", value: "48V 20Ah", label: "Samsung cells" },
      { icon: "speed", value: "50 km/h", label: "Viteză maximă" },
      { icon: "weight", value: "150 kg", label: "Sarcină maximă" },
    ],
    features: [
      { title: "Cadru color-changing din aluminiu", description: "Design unic cu efect color-changing care schimbă nuanța în funcție de lumină, oferind o prezență vizuală spectaculoasă.", image: featureColorchange },
      { title: "Motor Bafang 750W cu senzor cuplu", description: "Pedalare naturală datorită senzorului de cuplu care adaptează puterea motorului la efortul depus.", image: featureTorquesensor },
      { title: "Baterie Samsung 20AH", description: "Autonomie generoasă de 100-120 km cu celule premium Samsung pentru fiabilitate maximă.", image: featureBattery },
      { title: "Suspensie completă", description: "Amortizare față și spate pentru un confort excepțional pe orice suprafață.", image: featureSuspension },
    ],
    specs: {
      "Motor": "750W Bafang",
      "Cuplu": "65 Nm",
      "Senzor": "Senzor de cuplu",
      "Baterie": "48V 20AH Samsung",
      "Transmisie": "Shimano 8 viteze",
      "Frâne": "Hidraulice disc",
      "Viteză maximă": "50 km/h",
      "Autonomie": "100-120 km (mod asistat)",
      "Cadru": "Aliaj de aluminiu, efect Color-Changing",
      "Anvelope": "26×4.0 fat",
      "Suspensie": "Față și spate",
      "Greutate": "35 kg",
      "Sarcină maximă": "150 kg",
    },
    available: true,
  },
  {
    id: "d13",
    name: "DUOTTS F26 Lite",
    slug: "duotts-f26-lite",
    type: "cumparare",
    category: "fat-tire",
    image: duottsF26lite,
    gallery: [duottsF26lite, lifestyleFattire, featureMotor],
    shortDescription: "E-bike fat-tire cu baterie Samsung 18AH și motor 500W.",
    longDescription: "DUOTTS F26 Lite oferă un echilibru perfect între performanță și preț. Motor de 500W, baterie Samsung de 18AH și anvelope fat 26×4.0 pentru tracțiune excelentă.",
    price: Math.round(1249 * EUR),
    tagline: "Mergi mai departe, pedalează mai mult",
    taglineDescription: "F26 Lite oferă echilibrul perfect între performanță și accesibilitate, cu motor de 500W și baterie Samsung pentru aventuri fat-tire fără griji.",
    highlights: [
      { icon: "motor", value: "500 W", label: "Motor puternic" },
      { icon: "range", value: "80-90 km", label: "Autonomie asistat" },
      { icon: "torque", value: "55 Nm", label: "Cuplu maxim" },
      { icon: "battery", value: "48V 18Ah", label: "Samsung cells" },
      { icon: "speed", value: "50 km/h", label: "Viteză maximă" },
      { icon: "weight", value: "150 kg", label: "Sarcină maximă" },
    ],
    features: [
      { title: "Motor 500W eficient", description: "Motor de 500W care oferă un echilibru excelent între putere și eficiență energetică pentru aventuri de zi cu zi.", image: featureMotor },
      { title: "Baterie Samsung 18AH", description: "Celule Samsung premium pentru o autonomie de 80-90 km și o durată de viață extinsă a bateriei.", image: featureBattery },
      { title: "Anvelope fat 26×4.0", description: "Anvelope late pentru tracțiune excelentă pe orice suprafață – asfalt, nisip, zăpadă sau noroi.", image: featureFattire },
      { title: "Conectivitate Bluetooth", description: "Aplicație DUOTTS dedicată pentru monitorizarea performanțelor și setărilor bicicletei.", image: featureDisplay },
    ],
    specs: {
      "Motor": "500W",
      "Cuplu": "55 Nm",
      "Baterie": "48V 18AH Samsung",
      "Transmisie": "Shimano 7 viteze",
      "Frâne": "Hidraulice disc",
      "Viteză maximă": "50 km/h",
      "Autonomie": "80-90 km (mod asistat)",
      "Cadru": "Aliaj de aluminiu",
      "Anvelope": "26×4.0 fat",
      "Display": "LCD, Bluetooth, APP",
      "Greutate": "32 kg",
      "Sarcină maximă": "150 kg",
    },
    available: true,
  },
  {
    id: "d14",
    name: "DUOTTS S26 Pro",
    slug: "duotts-s26-pro",
    type: "cumparare",
    category: "fat-tire",
    image: duottsS26pro,
    gallery: [duottsS26pro, lifestyleFattire, featureSuspension],
    shortDescription: "E-bike dual motor 750W×2 cu suspensie completă și Bluetooth.",
    longDescription: "DUOTTS S26 Pro este echipat cu două motoare de 750W, baterie Samsung 20AH, suspensie față și spate și conectivitate Bluetooth cu aplicație dedicată.",
    price: Math.round(1399 * EUR),
    tagline: "Suspensie completă, putere totală",
    taglineDescription: "Dual motor 750W×2 combinat cu suspensie completă față-spate. S26 Pro oferă o experiență de conducere premium pe cele mai dificile trasee.",
    highlights: [
      { icon: "motor", value: "750W×2", label: "Dual motor" },
      { icon: "range", value: "100-120 km", label: "Autonomie asistat" },
      { icon: "torque", value: "65 Nm×2", label: "Cuplu dual" },
      { icon: "battery", value: "48V 20Ah", label: "Samsung cells" },
      { icon: "speed", value: "50 km/h", label: "Viteză maximă" },
      { icon: "weight", value: "150 kg", label: "Sarcină maximă" },
    ],
    features: [
      { title: "Dual motor 750W×2", description: "Tracțiune integrală cu două motoare puternice de 750W pentru performanță maximă pe orice teren.", image: featureDualmotor },
      { title: "Suspensie completă față-spate", description: "Sistem de amortizare complet pentru un confort excepțional și control sporit pe trasee tehnice.", image: featureSuspension },
      { title: "Baterie Samsung 20AH", description: "Celule Samsung de înaltă calitate pentru autonomie extinsă și fiabilitate pe termen lung.", image: featureBattery },
      { title: "Conectivitate Bluetooth & APP", description: "Monitorizare completă prin aplicația DUOTTS cu date în timp real despre performanță și baterie.", image: featureDisplay },
    ],
    specs: {
      "Motor": "Dual 750W×2",
      "Cuplu": "65 Nm × 2",
      "Baterie": "48V 20AH Samsung",
      "Transmisie": "Shimano 7 viteze",
      "Frâne": "Hidraulice disc",
      "Viteză maximă": "50 km/h",
      "Autonomie": "100-120 km (mod asistat)",
      "Cadru": "Aliaj de aluminiu",
      "Anvelope": "26×4.0 fat",
      "Suspensie": "Față și spate",
      "Display": "LCD, Bluetooth, APP",
      "Greutate": "35 kg",
      "Sarcină maximă": "150 kg",
    },
    available: true,
  },

  // ═══════════════════════════════════════════
  // RENTAL PRODUCTS
  // ═══════════════════════════════════════════
  {
    id: "r1",
    name: "DUOTTS Trail X Rental",
    slug: "duotts-trail-x-rental",
    type: "inchiriere",
    category: "mountain",
    image: bike1,
    gallery: [bike1],
    shortDescription: "Explorează traseele montane cu un e-MTB premium.",
    longDescription: "Închiriază DUOTTS Trail X și experimentează libertatea pe munte. Echipat complet cu motor puternic și suspensie completă. Include cască, lacăt și kit de reparații.",
    price: Math.round(1169 * EUR),
    pricePerDay: 199,
    specs: {
      "Motor": "750W",
      "Baterie": "48V 15AH",
      "Autonomie": "până la 90 km",
      "Include": "Cască, lacăt, kit reparații"
    },
    available: true,
    rentalConditions: [
      "Perioadă minimă de închiriere: 1 zi",
      "Depozit rambursabil: 500 RON",
      "Act de identitate obligatoriu",
      "Vârsta minimă: 18 ani",
      "Asigurare inclusă"
    ],
  },
  {
    id: "r2",
    name: "DUOTTS City Flow Rental",
    slug: "duotts-city-flow-rental",
    type: "inchiriere",
    category: "urban",
    image: bike2,
    gallery: [bike2],
    shortDescription: "Descoperă orașul pe două roți electrice.",
    longDescription: "Perfectă pentru turiști și pentru cei care vor să testeze un e-bike urban premium. Confort maxim și autonomie generoasă pentru o zi întreagă de explorare urbană.",
    price: Math.round(849 * EUR),
    pricePerDay: 129,
    specs: {
      "Motor": "250W",
      "Baterie": "36V 18AH",
      "Autonomie": "până la 100 km",
      "Include": "Lacăt, lumini, suport telefon"
    },
    available: true,
    rentalConditions: [
      "Perioadă minimă de închiriere: 1 zi",
      "Depozit rambursabil: 300 RON",
      "Act de identitate obligatoriu",
      "Vârsta minimă: 16 ani",
      "Asigurare inclusă"
    ],
  },
  {
    id: "r3",
    name: "DUOTTS Fat Explorer Rental",
    slug: "duotts-fat-explorer-rental",
    type: "inchiriere",
    category: "fat-tire",
    image: bike6,
    gallery: [bike6],
    shortDescription: "Aventură pe orice teren cu anvelope fat.",
    longDescription: "Alegerea perfectă pentru aventuri off-road extreme. Anvelopele late oferă tracțiune pe nisip, zăpadă și noroi.",
    price: Math.round(1399 * EUR),
    pricePerDay: 249,
    specs: {
      "Motor": "750W×2 Dual",
      "Baterie": "48V 20AH Samsung",
      "Autonomie": "până la 120 km",
      "Include": "Cască, lacăt, kit reparații, lumini"
    },
    available: true,
    rentalConditions: [
      "Perioadă minimă de închiriere: 1 zi",
      "Depozit rambursabil: 700 RON",
      "Act de identitate obligatoriu",
      "Vârsta minimă: 18 ani",
      "Asigurare inclusă"
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByType(type: ProductType): Product[] {
  return products.filter((p) => p.type === type);
}

export function getSimilarProducts(product: Product): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.type === product.type && p.category === product.category)
    .slice(0, 3);
}
