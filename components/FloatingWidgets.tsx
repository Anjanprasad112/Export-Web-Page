"use client";

import { MessageCircle } from "lucide-react";
import { contact } from "@/data/site";
import { languages } from "@/data/i18n";
import { useLanguage } from "@/components/LanguageProvider";

export function FloatingWidgets() {
  const { language } = useLanguage();
  const active = languages.find((item) => item.code === language) || languages[0];

  return (
    <>
      <div className="fixed bottom-5 left-4 z-50 hidden items-center gap-2 rounded-[6px] bg-white px-3 py-2 text-sm font-bold text-[#111827] shadow-soft sm:flex">
        <span className="text-xs uppercase text-tealAccent">{active.short}</span>
        <span>{active.native}</span>
        <span className="text-xs">^</span>
      </div>
      <a
        href={contact.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#24d366] text-white shadow-soft transition hover:scale-105 md:h-14 md:w-14"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </>
  );
}
