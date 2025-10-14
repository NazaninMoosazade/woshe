import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "استودیو گل وشه",
  description: "وب‌سایت رسمی استودیو گل وشه",
    icons: {
    icon: "/icon/favicon.ico",
  }, 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
