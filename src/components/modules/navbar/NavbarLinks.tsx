"use client";

import React, { useState, useEffect } from "react";
import { NavbarLink as NavbarLinkType } from "@/models/Navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavbarLinks() {
  const [links, setLinks] = useState<NavbarLinkType[]>([]);
  // const [user, setUser] = useState<{ name: string } | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // گرفتن لینک‌ها
    const fetchNavbar = async () => {
      try {
        const res = await fetch("/api/navbar");
        const data = await res.json();
        setLinks(data.links);
      } catch (error) {
        console.error("Error fetching navbar data:", error);
      }
    };

    // گرفتن کاربر
    // const fetchUser = async () => {
    //   try {
    //     const res = await fetch("/api/auth/me");
    //     if (res.ok) {
    //       const data = await res.json();
    //       setUser(data);
    //     }
    //   } catch (error) {
    //     console.error("Error fetching user:", error);
    //   }
    // };

    fetchNavbar();
    // fetchUser();
  }, []);

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

   
    </ul>
  );
}

export default NavbarLinks;


// "use client";

// import React, { useState, useEffect } from "react";
// import { NavbarLink as NavbarLinkType } from "@/models/Navbar";
// import Link from "next/link";
// import { usePathname } from "next/navigation";  

// function NavbarLinks() {
//   const [links, setLinks] = useState<NavbarLinkType[]>([]);
//   const pathname = usePathname(); 

//   useEffect(() => {
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

//   return (
//     <ul className="flex items-center gap-x-9 text-textcolor">
//       {links.map((link) => {
//         const isActive = pathname === link.href;
//         return (
//           <li key={link.id}>
//             <Link
//               href={link.href}
//               className={`nav-link transition-colors duration-300 ${
//                 isActive ? "active " : "text-gray-700"
//               }`}
//             >
//               {link.name}
//             </Link>
//           </li>
//         );
//       })}
//     </ul>
//   );
// }

// export default NavbarLinks;
