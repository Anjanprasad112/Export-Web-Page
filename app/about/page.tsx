"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  BadgeCheck,
  Globe2,
  Handshake,
  Leaf,
  PackageCheck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { assets } from "@/data/site";
import { useLanguage } from "@/components/LanguageProvider";

export default function AboutPage() {
  const { t } = useLanguage();

  const missionCards = [
    {
      icon: Leaf,
      title: "about.mission.card1.title",
      text: "about.mission.card1.text",
    },
    {
      icon: PackageCheck,
      title: "about.mission.card2.title",
      text: "about.mission.card2.text",
    },
    {
      icon: ShieldCheck,
      title: "about.mission.card3.title",
      text: "about.mission.card3.text",
    },
  ];

  const partners = [
    {
      image: assets.partner1,
      role: "about.partners.person1.role",
      name: "about.partners.person1.name",
      text: "about.partners.person1.text",
      alt: "Vaishak Prabhakar",
    },
    {
      image: assets.partner2,
      role: "about.partners.person2.role",
      name: "about.partners.person2.name",
      text: "about.partners.person2.text",
      alt: "Bharath S Kashyap",
    },
  ];

  return (
    <>
      {/* Vision */}
      <section className="relative isolate overflow-hidden bg-[#edf3ee] py-20 sm:py-24 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        >
          <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-tealAccent/10 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#f7b267]/20 blur-3xl" />
        </div>

        <div className="section-shell relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-extrabold uppercase tracking-[0.18em] text-tealAccent shadow-sm">
                {t("nav.about")}
              </p>

              <h1 className="mt-6 font-serif text-5xl font-semibold leading-tight tracking-tight text-ink md:text-6xl">
                {t("about.vision.title")}
              </h1>

              <div className="mt-6 h-1 w-20 rounded-full bg-tealAccent" />

              <p className="mt-8 max-w-xl text-lg leading-8 text-ink/75">
                {t("about.vision.subtitle")}
              </p>
            </div>

            <div className="relative rounded-[2rem] border border-[#dbe5dc] bg-white p-7 shadow-[0_24px_70px_rgba(24,64,54,0.12)] sm:p-9 lg:p-10">
              <div className="absolute -top-5 right-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-tealAccent text-white shadow-lg shadow-tealAccent/25">
                <Globe2 className="h-6 w-6" />
              </div>

              <p className="pt-8 text-2xl font-bold leading-snug text-ink md:text-3xl">
                {t("about.vision.heading")}
              </p>

              <p className="mt-6 text-base leading-8 text-bodyText">
                {t("about.vision.text")}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-[#edf3ee] p-5">
                  <Sparkles className="mb-3 h-6 w-6 text-tealAccent" />
                  <p className="text-sm font-bold text-ink">
                    {t("about.vision.point1")}
                  </p>
                </div>

                <div className="rounded-2xl bg-[#edf3ee] p-5">
                  <BadgeCheck className="mb-3 h-6 w-6 text-tealAccent" />
                  <p className="text-sm font-bold text-ink">
                    {t("about.vision.point2")}
                  </p>
                </div>

                <div className="rounded-2xl bg-[#edf3ee] p-5">
                  <Handshake className="mb-3 h-6 w-6 text-tealAccent" />
                  <p className="text-sm font-bold text-ink">
                    {t("about.vision.point3")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex rounded-full bg-tealAccent/10 px-4 py-2 text-sm font-extrabold uppercase tracking-[0.18em] text-tealAccent">
              {t("about.mission.label")}
            </p>

            <h2 className="mt-5 font-serif text-4xl font-semibold tracking-tight text-ink md:text-5xl">
              {t("about.mission.title")}
            </h2>

            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-tealAccent" />

            <p className="mt-6 text-base leading-8 text-ink/75 md:text-lg">
              {t("about.mission.text")}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {missionCards.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="group flex h-full flex-col rounded-3xl border border-[#dbe5dc] border-t-[5px] border-t-tealAccent bg-white p-7 shadow-[0_18px_45px_rgba(24,64,54,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-tealAccent/30 hover:shadow-[0_24px_70px_rgba(24,64,54,0.14)]"
              >
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-tealAccent text-white shadow-lg shadow-tealAccent/20 transition duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-extrabold tracking-tight text-ink">
                  {t(title)}
                </h3>

                <p className="mt-4 text-sm leading-7 text-bodyText">
                  {t(text)}
                </p>

                <div className="mt-auto pt-7">
                  <div className="h-px w-full bg-[#dbe5dc]" />
                  <div className="mt-5 h-2 w-16 rounded-full bg-tealAccent/15 transition-all duration-300 group-hover:w-24 group-hover:bg-tealAccent/30" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="relative isolate overflow-hidden bg-navyFooter py-20 text-white sm:py-24 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        >
          <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-tealAccent/20 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="section-shell relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-extrabold uppercase tracking-[0.18em] text-[#c7d8cc]">
              {t("about.partners.label")}
            </p>

            <h2 className="mt-5 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
              {t("about.partners.title")}
            </h2>

            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-tealAccent" />

            <p className="mt-6 text-base leading-8 text-white/70 md:text-lg">
              {t("about.partners.subtitle")}
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {partners.map((partner) => (
              <article
                key={partner.name}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-tealAccent/40"
              >
                <div className="grid md:grid-cols-[0.85fr_1.15fr]">
                  <div className="flex items-center justify-center bg-[#edf3ee] p-6 md:min-h-[520px]">
                    <div className="relative aspect-[3/4] w-full max-w-[300px] overflow-hidden rounded-3xl border border-white/40 bg-white shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
                      <Image
                        src={partner.image}
                        alt={partner.alt}
                        fill
                        sizes="(min-width: 1024px) 300px, 80vw"
                        className="object-cover object-center"
                        priority={false}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col justify-center p-7 sm:p-9">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-tealAccent text-white shadow-lg shadow-tealAccent/20">
                      <Handshake className="h-5 w-5" />
                    </div>

                    <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#c7d8cc]">
                      {t(partner.role)}
                    </p>

                    <h3 className="mt-4 font-serif text-3xl font-semibold leading-tight">
                      {t(partner.name)}
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-white/75">
                      {t(partner.text)}
                    </p>

                    <div className="mt-8 h-px w-full bg-white/10" />

                    <div className="mt-6 flex items-center gap-3 text-sm font-bold text-tealAccent">
                      <span>{t("about.partners.tagline")}</span>
                      <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}