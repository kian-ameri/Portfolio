import Link from "next/link";
import type { DirectoryLink } from "@/content/site";

// The home page's list of destinations. Rows fade in one after another.
// Styles live in globals.css under "Home page directory".
export function Directory({ links }: { links: DirectoryLink[] }) {
  return (
    <nav aria-label="Site directory">
      <ul className="directory border-t border-line">
        {links.map((link, i) => {
          const content = (
            <>
              <span className="directory-number" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="directory-label">{link.label}</span>
              <span className="directory-arrow" aria-hidden="true">
                {link.external ? "↗" : "→"}
              </span>
              {link.external && <span className="sr-only">(opens in a new tab)</span>}
            </>
          );
          const className = "directory-row animate-fade-in motion-reduce:animate-none";
          const style = { animationDelay: `${160 + i * 45}ms` };

          return (
            <li key={link.href}>
              {link.href.startsWith("/") && !link.external ? (
                <Link href={link.href} className={className} style={style}>
                  {content}
                </Link>
              ) : (
                <a
                  href={link.href}
                  className={className}
                  style={style}
                  {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                >
                  {content}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
