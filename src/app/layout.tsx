import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StickyCTA } from '@/components/layout/StickyCTA';
import './globals.css';

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Simulateur Jeanbrun 2026 — Calculez votre économie d'impôt",
    template: '%s | Simu-Jeanbrun.fr',
  },
  description:
    "Simulateur gratuit du dispositif Jeanbrun. Calculez votre économie d'impôt, comparez avec le LMNP et la location nue. Résultat instantané.",
  metadataBase: new URL('https://simu-jeanbrun.fr'),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Simu-Jeanbrun.fr',
    title: "Simulateur Jeanbrun 2026 — Calculez votre économie d'impôt",
    description:
      "Simulateur gratuit du dispositif Jeanbrun. Calculez votre économie d'impôt, comparez avec le LMNP et la location nue.",
    url: 'https://simu-jeanbrun.fr',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Simulateur Jeanbrun 2026 — Calculez votre économie d'impôt",
    description:
      "Simulateur gratuit du dispositif Jeanbrun. Calculez votre économie d'impôt, comparez avec le LMNP et la location nue.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}
          </Script>
        </>
      )}
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
