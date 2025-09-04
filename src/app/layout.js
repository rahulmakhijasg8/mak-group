import { Lato } from "next/font/google";
import "./globals.css";
import LoadingProvider from "@/components/loaderprovider";

export const metadata = {
  title: "MAK Group",
  description: "At MAK GROUP, we provide comprehensive solutions for insurance, stock market investments, finance, cars, and real estate. With over 60 years of experience and a dedicated team of experts, we are committed to helping you achieve your financial goals.",
  icons:{
    icon: '/download.svg'
  }
};

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-lato',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lato.variable}`}>
      <body>
      <LoadingProvider>
        {children}
      </LoadingProvider>
      </body>
    </html>
  );
}
