import { Directory } from "@/components/directory";
import { directory, site } from "@/content/site";

export default function Home() {
  // The header and footer span the full frame; the intro and list stay in a
  // narrower column on the left.
  return (
    <main className="flex w-full max-w-[600px] flex-1 flex-col justify-center">
      <p
        className="mb-8 max-w-[520px] text-[17px] leading-relaxed text-muted animate-fade-in motion-reduce:animate-none"
        style={{ animationDelay: "80ms" }}
      >
        {site.intro}
      </p>
      <Directory links={directory} />
    </main>
  );
}
