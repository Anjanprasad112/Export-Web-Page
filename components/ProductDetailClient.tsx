"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { contact, type ProductCard } from "@/data/site";
import { useLanguage } from "@/components/LanguageProvider";

export function ProductDetailClient({ product }: { product: ProductCard }) {
  const { t, productText } = useLanguage();
  const copy = productText(product.slug, product);

  return (
    <>
      <section
        className="relative flex min-h-[360px] items-center justify-center bg-cover bg-center text-center text-white md:min-h-[520px]"
        style={{ backgroundImage: `url(${product.detailHero})` }}
      >
        <div className="absolute inset-0 bg-[#10211e]/65" />
        <div className="relative z-10 px-6">
          <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.22em] text-white/80">{t("detail.kicker")}</p>
          <h1 className="font-serif text-5xl font-semibold md:text-7xl">{copy.title}</h1>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="section-shell grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[8px] bg-peach">
            <Image src={product.detailImage} alt={copy.title} fill sizes="(min-width: 768px) 50vw, 90vw" className="object-cover" />
          </div>
          <article>
            <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.2em] text-tealAccent">{t("detail.kicker")}</p>
            <h2 className="mb-7 font-serif text-4xl font-semibold text-ink md:text-5xl">{copy.title}</h2>
            <p className="mb-8 text-lg font-medium leading-8 text-bodyText">{copy.desc}</p>
            <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="orange-button gap-2">
              <MessageCircle className="h-5 w-5" />
              {t("common.whatsapp")}
            </a>
          </article>
        </div>
      </section>

      <section className="bg-peach py-16">
        <div className="section-shell flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-ink">{t("common.exploreProducts")}</h2>
            <p className="mt-3 max-w-xl text-bodyText">{t("common.exploreProductsText")}</p>
          </div>
          <Link href="/product" className="orange-button">
            {t("common.backProducts")}
          </Link>
        </div>
      </section>
    </>
  );
}
