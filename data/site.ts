export const navItems = [
  { key: "nav.home", label: "Home", href: "/" },
  { key: "nav.about", label: "About", href: "/about" },
  { key: "nav.products", label: "Products", href: "/product" },
  { key: "nav.certificates", label: "Certificates", href: "/certificates" },
  { key: "nav.gallery", label: "Gallery", href: "/gallery" },
  { key: "nav.contact", label: "Contact", href: "/contact" }
];

export const contact = {
  company: "Blenova Exports Private Limited",
  address:
    "1136, 1st main road Yeswanthpur, Yeswanthpur 560022, Bengaluru, Karnataka, India",
  phone: "+91 9019295951",
  phoneCompact: "+91 9019295951",
  email: "blenovainfo@gmail.com",
  mapsUrl: "https://maps.app.goo.gl/2gCEeYefbchvxNHg6",
  mapHome: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.177617129455!2d77.55459347504187!3d13.024358587295907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d637133eb77%3A0x1a17c90a6c782ce1!2s1136%2C%201st%20Cross%20Rd%2C%20L%20N%20Colony%2C%20Yeswanthpur%2C%20Bengaluru%2C%20Karnataka%20560022!5e0!3m2!1sen!2sin!4v1781356304132!5m2!1sen!2sin",
  mapContact: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.177617129455!2d77.55459347504187!3d13.024358587295907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d637133eb77%3A0x1a17c90a6c782ce1!2s1136%2C%201st%20Cross%20Rd%2C%20L%20N%20Colony%2C%20Yeswanthpur%2C%20Bengaluru%2C%20Karnataka%20560022!5e0!3m2!1sen!2sin!4v1781356304132!5m2!1sen!2sin",
  whatsapp: "https://wa.me/+919740577146"
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
  logo: "/assets/blenova-logo.png",
  homeHero: "/assets/Coconut-image-2.jpg",
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
  proddesc?: string;
};

export const productCards: ProductCard[] = [
  {
    "slug": "coconut",
    "title": "Coconut",
    "image": "/assets/louis-hansel-WUMxEBWvE64-unsplash.webp",
    "detailHero": "/assets/louis-hansel-WUMxEBWvE64-unsplash.webp",
    "detailImage": "/assets/ibrahim-rifath-ps2U8yCmzSY-unsplash.webp",
    "desc": "Fresh, naturally grown coconuts sourced from India's finest farms.",
    "proddesc": "Premium-quality coconuts sourced from trusted farms, known for their freshness, high water content, and excellent shelf life."
  },
  {
    "slug": "green-chilli",
    "title": "Green Chilli",
    "image": "/assets/ajai-s-z7YIxZRhxzk-unsplash.webp",
    "detailHero": "/assets/ajai-s-z7YIxZRhxzk-unsplash.webp",
    "detailImage": "/assets/20250711_130618.webp",
    "desc": "Fresh green chillies known for their vibrant color and natural heat.",
    "proddesc": "Farm-fresh green chillies with natural pungency, vibrant color, and superior quality for culinary applications."
  },
  {
    "slug": "red-chilli",
    "title": "Red Chilli",
    "image": "/assets/bulbul-ahmed-AHLXuatgJB0-unsplash.webp",
    "detailHero": "/assets/bulbul-ahmed-AHLXuatgJB0-unsplash.webp",
    "detailImage": "/assets/bulbul-ahmed-ZzZwjg67uNQ-unsplash.webp",
    "desc": "Premium red chillies delivering rich color, flavor, and spice.",
    "proddesc": "Carefully selected red chillies offering vibrant color, rich flavor, and consistent heat for global markets."
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
