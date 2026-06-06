"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe2, Menu, X } from "lucide-react";
import { assets, contact, navItems } from "@/data/site";
import { languages, type LanguageCode } from "@/data/i18n";
import { useLanguage } from "@/components/LanguageProvider";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/product" && pathname.startsWith("/products")) return true;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 border-b border-[#d8e1d8] bg-[#f8faf6]/95 backdrop-blur">
      <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 md:h-[92px] md:px-10">
        <Link href="/" aria-label="Siddhivinayak Foreign Exports home" className="shrink-0">
          <Image src={assets.logo} width={112} height={70} alt="Siddhivinayak Foreign Exports" priority className="h-auto w-24 md:w-28" />
        </Link>

        <nav className="hidden items-center gap-8 text-[14px] font-semibold md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition hover:text-orangeBrand ${
                isActive(pathname, item.href) ? "text-orangeBrand" : "text-[#19202a]"
              }`}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <label className="flex items-center gap-2 rounded-[6px] border border-[#ccd8cf] bg-white px-3 py-2 text-sm font-bold text-ink">
            <Globe2 className="h-4 w-4 text-tealAccent" />
            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value as LanguageCode)}
              className="bg-transparent outline-none"
              aria-label="Select language"
            >
              {languages.map((item) => (
                <option key={item.code} value={item.code}>
                  {item.short}
                </option>
              ))}
            </select>
          </label>
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="orange-button px-5 text-[12px] uppercase tracking-wide"
          >
            {t("common.chat")}
          </a>
        </div>

        <details className="group relative md:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-[6px] bg-tealAccent text-white [&::-webkit-details-marker]:hidden">
            <Menu className="h-6 w-6 group-open:hidden" />
            <X className="hidden h-6 w-6 group-open:block" />
          </summary>
          <div className="absolute right-0 top-14 w-72 bg-white p-4 shadow-soft">
            <nav className="flex flex-col gap-1 text-sm font-semibold">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-3 transition hover:bg-peach hover:text-orangeBrand ${
                    isActive(pathname, item.href) ? "text-orangeBrand" : "text-[#19202a]"
                  }`}
                >
                  {t(item.key)}
                </Link>
              ))}
              <div className="my-3 grid grid-cols-3 gap-2">
                {languages.map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => setLanguage(item.code)}
                    className={`rounded-[6px] border px-2 py-2 text-xs font-bold ${
                      language === item.code
                        ? "border-tealAccent bg-tealAccent text-white"
                        : "border-[#d8e1d8] bg-peach text-ink"
                    }`}
                  >
                    {item.short}
                  </button>
                ))}
              </div>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="orange-button mt-2 px-4 py-3 text-center text-xs uppercase"
              >
                {t("common.chat")}
              </a>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
