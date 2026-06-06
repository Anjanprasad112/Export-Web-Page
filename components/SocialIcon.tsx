import { Facebook, Instagram, Linkedin, MessageCircle, Youtube } from "lucide-react";

const icons = {
  Instagram,
  Whatsapp: MessageCircle,
  Facebook,
  Youtube,
  Linkedin
};

export function SocialIcon({ label }: { label: keyof typeof icons }) {
  const Icon = icons[label];
  return <Icon className="h-7 w-7" aria-hidden="true" />;
}
