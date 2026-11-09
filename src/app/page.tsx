import { Directory } from "@/components/directory";
import { directory, site } from "@/content/site";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col justify-center">
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
