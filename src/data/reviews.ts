import reviewE26 from "@/assets/review-e26.png";
import reviewN26 from "@/assets/review-n26.png";

export interface Review {
  id: string;
  name: string;
  text: string;
  avatar: string;
  rating: number;
  bikeName: string;
  image?: string;
}

export const reviews: Review[] = [
  {
    id: "1",
    name: "Alexandru Popescu",
    text: "DUOTTS E26 este perfectă pentru drumurile de munte! Motorul de 750W urcă orice pantă fără efort, iar suspensia absoarbe totul. Cea mai bună investiție pe care am făcut-o.",
    avatar: "https://api.dicebear.com/9.x/initials/svg?seed=AP&backgroundColor=00E599",
    rating: 5,
    bikeName: "DUOTTS E26",
    image: reviewE26,
  },
  {
    id: "2",
    name: "Maria Ionescu",
    text: "DUOTTS N26 a transformat complet naveta mea. Ajung la birou proaspătă, motorul dual oferă o putere incredibilă, iar GPS-ul integrat îmi dă liniște. Designul e superb!",
    avatar: "https://api.dicebear.com/9.x/initials/svg?seed=MI&backgroundColor=3399FF",
    rating: 5,
    bikeName: "DUOTTS N26",
    image: reviewN26,
  },
  {
    id: "3",
    name: "Andrei Dumitrescu",
    text: "Am închiriat DUOTTS F26 Pro pentru un weekend la munte și a fost spectaculos. Frânele hidraulice și display-ul color sunt de top. Serviciul E-bike Zone e impecabil.",
    avatar: "https://api.dicebear.com/9.x/initials/svg?seed=AD&backgroundColor=00E599",
    rating: 4,
    bikeName: "DUOTTS F26 Pro",
  },
  {
    id: "4",
    name: "Elena Radu",
    text: "DUOTTS F20 intră perfect în portbagajul mașinii datorită cadrului pliabil. O iau cu mine peste tot. Autonomia de 100 km e mai mult decât suficientă pentru nevoile mele zilnice.",
    avatar: "https://api.dicebear.com/9.x/initials/svg?seed=ER&backgroundColor=3399FF",
    rating: 5,
    bikeName: "DUOTTS F20",
  },
];
