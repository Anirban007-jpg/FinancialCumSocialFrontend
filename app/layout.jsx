import { Inter } from "next/font/google";
import "../app/globals.css";
import Navbar from "@/Components/Navbar";
import Navigation from "@/Components/Navigation";
// import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home Page | FINANCIA",
  description: "Managing Financial Data",
    url: 'http//localhost:3000/',
    icons: {
      icon: [
        {
          media: '(prefers-color-scheme: light)',
          url: '/creative.png'
        }
      ]
    },
    locale: 'en_US',
    type: 'website'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
