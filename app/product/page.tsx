"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { productCards } from "@/data/site";
import { useLanguage } from "@/components/LanguageProvider";

export default function ProductPage() {
  const { t, productText } = useLanguage();

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-tealAccent">{t("nav.products")}</p>
          <h1 className="serif-title">{t("products.title")}</h1>
          <p className="mt-6 text-lg leading-8 text-bodyText">{t("products.subtitle")}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productCards.map((product) => {
            const copy = productText(product.slug, product);
            return (
              <Link key={product.slug} href={`/${product.slug}`} className="group overflow-hidden rounded-[8px] border border-[#dbe5dc] bg-[#f8faf6]">
                <div className="relative aspect-[4/4.8] overflow-hidden bg-[#edf3ee]">
                  <Image
                    src={product.image}
                    alt={copy.title}
                    fill
                    loading="eager"
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-start justify-between gap-4 p-6">
                  <div>
                    <h2 className="text-2xl font-bold text-ink">{copy.title}</h2>
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-bodyText">{copy.desc}</p>
                  </div>
                  <ArrowUpRight className="h-6 w-6 shrink-0 text-tealAccent transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
