import type { Metadata } from "next";
import { Directory } from "@/components/directory";

export const metadata: Metadata = {
  title: "Page not found",
};

// Shown for any address that doesn't exist, styled like the home page.
export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col justify-center">
      <p
        className="mb-8 max-w-[520px] text-[17px] leading-relaxed text-muted animate-fade-in motion-reduce:animate-none"
        style={{ animationDelay: "80ms" }}
      >
        This page doesn’t exist yet.
      </p>
      <Directory links={[{ label: "Home", href: "/" }]} />
    </main>
  );
}
