"use client";

import Image from "next/image";
import { Images } from "lucide-react";
import { galleryImages, productCards } from "@/data/site";
import { useLanguage } from "@/components/LanguageProvider";

const gallerySlugByLabel: Record<string, string> = {
  Coconut: "Coconut",
  "Green Chilli": "green-chilli",
  "Red chilli": "red-chilli"
  // Grapes: "grapes",
  // Pomegranate: "pomegranate",
  // Banana: "banana",
  // Watermelon: "watermelon",
  // Garlic: "garlic",
  // Onion: "onion",
  // "Green chilli": "green-chilli",
  // Turmeric: "turmeric",
  // "Coriander seed": "coriander-seed",
  // Blueberry: "blueberry",
  // "Cumin seed": "cumin-seed"
};

export default function GalleryPage() {
  const { t, productText } = useLanguage();

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.18em] text-tealAccent">
            <Images className="h-5 w-5" />
            {t("nav.gallery")}
          </p>
          <h1 className="serif-title">{t("gallery.title")}</h1>
          <p className="mt-6 text-lg leading-8 text-bodyText">{t("gallery.subtitle")}</p>
        </div>
        <div className="grid auto-rows-[240px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image, index) => {
            const slug = gallerySlugByLabel[image.label];
            const product = productCards.find((item) => item.slug === slug);
            const caption = product ? productText(slug, product).title : image.label;

            return (
              <figure
                key={image.src}
                className={`group relative overflow-hidden rounded-[8px] bg-peach ${
                  index === 0 || index === 7 ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <Image
                  src={image.src}
                  alt={caption}
                  fill
                  loading="eager"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-sm font-bold text-white">
                  {caption}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
