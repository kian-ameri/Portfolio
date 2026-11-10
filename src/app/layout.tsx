import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { site } from "@/content/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: site.name,
  description: "Projects, résumé and links.",
};

// Runs before the first paint so a saved light/dark choice never flashes.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t)document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

// Cached so the page can still be prerendered; refreshes with each deploy.
async function CurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full font-sans">
        <div className="mx-auto flex min-h-dvh w-full max-w-[720px] flex-col px-6">
          <header className="flex min-h-18 flex-none items-center justify-between animate-fade-in motion-reduce:animate-none">
            <Link href="/" className="text-[15px] font-medium">
              {site.name}
            </Link>
            <ThemeToggle />
          </header>
          {children}
          <footer className="flex flex-none flex-wrap justify-between gap-4 pt-6 pb-8 text-[13px] text-subtle">
            <span>
              {site.name}, <CurrentYear />
            </span>
          </footer>
        </div>
      </body>
    </html>
  );
}
