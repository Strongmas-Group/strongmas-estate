import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ModalProvider } from '@/providers/modal-provider';
import MetaPixel from '@/components/custom/meta-pixel';
import TawkChat from '@/components/tawk-chat';
import SiteScripts from '@/components/custom/site-scripts';

const SITE_URL = 'https://strongmasresidence.com';
const ICON = '/strongmas-development-icon.png';
const OG_IMAGE = '/strongmas-development-og.png';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Strongmas Development | Luxury Real Estate in Lagos',
    template: '%s | Strongmas Development',
  },
  description:
    'Strongmas Development is a premium real estate developer delivering luxury apartments, penthouses and smart homes in Lekki Phase 1, Victoria Island and across Lagos.',
  alternates: { canonical: '/' },
  icons: { icon: ICON },
  openGraph: {
    type: 'website',
    siteName: 'Strongmas Development',
    locale: 'en_NG',
    url: SITE_URL,
    title: 'Strongmas Development | Luxury Real Estate in Lagos',
    description:
      'Premium residences defined by innovative architecture, intelligent living and exceptional craftsmanship.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Strongmas Development' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strongmas Development | Luxury Real Estate in Lagos',
    description:
      'Premium residences defined by innovative architecture, intelligent living and exceptional craftsmanship.',
    images: [OG_IMAGE],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body antialiased bg-[#142B54] text-foreground">
        <ModalProvider />
        <SiteScripts />
        <MetaPixel />
        {children}
        <Toaster />
        <TawkChat />
      </body>
    </html>
  );
}
