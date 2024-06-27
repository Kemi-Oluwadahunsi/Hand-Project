import { Manrope } from "next/font/google";
import "./globals.css";

const inter = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Hand Project",
  description: "Generate web and responsive views",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
