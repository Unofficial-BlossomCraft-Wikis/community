import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { ThemeProvider } from "~/components/theme-provider";
import Navbar from "~/components/navbar";
import { dark } from "@clerk/themes";
import { Toaster } from "~/components/ui/sonner";

export const metadata: Metadata = {
  title: "BCUW",
  description: "Alpha version of BCUW",
  icons: [{ rel: "icon", url: "/bcuwOnlyTitleSquare.png" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" className={`${GeistSans.variable}`}>
        <body className="h-screen w-screen bg-secondary">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
