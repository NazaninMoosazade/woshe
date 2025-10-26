import "./globals.css";
import type { Metadata } from "next";
import { UserProvider } from "@/context/UserContext";
import Navbar from "@/components/modules/navbar/Navbar";
import NavbarLinks from "@/components/modules/navbar/NavbarLinks";

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
        {/* UserProvider دور همه کامپوننت‌ها */}
        <UserProvider>
          {/* Navbar همیشه نمایش داده میشه */}
          {/* <Navbar/>
          <NavbarLinks /> */}
          {/* بقیه صفحات */}
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
