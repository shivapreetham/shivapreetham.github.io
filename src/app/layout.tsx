import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter, Space_Grotesk } from "next/font/google";

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
  title: "Shivapreetham H S - Full Stack Developer & AI/ML Engineer",
  description: "Computer Science student at NIT Jamshedpur | Built RAG chatbot adopted by Government of Jharkhand | 3rd Place at HaXplore IIT-BHU | 1,500+ competitive programming problems solved | Full Stack Developer specializing in AI/ML, Next.js, and Python",
  keywords: [
    "Shivapreetham H S",
    "Full Stack Developer",
    "AI/ML Engineer",
    "NIT Jamshedpur",
    "React Developer",
    "Next.js",
    "Python",
    "RAG Chatbot",
    "Competitive Programming",
    "HaXplore Winner",
    "LeetCode",
    "CodeChef",
    "Codeforces",
    "Portfolio",
    "Software Engineer"
  ],
  authors: [{ name: "Shivapreetham H S" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shivapreetham.dev",
    title: "Shivapreetham H S - Full Stack Developer & AI/ML Engineer",
    description: "Computer Science student at NIT Jamshedpur | Built RAG chatbot adopted by Government of Jharkhand | 3rd Place at HaXplore IIT-BHU",
    siteName: "Shivapreetham H S Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivapreetham H S - Full Stack Developer & AI/ML Engineer",
    description: "Computer Science student at NIT Jamshedpur | Built RAG chatbot adopted by Government of Jharkhand | 3rd Place at HaXplore IIT-BHU",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
