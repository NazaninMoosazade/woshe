import { NextResponse } from "next/server";
import { NavbarData } from "@/models/Navbar";

export async function GET() {
  const data: NavbarData = {
    links: [
      { id: "1", name: "خانه", href: "/" },
      { id: "2", name: "ترند وشه", href: "/category/trends" },
      { id: "3", name: "باکس vip", href: "/category/vipBox" },
      // { id: "4", name: "باکس گل", href: "/flowerBox" },
      { id: "5", name: "دسته گل ها", href: "/category/bouquets" },
      { id: "6", name: "کیک و بادکنک", href: "/category/pastries" },
      { id: "7", name: "دسته گل vip", href: "/category/vipBouquets" },
      { id: "8", name: "دسته گل عروس", href: "/category/bridal" },
    ],
  };

  return NextResponse.json(data);
}
