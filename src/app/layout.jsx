import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "99 Roommates",
  description: "Find your roommate in Georgia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className=" relative bg-gradient-to-br from-[#3086C4] to-[#DDE2FF]">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
