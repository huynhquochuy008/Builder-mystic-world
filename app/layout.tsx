import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientProviders from "./providers";
import "@/src/App.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Global Success Guidance | Book Your Free Consultation Today",
    template: "%s | Global Success Guidance",
  },
  description:
    "Achieve your goals with expert guidance for study, work, and relocation to the USA, Canada, or Australia. Get personalized support every step of the way.",
  keywords: [
    "study abroad",
    "migration",
    "international career",
    "Canada",
    "USA",
    "Australia",
    "global success",
    "free consultation",
  ],
  authors: [{ name: "Global Success Guidance" }],
  creator: "Global Success Guidance",
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    title: "Global Success Guidance",
    description:
      "Achieve your goals with expert guidance for study, work, and relocation to the USA, Canada, or Australia.",
    siteName: "Global Success Guidance",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Success Guidance",
    description:
      "Achieve your goals with expert guidance for study, work, and relocation to the USA, Canada, or Australia.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProviders>
          <TooltipProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </ClientProviders>
      </body>
    </html>
  );
}
