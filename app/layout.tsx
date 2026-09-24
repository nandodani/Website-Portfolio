import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Footer from "@/components/footer";

const description =
  "Fernando Apóstolo — Frontend & Design Engineer crafting clean, thoughtful and technically solid interfaces.";

export const metadata: Metadata = {
  metadataBase: new URL("https://nandodani.dev"),
  title: "Fernando Apóstolo — Frontend & Design Engineer",
  description,
  authors: [{ name: "Fernando Apóstolo", url: "https://nandodani.dev" }],
  creator: "Fernando Apóstolo",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://nandodani.dev",
    siteName: "Fernando Apóstolo",
    title: "Fernando Apóstolo — Frontend & Design Engineer",
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fernando Apóstolo — Frontend & Design Engineer",
    description,
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
