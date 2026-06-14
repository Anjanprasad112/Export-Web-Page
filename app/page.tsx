"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  CheckCircle2,
  ExternalLink,
  Globe2,
  HandCoins,
  CalendarCheck,
  FileCheck2,
  PackageCheck,
  Truck, 
  UserRoundCheck,
  Route,
  Network
} from "lucide-react";
import { assets, contact, productCards } from "@/data/site";
import { useLanguage } from "@/components/LanguageProvider";

const strengths = [
  { icon: Truck, title: "strength.trusted.title", text: "strength.trusted.text" },
  { icon: Route, title: "strength.shipping.title", text: "strength.shipping.text" },
  { icon: UserRoundCheck, title: "strength.quality.title", text: "strength.quality.text" },
  { icon: Network, title: "strength.support.title", text: "strength.support.text" }
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
  const { t, productText } = useLanguage();
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

    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-tealAccent/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#f7b267]/20 blur-3xl" />

      <div className="section-shell relative">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="inline-flex rounded-full bg-tealAccent/10 px-4 py-2 text-sm font-extrabold uppercase tracking-[0.18em] text-tealAccent">
              {t("nav.products")}
            </p>

            <h2 className="mt-5 font-serif text-4xl font-semibold tracking-tight text-ink md:text-5xl">
              {t("home.productsTitle")}
            </h2>

            <div className="mt-5 h-1 w-20 rounded-full bg-tealAccent" />
          </div>

          <p className="max-w-xl text-base leading-8 text-bodyText md:text-lg">
            {t("home.productsSubtitle")}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => {
            const copy = productText(product.slug, product);

            return (
              <Link
                href={`/${product.slug}`}
                key={product.slug}
                className="group relative overflow-hidden rounded-3xl border border-[#dbe5dc] bg-white shadow-[0_18px_45px_rgba(24,64,54,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-tealAccent/30 hover:shadow-[0_24px_70px_rgba(24,64,54,0.14)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#edf3ee]">
                  <Image
                    src={product.image}
                    alt={copy.title}
                    fill
                    sizes="(min-width: 1024px) 30vw, 90vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                </div>

                <div className="relative p-7">
                  <div className="absolute inset-x-7 top-0 h-1 rounded-full bg-tealAccent opacity-80" />

                  <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-ink">
                    {copy.title}
                  </h3>

                  <p className="mt-4 min-h-[72px] text-sm leading-6 text-bodyText line-clamp-3">
                    {copy.desc}
                  </p>

                  <div className="mt-7 h-px w-full bg-[#dbe5dc]" />

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-sm font-bold text-tealAccent">
                      {t("common.readMore")}
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-tealAccent/10 text-tealAccent transition duration-300 group-hover:bg-tealAccent group-hover:text-white">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>

    <section
      className="relative isolate bg-[#edf3ee] py-16 sm:py-20 lg:py-24"
      aria-labelledby="why-choose-us-title"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-tealAccent/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#f7b267]/20 blur-3xl" />
      </div>

      <div className="section-shell relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="why-choose-us-title"
            className="font-serif text-4xl font-semibold tracking-tight text-ink md:text-5xl"
          >
            {t("why.title")}
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-tealAccent" />

          <p className="mt-6 text-base leading-8 text-ink/75 md:text-lg">
            {t("why.subtitle")}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseItems.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group flex h-full flex-col rounded-3xl border border-[#dbe5dc] border-t-[5px] border-t-tealAccent bg-white p-7 shadow-[0_18px_45px_rgba(24,64,54,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-tealAccent/30 hover:shadow-[0_24px_70px_rgba(24,64,54,0.14)]"
            >
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-tealAccent text-white shadow-lg shadow-tealAccent/20 transition duration-300 group-hover:scale-110">
                <Icon aria-hidden="true" className="h-6 w-6" />
              </div>

              <h3 className="text-xl font-extrabold tracking-tight text-ink">
                {t(title)}
              </h3>

              <p className="mt-4 min-h-[72px] text-sm leading-6 text-bodyText line-clamp-3">
                {t(description)}
              </p>

              <div className="mt-auto pt-7">
                <div className="h-px w-full bg-[#dbe5dc]" />

                <div className="mt-5 h-2 w-16 rounded-full bg-tealAccent/15 transition-all duration-300 group-hover:w-24 group-hover:bg-tealAccent/30" />
              </div>
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

    <section className="relative isolate bg-[#edf3ee] py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-tealAccent/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#f7b267]/20 blur-3xl" />
      </div>

      <div className="section-shell relative z-10">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="font-serif text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            {t("home.strengthsTitle")}
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-tealAccent" />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {strengths.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group flex h-full flex-col rounded-3xl border border-[#dbe5dc] border-t-[5px] border-t-tealAccent bg-white p-7 shadow-[0_18px_45px_rgba(24,64,54,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-tealAccent/30 hover:shadow-[0_24px_70px_rgba(24,64,54,0.14)] sm:p-8"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-tealAccent text-white shadow-lg shadow-tealAccent/20 transition duration-300 group-hover:scale-110">
                  <Icon aria-hidden="true" className="h-7 w-7" />
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold tracking-tight text-ink">
                    {t(title)}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-bodyText sm:text-base">
                    {t(text)}
                  </p>
                </div>
              </div>

              <div className="mt-auto pt-7">
                <div className="h-px w-full bg-[#dbe5dc]" />

                <div className="mt-5 h-2 w-16 rounded-full bg-tealAccent/15 transition-all duration-300 group-hover:w-24 group-hover:bg-tealAccent/30" />
              </div>
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
            <iframe title="Blenova Exports map" src={contact.mapHome} />
          </div>
        </div>
      </section>
    </>
  );
}
