import { Outfit, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"], weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
});

export const metadata = {
  title: "Rohan Karmacharya — Backend Developer",
  description: "Portfolio of Rohan Karmacharya, a backend developer building scalable systems with Go, Node.js and TypeScript — clean architecture, RBAC, and AI-integrated APIs.",
};

const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || 'dark';
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
        className={`${outfit.className} ${jetbrainsMono.variable} antialiased leading-8
        overflow-x-hidden bg-bg text-fg transition-colors duration-300`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
