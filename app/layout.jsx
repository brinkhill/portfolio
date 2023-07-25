import "./globals.css";
import { Overpass } from "next/font/google";

const overpass = Overpass({ subsets: ["latin"], weight: "400" });

export const metadata = {
 title: "Brinkley Hill",
 description: "Generated by create next app",
};

export default function RootLayout({ children }) {
 return (
  <html lang="en">
   <link
    rel="icon"
    href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧸</text></svg>"
   />
   <body className={overpass.className}>{children}</body>
  </html>
 );
}
