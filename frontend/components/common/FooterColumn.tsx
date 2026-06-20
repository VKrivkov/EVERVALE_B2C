import Link from "next/link";
import { cn } from "@/lib/utils";

type FooterLink = {
  label: string;
  href: string;
};

type FooterColumnProps = {
  title: string;
  links: FooterLink[];
  className?: string;
};

function isExternal(href: string) {
  return /^(mailto:|tel:|https?:\/\/|sms:)/i.test(href);
}

export default function FooterColumn({
  title,
  links,
  className,
}: FooterColumnProps) {
  const linkClass =
    "inline-flex w-full justify-center text-center lg:w-auto lg:justify-start lg:text-left hover:text-pr_w transition";

  return (
    <div className={cn("flex flex-col gap-3 text-sm", className)}>
      <p className="text-pr_w/90 font-semibold">{title}</p>
      <ul className="flex flex-col gap-2 text-pr_w/70">
        {links.map((link) => (
          <li key={`${title}-${link.label}`}>
            {isExternal(link.href) ? (
              <a
                href={link.href}
                className={linkClass}
                target={
                  /^(https?:\/\/)/i.test(link.href) ? "_blank" : undefined
                }
                rel={
                  /^(https?:\/\/)/i.test(link.href)
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {link.label}
              </a>
            ) : (
              <Link href={link.href} className={linkClass}>
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
