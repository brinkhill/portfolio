import "./globals.css";

import { Inter } from "next/font/google";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

const inter = Inter({ subsets: ["latin"], weight: ["500"] });

// export const metadata: Metadata = {
//  title: "Bible Plan",
//  manifest: `https://bible.brinkley.dev/site.webmanifest`,
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
  <html lang="en">
   <body className={inter.className}>
    <Header />
    {children}
    <Footer />
   </body>
  </html>
 );
}
