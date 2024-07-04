import { Inter, Comic_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const comic = Comic_Neue({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={comic.className}>
        {/* <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/profile">Profile</Link>

        </nav> */}

        <Navbar />



        <main className="flexn flex-col items-center justify-between p-24">
          {children}
        </main>


      </body>
    </html>
  );
}
