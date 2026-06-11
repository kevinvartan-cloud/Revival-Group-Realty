import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Revival Group Realty | San Diego Real Estate Advisory",
  description:
    "A boutique San Diego brokerage offering strategic representation for buyers, sellers, investors, and development-minded clients — guided by due diligence and a development-informed perspective.",
  keywords: [
    "Revival Group Realty",
    "San Diego real estate",
    "San Diego real estate advisory",
    "San Diego buyer representation",
    "San Diego investment property",
    "San Diego land and development advisory",
    "boutique brokerage San Diego",
  ],
  openGraph: {
    title: "Revival Group Realty",
    description: "Strategic real estate representation in San Diego.",
    url: "https://revivalgrouprealty.com",
    siteName: "Revival Group Realty",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revival Group Realty",
    description: "Strategic real estate representation in San Diego.",
  },
  metadataBase: new URL("https://revivalgrouprealty.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
