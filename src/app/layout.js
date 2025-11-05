import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/providers/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Big Studio | Home",
  description: "Software Development Services",
  metadataBase: "https://thebigstudio.in",
  keywords: [
    "The Big Studio",
    "Software Development",
    "Web Development",
    "Website Design",
    "Desktop Applications",
    "Custom Software",
    "Tech Solutions"
  ],
  icons: {
    icon: [
      { url: '/images/favicon.ico' },
      { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/images/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/images/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        rel: 'android-chrome-512x512',
        url: '/images/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      },
    ]
  },
  openGraph: {
    type: "website",
    siteName: "The Big Studio",
    title: "The Big Studio",
    description: "Software Development Services",
    url: "/",
    images: [
      {
        url: "/images/logo.svg",
        alt: "The Big Studio Logo",
      },
    ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        maxSnippet: -1,
        maxImagePreview: "large",
        maxVideoPreview: -1,
      }
    }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={true}
            disableTransitionOnChange={false}
          >
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
