import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { ThemeProvider } from "~/components/theme-provider";
import Navbar from "~/components/navbar";
import { dark } from "@clerk/themes";
import { Toaster } from "~/components/ui/sonner";
import { type NextRequest } from "next/server";

export const metadata: Metadata = {
  title: "BCUW",
  description: "Alpha version of BCUW",
  icons: [{ rel: "icon", url: "/bcuwOnlyTitleSquare.png" }],
};

export default function RootLayout({
  children,
  request,
}: {
  children: React.ReactNode;
  request: NextRequest;
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


function NonUSAVisitor() {
  return (
    <div className="h-[calc(100vh-4rem)]">
      <div className="h-[calc(100%-0.5rem)] w-[calc(100vw-1rem)]">
        <main className="mx-2 mb-2 h-full w-full overflow-y-scroll rounded-lg bg-background p-2">
          <div>

          </div>
        </main>
      </div>
    </div>
  );
}