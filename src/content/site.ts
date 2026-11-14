// Site-wide content. Edit the text and links here; the pages read from this file.

export const site = {
  name: "Kian Ameri",
  intro: "Student interested in computer science and electrical engineering.",
};

export type DirectoryLink = {
  label: string;
  href: string;
  // Opens in a new tab and shows ↗ instead of →.
  external?: boolean;
};

export const directory: DirectoryLink[] = [
  // Hidden until these pages and details exist. Uncomment to bring them back.
  // { label: "About", href: "/about" },
  // { label: "Résumé", href: "/resume.pdf", external: true }, // add public/resume.pdf first
  // { label: "Projects", href: "/projects" },
  { label: "GitHub", href: "https://github.com/kian-ameri", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kian-ameri", external: true },
  // { label: "Email", href: "mailto:you@example.com" }, // replace with your address
];
