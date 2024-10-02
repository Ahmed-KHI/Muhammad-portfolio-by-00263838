import Footer from "components/Footer";
import Header from "components/Header";
import "app/globals.css";
import type { Metadata } from "next";
import { AnalyticsWrapper } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "Muhammad | Personal Portfolio",
    template: "Muhammad | %s",
  },
  description:
    "Welcome to my personal portfolio where you'll get to know about my experiences in my professional life. I love building personal/pet projects & writing technical articles. I also make music as my side hobby. Connect with me on LinkedIn: https://www.linkedin.com/in/mirza-muhammad-ahmed-09b932209/",
  openGraph: {
    title: "Muhammad | Personal Portfolio",
    description:
      "Welcome to my personal portfolio where you'll get to know about my experiences in my professional life. I love building personal/pet projects & writing technical articles. I also make music as my side hobby.",
    siteName: "Muhammad's Portfolio",
    locale: "en-US",
    type: "website",
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        {children}
        <AnalyticsWrapper />
        <Footer />
      </body>
    </html>
  );
}
