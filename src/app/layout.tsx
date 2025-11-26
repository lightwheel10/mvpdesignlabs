import { Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import "./globals.css";
import Script from "next/script";
import { Analytics } from '@vercel/analytics/react';

// Optimized font loading with font-display swap for better performance
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: '--font-plus-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata = {
  title: "MVPDesignLabs - Transform Your Ideas into Digital Reality",
  description: "Transform your ideas into digital reality. We craft MVPs, web apps, and digital solutions that make an impact.",
  metadataBase: new URL('https://mvpdesignlabs.com'),
  
  openGraph: {
    url: 'https://mvpdesignlabs.com',
    type: 'website',
    title: 'MVPDesignLabs - Transform Your Ideas into Digital Reality',
    description: 'Transform your ideas into digital reality. We craft MVPs, web apps, and digital solutions that make an impact.',
    images: [{
      url: 'https://mvpdesignlabs.com/images/og.png'
    }]
  },
  
  twitter: {
    card: 'summary_large_image',
    domain: 'mvpdesignlabs.com',
    url: 'https://mvpdesignlabs.com',
    title: 'MVPDesignLabs - Transform Your Ideas into Digital Reality',
    description: 'Transform your ideas into digital reality. We craft MVPs, web apps, and digital solutions that make an impact.',
    images: ['https://mvpdesignlabs.com/images/og.png']
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
        {/* Load Google Analytics with lazyOnload for better performance */}
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-ETF5SYHZ1G"
        />
        <Script
          id="google-analytics"
          strategy="lazyOnload"
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
        className={`${plusJakarta.className} antialiased`}
      >
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
