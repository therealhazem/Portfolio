import './globals.css'

export const metadata = {
  title: 'Hazem Elgindy | Software Engineer',
  description: 'Hazem Elgindy - Software Engineer & Computer Science student. Portfolio showcasing web development projects built with Next.js, React, TypeScript, and modern technologies. Specializing in frontend development, UI/UX design, and full-stack solutions.',
  keywords: 'Hazem Elgindy, Software Engineer, Frontend Developer, Web Developer, Next.js Developer, React Developer, TypeScript, Portfolio, Computer Science, Full Stack Developer, UI/UX Designer, Web Development, Software Engineering',
  authors: [{ name: 'Hazem Elgindy' }],
  creator: 'Hazem Elgindy',
  publisher: 'Hazem Elgindy',
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
    url: 'https://hazemelgindy.com',
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
    canonical: 'https://hazemelgindy.com',
  },
  icons: {
    icon: '/images/Logo.svg',
    apple: '/images/Logo.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

