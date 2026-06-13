"use client";

import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { contact, socialLinks } from "@/data/site";
import { SocialIcon } from "@/components/SocialIcon";
import { useLanguage } from "@/components/LanguageProvider";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="bg-white py-20 md:py-28">
        <div className="section-shell grid gap-14 md:grid-cols-[0.95fr_1.05fr] md:gap-20">
          <div className="rounded-[8px] border border-[#dbe5dc] bg-[#f8faf6] p-7 md:p-10">
            <h1 className="serif-title mb-12">{t("contact.title")}</h1>

            <div className="space-y-10">
              <div className="flex gap-5">
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-tealAccent" />
                <div className="min-w-0">
                  <p className="mb-4 max-w-lg break-words text-base font-extrabold uppercase leading-7 tracking-[0.12em] text-ink">
                    {t("contact.company")}
                  </p>
                  <p className="max-w-xl text-base font-bold leading-7 text-[#263548]">{contact.address}</p>
                </div>
              </div>

              <div className="flex gap-5">
                <Phone className="mt-1 h-6 w-6 shrink-0 text-tealAccent" />
                <div className="min-w-0">
                  <p className="mb-3 text-base font-extrabold uppercase tracking-[0.18em] text-ink">{t("contact.call")}</p>
                  <a href={`tel:${contact.phoneCompact}`} className="text-lg font-extrabold text-[#263548]">
                    {contact.phoneCompact}
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <Mail className="mt-1 h-6 w-6 shrink-0 text-tealAccent" />
                <div className="min-w-0">
                  <p className="mb-3 text-base font-extrabold uppercase tracking-[0.18em] text-ink">{t("contact.email")}</p>
                  <a href={`mailto:${contact.email}`} className="break-all text-lg font-extrabold text-[#263548]">
                    {contact.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-[#dbe5dc] pt-8">
              <p className="mb-6 text-base font-extrabold uppercase tracking-[0.18em] text-ink">{t("contact.follow")}</p>
              <div className="flex flex-wrap gap-6 text-ink">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="transition hover:text-tealAccent"
                  >
                    <SocialIcon label={item.label as "Instagram" | "Whatsapp" | "Facebook" | "Youtube" | "Linkedin"} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[8px] border border-[#dbe5dc] bg-white p-7 shadow-soft md:p-10">
            <h2 className="mb-10 font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl">{t("contact.formTitle")}</h2>
            <form className="space-y-7">
              <label className="block text-base font-extrabold text-[#263548]">
                {t("contact.name")} <span className="text-tealAccent">*</span>
                <input
                  type="text"
                  placeholder={t("contact.namePlaceholder")}
                  className="mt-2 w-full rounded-[6px] border border-slate-300 bg-[#f8faf6] px-5 py-4 text-base font-normal outline-none transition focus:border-tealAccent"
                />
              </label>
              <label className="block text-base font-extrabold text-[#263548]">
                {t("contact.email")} <span className="text-tealAccent">*</span>
                <input
                  type="email"
                  placeholder={t("contact.emailPlaceholder")}
                  className="mt-2 w-full rounded-[6px] border border-slate-300 bg-[#f8faf6] px-5 py-4 text-base font-normal outline-none transition focus:border-tealAccent"
                />
              </label>
              <label className="block text-base font-extrabold text-[#263548]">
                {t("contact.phone")} <span className="text-tealAccent">*</span>
                <input
                  type="tel"
                  placeholder={t("contact.phonePlaceholder")}
                  className="mt-2 w-full rounded-[6px] border border-slate-300 bg-[#f8faf6] px-5 py-4 text-base font-normal outline-none transition focus:border-tealAccent"
                />
              </label>
              <label className="block text-base font-extrabold text-[#263548]">
                {t("contact.message")} <span className="text-tealAccent">*</span>
                <textarea
                  rows={6}
                  placeholder={t("contact.messagePlaceholder")}
                  className="mt-2 w-full rounded-[6px] border border-slate-300 bg-[#f8faf6] px-5 py-4 text-base font-normal outline-none transition focus:border-tealAccent"
                />
              </label>
              <button type="button" className="orange-button">
                {t("contact.submit")}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-[#dfe8e1] py-10 md:py-14">
        <div className="section-shell grid items-stretch gap-6 lg:grid-cols-[0.8fr_1.2fr]">
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
          <div className="map-frame min-h-[340px] overflow-hidden rounded-[8px] border border-[#cbd8cf] bg-slate-200 md:min-h-[480px]">
            <iframe title="Blenova Exports Foreign Export location" src={contact.mapContact} />
          </div>
        </div>
      </section>
    </>
  );
}
