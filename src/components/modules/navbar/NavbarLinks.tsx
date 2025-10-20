'use client'
import { useUser } from "@/context/UserContext";
import { NavbarLink as NavbarLinkType } from "@/models/Navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function NavbarLinks() {
  const [links, setLinks] = useState<NavbarLinkType[]>([]);
  const { user, setUser } = useUser();
  const pathname = usePathname();

  // گرفتن لینک‌ها
  useEffect(() => {
    const fetchNavbar = async () => {
      try {
        const res = await fetch("/api/navbar");
        const data = await res.json();
        setLinks(data.links);
      } catch (err) {
        console.error(err);
      }
    };
    fetchNavbar();
  }, []);

  // گرفتن user از سرور فقط وقتی صفحه رفرش شد
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/auth/me");
        const data = await res.json();
        if (data.user) setUser(data.user);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUser();
  }, [setUser]);

  return (
    <ul className="flex items-center gap-x-9 text-textcolor">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <li key={link.id}>
            <Link
              href={link.href}
              className={`nav-link transition-colors duration-300 ${
                isActive ? "active" : "text-gray-700"
              }`}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
      {user && <li> {user.name} </li>}
    </ul>
  );
}

export default NavbarLinks;


// "use client";

// import React, { useState, useEffect } from "react";
// import { NavbarLink as NavbarLinkType } from "@/models/Navbar";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useUser } from "@/utils/Global/UserContext";

// function NavbarLinks() {
//   const [links, setLinks] = useState<NavbarLinkType[]>([]);
//   const [user, setUser] = useState<{name: string} | null>(null);
//   const pathname = usePathname();


//   useEffect(() => {
//     // گرفتن لینک‌ها
//     const fetchNavbar = async () => {
//       try {
//         const res = await fetch("/api/navbar");
//         const data = await res.json();
//         setLinks(data.links);
//       } catch (error) {
//         console.error("Error fetching navbar data:", error);
//       }
//     };

 

//     fetchNavbar();
   
//   }, []);

//    // گرفتن user از سرور فقط وقتی صفحه رفرش شد
//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const res = await fetch("/api/auth/me");
//         const data = await res.json();
//         if (data.user) setUser(data.user);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchUser();
//   }, [setUser]);

//   return (
//     <ul className="flex items-center gap-x-9 text-textcolor">
//       {links.map((link) => {
//         const isActive = pathname === link.href;
//         return (
//           <li key={link.id}>
//             <Link
//               href={link.href}
//               className={`nav-link transition-colors duration-300 ${
//                 isActive ? "active" : "text-gray-700"
//               }`}
//             >
//               {link.name}
//             </Link>
//           </li>
//         );
//       })}
//       {user && <li>سلام، {user.name} 👋</li>}
//     </ul>
//   );
// }

// export default NavbarLinks;


