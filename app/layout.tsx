import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { PersonAndServiceJsonLd } from "@/components/structured-data";
import { SITE_URL } from "@/lib/constants";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const GTM_ID = "GTM-T6CDFFRR";

const gtmScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`;

export const metadata: Metadata = {
  title: {
    default: "Daniel Molloy | Technical Due Diligence",
    template: "%s | Daniel Molloy",
  },
  description:
    "Technology due diligence for private equity, corporate finance advisers, and investors evaluating software businesses. M&A tech reviews, AI capability assessments, and acquisition reports.",
  keywords: [
    "technical due diligence",
    "M&A tech due diligence",
    "software acquisition review",
    "technology due diligence",
    "PE tech due diligence",
    "AI capability assessment",
    "CTO due diligence",
    "investor technical review",
    "software company acquisition",
    "technology risk assessment",
    "corporate finance technology",
    "fractional CTO",
  ],
  authors: [{ name: "Daniel Molloy" }],
  creator: "Daniel Molloy",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: "Daniel Molloy",
    title: "Daniel Molloy | Technical Due Diligence",
    description:
      "Technology due diligence for PE firms, corporate finance advisers, and investors. Reduce uncertainty before you invest, acquire, or build.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Molloy | Technical Due Diligence",
    description:
      "Technology due diligence for PE firms, corporate finance advisers, and investors evaluating software businesses.",
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
      <head>
        {/* Google Tag Manager - as high in head as possible */}
        <script
          dangerouslySetInnerHTML={{ __html: gtmScript }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Google Tag Manager (noscript) - immediately after opening body */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <PersonAndServiceJsonLd />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
