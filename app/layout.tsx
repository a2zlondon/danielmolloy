import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PersonAndServiceJsonLd } from "@/components/structured-data";

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
    default: "Daniel Molloy | Fractional CTO & Tech Leader",
    template: "%s | Daniel Molloy",
  },
  description:
    "Fractional CTO for scale-ups, banks, fintech and enterprises. Remote or on-site in UK, Europe, UAE, Saudi Arabia and US. Turn technical complexity into clarity.",
  keywords: [
    "fractional CTO",
    "CTO as a service",
    "tech leader",
    "fractional CTO banking",
    "fractional CTO finance",
    "fractional CTO UAE",
    "fractional CTO Saudi",
    "fractional CTO Europe",
    "fractional CTO USA",
    "enterprise CTO",
    "fintech CTO",
    "remote CTO",
    "technical leadership consultant",
    "startup advisor",
    "technical founder",
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
    url: "https://danielmolloy.com",
    siteName: "Daniel Molloy",
    title: "Daniel Molloy | Fractional CTO & Tech Leader",
    description:
      "Fractional CTO for scale-ups, banks, fintech and enterprises. Remote or on-site in UK, Europe, UAE, Saudi Arabia and US. Turn technical complexity into clarity.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Molloy | Fractional CTO & Tech Leader",
    description:
      "Fractional CTO for scale-ups, banks, fintech and enterprises. Remote or on-site in UK, Europe, UAE, Saudi Arabia and US.",
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
      </body>
    </html>
  );
}
