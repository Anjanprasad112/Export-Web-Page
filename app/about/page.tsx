"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { assets } from "@/data/site";
import { useLanguage } from "@/components/LanguageProvider";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="bg-white py-20 md:py-28">
        <div className="section-shell grid gap-12 md:grid-cols-[0.8fr_1.3fr]">
          <div>
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-tealAccent">{t("nav.about")}</p>
            <h1 className="serif-title">{t("about.title")}</h1>
          </div>
          <div className="rounded-[8px] border border-[#dbe5dc] bg-[#f8faf6] p-8 md:p-10">
            <div className="mb-8 h-px w-24 bg-tealAccent" />
            <div className="wp-prose max-w-3xl text-base">
              <p>{t("about.intro1")}</p>
              <p>{t("about.intro2")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#edf3ee] py-20">
        <div className="section-shell grid gap-12 md:grid-cols-[0.8fr_1.3fr]">
          <h2 className="font-serif text-4xl font-semibold text-ink">{t("about.goalTitle")}</h2>
          <div className="wp-prose max-w-3xl text-base">
            <p>{t("about.goal1")}</p>
            <p>{t("about.goal2")}</p>
            <p>{t("about.goal3")}</p>
            <Quote className="mt-8 h-10 w-10 fill-tealAccent text-tealAccent" />
          </div>
        </div>
      </section>

      <section className="bg-navyFooter py-20 text-white md:py-28">
        <div className="section-shell">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
            <div className="overflow-hidden rounded-[8px] bg-white">
              <Image src={assets.founder} alt="Director Mr.Piyush Arunkumar Pandey" width={819} height={1024} className="w-full" />
            </div>
            <article>
              <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-[#c7d8cc]">{t("about.founderTitle")}</p>
              <h2 className="mb-8 font-serif text-4xl font-semibold">{t("about.founderName")}</h2>
              <p className="max-w-xl font-medium leading-8 text-white/80">{t("about.founderText")}</p>
            </article>
          </div>

          <div className="mt-20 grid items-center gap-12 md:mt-28 md:grid-cols-2 md:gap-20">
            <article className="order-2 md:order-1">
              <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-[#c7d8cc]">{t("about.cofounderTitle")}</p>
              <h2 className="mb-8 font-serif text-4xl font-semibold">{t("about.cofounderName")}</h2>
              <p className="max-w-xl font-medium leading-8 text-white/80">{t("about.cofounderText")}</p>
            </article>
            <div className="order-1 overflow-hidden rounded-[8px] bg-white md:order-2">
              <Image src={assets.cofounder} alt="Director Mr. Yash Ganesh Parab" width={937} height={1024} className="w-full" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
