import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { Poppins } from "@/config/fonts";

export const metadata: Metadata = {
  title: "GameNest",
  description: "GameNest - Your ultimate gaming hub",
  appleWebApp: {
    capable: true,
    title: "GameNest",
    statusBarStyle: "black",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${Poppins.variable} dark overflow-x-hidden`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        {/* Use it when needed */}
        {/* <AuthListener /> */}
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
