import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.rtl.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "./globals.css";

export const metadata: Metadata = {
  title: "شکوفالند",
  description: "راهکاری جامع برای مدیریت پارکینگ",  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">     
      <body>{children}</body>
    </html>
  );
}
