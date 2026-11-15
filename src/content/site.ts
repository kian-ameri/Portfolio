// Site-wide content. Edit the text and links here; the pages read from this file.

export const site = {
  name: "Kian Ameri",
  intro: "I dont know what to put here yet, but I will figure it out eventually.",
};

export type DirectoryLink = {
  label: string;
  href: string;
  // Opens in a new tab and shows ↗ instead of →.
  external?: boolean;
};

export const directory: DirectoryLink[] = [
  { label: "About", href: "/about" },
  // TODO: add your résumé as public/resume.pdf.
  { label: "Résumé", href: "/resume.pdf", external: true },
  { label: "Projects", href: "/projects" },
  { label: "GitHub", href: "https://github.com/kian-ameri", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kian-ameri", external: true },
  // TODO: replace with your email address.
  { label: "Email", href: "mailto:you@example.com" },
];
