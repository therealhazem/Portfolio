import './globals.css'

const siteUrl = 'https://hazemelgindy.com'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Hazem Elgindy | Software Engineer',
    template: '%s | Hazem Elgindy',
  },
  description: 'Hazem Elgindy - Software Engineer & Computer Science student. Portfolio showcasing web development projects built with Next.js, React, TypeScript, and modern technologies. Specializing in frontend development, UI/UX design, and full-stack solutions.',
  keywords: 'Hazem Elgindy, Software Engineer, Frontend Developer, Web Developer, Next.js Developer, React Developer, TypeScript, Portfolio, Computer Science, Full Stack Developer, UI/UX Designer, Web Development, Software Engineering',
  authors: [{ name: 'Hazem Elgindy', url: siteUrl }],
  creator: 'Hazem Elgindy',
  publisher: 'Hazem Elgindy',
  applicationName: 'Hazem Elgindy Portfolio',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Hazem Elgindy | Software Engineer Portfolio',
    description: 'Software Engineer & Computer Science student specializing in web development. Explore projects built with Next.js, React, TypeScript, and modern technologies.',
    url: siteUrl,
    siteName: 'Hazem Elgindy Portfolio',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/images/Hazem.jpeg',
        width: 560,
        height: 560,
        alt: 'Hazem Elgindy - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hazem Elgindy | Software Engineer Portfolio',
    description: 'Software Engineer & Computer Science student specializing in web development with Next.js, React, and TypeScript.',
    images: ['/images/Hazem.jpeg'],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: '/images/Logo.svg',
    apple: '/images/Logo.svg',
  },
  manifest: '/manifest.json',
  category: 'technology',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Hazem Elgindy',
  url: siteUrl,
  image: `${siteUrl}/images/Hazem.jpeg`,
  jobTitle: 'Software Engineer',
  description: 'Software Engineer & Computer Science student. Portfolio showcasing web development projects built with Next.js, React, TypeScript, and modern technologies.',
  sameAs: [
    'https://github.com/therealhazem',
    'https://arqa-website.vercel.app/',
  ],
  knowsAbout: ['Next.js', 'React', 'TypeScript', 'Web Development', 'UI/UX'],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Computer Science',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

