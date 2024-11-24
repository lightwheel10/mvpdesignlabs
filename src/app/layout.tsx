import localFont from "next/font/local";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import "./globals.css";
import { baseMetadata } from "@/lib/metadata";
import Script from "next/script";
import { Analytics } from '@vercel/analytics/react';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({ subsets: ["latin"] });
const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-plus-jakarta'
});

export const metadata = {
  ...baseMetadata,
  metadataBase: new URL('https://mvpdesignlabs.com'),
  openGraph: {
    type: 'website',
    url: 'https://mvpdesignlabs.com',
    title: 'MVPDesignLabs - Transform Your Ideas into Digital Reality',
    description: 'Transform your ideas into digital reality. We craft MVPs, web apps, and digital solutions that make an impact.',
    siteName: 'MVPDesignLabs',
    images: [{
      url: '/images/og.png',
      width: 1200,
      height: 630,
      alt: 'MVPDesignLabs - Transform Your Ideas into Digital Reality'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MVPDesignLabs - Transform Your Ideas into Digital Reality',
    description: 'Transform your ideas into digital reality. We craft MVPs, web apps, and digital solutions that make an impact.',
    images: ['/images/og.png'],
    creator: '@mvpdesignlabs'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-ETF5SYHZ1G"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ETF5SYHZ1G');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} ${plusJakarta.variable} antialiased`}
      >
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
