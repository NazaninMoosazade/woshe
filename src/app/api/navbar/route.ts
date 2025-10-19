import { NextResponse } from "next/server";
import { NavbarData } from "@/models/Navbar";

export async function GET() {
  const data: NavbarData = {
    links: [
      { id: "1", name: "خانه", href: "/" },
      { id: "2", name: "ترند وشه", href: "/trends" },
      { id: "3", name: "باکس vip", href: "/vipBox" },
      { id: "4", name: "باکس گل", href: "/flowerBox" },
      { id: "5", name: "دسته گل ها", href: "/bouquets" },
      { id: "6", name: "کیک و بادکنک", href: "/pastries" },
      { id: "7", name: "دسته گل vip", href: "/vipBouquets" },
      { id: "8", name: "دسته گل عروس", href: "/bridal" },
    ],
  };

  return NextResponse.json(data);
}
