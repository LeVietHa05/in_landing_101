import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
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
      <head>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=618937683888293&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body
        className={`${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
