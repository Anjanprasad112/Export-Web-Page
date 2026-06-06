export const navItems = [
  { key: "nav.home", label: "Home", href: "/" },
  { key: "nav.about", label: "About", href: "/about" },
  { key: "nav.products", label: "Products", href: "/product" },
  { key: "nav.certificates", label: "Certificates", href: "/certificates" },
  { key: "nav.gallery", label: "Gallery", href: "/gallery" },
  { key: "nav.contact", label: "Contact", href: "/contact" }
];

export const contact = {
  company: "Siddhivinayak Foreign Exports Private Limited",
  address:
    "B-12, Plot -172, Amrut, CHS LTD, RSC 50 Gorai RD, Behind Neelam Pride, Gorai Creek - 400092 Borivali West Mumbai",
  phone: "+91 7738218238",
  phoneCompact: "+917738218238",
  email: "Info@Siddhivinayakforeignexim.com",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Siddhivinayak%20Foreign%20Exports%20Private%20Limited%20Mumbai",
  mapHome:
    "https://maps.google.com/maps?q=Siddhivinayak%20Foreign%20Exports&t=m&z=14&output=embed&iwloc=near",
  mapContact:
    "https://maps.google.com/maps?q=Siddhivinayak%20Foreign%20Export&t=m&z=13&output=embed&iwloc=near",
  whatsapp: "https://wa.me/+9176764580517"
};

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/piyushpandeyexim/" },
  { label: "Whatsapp", href: contact.whatsapp },
  { label: "Facebook", href: "https://www.facebook.com/share/173VNCk7yJ/" },
  { label: "Youtube", href: "https://youtube.com/@piyushpandey-eximsiddhivinayak?si=WG2szHtlyYcnLtCF" },
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/piyush-pandey-139a86127?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  }
];

export const assets = {
  logo: "/assets/s-09.png",
  homeHero: "/assets/melissa-belanger-usE0kpV_yLo-unsplash.webp",
  storyBg: "/assets/devin-rajaram-X5ChCOu8CQg-unsplash.webp",
  certificatesHero:
    "/assets/g9d7210dd8c497df706f712210daf0c5a97891e924eec79c42baf4ddd7ac71b3a3fcc7d9290e12a606ec16b5ce3624ebb3fe58cd0844268975d28052724d6b3c7_1280-1463911.webp",
  founder: "/assets/20250625_154447_0000.webp",
  cofounder: "/assets/IMG-20250516-WA001422.webp"
};

export const homeProducts = [
  {
    title: "Blueberry",
    href: "/blueberry",
    image: "/assets/melissa-belanger-usE0kpV_yLo-unsplash.webp",
    desc: "Blueberries: Sweet, fresh, and rich in antioxidants. Perfect for export, retail, and health food markets."
  },
  {
    title: "Tomato",
    href: "/product",
    image: "/assets/engin-akyurt-eb26eV-ys_k-unsplash.webp",
    desc: "Fresh tomatoes, juicy & tasty."
  },
  {
    title: "Orange",
    href: "/product",
    image: "/assets/jen-gunter-A4BBdJQu2co-unsplash.webp",
    desc: "Oranges packed with juice and natural sweetness, farm fresh."
  },
  {
    title: "Pineapple",
    href: "/product",
    image: "/assets/stephany-williams-yx3-a7ualMM-unsplash-1.webp",
    desc: "Tropical pineapples, juicy, tangy, and rich in flavor."
  },
  {
    title: "Pomegranate",
    href: "/pomegranate",
    image: "/assets/nathalie-jolie-IBekPHDDFxQ-unsplash.webp",
    desc: "Fresh pomegranates, ruby red, sweet, and antioxidant-rich."
  },
  {
    title: "Strawberry",
    href: "/product",
    image: "/assets/justus-menke-tNLykyGgVtA-unsplash.webp",
    desc: "Strawberries fresh, sweet, and bursting with flavor."
  },
  {
    title: "Black Grapes",
    href: "/grapes",
    image: "/assets/kiriakos-verros-K_sWk4fDf28-unsplash.webp",
    desc: "Black grapes, sweet, seedless, and rich in antioxidants."
  },
  {
    title: "Juicy Orange",
    href: "/product",
    image: "/assets/nica-cn-1zOtkv3hJ9s-unsplash.webp",
    desc: "Juicy oranges, perfect for fresh and natural juice."
  }
];

export type ProductCard = {
  slug: string;
  title: string;
  image: string;
  detailHero: string;
  detailImage: string;
  desc: string;
};

