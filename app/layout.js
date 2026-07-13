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

const TITLE = "Rohan Karmacharya — Backend Developer";
const DESCRIPTION = "Portfolio of Rohan Karmacharya, a backend developer building scalable systems with Go, Node.js and TypeScript — clean architecture, RBAC, and AI-integrated APIs.";

export const metadata = {
  metadataBase: new URL("https://my-portfolio-two-sigma-z37cyvf5yz.vercel.app"),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
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
