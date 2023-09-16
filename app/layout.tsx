import "./globals.css";

import { Space_Grotesk } from "next/font/google";

const spaceGro = Space_Grotesk({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
  <html lang="en">
   <body className={spaceGro.className}>{children}</body>
  </html>
 );
}
