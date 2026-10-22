import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import AppLayout from "../AppLayout";
import JsonLd from "../components/seo/JsonLd";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, organizationJsonLd } from "../lib/seo";
import "../index.css";
import "../blog.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  applicationName: SITE_NAME,
  openGraph: { siteName: SITE_NAME, images: [DEFAULT_OG_IMAGE], locale: "en_AU", type: "website" },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#01182e",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={roboto.variable}>
      <body>
        <JsonLd data={organizationJsonLd} />
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
