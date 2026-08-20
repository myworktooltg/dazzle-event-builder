import hero1 from "@/assets/hero1.jpg.asset.json";
import hero2 from "@/assets/hero2.jpg.asset.json";
import hero3 from "@/assets/hero3.jpg.asset.json";
import g1 from "@/assets/g1.jpg.asset.json";
import g2 from "@/assets/g2.jpg.asset.json";
import g3 from "@/assets/g3.jpg.asset.json";
import g4 from "@/assets/g4.jpg.asset.json";
import g5 from "@/assets/g5.jpg.asset.json";
import g6 from "@/assets/g6.jpg.asset.json";
import g7 from "@/assets/g7.jpg.asset.json";
import g8 from "@/assets/g8.jpg.asset.json";
import mark from "@/assets/mark.png.asset.json";

export const logoMark = mark.url;

export const heroSlides = [
  {
    url: hero1.url,
    alt: "Igbo couple in coral beads and gold attire at a candlelit traditional wedding reception",
  },
  {
    url: hero2.url,
    alt: "Yoruba wedding guests in gold aso ebi lace and gele dancing under chandeliers",
  },
  {
    url: hero3.url,
    alt: "Opulent banquet hall styled with gold candelabras and white florals",
  },
];

export type GalleryItem = {
  url: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const galleryItems: GalleryItem[] = [
  {
    url: g1.url,
    alt: "Bride kneeling with a palm wine cup during an Igbo igba nkwu ceremony",
    caption: "Igba Nkwu Ceremony, Onitsha",
    width: 1024,
    height: 1365,
  },
  {
    url: g4.url,
    alt: "Guests in formal wear at a corporate gala dinner in a chandeliered ballroom",
    caption: "Corporate Gala, Awka",
    width: 1024,
    height: 768,
  },
  {
    url: g6.url,
    alt: "Close view of a wedding table set with gold cutlery, cream roses and taper candles",
    caption: "Decor and Styling, Asaba",
    width: 1024,
    height: 1024,
  },
  {
    url: g2.url,
    alt: "Hausa bride and groom in embroidered wedding attire inside a decorated hall",
    caption: "Hausa Wedding Fatiha, Abuja",
    width: 1024,
    height: 768,
  },
  {
    url: g5.url,
    alt: "Woman in a gold sequin gown beside a tiered cake at a black and gold birthday party",
    caption: "Milestone Birthday, Enugu",
    width: 1024,
    height: 1365,
  },
  {
    url: g3.url,
    alt: "Efik bride in beads and traditional attire during a cultural ceremony",
    caption: "Efik Cultural Rites, Calabar",
    width: 1024,
    height: 1024,
  },
  {
    url: g7.url,
    alt: "Bride and groom sharing a first dance in an elegant ballroom",
    caption: "White Wedding, Onitsha",
    width: 1024,
    height: 768,
  },
  {
    url: g8.url,
    alt: "Outdoor garden reception at dusk with festoon lights and guests in colourful attire",
    caption: "Garden Reception, Nnewi",
    width: 1024,
    height: 1365,
  },
];
