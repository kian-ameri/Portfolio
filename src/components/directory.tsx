import Link from "next/link";
import type { DirectoryLink } from "@/content/site";
import styles from "./directory.module.css";

// The home page's list of destinations. Rows fade in one after another.
export function Directory({ links }: { links: DirectoryLink[] }) {
  return (
    <nav aria-label="Site directory">
      <ul className={`${styles.list} border-t border-line`}>
        {links.map((link, i) => {
          const content = (
            <>
              <span className={styles.number} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={styles.label}>{link.label}</span>
              <span className={styles.arrow} aria-hidden="true">
                {link.external ? "↗" : "→"}
              </span>
              {link.external && <span className="sr-only">(opens in a new tab)</span>}
            </>
          );
          const className = `${styles.row} animate-fade-in motion-reduce:animate-none`;
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
