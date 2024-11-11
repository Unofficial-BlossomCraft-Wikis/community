import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import axios from 'axios';
import { env } from "./env";

const isProtectedRoute = createRouteMatcher(["/user/settings(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const ip = req.headers.get('X-Forwarded-For');
  req.cookies.set('client-ip', ip || 'unknown');
  if (ip) {
    const isInUSA = await isUSAVisitor(ip);
    if (!isInUSA) {
      return NextResponse.redirect("https://v4r2.pages.dev/foreign-ip")
    }
  } else {
    return NextResponse.redirect("https://v4r2.pages.dev/foreign-ip?noip=true")
  }
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

async function isUSAVisitor(ip: string): Promise<boolean> {
  if (env.NODE_ENV === 'development') {
    return true; // Allow all IPs in development
  }
  try {
    const response = await axios.get(`http://ip-api.com/json/${ip}`);
    const data = response.data;
    return data.countryCode === 'US';
  } catch (error) {
    console.error('Error fetching location:', error);
    return false; // Default to false if there is an error
  }
}