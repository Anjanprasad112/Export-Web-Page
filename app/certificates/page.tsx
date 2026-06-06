"use client";

import Image from "next/image";
import { FileCheck2 } from "lucide-react";
import { assets, certificates } from "@/data/site";
import { useLanguage } from "@/components/LanguageProvider";

export default function CertificatesPage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative overflow-hidden bg-[#edf3ee] py-20 md:py-28">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-cover bg-center opacity-25 md:block" style={{ backgroundImage: `url(${assets.certificatesHero})` }} />
        <div className="section-shell relative z-10 max-w-4xl">
          <p className="mb-4 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.18em] text-tealAccent">
            <FileCheck2 className="h-5 w-5" />
            {t("nav.certificates")}
          </p>
          <h1 className="serif-title">{t("cert.title")}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-bodyText">{t("cert.subtitle")}</p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 sm:grid-cols-2 md:px-10 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <a
              href={certificate}
              key={certificate}
              target="_blank"
              rel="noreferrer"
              className="block overflow-hidden rounded-[8px] border border-[#dbe5dc] bg-[#f8faf6] p-3 transition hover:-translate-y-1 hover:shadow-soft"
            >
              <Image
                src={certificate}
                alt={`Certificate ${index + 1}`}
                width={900}
                height={1270}
                className="h-auto w-full rounded-[4px] object-contain"
              />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
