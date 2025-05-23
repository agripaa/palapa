import Image from "next/image";
import React from "react";
import { SiTiktok, SiGmail, SiInstagram } from "react-icons/si";
import { SlGlobe } from "react-icons/sl";
import { RiMapPin2Fill, RiWhatsappLine, RiMailCheckLine, RiPhoneFill } from 'react-icons/ri';
import logo from "@/app/assets/Logo.png";
import Link from "next/link";

export default function Footer() {
  const socmed = [
    {
      title: "",
      href: "/",
      icons: <SiGmail />,
    },
    {
      title: "",
      href: "/",
      icons: <SiTiktok />,
    },
    {
      title: "",
      href: "/",
      icons: <SiInstagram />,
    },
    {
      title: "",
      href: "/",
      icons: <SlGlobe />,
    },
  ];

  return (
    <div className="w-full bg-white" id="contact">
      <div className="container mx-auto bg-white pb-24 pt-12 text-[#201F1F] px-12 md:px-10">
        <div className="flex flex-wrap justify-between gap-12">
          {/* Bagian Kiri */}
          <div className="w-full md:w-1/3">
            <Image
              src={logo}
              alt="logo"
              className="md:w-48 w-1/3"
            />
            <div className="mt-5 flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Alamat</h2>
              <span className="flex flex-col tracking-[0.0025em]">
                <p className="text-gray-700 text-base">GRAHA PASOPATI NUSANTARA</p>
                <p className="text-gray-700 text-base">Jl.Raya Gempol Kavling II</p>
                <p className="text-gray-700 text-base">Gempol Kel, Ceger, Kec. Cipayung,</p>
                <p className="text-gray-700 text-base">Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13820</p>
              </span>
              <div className="flex items-center gap-2 mt-2">
                <RiPhoneFill size={25}/>
                <p className="md:text-base text-md font-regular">021 38853070</p>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <RiWhatsappLine size={25}/>
                <p className="md:text-base text-md font-regular">+62 812-1234-8615</p>
              </div>
            </div>
          </div>

          {/* Bagian Tengah (Social Media) */}
          <div className="w-full md:w-1/4">
            <h1 className="text-xl font-bold">Social Media</h1>
            <div className="mt-5 flex space-x-4">
              {socmed.map((item, index) => (
                <Link
                  href={item.href}
                  target={index === socmed.length - 1 ? "_self" : "_blank"}
                  key={index}
                  className="md:text-base text-md flex items-center gap-3"
                >
                  {item.icons}
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Bagian Kanan (General Links) */}
          <div className="w-full md:w-1/4">
            <h1 className="text-xl font-bold">Umum</h1>
            <div className="mt-5 space-y-4">
              <Link href="/about-us" className="md:text-base text-md flex items-center gap-3">
                Tentang Kami
              </Link>
              <Link href="/product" className="md:text-base text-md flex items-center gap-3">
                Produk Kami
              </Link>
              <Link href="/partner" className="md:text-base text-md flex items-center gap-3">
                Partner Kami
              </Link>
              <Link
                href="/contact"
                className="md:text-base text-md flex items-center gap-3"
              >
                Kontak Kami
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#2B313B] p-5 w-full text-white text-center md:mb-0 mb-20">
        <p className="text-xs sm:text-sm md:text-base">
            © {new Date().getFullYear()} All Right Reserved | PT. Palapa Teknologi
        </p>
      </div>
    </div>
  );
}
