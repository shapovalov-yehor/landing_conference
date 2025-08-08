import type { Metadata } from 'next';
import '../../styles/globals.css';

import { NextIntlClientProvider } from 'next-intl';
import { Montserrat } from 'next/font/google';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { getMessages } from 'next-intl/server';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-mons',
});

const localeMetadata: Record<
  string,
  { title: string; description: string; keywords: string }
> = {
  ru: {
    title: 'Mustage Team – История, ценности и инновации',
    description:
      'Узнайте, как Mustage Team прошла путь от небольшой команды до экосистемы в affiliate-маркетинге. Наши ценности: прозрачность, инновации и поддержка.',
    keywords:
      'Mustage Team, история компании, ценности, прозрачность, инновации, поддержка, арбитраж трафика, affiliate-маркетинг',
  },
  en: {
    title: 'Mustage Team – Our Journey, Values, and Innovations',
    description:
      'Discover how Mustage Team evolved from a small team into an ecosystem in affiliate marketing. Our core values: transparency, innovation, and support.',
    keywords:
      'Mustage Team, company history, values, transparency, innovation, support, traffic arbitrage, affiliate marketing',
  },
  uk: {
    title: 'Mustage Team – Історія, цінності та інновації',
    description:
      'Дізнайтеся, як Mustage Team пройшла шлях від невеликої команди до екосистеми в affiliate-маркетингу. Наші цінності: прозорість, інновації та підтримка.',
    keywords:
      'Mustage Team, історія компанії, цінності, прозорість, інновації, підтримка, арбітраж трафіку, affiliate-маркетинг',
  },
};

type Props = {
  params: Promise<{ locale: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { locale } = await params;
  const metadataValues = localeMetadata[locale] || localeMetadata.uk;

  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL || 'https://mustage.team'
    ),
    title: metadataValues.title,
    description: metadataValues.description,
    keywords: metadataValues.keywords,
    robots: {
      index: true,
      follow: true,
    },
    twitter: {
      card: 'summary_large_image',
      title: metadataValues.title,
      description: metadataValues.description,
      images: [
        {
          url: '/assets/opengraph-image.png',
          width: 1200,
          height: 630,
          alt: metadataValues.title,
        },
      ],
    },
    openGraph: {
      title: metadataValues.title,
      description: metadataValues.description,
      type: 'website',
      images: [
        {
          url: '/assets/opengraph-image.png',
          width: 1200,
          height: 630,
          alt: metadataValues.title,
        },
      ],
    },
    icons: {
      icon: [
        { url: '/assets/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
        { url: '/assets/favicon.svg', type: 'image/svg+xml' },
        { url: '/assets/favicon.ico', type: 'image/x-icon' },
        { url: '/assets/apple-touch-icon.png', sizes: '180x180' },
      ],
    },
    manifest: '/assets/site.webmanifest',
  };
};
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <body className={`${montserrat.variable}`}>
          <Header locale={locale} />
          <main>{children}</main>
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
