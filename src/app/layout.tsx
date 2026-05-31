import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "水湳聖教會 SNHC - 官方網站",
  description: "傳遞基督真理，服務地方社區",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className="antialiased">{children}</body>
    </html>
  );
}
