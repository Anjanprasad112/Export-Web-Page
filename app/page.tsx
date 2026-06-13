"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  CheckCircle2,
  ExternalLink,
  Globe2,
  Headphones,
  Home,
  MapPin,
  ShieldCheck,
  HandCoins,
  CalendarCheck,
  FileCheck2,
  PackageCheck
} from "lucide-react";
import { assets, contact, productCards } from "@/data/site";
import { useLanguage } from "@/components/LanguageProvider";

const strengths = [
  { icon: Home, title: "strength.trusted.title", text: "strength.trusted.text" },
  { icon: MapPin, title: "strength.shipping.title", text: "strength.shipping.text" },
  { icon: ShieldCheck, title: "strength.quality.title", text: "strength.quality.text" },
  { icon: Headphones, title: "strength.support.title", text: "strength.support.text" }
];

const whyChooseItems = [
  {
    icon: Globe2,
    title: "why.trusted.title",
    description: "why.trusted.description",
  },
  {
    icon: BadgeCheck,
    title: "why.quality.title",
    description: "why.quality.description",
  },
  {
    icon: HandCoins,
    title: "why.pricing.title",
    description: "why.pricing.description",
  },
  {
    icon: CalendarCheck,
    title: "why.supply.title",
    description: "why.supply.description",
  },
  {
    icon: FileCheck2,
    title: "why.compliance.title",
    description: "why.compliance.description",
  },
  {
    icon: PackageCheck,
    title: "why.logistics.title",
    description: "why.logistics.description",
  },
];

