import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWidgets } from "@/components/FloatingWidgets";
import { LanguageProvider } from "@/components/LanguageProvider";

export const metadata: Metadata = {
  title: "Blenova Exports Private Limited",
  description: "Bengaluru-based fresh produce export company connecting local farms to global markets with a commitment to quality, sustainability, and customer satisfaction.",
  icons: {
    icon: "/assets/blenova-logo.png",
    apple: "/assets/blenova-logo.png",
    shortcut: "/assets/blenova-logo.png"
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingWidgets />
        </LanguageProvider>
      </body>
    </html>
  );
}
