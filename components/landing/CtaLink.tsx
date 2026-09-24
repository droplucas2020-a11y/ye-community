import { ArrowUpRight } from "lucide-react";

type CtaLinkProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  external?: boolean;
  ariaLabel?: string;
};

export function CtaLink({ children, className = "", href = "#inscricao", external = false, ariaLabel }: CtaLinkProps) {
  const shouldOpenExternal = external || /^https?:\/\//.test(href);

  return (
    <a href={href} aria-label={ariaLabel} target={shouldOpenExternal ? "_blank" : undefined} rel={shouldOpenExternal ? "noreferrer" : undefined}
      className={`group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#d9ff43] px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_0_32px_rgba(217,255,67,.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9ff43] focus-visible:ring-offset-4 focus-visible:ring-offset-black ${className}`}>
      <span>{children}</span>
      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}