export default function HomePage() {
  const { language, setLanguage, t, productText } = useLanguage();
  const featured = productCards.slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden bg-[#edf3ee]">
        <div className="section-shell grid min-h-[680px] items-center gap-12 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-20">
          <div className="relative z-10">
            <p className="mb-5 inline-flex items-center gap-2 rounded-[6px] bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-tealAccent shadow-sm">
              <Globe2 className="h-4 w-4" />
              {t("home.kicker")}
            </p>
            <h1 className="max-w-3xl font-serif text-5xl font-semibold leading-[1.03] text-ink md:text-7xl">
              {t("home.title")}
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-bodyText md:text-xl">
              {t("home.subtitle")}
            </p>

            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              {["home.feature1", "home.feature2", "home.feature3"].map((key) => (
                <div key={key} className="flex items-center gap-2 rounded-[6px] bg-white/80 px-4 py-3 text-sm font-bold text-ink">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-tealAccent" />
                  <span>{t(key)}</span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/product" className="orange-button">
                {t("nav.products")}
              </Link>
              <Link href="/contact" className="outline-button">
                {t("nav.contact")}
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[8px] shadow-soft">
              <Image src={assets.homeHero} alt="Fresh blueberries" fill priority sizes="(min-width: 768px) 45vw, 90vw" className="object-cover" />
            </div>
            {/* <div className="absolute -bottom-8 -left-6 max-w-[250px] rounded-[8px] bg-white p-5 shadow-soft">
              <p className="text-4xl font-black text-tealAccent">17+</p>
              <p className="mt-2 text-sm font-bold text-ink">{t("home.productsSubtitle")}</p>
            </div> */}
          </div>
        </div>
      </section>

      {/* <section className="bg-white py-12">
        <div className="section-shell">
          <div className="grid gap-8 rounded-[8px] border border-[#dbe5dc] bg-[#f8faf6] p-6 md:grid-cols-[0.85fr_1.4fr] md:p-8">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.16em] text-tealAccent">
                <Languages className="h-5 w-5" />
                {t("home.languageTitle")}
              </p>
              <p className="text-sm leading-6 text-bodyText">{t("home.languageSubtitle")}</p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
              {languages.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  aria-label={`Switch site language to ${item.label}`}
                  onClick={() => setLanguage(item.code)}
                  className={`rounded-[6px] border px-3 py-4 text-left transition ${
                    language === item.code
                      ? "border-tealAccent bg-tealAccent text-white"
                      : "border-[#d8e1d8] bg-white text-ink hover:border-tealAccent"
                  }`}
                >
                  <span className="block text-xs font-extrabold uppercase opacity-80">{item.short}</span>
                  <span className="mt-1 block text-sm font-bold">{item.native}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      <section className="bg-white py-20">
        <div className="section-shell">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-tealAccent">{t("nav.products")}</p>
              <h2 className="mt-3 font-serif text-4xl font-semibold text-ink md:text-5xl">{t("home.productsTitle")}</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-bodyText">{t("home.productsSubtitle")}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product) => {
              const copy = productText(product.slug, product);
              return (
                <Link href={`/${product.slug}`} key={product.slug} className="group overflow-hidden rounded-[8px] bg-[#edf3ee] shadow-sm">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={product.image} alt={copy.title} fill sizes="(min-width: 1024px) 30vw, 90vw" className="object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-ink">{copy.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-bodyText">{copy.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="bg-[#edf3ee] py-16 sm:py-20 lg:py-24"
        aria-labelledby="why-choose-us-title"
      >
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="why-choose-us-title"
              className="font-serif text-4xl font-semibold tracking-tight text-ink md:text-5xl"
            >
              {t("why.title")}
            </h2>

            <p className="mt-5 text-base leading-8 text-ink/75 md:text-lg">
              {t("why.subtitle")}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseItems.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="group h-full rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#edf3ee] transition duration-300 group-hover:bg-tealAccent/10">
                  <Icon
                    aria-hidden="true"
                    className="h-6 w-6 text-tealAccent"
                  />
                </div>

                <h3 className="text-lg font-bold text-ink">
                  {t(title)}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-ink/70 line-clamp-3">
                  {t(description)}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link href="/about" className="orange-button">
              {t("common.readMore")}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell">
          <h2 className="mb-10 text-center font-serif text-4xl font-semibold text-ink">{t("home.strengthsTitle")}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-[8px] border border-[#dbe5dc] bg-[#f8faf6] p-7">
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-[6px] bg-tealAccent text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mb-3 text-lg font-extrabold text-ink">{t(title)}</h3>
                <p className="text-sm leading-6">{t(text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="bg-tealAccent py-7 text-white">
        <div className="section-shell grid gap-6 md:grid-cols-3">
          {stats.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center justify-center gap-5 border-white/30 md:border-r last:md:border-r-0">
              <span className="flex h-10 w-10 items-center justify-center rounded-[6px] bg-white text-tealAccent">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-extrabold uppercase">{t(label)}</span>
            </div>
          ))}
        </div>
      </section> */}
      <section className="relative bg-cover bg-center py-20 text-white" style={{ backgroundImage: `url(${assets.storyBg})` }}>
        <div className="absolute inset-0 bg-[#10211e]/80" />
        <div className="section-shell relative z-10 grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <h2 className="font-serif text-4xl font-semibold md:text-5xl">{t("home.storyTitle")}</h2>
          <div className="grid gap-6 text-base font-medium leading-8 text-white/85 md:grid-cols-3">
            <p>{t("home.storyP1")}</p>
            <p>{t("home.storyP2")}</p>
            <p>{t("home.storyP3")}</p>
          </div>
        </div>
      </section>

      <section className="bg-[#dfe8e1] py-10 md:py-14">
        <div className="section-shell grid items-stretch gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="rounded-[8px] bg-white p-7 shadow-sm md:p-9">
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.16em] text-tealAccent">
              {t("contact.title")}
            </p>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-ink">{t("contact.mapTitle")}</h2>
            <p className="mt-4 leading-7 text-bodyText">{t("contact.mapText")}</p>
            <p className="mt-5 text-sm font-bold leading-6 text-ink">{contact.address}</p>
            <a href={contact.mapsUrl} target="_blank" rel="noreferrer" className="orange-button mt-7">
              {t("contact.openMap")}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <div className="map-frame min-h-[320px] overflow-hidden rounded-[8px] border border-[#cbd8cf] bg-slate-200 md:min-h-[420px]">
            <iframe title="Siddhivinayak Foreign Exports map" src={contact.mapHome} />
          </div>
        </div>
      </section>
    </>
  );
}
