import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "@/components/Navigation";
import { Inter, Space_Grotesk } from "next/font/google";
import { FULL_NAME, SHORT_NAME, SITE_TAGLINE, SITE_URL, SOCIAL_LINKS } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${FULL_NAME} — Software Engineer & ML Researcher`,
    template: `%s — ${SHORT_NAME}`,
  },
  description: `${SITE_TAGLINE} Built a RAG chatbot adopted by the Government of Jharkhand, authored 9 research papers (one with a Best Paper Award), and shipped production ML systems.`,
  keywords: [
    "Shivapreetham",
    "Shivapreetham H S",
    "NIT Jamshedpur",
    "Software Engineer",
    "Machine Learning Researcher",
    "Full Stack Developer",
    "AI/ML Engineer",
    "React Developer",
    "Next.js",
    "Python",
    "PyTorch",
    "RAG Chatbot",
    "EEG Signal Processing",
    "Competitive Programming",
  ],
  authors: [{ name: FULL_NAME, url: SITE_URL }],
  creator: FULL_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: `${FULL_NAME} — Software Engineer & ML Researcher`,
    description: SITE_TAGLINE,
    siteName: SHORT_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `${FULL_NAME} — Software Engineer & ML Researcher`,
    description: SITE_TAGLINE,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: FULL_NAME,
  alternateName: SHORT_NAME,
  url: SITE_URL,
  jobTitle: "Software Engineer & Machine Learning Researcher",
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "National Institute of Technology Jamshedpur",
  },
  sameAs: [SOCIAL_LINKS.github, SOCIAL_LINKS.linkedin, SOCIAL_LINKS.leetcode, SOCIAL_LINKS.codechef, SOCIAL_LINKS.codeforces],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
