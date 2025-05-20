"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

import { FaCheckCircle } from 'react-icons/fa';
import Stories from "./assets/ImageUnggul.jpg";
import Client_Kementrian from "./assets/Client-1.png"
import hero1 from "./assets/ImageUs1.jpg"
import hero2 from "./assets/ImageUs3.jpg"
import hero3 from "./assets/ImageUs5.jpg"
import hero4 from "./assets/ImageUs6.jpg"
import Client1 from "./assets/client1.png"
import Client2 from "./assets/client2.png"
import IkhlasDisplay from "./components/IkhlasMap";

import { RiMoneyDollarCircleLine, RiStackshareLine, RiHandCoinLine, RiGroup2Line } from "react-icons/ri";

import dum from "@/app/assets/About-1.png";


const features = [
  {
    title: 'Legal',
    Icon: FaCheckCircle,
    description:
      'Iwartelsus merupakan sarana telekomunikasi resmi yang telah memenuhi seluruh ketentuan hukum dan regulasi pemerintah, menjamin keamanan, kepatuhan, dan transparansi dalam penggunaannya di lingkungan pemasyarakatan.',
  },
  {
    title: 'Sistem Prabayar',
    Icon: RiMoneyDollarCircleLine,
    description:
      'Iwartelsus menggunakan sistem Prabayar atau Pulsa Isi Ulang yang disediakan oleh koperasi atau yayasan atau lembaga atau perorangan yang ditunjuk oleh Koperasi Pemasyarakatan dengan nominal harga yang terjangkau dan ekonomis.',
  },
  {
    title: 'Pemantauan Berjenjang',
    Icon: RiStackshareLine,
    description:
      'Setiap aktivitas komunikasi terekam dan diawasi melalui sistem berjenjang, mulai dari level operator hingga pimpinan lembaga, guna memastikan pengawasan maksimal dan pencegahan penyalahgunaan.',
  },
  {
    title: 'Pemberdayaan Ekonomi Pemasyarakatan',
    Icon: RiHandCoinLine,
    description:
      'Pengoperasian dan pengelolaan Iwartelsus dilakukan oleh koperasi Unit Pelaksana Teknis Pemasyarakatan sebagai bentuk dorongan kemandirian guna meningkatkan kesejahteraan Koperasi di lingkungan Unit Teknis Pemasyarakatan.',
  },
  {
    title: 'Non DIPA',
    Icon: RiGroup2Line,
    description:
      'Layanan ini tidak menggunakan anggaran negara (Non DIPA), sehingga tidak membebani APBN dan dapat diimplementasikan secara mandiri oleh lembaga pemasyarakatan melalui skema kerja sama.',
  },
];


export default function Home() {

  return (
    <div id="heroSection" className="w-full overflow-hidden">
      <Navbar/>

      {/* HERO SECTION */}
            <section className="pt-18 md:pt-48 lg:pt-28 py-24 flex-col-reverse flex lg:flex-row items-center justify-between min-h-screen px-6 lg:max-w-[1440px] lg:mx-auto">
        <div className="mt-24 lg:w-5/12 flex flex-col gap-6">
          <div className='w-full'>
            <p className="text-blue-600 max-w-max px-4 md:px-2 md:text-base bg-[#E7F0FD] text-center font-semibold rounded-full py-1">
              PT. PALAPA TEKNOLOGI INDONESIA
            </p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold text-[#2B313B]">Sarana Telekomunikasi Legal Pemasyarakatan</h2>
          <p className=" text-[#2B313B] text-base md:text-xl font-light">
            <span className='font-semibold text-blue-600'>PT. Palapa Teknologi Indonesia</span> didirikan secara resmi pada 26 September 2005 dan bergerak di bidang perdagangan besar piranti lunak serta layanan teknologi informasi dan komunikasi. Sebagai anak perusahaan dari <span className='font-semibold'>PT. Pasopati Nusantara Holding Company</span>, Palapa Teknologi memiliki peran strategis dalam menyediakan solusi telekomunikasi yang aman, legal, dan terintegrasi.
          </p>
          <div>
            <Link href="#stories" className="mt-0 md:mt-6 bg-[#186CE1] text-white text-base px-6 py-4 rounded-xl font-medium">
              Selengkapnya
            </Link>
          </div>
        </div>

        {/* Container Gambar dengan Absolute Positioning */}
        <div className="lg:w-7/12 relative w-full flex items-center justify-center mt-12">
          {/* Gambar Tengah (Utama) */}
          <div className="relative w-[75%] z-10">
            <Image src={hero2} alt="Gambar Tengah" className="rounded-lg shadow-lg w-full object-cover h-48 md:h-64 lg:h-96" />
          </div>

          {/* Gambar Atas Kiri */}
          <div className="absolute top-[-30%] left-0 w-[40%] z-20">
            <Image src={hero1} alt="Gambar Kiri Atas" className="rounded-lg shadow-md w-[440px] object-cover h-24 md:h-36 lg:h-48" />
          </div>

          {/* Gambar Bawah Kanan */}
          <div className="absolute bottom-[-20%] right-0 w-[40%] z-20">
            <Image src={hero3} alt="Gambar Kanan Bawah" className="rounded-lg shadow-md w-[440px] object-cover h-24 md:h-36 lg:h-48" />
          </div>
        </div>
      </section>

      <div>
        <div 
          id="stories"
          className="
            flex flex-col 
            justify-center
            gap-6
            text-[#002453]
            my-32"
          >

          <h1 className="
            px-3 
            font-bold text-[#3D3D3D] text-700 text-6xl
            
            mx-auto">
              Keunggulan Kami
          </h1>
          <div className="
          flex justify-center align-start mt-10 w-full
          ">
            {/* Lists */}
            <div className="space-y-6 max-w-6xl w-full mx-4 md:mr-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="w-18 h-18 p-2 bg-[#E7F0FD] rounded-full flex items-center justify-center text-center shrink-0">
                  <feature.Icon className="text-blue-500 text-4xl" />
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-2xl text-[#3D3D3D]">{feature.title}</h3>
                  <p className="my-2 md:my-0 font-normal text-base md:text-xl text-[#3D3D3D]">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>

      {/* CLIENT */}
      <div>
        <div 
          className="
            flex flex-col 
            justify-center
            gap-6
            text-[#002453]
            mt-20 md:mt-40 mb-32"
          >

          <h1 className="
            p-3 
            font-bold text-[#3D3D3D] text-700 text-6xl
            mx-auto">
              Client Kebanggan Kami
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-20 mx-auto mt-12">
            <Image src={Client1} alt="Logo Lapas" className="h-64 w-full"/>
            <Image src={Client2} alt="Logo Lapas" className="h-64 w-full"/>
          </div>

        </div>
      </div>

      {/* COMP VALUES */}
      <div className="md:hidden">
        <div 
          className="
            flex flex-col 
            justify-center
            gap-6
            text-[#002453]
            mt-20 md:mt-40 mb-32"
          >
          <IkhlasDisplay />

        </div>
      </div>

      {/* FOOTER */}
      <div>
        <Footer/>
      </div>
    </div>
  );
}