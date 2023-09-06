import Header from "@/components/navigation/Header";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import Footer from "@/components/navigation/Footer";

const sans = DM_Sans({ weight: ["300", "500", "700", "900"], subsets: ["latin"] })

export const metadata = {
  title: "Netrix",
  description:
    "Web3 technology to your doorstep!",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sans.className} suppressHydrationWarning={true}>
        <Header />
        <div className="overflow-x-hidden pt-[5rem]">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
