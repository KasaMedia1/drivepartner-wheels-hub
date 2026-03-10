export interface Review {
  id: string;
  name: string;
  text: string;
  avatar: string;
  rating: number;
  bikeName: string;
}

export const reviews: Review[] = [
  {
    id: "1",
    name: "Alexandru Popescu",
    text: "Trail X este o bestie pe munte! Am urcat trasee pe care nu credeam că sunt posibile cu un e-bike. Motorul Shimano EP8 răspunde perfect, iar suspensia absoarbe totul. Cea mai bună investiție.",
    avatar: "https://api.dicebear.com/9.x/initials/svg?seed=AP&backgroundColor=00E599",
    rating: 5,
    bikeName: "Drivepartner Trail X",
  },
  {
    id: "2",
    name: "Maria Ionescu",
    text: "City Flow a transformat complet naveta mea. Ajung la birou proaspătă, fără transpirație, și parcul? E un vis. Designul e atât de elegant încât primesc complimente constant.",
    avatar: "https://api.dicebear.com/9.x/initials/svg?seed=MI&backgroundColor=3399FF",
    rating: 5,
    bikeName: "Drivepartner City Flow",
  },
  {
    id: "3",
    name: "Andrei Dumitrescu",
    text: "Am închiriat Fat Explorer pentru un weekend la munte și a fost spectaculos. Tracțiunea pe noroi este incredibilă, iar bateria a ținut toată ziua. Serviciul Drivepartner e impecabil.",
    avatar: "https://api.dicebear.com/9.x/initials/svg?seed=AD&backgroundColor=00E599",
    rating: 4,
    bikeName: "Drivepartner Fat Explorer",
  },
  {
    id: "4",
    name: "Elena Radu",
    text: "Fold Compact intră perfect în portbagajul mașinii și sub birou. Îl iau cu mine peste tot. Autonomia de 70 km e mai mult decât suficientă pentru nevoile mele zilnice.",
    avatar: "https://api.dicebear.com/9.x/initials/svg?seed=ER&backgroundColor=3399FF",
    rating: 5,
    bikeName: "Drivepartner Fold Compact",
  },
];