export const productCards: ProductCard[] = [
  {
    slug: "grapes",
    title: "Grapes",
    image: "/assets/cengiz-ozarpat-WD5DErY3zWM-unsplash.webp",
    detailHero: "/assets/gunter-hoffmann-LYaW8eq3mjs-unsplash.webp",
    detailImage: "/assets/cengiz-ozarpat-WD5DErY3zWM-unsplash.webp",
    desc: "Fresh grapes, sweet, crisp, and packed with nutrition."
  },
  {
    slug: "pomegranate",
    title: "Pomegranate",
    image: "/assets/nathalie-jolie-IBekPHDDFxQ-unsplash.webp",
    detailHero: "/assets/jonas-renner-LOdAL10JejI-unsplash.webp",
    detailImage: "/assets/nathalie-jolie-IBekPHDDFxQ-unsplash.webp",
    desc:
      "Our pomegranates are fresh, ruby red, and naturally sweet, packed with antioxidants and nutrients. Ideal for both fresh consumption and juice extraction, they are carefully selected and export-grade."
  },
  {
    slug: "banana",
    title: "Banana",
    image: "/assets/krasimira-H-eN3BIHo3c-unsplash.webp",
    detailHero: "/assets/scott-webb-Ar0QYv-qtw4-unsplash-1.webp",
    detailImage: "/assets/krasimira-H-eN3BIHo3c-unsplash-1.webp",
    desc:
      "Naturally sweet and energy-rich, our bananas are freshly harvested, ideal for direct consumption and processing. Exported with care to ensure freshness and quality."
  },
  {
    slug: "watermelon",
    title: "Watermelon",
    image: "/assets/endless-day-of-summer-JgXIo5g_IAc-unsplash.webp",
    detailHero: "/assets/art-rachen-izi5AnlbRIA-unsplash.webp",
    detailImage: "/assets/nik-SY_9tGuk98o-unsplash.webp",
    desc:
      "Juicy, refreshing, and naturally sweet, our watermelons are ideal for hot climates. Carefully selected and packed for export to ensure top quality and freshness."
  },
  {
    slug: "semi-husk-coconut",
    title: "Semi Husk Coconut",
    image: "/assets/jonas-ducker-oD4pKP_uVXA-unsplash.webp",
    detailHero: "/assets/louis-hansel-WUMxEBWvE64-unsplash.webp",
    detailImage: "/assets/ibrahim-rifath-ps2U8yCmzSY-unsplash.webp",
    desc:
      "Our semi husked coconuts are mature, fresh, and high in water content. Ideal for export, they are carefully cleaned and packed to ensure long shelf life and quality on arrival."
  },
  {
    slug: "lemon",
    title: "Lemon",
    image: "/assets/kevin-charit-K7rzWyTa_SY-unsplash.webp",
    detailHero: "/assets/irina-3a6bRScDqLI-unsplash.webp",
    detailImage: "/assets/victor-figueroa-huUI0y0ERMM-unsplash.webp",
    desc:
      "Fresh lemons with bright citrus flavor and natural aroma, selected and packed for reliable export freshness."
  },
  {
    slug: "drumstick",
    title: "Drumstick",
    image: "/assets/20250711_133129.webp",
    detailHero: "/assets/20250711_133117.webp",
    detailImage: "/assets/20250711_133129.webp",
    desc:
      "Fresh, tender, and nutrient-rich, our drumsticks are perfect for culinary and health applications. Carefully harvested and packed to meet export standards."
  },
  {
    slug: "garlic",
    title: "Garlic",
    image: "/assets/towfiqu-barbhuiya-BQqNSRPWcRA-unsplash.webp",
    detailHero: "/assets/towfiqu-barbhuiya-BQqNSRPWcRA-unsplash.webp",
    detailImage: "/assets/team-voyas-vIiye0QDryo-unsplash.webp",
    desc:
      "Our garlic is bold in flavor, rich in natural oils, and perfect for culinary and medicinal use. Cleaned and graded for export, ensuring long shelf life and premium quality."
  },
  {
    slug: "onion",
    title: "Onion",
    image: "/assets/jeff-siepman-hnM2YmTeNAs-unsplash.webp",
    detailHero: "/assets/jeff-siepman-hnM2YmTeNAs-unsplash.webp",
    detailImage: "/assets/paul-magdas-SSIwIRCu7bM-unsplash.webp",
    desc:
      "Fresh, firm, and pungent, our onions are ideal for cooking and processing. Sourced from trusted farms, they are sorted, cleaned, and packed to meet global export standards."
  },
  {
    slug: "suran",
    title: "Suran",
    image: "/assets/Screenshot_20250711_131125_Gallery.webp",
    detailHero: "/assets/Screenshot_20250711_131111_Gallery.webp",
    detailImage: "/assets/Screenshot_20250711_131125_Gallery.webp",
    desc:
      "Rich in fiber and nutrients, our suran is firm, fresh, and ideal for cooking and processing. Carefully cleaned and packed to ensure quality for export."
  },
  {
    slug: "green-chilli",
    title: "Green Chilli",
    image: "/assets/ajai-s-z7YIxZRhxzk-unsplash.webp",
    detailHero: "/assets/mayur-more-F2iXfRkXn24-unsplash.webp",
    detailImage: "/assets/vipul-borade-FvvgvCO-0gI-unsplash.webp",
    desc:
      "Spicy, fresh, and full of flavor, our green chillies are perfect for culinary use. Harvested at peak freshness and hygienically packed to retain quality during export."
  },
  {
    slug: "ginger",
    title: "Ginger",
    image: "/assets/jason-leung-E2UZdY0dtgQ-unsplash.webp",
    detailHero: "/assets/jason-leung-E2UZdY0dtgQ-unsplash.webp",
    detailImage: "/assets/kelly-sikkema-1xe1Zq4RIZg-unsplash.webp",
    desc:
      "Aromatic, spicy, and packed with medicinal properties, our fresh ginger is ideal for cooking and health applications. Carefully cleaned and graded for international export quality."
  },
  {
    slug: "turmeric",
    title: "Turmeric",
    image: "/assets/tamanna-rumee-RoGdv1kk5XM-unsplash.webp",
    detailHero: "/assets/tamanna-rumee-RoGdv1kk5XM-unsplash.webp",
    detailImage: "/assets/tamanna-rumee-fIt2bymQp4-unsplash.webp",
    desc:
      "Bright in color and rich in curcumin, our turmeric is ideal for culinary, medicinal, and cosmetic use. Sourced from quality farms and processed to meet export standards."
  },
  {
    slug: "red-chilli",
    title: "Red Chilli",
    image: "/assets/md-nazmul-islam-nayeem-2FxTnDcMLjs-unsplash.webp",
    detailHero: "/assets/md-nazmul-islam-nayeem-2FxTnDcMLjs-unsplash.webp",
    detailImage: "/assets/vasanth-kedige-hD9hdDEP53A-unsplash.webp",
    desc:
      "Bold in color and heat, our dried red chillies are perfect for spice blends, cooking, and processing. Sun-dried and graded to ensure rich flavor and export quality."
  },
  {
    slug: "coriander-seed",
    title: "Coriander Seed",
    image: "/assets/basata-coffee-03OM-Tv7_bY-unsplash.webp",
    detailHero: "/assets/basata-coffee-03OM-Tv7_bY-unsplash.webp",
    detailImage: "/assets/mockupo-nOyjlj-dse0-unsplash.webp",
    desc:
      "Warm, citrusy, and aromatic, our coriander seeds are perfect for cooking, spice blends, and medicinal use. Carefully cleaned and packed to ensure freshness and export quality."
  },
  {
    slug: "blueberry",
    title: "Blueberry",
    image: "/assets/nadeykina-evgeniya-epeLqDQh2PE-unsplash.webp",
    detailHero: "/assets/melissa-belanger-usE0kpV_yLo-unsplash-1.webp",
    detailImage: "/assets/jeremy-ricketts-h4zs8fbybq4-unsplash.webp",
    desc:
      "Sweet, tangy, and rich in antioxidants, our fresh blueberries are ideal for snacking, baking, and health-focused products. Carefully packed to preserve freshness and meet global export standards."
  },
  {
    slug: "cumin-seed",
    title: "Cumin Seed",
    image: "/assets/umesh-soni-CfryyqgO9zc-unsplash-1.webp",
    detailHero: "/assets/umesh-soni-CfryyqgO9zc-unsplash-1.webp",
    detailImage: "/assets/pradeep-javedar-Eg8MdIZUDcQ-unsplash.webp",
    desc:
      "Aromatic and flavorful, our cumin seeds are ideal for seasoning, spice blends, and medicinal use. Cleaned, sorted, and packed to maintain purity and export quality."
  }
];

