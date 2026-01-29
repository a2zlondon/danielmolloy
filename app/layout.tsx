import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Daniel Molloy | Fractional CTO & Tech Leader",
    template: "%s | Daniel Molloy",
  },
  description: "I build companies by turning complexity into clarity. Fractional CTO services for founders and startups.",
  keywords: ["fractional CTO", "CTO as a service", "tech leader", "startup advisor", "technical founder"],
  authors: [{ name: "Daniel Molloy" }],
  creator: "Daniel Molloy",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://danielmolloy.com",
    siteName: "Daniel Molloy",
    title: "Daniel Molloy | Fractional CTO & Tech Leader",
    description: "I build companies by turning complexity into clarity. Fractional CTO services for founders and startups.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Molloy | Fractional CTO & Tech Leader",
    description: "I build companies by turning complexity into clarity. Fractional CTO services for founders and startups.",
  },
  metadataBase: new URL("https://danielmolloy.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
