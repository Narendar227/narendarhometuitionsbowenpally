import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Fraunces } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const siteUrl = 'https://narendarhometuitions.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Narendar Home Tuitions Bowenpally | Home Tutors in Bowenpally, Hyderabad',
    template: '%s | Narendar Home Tuitions Bowenpally',
  },
  description:
    'Narendar Home Tuitions Bowenpally helps families enquire about one-to-one home tuition in Bowenpally, Hyderabad for school classes, core subjects and CBSE, ICSE or State Board learning needs.',
  keywords: [
    'home tuition Hyderabad',
    'home tutors Bowenpally',
    'home tuition Bowenpally',
    'private tutors Hyderabad',
    'CBSE tuition Hyderabad',
    'ICSE home tuition Hyderabad',
    'home tuition in Balanagar',
    'one on one tutoring Bowenpally',
    'Narendar Home Tuitions Bowenpally',
    'home tutors in Old Bowenpally',
    'tutors near Suchitra',
  ],
  authors: [{ name: 'Narendar Home Tuitions' }],
  creator: 'Narendar Home Tuitions',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Narendar Home Tuitions',
    title: 'Narendar Home Tuitions Bowenpally | Home Tutors in Bowenpally, Hyderabad',
    description:
      'Expert home tutors for school students in Bowenpally and nearby North Hyderabad and Secunderabad neighborhoods. Personalized learning with experienced tutors. Learn Today, Lead Tomorrow.',
    images: [
      {
        url: '/images/narendar-logo.png',
        width: 1200,
        height: 1200,
        alt: 'Narendar Home Tuitions logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Narendar Home Tuitions Bowenpally | Home Tutors in Bowenpally, Hyderabad',
    description:
      'Home tuition enquiries for school students in Bowenpally and nearby North Hyderabad and Secunderabad neighborhoods.',
    images: ['/images/narendar-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#053067',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteUrl}#business`,
  name: 'Narendar Home Tuitions',
  image: `${siteUrl}/images/narendar-logo.png`,
  url: siteUrl,
  telephone: '+91-6302267422',
  slogan: 'Learn Today, Lead Tomorrow',
  description:
    'Home tuition enquiries for families in Bowenpally, Hyderabad, including nearby North Hyderabad and Secunderabad neighborhoods.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'FF9M+9G, Bowenpally',
    addressLocality: 'Bowenpally',
    addressRegion: 'Telangana',
    addressCountry: 'IN',
  },
  areaServed: [
    'Bowenpally',
    'Old Bowenpally',
    'New Bowenpally',
    'Ferozguda',
    'Balanagar',
    'Hasmathpet',
    'Tadbund',
    'Suchitra',
    'Kompally',
  ],
  priceRange: '₹₹',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '08:00',
    closes: '21:00',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${fraunces.variable} bg-background`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
