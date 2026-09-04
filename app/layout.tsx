import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { SiteJsonLd } from "@/components/structured-data";
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
    default: "Daniel Molloy — Independent Technology Advisory",
    template: "%s | Daniel Molloy",
  },
  description:
    "Independent technology advisory for investors, boards, and technology companies. Technical due diligence, technology advisory, fractional CTO, and AI governance. Led by Daniel Molloy.",
  keywords: [
    "technology advisory",
    "independent technology advisory",
    "technical due diligence",
    "technology due diligence",
    "fractional CTO",
    "AI governance",
    "AI strategy",
    "technology risk",
    "software architecture",
    "cloud transformation",
    "private equity technology advisor",
    "venture capital technology advisor",
    "family office technology advisor",
    "investor technology advisor",
    "Daniel Molloy",
    "Daniel Molloy Ltd",
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
    title: "Daniel Molloy — Independent Technology Advisory",
    description:
      "Independent technology advisory and technical due diligence for investors, boards, and technology companies. Led by Daniel Molloy.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Molloy — Independent Technology Advisory",
    description:
      "Independent technology advisory and technical due diligence for investors, boards, and technology companies.",
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
        <SiteJsonLd />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
