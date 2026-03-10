import bike1 from "@/assets/bike-1.png";
import bike2 from "@/assets/bike-2.png";
import bike3 from "@/assets/bike-3.png";
import bike4 from "@/assets/bike-4.png";
import bike5 from "@/assets/bike-5.png";
import bike6 from "@/assets/bike-6.png";

export type ProductType = "cumparare" | "inchiriere";
export type BikeCategory = "mountain" | "urban" | "pliant" | "road" | "cargo" | "fat-tire";

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

export const products: Product[] = [
  {
    id: "1",
    name: "Drivepartner Trail X",
    slug: "drivepartner-trail-x",
    type: "cumparare",
    category: "mountain",
    image: bike1,
    gallery: [bike1, bike1, bike1],
    shortDescription: "E-MTB premium pentru trasee montane exigente.",
    longDescription: "Drivepartner Trail X este creat pentru cei care caută aventura pe trasee montane. Echipat cu motor Shimano EP8 de 85 Nm, baterie de 630 Wh și suspensie completă de 150 mm, acest e-MTB îți oferă puterea și controlul de care ai nevoie pe orice teren. Cadrul din aluminiu hidroformat combină rigiditatea cu greutatea redusă.",
    price: 14999,
    specs: {
      "Motor": "Shimano EP8, 85 Nm",
      "Baterie": "630 Wh Li-Ion",
      "Autonomie": "până la 120 km",
      "Greutate": "23.5 kg",
      "Suspensie": "150 mm față/spate",
      "Frâne": "Shimano XT 4-piston",
      "Transmisie": "Shimano Deore XT 12v",
      "Roți": "29\""
    },
    available: true,
  },
  {
    id: "2",
    name: "Drivepartner City Flow",
    slug: "drivepartner-city-flow",
    type: "cumparare",
    category: "urban",
    image: bike2,
    gallery: [bike2, bike2, bike2],
    shortDescription: "E-bike urban elegant pentru naveta zilnică.",
    longDescription: "Drivepartner City Flow redefinește mobilitatea urbană. Cu un design minimalist și curat, motor Bosch Performance Line și baterie integrată de 500 Wh, această bicicletă te duce oriunde în oraș cu stil. Geometria confortabilă și componentele premium asigură o experiență de pedalare superioară.",
    price: 9499,
    specs: {
      "Motor": "Bosch Performance Line, 65 Nm",
      "Baterie": "500 Wh integrată",
      "Autonomie": "până la 100 km",
      "Greutate": "19.8 kg",
      "Suspensie": "Furcă rigidă carbon",
      "Frâne": "Shimano hydraulice",
      "Transmisie": "Shimano Nexus 5v",
      "Roți": "28\""
    },
    available: true,
  },
  {
    id: "3",
    name: "Drivepartner Fold Compact",
    slug: "drivepartner-fold-compact",
    type: "cumparare",
    category: "pliant",
    image: bike3,
    gallery: [bike3, bike3, bike3],
    shortDescription: "E-bike pliabil compact pentru mobilitate maximă.",
    longDescription: "Drivepartner Fold Compact este soluția perfectă pentru naveta multi-modală. Se pliază în 10 secunde, încape sub birou sau în portbagaj, și oferă o autonomie de până la 70 km. Motorul de butuc silențios și bateria removibilă fac din fiecare călătorie o plăcere.",
    price: 6999,
    specs: {
      "Motor": "Bafang hub, 45 Nm",
      "Baterie": "400 Wh removibilă",
      "Autonomie": "până la 70 km",
      "Greutate": "17.2 kg",
      "Pliere": "10 secunde, 3 pași",
      "Frâne": "Tektro hydraulice",
      "Transmisie": "Shimano 7v",
      "Roți": "20\""
    },
    available: true,
  },
  {
    id: "4",
    name: "Drivepartner Velo Pro",
    slug: "drivepartner-velo-pro",
    type: "cumparare",
    category: "road",
    image: bike4,
    gallery: [bike4, bike4, bike4],
    shortDescription: "E-road bike performant cu cadru carbon.",
    longDescription: "Drivepartner Velo Pro este visul oricărui ciclist de șosea. Cadrul full carbon, motorul Fazua Ride 60 aproape invizibil și greutatea totală sub 14 kg îl fac practic imposibil de distins de un road bike tradițional. Transmisia electronică Shimano 105 Di2 asigură schimbări de viteză perfecte.",
    price: 18999,
    specs: {
      "Motor": "Fazua Ride 60, 60 Nm",
      "Baterie": "430 Wh integrată",
      "Autonomie": "până la 90 km",
      "Greutate": "13.8 kg",
      "Cadru": "Carbon T800",
      "Frâne": "Shimano 105 hydraulice",
      "Transmisie": "Shimano 105 Di2 12v",
      "Roți": "700c"
    },
    available: true,
  },
  {
    id: "5",
    name: "Drivepartner Cargo Hauler",
    slug: "drivepartner-cargo-hauler",
    type: "cumparare",
    category: "cargo",
    image: bike5,
    gallery: [bike5, bike5, bike5],
    shortDescription: "E-cargo bike robust pentru transport urban.",
    longDescription: "Drivepartner Cargo Hauler transformă transportul urban. Cu o capacitate de încărcare de 200 kg, motor Bosch Cargo Line de 85 Nm și stabilitate excepțională, este partenerul perfect pentru livrări, cumpărături sau transport familial. Portbagajele față și spate sunt modulare și adaptabile.",
    price: 12499,
    specs: {
      "Motor": "Bosch Cargo Line, 85 Nm",
      "Baterie": "545 Wh DualBattery ready",
      "Autonomie": "până la 80 km",
      "Greutate": "32 kg",
      "Capacitate": "200 kg total",
      "Frâne": "Magura MT5 4-piston",
      "Transmisie": "Enviolo stepless",
      "Roți": "26\""
    },
    available: false,
  },
  // RENTAL PRODUCTS
  {
    id: "6",
    name: "Drivepartner Trail X Rental",
    slug: "drivepartner-trail-x-rental",
    type: "inchiriere",
    category: "mountain",
    image: bike1,
    gallery: [bike1, bike1, bike1],
    shortDescription: "Explorează traseele montane cu un e-MTB premium.",
    longDescription: "Închiriază Drivepartner Trail X și experimentează libertatea pe munte. Echipat complet cu motor puternic de 85 Nm și suspensie de 150 mm, este pregătit pentru orice aventură. Include cască, lacăt și kit de reparații.",
    price: 14999,
    pricePerDay: 199,
    specs: {
      "Motor": "Shimano EP8, 85 Nm",
      "Baterie": "630 Wh Li-Ion",
      "Autonomie": "până la 120 km",
      "Greutate": "23.5 kg",
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
    id: "7",
    name: "Drivepartner City Flow Rental",
    slug: "drivepartner-city-flow-rental",
    type: "inchiriere",
    category: "urban",
    image: bike2,
    gallery: [bike2, bike2, bike2],
    shortDescription: "Descoperă orașul pe două roți electrice.",
    longDescription: "Perfectă pentru turiști și pentru cei care vor să testeze un e-bike urban premium. Drivepartner City Flow oferă confort maxim și autonomie generoasă pentru o zi întreagă de explorare urbană.",
    price: 9499,
    pricePerDay: 129,
    specs: {
      "Motor": "Bosch Performance Line, 65 Nm",
      "Baterie": "500 Wh integrată",
      "Autonomie": "până la 100 km",
      "Greutate": "19.8 kg",
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
    id: "8",
    name: "Drivepartner Fat Explorer Rental",
    slug: "drivepartner-fat-explorer-rental",
    type: "inchiriere",
    category: "fat-tire",
    image: bike6,
    gallery: [bike6, bike6, bike6],
    shortDescription: "Aventură pe orice teren cu anvelope fat.",
    longDescription: "Drivepartner Fat Explorer este alegerea perfectă pentru aventuri off-road extreme. Anvelopele late de 4.8\" oferă tracțiune pe nisip, zăpadă și noroi. Închiriază-l și descoperă trasee pe care niciodată nu ai crezut că sunt posibile pe o bicicletă.",
    price: 16999,
    pricePerDay: 249,
    specs: {
      "Motor": "Bafang Ultra M620, 160 Nm",
      "Baterie": "768 Wh",
      "Autonomie": "până la 80 km",
      "Greutate": "28 kg",
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
