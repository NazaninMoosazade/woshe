import "./globals.css";
import type { Metadata } from "next";
import { UserProvider } from "@/context/UserContext";
import { CartProvider } from "@/context/CartContext";

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
        <UserProvider>
          <CartProvider>
            {/* بقیه صفحات */}
            {children}
          </CartProvider>
        </UserProvider>
      </body>
    </html>
  );
}
