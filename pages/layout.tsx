import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.rtl.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title:"شکوفالند | صفحه نخست",
  description: "راهکاری جامع برای مدیریت پارکینگ",  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>     
      <body>{children}</body>
      <Script src="/js/bootstrap.bundle.js" />
    </html>
  );
}
