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

export type ProductType = "cumparare" | "inchiriere";
export type BikeCategory = "mountain" | "urban" | "pliant" | "road" | "cargo" | "fat-tire" | "trekking" | "retro";

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
    gallery: [duottsC29k],
    shortDescription: "E-bike mountain 29\" cu baterie dublă și autonomie excepțională.",
    longDescription: "DUOTTS C29-K cu baterie dublă oferă o autonomie impresionantă de până la 170 km în modul asistat. Echipat cu motor hub de 750W, frâne hidraulice Zoom și anvelope Chaoyang 29×2.1, este perfect pentru trasee lungi și ture de weekend.",
    price: Math.round(1169 * EUR),
    specs: {
      "Cadru": "Aluminiu",
      "Baterie": "48V 15AH + 48V 22.5AH (dublă)",
      "Motor": "48V 750W Hub Motor",
      "Viteză maximă": "40-50 km/h",
      "Autonomie": "90-100 km electric / 150-170 km asistat",
      "Anvelope": "Chaoyang 29×2.1",
      "Frâne": "Zoom hidraulice",
      "Senzor": "Senzor de viteză",
      "Include": "2 încărcătoare",
      "Roți": "29\""
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
    gallery: [duottsC29pro],
    shortDescription: "E-bike mountain 29\" cu Shimano 21 viteze și conectivitate Bluetooth.",
    longDescription: "DUOTTS C29 Pro combină performanța unui motor de 750W cu transmisia Shimano 21 de viteze pentru control total pe orice teren. Cu Bluetooth și aplicație dedicată, monitorizezi fiecare aspect al călătoriei.",
    price: Math.round(849 * EUR),
    specs: {
      "Cadru": "Aluminiu",
      "Baterie": "48V 15AH (celule 18650)",
      "Motor": "750W 48V",
      "Transmisie": "Shimano 21 viteze",
      "Frâne": "Disc",
      "Viteză maximă": "50 km/h",
      "Autonomie": "60-90 km (mod asistat)",
      "Anvelope": "29\"",
      "Suspensie": "Față",
      "Conectivitate": "Bluetooth, APP"
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
    gallery: [duottsC29max],
    shortDescription: "E-bike mountain cu motor 960W peak și frâne hidraulice față-spate.",
    longDescription: "DUOTTS C29 Max oferă putere de vârf de 960W și cuplu de 65 Nm pentru urcări abrupte. Frânele hidraulice față-spate și anvelopele 29×2.10 asigură siguranță maximă pe orice suprafață.",
    price: Math.round(1099 * EUR),
    specs: {
      "Cadru": "Aluminiu",
      "Baterie": "48V 18AH",
      "Motor": "250W nominal / 960W peak",
      "Transmisie": "Shimano 7 viteze",
      "Frâne": "Hidraulice față și spate",
      "Viteză maximă": "25 km/h",
      "Autonomie": "100-120 km (mod asistat)",
      "Anvelope": "29×2.10",
      "Cuplu": "65 Nm",
      "Suspensie": "Furcă față"
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
    gallery: [duottsC29lite],
    shortDescription: "E-bike accesibil cu display color multifuncțional.",
    longDescription: "DUOTTS C29 Lite este alegerea perfectă pentru cei care doresc un e-bike de calitate la un preț accesibil. Cu display color multifuncțional și Shimano 7 viteze, oferă o experiență completă.",
    price: Math.round(629 * EUR),
    specs: {
      "Cadru": "Oțel",
      "Baterie": "36V 13AH",
      "Motor": "36V 250W",
      "Transmisie": "Shimano 7 viteze",
      "Frâne": "Disc mecanice față și spate",
      "Viteză maximă": "50 km/h",
      "Autonomie": "65 km (mod asistat)",
      "Anvelope": "27.5×2.25\"",
      "Display": "Color multifuncțional cu 3 butoane",
      "Roți": "27.5\""
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
    gallery: [duottsE29],
    shortDescription: "E-bike premium cu motor Bafang, senzor de cuplu și Shimano 14 viteze.",
    longDescription: "DUOTTS E29 Silver este un e-bike premium echipat cu motor Bafang de 250W, senzor de cuplu pentru pedalare naturală și transmisie Shimano 2×7 viteze. Conectivitatea Bluetooth și aplicația dedicată îți oferă control total.",
    price: Math.round(1359 * EUR),
    specs: {
      "Cadru": "Aluminiu",
      "Baterie": "48V 13.5AH",
      "Motor": "Bafang 48V 250W",
      "Cuplu": "50 Nm",
      "Senzor": "Senzor de cuplu",
      "Transmisie": "Shimano 2×7 viteze",
      "Frâne": "Disc ulei față și spate",
      "Viteză maximă": "40 km/h (limitat 25 km/h)",
      "Autonomie": "35-45 km electric / 80-90 km asistat",
      "Anvelope": "KENDA 27.5×2.6\"",
      "Conectivitate": "Bluetooth APP"
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
    gallery: [duottsN26],
    shortDescription: "E-bike dual motor 750W×2 cu baterie Samsung și tracking GPS.",
    longDescription: "DUOTTS N26 este un monstru de performanță cu două motoare de 750W, baterie Samsung de 20AH și display 4G LCD cu tracking în timp real. Sistemul anti-furt inteligent și anvelopele fat 26×4.0 îl fac perfect pentru orice aventură.",
    price: Math.round(1399 * EUR),
    specs: {
      "Cadru": "Aluminiu",
      "Baterie": "48V 20AH Samsung",
      "Motor": "Dual 750W×2",
      "Cuplu": "65 Nm × 2",
      "Transmisie": "Shimano 7 viteze",
      "Frâne": "Hidraulice disc",
      "Viteză maximă": "50 km/h",
      "Autonomie": "100-120 km (mod asistat)",
      "Anvelope": "26×4.0 fat",
      "Suspensie": "Față și spate",
      "Display": "4G LCD cu Type-C și Bluetooth",
      "Securitate": "Anti-theft și GPS tracking"
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
    gallery: [duottsN26red],
    shortDescription: "Versiunea roșie a e-bike-ului dual motor N26 cu GPS tracking.",
    longDescription: "DUOTTS N26 Red – aceeași putere extremă în versiunea roșie. Dual motor 750W×2, baterie Samsung 20AH, display 4G LCD cu tracking real-time și sistem anti-furt inteligent.",
    price: Math.round(1399 * EUR),
    specs: {
      "Cadru": "Aluminiu",
      "Baterie": "48V 20AH Samsung",
      "Motor": "Dual 750W×2",
      "Cuplu": "65 Nm × 2",
      "Transmisie": "Shimano 7 viteze",
      "Frâne": "Hidraulice disc",
      "Viteză maximă": "50 km/h",
      "Autonomie": "100-120 km (mod asistat)",
      "Anvelope": "26×4.0 fat",
      "Suspensie": "Față și spate",
      "Display": "4G LCD cu Type-C și Bluetooth",
      "Culoare": "Roșu"
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
    gallery: [duottsF26pro],
    shortDescription: "E-bike dual motor 750W×2 cu baterie Samsung 20AH și Bluetooth.",
    longDescription: "DUOTTS F26 Pro combină puterea a două motoare de 750W cu bateria Samsung de 20AH pentru performanță de top. Suspensie frontală, frâne hidraulice și conectivitate Bluetooth completează pachetul.",
    price: Math.round(1399 * EUR),
    specs: {
      "Cadru": "Aluminiu",
      "Baterie": "48V 20AH Samsung",
      "Motor": "Dual 750W×2",
      "Transmisie": "Shimano 7 viteze",
      "Frâne": "Hidraulice disc",
      "Viteză maximă": "55 km/h",
      "Autonomie": "100-120 km (mod asistat)",
      "Anvelope": "26×4.0 fat",
      "Suspensie": "Față",
      "Conectivitate": "Bluetooth, APP"
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
    gallery: [duottsF26proSilver],
    shortDescription: "Versiunea argintie a e-bike-ului F26 Pro cu dual motor.",
    longDescription: "DUOTTS F26 Pro Silver – aceeași performanță excepțională în finisaj argintiu elegant. Dual motor 750W×2, baterie Samsung 20AH și conectivitate completă.",
    price: Math.round(1399 * EUR),
    specs: {
      "Cadru": "Aluminiu",
      "Baterie": "48V 20AH Samsung",
      "Motor": "Dual 750W×2",
      "Transmisie": "Shimano 7 viteze",
      "Frâne": "Hidraulice disc",
      "Viteză maximă": "55 km/h",
      "Autonomie": "100-120 km (mod asistat)",
      "Anvelope": "26×4.0 fat",
      "Suspensie": "Față",
      "Culoare": "Argintiu"
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
    gallery: [duottsF20],
    shortDescription: "E-bike retro cu baterie 52V 27AH și autonomie de 140 km.",
    longDescription: "DUOTTS F20 este un e-bike cu design retro care combină stilul vintage cu tehnologia modernă. Bateria puternică de 52V 27AH oferă o autonomie excepțională de până la 140 km în mod asistat.",
    price: Math.round(1369 * EUR),
    specs: {
      "Cadru": "Aluminiu",
      "Baterie": "52V 27AH",
      "Motor": "52V 750W single motor",
      "Transmisie": "Shimano 7 viteze",
      "Frâne": "Hidraulice disc",
      "Viteză maximă": "50 km/h",
      "Autonomie": "120-140 km (mod asistat)",
      "Anvelope": "20×4.0 fat",
      "Suspensie": "Față și spate"
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
    gallery: [duottsE26blu],
    shortDescription: "E-bike premium cu cadru color-changing, motor Bafang și senzor de cuplu.",
    longDescription: "DUOTTS blu E26 este bijuteria gamei – cadru din aluminiu cu efect color-changing, motor Bafang de 750W, baterie Samsung 20AH și senzor de cuplu pentru pedalare ultra-naturală.",
    price: Math.round(1999 * EUR),
    specs: {
      "Cadru": "Aluminiu Color-Changing",
      "Baterie": "48V 20AH Samsung",
      "Motor": "750W Bafang",
      "Transmisie": "Shimano 8 viteze",
      "Frâne": "Hidraulice disc",
      "Viteză maximă": "50 km/h",
      "Autonomie": "100-120 km (mod asistat)",
      "Anvelope": "26×4.0 fat",
      "Senzor": "Senzor de cuplu",
      "Suspensie": "Față și spate"
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
    gallery: [duottsE26],
    shortDescription: "E-bike premium cu cadru color-changing și motor Bafang 750W.",
    longDescription: "DUOTTS E26 oferă aceeași platformă premium ca și versiunea blu, cu cadru color-changing din aluminiu, motor Bafang 750W și senzor de cuplu pentru o experiență de pedalare naturală.",
    price: Math.round(1999 * EUR),
    specs: {
      "Cadru": "Aluminiu Color-Changing",
      "Baterie": "48V 20AH Samsung",
      "Motor": "750W Bafang",
      "Transmisie": "Shimano 8 viteze",
      "Frâne": "Hidraulice disc",
      "Viteză maximă": "50 km/h",
      "Autonomie": "100-120 km (mod asistat)",
      "Anvelope": "26×4.0 fat",
      "Senzor": "Senzor de cuplu",
      "Suspensie": "Față și spate"
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
    gallery: [duottsF26lite],
    shortDescription: "E-bike fat-tire cu baterie Samsung 18AH și motor 500W.",
    longDescription: "DUOTTS F26 Lite oferă un echilibru perfect între performanță și preț. Motor de 500W, baterie Samsung de 18AH și anvelope fat 26×4.0 pentru tracțiune excelentă.",
    price: Math.round(1249 * EUR),
    specs: {
      "Cadru": "Aluminiu",
      "Baterie": "48V 18AH Samsung",
      "Motor": "500W",
      "Transmisie": "Shimano 7 viteze",
      "Frâne": "Hidraulice disc",
      "Viteză maximă": "50 km/h",
      "Autonomie": "80-90 km (mod asistat)",
      "Anvelope": "26×4.0 fat",
      "Conectivitate": "Bluetooth, APP"
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
    gallery: [duottsS26pro],
    shortDescription: "E-bike dual motor 750W×2 cu suspensie completă și Bluetooth.",
    longDescription: "DUOTTS S26 Pro este echipat cu două motoare de 750W, baterie Samsung 20AH, suspensie față și spate și conectivitate Bluetooth cu aplicație dedicată.",
    price: Math.round(1399 * EUR),
    specs: {
      "Cadru": "Aluminiu",
      "Baterie": "48V 20AH Samsung",
      "Motor": "Dual 750W×2",
      "Transmisie": "Shimano 7 viteze",
      "Frâne": "Hidraulice disc",
      "Viteză maximă": "50 km/h",
      "Autonomie": "100-120 km (mod asistat)",
      "Anvelope": "26×4.0 fat",
      "Suspensie": "Față și spate",
      "Conectivitate": "Bluetooth, APP"
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
      "Include": "Cască, lacăt, GPS tracker"
    },
    available: true,
    rentalConditions: [
      "Perioadă minimă de închiriere: 1 zi",
      "Depozit rambursabil: 800 RON",
      "Act de identitate obligatoriu",
      "Vârsta minimă: 18 ani",
      "Asigurare premium inclusă"
    ],
  },
];

export const getProductsByType = (type: ProductType) => products.filter((p) => p.type === type);
export const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug);
export const getSimilarProducts = (product: Product) =>
  products.filter((p) => p.type === product.type && p.id !== product.id).slice(0, 3);
