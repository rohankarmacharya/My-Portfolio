import { Outfit, Ovo } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"],
  variable: "--font-ovo",
});

export const metadata = {
  title: "Rohan Karmacharya — Full-Stack Developer",
  description: "Portfolio of Rohan Karmacharya, a BSc.CSIT student and aspiring full-stack developer building polished web experiences with React, Next.js and Python.",
};

const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {THEME_INIT_SCRIPT}
        </Script>
      </head>
      <body
        className={`${outfit.className} ${ovo.variable} antialiased leading-8
        overflow-x-hidden bg-bg text-fg transition-colors duration-300`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
