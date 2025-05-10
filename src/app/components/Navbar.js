"use client";
import React from "react";
import Link from 'next/link';
import Image from "next/image";
import { usePathname } from "next/navigation";
import { RiHome2Line, RiInformationLine, RiShoppingBag3Line, RiGroupLine, RiPhoneLine } from "react-icons/ri";
import Logo from "@/app/assets/Logo-resize.png";

const Navbar = () => {
  const pathname = usePathname();

  // Daftar menu navbar
  const navLinks = [
    { href: "/", label: "Home", icon: <RiHome2Line size={24} /> },
    { href: "/about-us", label: "Tentang Kami", icon: <RiInformationLine size={24} /> },
    { href: "/product", label: "Produk Kami", icon: <RiShoppingBag3Line size={24} /> },
    { href: "/partner", label: "Partner Kami", icon: <RiGroupLine size={24} /> },
  ];

  return (
    <nav className="fixed bottom-0 md:top-0 left-0 w-full shadow-md z-50 pointer-events-none">
      <div className="bg-white shadow-md pointer-events-auto">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo hanya tampil di desktop */}
          <Image src={Logo} alt="logo" className="hidden md:block w-[120px]" />

          {/* Navbar Desktop */}
          <ul className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className={`font-medium text-[#616161] hover:text-gray-700 transition-all duration-300 md:text-sm lg:text-base ${pathname === link.href ? "text-black font-semibold" : ""}`}
                >
                  {link.label}
                </Link>
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-blue-500 transition-all duration-300 ${pathname === link.href ? "w-full" : "w-0"} group-hover:w-full`}
                ></span>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="text-white bg-blue-500 px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-blue-600"
              >
                Hubungi Kami
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Navbar Mobile */}
      <ul className="flex md:hidden justify-around items-center bg-white shadow-lg py-3 fixed bottom-0 w-full pointer-events-auto">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`flex flex-col items-center text-[#616161] hover:text-gray-700 transition-all duration-300 ${pathname === link.href ? "text-black font-semibold" : ""}`}
            >
              {link.icon}
              <span className="text-xs mt-1">{link.label}</span>
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/contact"
            className="flex flex-col items-center text-white bg-blue-500 px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:bg-blue-600"
          >
            <RiPhoneLine size={24} />
            <span className="text-xs mt-1">Hubungi</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
