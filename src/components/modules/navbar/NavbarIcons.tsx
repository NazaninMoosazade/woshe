import Link from "next/link";
import { PiUserLight, PiBagLight } from "react-icons/pi";

const NavbarIcons = () => {
  return (
   <div className="flex items-center gap-x-7 relative text-textcolor">
  {/* آیکون کاربر */}
  <div className="relative group">
   <Link href={'login'}>
    <PiUserLight className="w-7 h-7 cursor-pointer transition-colors duration-200" />
    <div className="absolute top-full left-8 hidden -mt-5 group-hover:flex duration-200 bg-green text-white text-sm font-shabnam px-5 h-6 rounded-md shadow-lg whitespace-nowrap">
      ورود
    </div>
   </Link>
  </div>

  {/* آیکون سبد خرید */}
  <div className="relative group">
    <PiBagLight className="w-7 h-7 cursor-pointer transition-colors duration-200" />
    <div className="absolute top-full left-8 -mt-5 hidden group-hover:flex duration-200 bg-green text-white text-sm font-shabnam px-5 h-6 rounded-md shadow-lg whitespace-nowrap">
      سبد خرید
    </div>
  </div>
</div>

  );
};

export default NavbarIcons;
