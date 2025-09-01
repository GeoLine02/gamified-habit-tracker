"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathName = usePathname();

  const activeLinkStyles =
    "bg-custom-green text-white py-2 px-6 rounded-xl transition-all duration-200 ease-in-out";

  return (
    <footer className="md:hidden px-4">
      <div className="flex items-center justify-around bg-white py-4 rounded-xl font-medium">
        <Link className={`${pathName === "/" && activeLinkStyles}`} href={"/"}>
          Dashboard
        </Link>
        <Link
          className={`${pathName === "/profile" && activeLinkStyles}`}
          href={"/profile"}
        >
          Profile
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
