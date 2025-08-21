import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shivapreetham H S - Full Stack Developer",
  description: "Portfolio of Shivapreetham H S - B.Tech CSE student at NIT Jamshedpur, Full Stack Developer, AI/ML enthusiast",
  keywords: ["Shivapreetham", "Portfolio", "Full Stack Developer", "React", "Next.js", "Node.js", "AI/ML"],
  authors: [{ name: "Shivapreetham H S" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
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
