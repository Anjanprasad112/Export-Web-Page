"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { assets, contact } from "@/data/site";
import { useLanguage } from "@/components/LanguageProvider";

const footerLinks = [
  { label: "Products", href: "/product" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Gallery", href: "/gallery" }
];

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-navyFooter text-[#d6dfed]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <div className="border-t border-white/15 pt-12">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.8fr_2fr] md:gap-16">
            <div>
              <Image src={assets.logo} width={210} height={130} alt="Blenova Exports" />
            </div>
            <div>
              <h2 className="mb-8 text-2xl font-extrabold text-white">{t("common.quickLinks")}</h2>
              <ul className="space-y-5 text-sm">
                {footerLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="transition hover:text-orangeBrand">
                      {t(item.href === "/product" ? "nav.products" : item.href === "/about" ? "nav.about" : item.href === "/contact" ? "nav.contact" : "nav.gallery")}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-8 text-2xl font-extrabold text-white">{t("common.getInTouch")}</h2>
              <div className="grid gap-7 text-sm leading-6 sm:grid-cols-2">
                <p className="flex gap-4 sm:col-span-2">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#ffb24a]" />
                  <span>{contact.address}</span>
                </p>
                <a href={`tel:${contact.phoneCompact}`} className="flex gap-4 transition hover:text-orangeBrand">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-[#ffb24a]" />
                  <span>{contact.phoneCompact}</span>
                </a>
                <a href={`mailto:${contact.email}`} className="flex min-w-0 gap-4 transition hover:text-orangeBrand">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-[#ffb24a]" />
                  <span className="break-all">{contact.email}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-14 border-t border-white/15 pt-10 text-sm text-white">
            {t("common.copyright")}
          </div>
        </div>
      </div>
    </footer>
  );
}
