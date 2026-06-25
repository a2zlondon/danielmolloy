import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { OrganizationAndServiceJsonLd } from "@/components/structured-data";
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
    default: "Daniel Molloy Technology Due Diligence",
    template: "%s | Daniel Molloy Technology Due Diligence",
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
    "technical consulting",
  ],
  authors: [{ name: "Daniel Molloy Technology Due Diligence" }],
  creator: "Daniel Molloy Technology Due Diligence",
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
    siteName: "Daniel Molloy Technology Due Diligence",
    title: "Daniel Molloy Technology Due Diligence",
    description:
      "Technology due diligence for PE firms, corporate finance advisers, and investors. Technical consulting depth for risks, value potential, mitigation actions, and roadmap clarity.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Molloy Technology Due Diligence",
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
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {gtmScript}
        </Script>
        <Script
          id="concord-consent"
          src="https://api.concord.tech/site-v1/704a638f-b53d-4bb3-b0eb-f1dc6ebf3426/site-client"
          strategy="afterInteractive"
        />
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
        <OrganizationAndServiceJsonLd />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
