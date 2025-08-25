import type { Metadata } from "next";
import {Montserrat} from "next/font/google";
import "./globals.css";

const montserrat = Montserrat ({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Cẩm nang du học mỹ",
  description: "Buổi chia sẻ thực chiến dành cho học sinh Việt Nam,  cung cấp định hướng rõ ràng về các bước chuẩn bị, chiến lược xây dựng hồ sơ và kỹ năng viết bài luận giúp chinh phục học bổng Mỹ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
