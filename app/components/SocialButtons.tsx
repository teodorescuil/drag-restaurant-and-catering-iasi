import Image from "next/image";

type SocialLinkProps = {
  href: string;
  label: string;
  iconPath: string; // ex: "/icons/facebook.svg"
};

function SocialLink({ href, label, iconPath }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="
        inline-flex items-center justify-center w-10 h-10 rounded-full
        bg-white/10 text-white hover:bg-gold/90 transition-colors duration-200
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gold
      "
    >
      <Image
        src={iconPath}
        alt=""
        aria-hidden="true"
        width={16}
        height={16}
        className="w-4 h-4"
      />
      <span className="sr-only">{label}</span>
    </a>
  );
}

export default function SocialButtons() {
  return (
    <div className="flex gap-4 justify-center md:justify-start">
      <SocialLink
        href="https://www.facebook.com/dragcatering"
        label="Deschide pagina oficială Drag Catering pe Facebook"
        iconPath="/icons/facebook.svg"
      />
      <SocialLink
        href="https://www.instagram.com/dragcatering/"
        label="Deschide pagina oficială Drag Catering pe Instagram"
        iconPath="/icons/instagram.svg"
      />
    </div>
  );
}
