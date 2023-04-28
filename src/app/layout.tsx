import { cookies } from "next/headers";
import { ABeeZee as MainFont } from "next/font/google";

import "@/styles/globals.css";
import { instagramMetadata } from "@/config/seo";

import Navbar from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThemeInitializer from "@/components/ThemeInitializer";

const mainFont = MainFont({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = instagramMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sessionCookies = cookies();
  const themeCookie = sessionCookies.get("theme");
  const theme = themeCookie?.value ?? "light";

  return (
    <html lang="en" className={theme}>
      <body
        className={`overflow-x-hidden bg-white text-gray-900 dark:bg-gray-800 dark:text-slate-100 ${mainFont.className}`}
      >
        <ThemeInitializer theme={theme} />
        <div className="flex min-h-screen flex-col justify-between">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
