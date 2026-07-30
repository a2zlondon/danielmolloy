import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { OrganizationAndServiceJsonLd } from "@/components/structured-data";
import { BRAND_INK } from "@/lib/brand";
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
    default: "Daniel Molloy — Technical Expertise for Investment Firms",
    template: "%s | Daniel Molloy",
  },
  description:
    "Technical expertise for investment firms. We help venture capital, private equity, and family office teams build, evaluate, and run technology — in the office or inside the portfolio.",
  keywords: [
    "technical due diligence",
    "M&A tech due diligence",
    "software acquisition review",
    "embedded CTO",
    "fractional CTO",
    "PE tech due diligence",
    "AI capability assessment",
    "CTO due diligence",
    "investor technical review",
    "portfolio technical support",
    "technology risk assessment",
    "venture capital technical advisor",
    "IP due diligence",
    "code ownership review",
    "open source licence audit",
  ],
  authors: [{ name: "Daniel Molloy" }],
  creator: "Daniel Molloy",
  // No `icons` block: setting it explicitly overrides Next's file-convention
  // detection, which is what previously stopped app/apple-icon.png being emitted.
  // app/icon.svg, app/icon.png, app/favicon.ico, app/apple-icon.png and
  // app/manifest.ts are picked up automatically.
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: "Daniel Molloy",
    title: "Daniel Molloy — Technical Expertise for Investment Firms",
    description:
      "We help venture capital, private equity, and family office teams build, evaluate, and run technology — in the office or inside the portfolio.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Molloy — Technical Expertise for Investment Firms",
    description:
      "We help investment firms build, evaluate, and run technology — in the office or inside the portfolio.",
  },
  metadataBase: new URL("https://danielmolloy.com"),
};

export const viewport: Viewport = {
  themeColor: BRAND_INK,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
