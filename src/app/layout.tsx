import {
  Aboreto,
  Cormorant_Garamond,
  Albert_Sans,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import MenuModal from "@/components/modal/MenuModal";
import CartModal from "@/components/modal/CartModal";
import type { Metadata } from "next";
import FilterModal from "@/components/modal/FilterModal";

const aboreto = Aboreto({
  variable: "--font-aboreto",
  subsets: ["latin"],
  weight: ["400"],
});

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
  weight: ["400"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Sirojiddin Attor - Parfyumeriya do'koni | Sirojiddin Attor - Магазин парфюмерии | Sirojiddin Attor - Perfume Shop",
  description: "Sirojiddin Attor - yuqori sifatli parfyumeriya mahsulotlarini taklif etuvchi do'kon. Bizning keng assortimentimizdan tanlang va o'zingizga yoqqan hidni toping. Sirojiddin Attor bilan har kuni o'zingizni maxsus his eting!",
  openGraph: {
    title: "Sirojiddin Attor - Parfyumeriya do'koni | Sirojiddin Attor - Магазин парфюмерии | Sirojiddin Attor - Perfume Shop",
    description: "Sirojiddin Attor - yuqori sifatli parfyumeriya mahsulotlarini taklif etuvchi do'kon. Bizning keng assortimentimizdan tanlang va o'zingizga yoqqan hidni toping. Sirojiddin Attor bilan har kuni o'zingizni maxsus his eting!",
    url: "https://sirojiddin-attor.uz",
    siteName: "Sirojiddin Attor",
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sirojiddin Attor - Parfyumeriya do'koni | Sirojiddin Attor - Магазин парфюмерии | Sirojiddin Attor - Perfume Shop",
    description: "Sirojiddin Attor - yuqori sifatli parfyumeriya mahsulotlarini taklif etuvchi do'kon. Bizning keng assortimentimizdan tanlang va o'zingizga yoqqan hidni toping. Sirojiddin Attor bilan har kuni o'zingizni maxsus his eting!",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${aboreto.variable} ${cormorantGaramond.variable} ${albertSans.variable} antialiased `}
      >
        <div className="wrapper">
          <Header />
          <main className="main">{children}</main>
          <Footer />
          <MenuModal />
          <CartModal />
          <FilterModal />
        </div>
      </body>
    </html>
  );
}
