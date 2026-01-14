import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "初秀小集",
  description: "我的产品集合",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
