import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cliqevents.agency'),
  title: 'Cliq Events Agency - Agence Marketing Digital Premium en Algérie | Cliq Events | Cliqevents',
  description: 'Cliq Events Agency (cliqevents.agency) - Agence 360° spécialisée en marketing d\'influence, communication digitale, développement web, branding et événementiel premium en Algérie. Cliq Events transforme vos idées en succès digitaux.',
  keywords: 'cliqevents, cliq events, cliqevents agency, cliqevents.agency, cliq agency, cliq events agency, marketing digital Algérie, marketing influence, agence communication, développement web, branding, événementiel, social media management, stratégie digitale, Algérie, cliq, cliqevents agency Algérie',
  authors: [{ name: 'Cliq Events Agency', url: 'https://cliqevents.agency' }],
  creator: 'Cliq Events Agency',
  publisher: 'Cliq Events Agency',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://cliqevents.agency',
  },
  openGraph: {
    title: 'Cliq Events Agency (cliqevents.agency) - Agence Marketing Digital Premium en Algérie',
    description: 'Cliq Events Agency (cliqevents.agency) - Agence 360° spécialisée en marketing d\'influence, communication digitale, développement web, branding et événementiel premium en Algérie.',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Cliq Events Agency - cliqevents.agency',
    url: 'https://cliqevents.agency',
    images: [
      {
        url: '/cliq-logo-bg.jpeg',
        width: 1200,
        height: 630,
        alt: 'Cliq Events Agency - Agence Marketing Digital Premium',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cliq Events Agency (cliqevents.agency) - Agence Marketing Digital Premium en Algérie',
    description: 'Cliq Events Agency (cliqevents.agency) - Agence 360° spécialisée en marketing d\'influence, communication digitale, développement web, branding et événementiel premium en Algérie.',
    images: ['/cliq-logo-bg.jpeg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="icon" href="/logo-without-bg.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo-without-bg.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6a0dad" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="application-name" content="Cliq Events Agency" />
        <meta name="apple-mobile-web-app-title" content="Cliq Events Agency" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#6a0dad" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Domain-specific meta tags for better SEO */}
        <meta name="domain" content="cliqevents.agency" />
        <meta name="brand" content="Cliq Events Agency" />
        <meta name="company" content="Cliq Events Agency" />
        <meta name="organization" content="Cliq Events Agency" />
        
        {/* Geographic and language targeting */}
        <meta name="geo.region" content="DZ" />
        <meta name="geo.country" content="Algeria" />
        <meta name="geo.placename" content="Alger" />
        <meta name="language" content="French" />
        <meta name="content-language" content="fr" />
        
        {/* Business information */}
        <meta name="contact" content="cliqevents3@gmail.com" />
        <meta name="phone" content="+213-540-017-730" />
        <meta name="email" content="cliqevents3@gmail.com" />
        
        {/* Additional Open Graph tags */}
        <meta property="og:site_name" content="Cliq Events Agency" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:country-name" content="Algeria" />
        <meta property="og:region" content="Alger" />
        
        {/* Twitter Card additional tags */}
        <meta name="twitter:site" content="@cliqevents" />
        <meta name="twitter:creator" content="@cliqevents" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://cliqevents.agency" />
        
        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Cliq Events Agency",
              "alternateName": ["Cliq Events", "Cliqevents", "Cliq Events Agency"],
              "description": "Cliq Events Agency (cliqevents.agency) - Agence 360° spécialisée en marketing d'influence, communication digitale, développement web, branding et événementiel premium en Algérie.",
              "url": "https://cliqevents.agency",
              "logo": "https://cliqevents.agency/logo-without-bg.png",
              "image": "https://cliqevents.agency/cliq-logo-bg.jpeg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+213-540-017-730",
                "contactType": "customer service",
                "email": "cliqevents3@gmail.com",
                "areaServed": "DZ",
                "availableLanguage": ["French", "Arabic", "English"]
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Alger",
                "addressCountry": "DZ"
              },
              "sameAs": [
                "https://facebook.com/cliqevents",
                "https://instagram.com/cliqevents",
                "https://linkedin.com/company/cliqevents",
                "https://twitter.com/cliqevents"
              ],
              "service": [
                {
                  "@type": "Service",
                  "name": "Marketing d'influence",
                  "description": "Stratégies de marketing d'influence pour augmenter votre visibilité"
                },
                {
                  "@type": "Service", 
                  "name": "Développement Web",
                  "description": "Création de sites web et applications digitales"
                },
                {
                  "@type": "Service",
                  "name": "Communication Digitale",
                  "description": "Stratégies de communication digitale et branding"
                },
                {
                  "@type": "Service",
                  "name": "Événementiel Premium",
                  "description": "Organisation d'événements premium et corporate"
                }
              ],
              "foundingDate": "2020",
              "founder": {
                "@type": "Person",
                "name": "Cliq Events Team"
              },
              "knowsAbout": [
                "Marketing Digital",
                "Marketing d'Influence", 
                "Développement Web",
                "Communication Digitale",
                "Branding",
                "Événementiel",
                "Social Media Management"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
