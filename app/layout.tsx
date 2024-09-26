import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({subsets:["latin"]});

export const metadata: Metadata = {
  title: "Salilesh's Portfolio",
  description: "A beautiful Portfolio website based on Next.js ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}>
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