export const certificates = [
  "/assets/AA2705251623835_RC23062025-images-0-scaled.webp",
  "/assets/import-export-code-IEC-CERTIFICATE_page-0001-scaled.webp",
  "/assets/FSSAI-siddhivinayak-certificate_page-0001-scaled.webp",
  "/assets/MSME-Udyam-Registration-Certificate_page-0001-scaled.webp",
  "/assets/Registration-cum-Membership-Certificate_page-0001.webp",
  "/assets/Registration-cum-Membership-Certificate-1_page-0001.webp"
];

export const galleryImages = [
  { src: "/assets/cengiz-ozarpat-WD5DErY3zWM-unsplash.webp", label: "Grapes" },
  { src: "/assets/nathalie-jolie-IBekPHDDFxQ-unsplash.webp", label: "Pomegranate" },
  { src: "/assets/krasimira-H-eN3BIHo3c-unsplash.webp", label: "Banana" },
  { src: "/assets/endless-day-of-summer-JgXIo5g_IAc-unsplash.webp", label: "Watermelon" },
  { src: "/assets/towfiqu-barbhuiya-BQqNSRPWcRA-unsplash.webp", label: "Garlic" },
  { src: "/assets/jeff-siepman-hnM2YmTeNAs-unsplash.webp", label: "Onion" },
  { src: "/assets/ajai-s-z7YIxZRhxzk-unsplash.webp", label: "Green chilli" },
  { src: "/assets/tamanna-rumee-RoGdv1kk5XM-unsplash.webp", label: "Turmeric" },
  { src: "/assets/md-nazmul-islam-nayeem-2FxTnDcMLjs-unsplash.webp", label: "Red chilli" },
  { src: "/assets/basata-coffee-03OM-Tv7_bY-unsplash.webp", label: "Coriander seed" },
  { src: "/assets/nadeykina-evgeniya-epeLqDQh2PE-unsplash.webp", label: "Blueberry" },
  { src: "/assets/umesh-soni-CfryyqgO9zc-unsplash-1.webp", label: "Cumin seed" }
];
