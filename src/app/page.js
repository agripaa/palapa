"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

import { FaCheckCircle } from 'react-icons/fa';
import Stories from "./assets/ImageUnggul.jpg";
import Client_Kementrian from "./assets/Client-1.png"
import Client_Lapas from "./assets/Client-2.png"
import IkhlasDisplay from "./components/IkhlasMap";

import { RiMoneyDollarCircleLine, RiStackshareLine, RiHandCoinLine, RiGroup2Line } from "react-icons/ri";

import { FaMapMarkerAlt, FaWhatsapp   } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";

import dum from "@/app/assets/About-1.png";


const features = [
  {
    title: 'Legal',
    Icon: FaCheckCircle,
    description:
      'Layanan komunikasi ini sah secara hukum dan sesuai regulasi pemerintah, memastikan penggunaan yang aman dan terpantau.',
  },
  {
    title: 'Sistem Prabayar',
    Icon: RiMoneyDollarCircleLine,
    description:
      'Menggunakan sistem prabayar yang transparan, memungkinkan WBP dan keluarga mengontrol biaya komunikasi dengan mudah.',
  },
  {
    title: 'Pemantauan Berjenjang',
    Icon: RiStackshareLine,
    description:
      'Setiap komunikasi diawasi sesuai tingkat keamanan yang ditentukan untuk menjaga ketertiban dan mencegah penyalahgunaan.',
  },
  {
    title: 'Pemberdayaan Ekonomi Pemasyarakatan',
    Icon: RiHandCoinLine,
    description:
      'Mendukung program pemberdayaan dengan membuka peluang bagi WBP untuk kegiatan produktif dan peningkatan keterampilan.',
  },
  {
    title: 'Non DIPA',
    Icon: RiGroup2Line,
    description:
      'Layanan ini tidak membebani anggaran negara karena dikelola dengan model bisnis mandiri tanpa menggunakan dana APBN.',
  },
];


export default function Home() {

  return (
    <div id="heroSection" className="w-full font-inter overflow-hidden">
      <Navbar/>

      {/* HERO SECTION */}
      <div className="flex flex-col mx-5 md:mx-10 md:h-screen justify-center items-start md:items-center mt-12">
        <div 
        className="
          flex flex-col 
          justify-center
          gap-3 md:gap-6
          md:h-screen
          text-[#002453]"
        >

          <h3 className="
          w-fit
          mx-none sm:mx-10 md:mx-auto
          px-4 py-1 md:py-2
          rounded-md md:rounded-xl
          bg-[#E7F0FD]
          text-[#639DF7] text-[10px] sm:text-sm font-medium">
            PT. PALAPA TEKNOLOGI
          </h3>

          <h1 className="
          px-0 md:px-6 lg:px-10 xl:px-10 
          font-semibold text-[#3D3D3D] text-700 text-2xl sm:text-xl md:text-4xl lg:text-5xl md:text-center
          w-4/5 md:w-3/4 xl:w-1/2
          md:mx-auto
          ">
            Sarana Telekomunikasi Legal Pemasyarakatan
          </h1>
          <p className="font-normal 
          text-sm md:text-lg text-left md:text-center text-[#3D3D3D]
          w-full md:w-4/5 lg:w-2/4 xl:w-3/5
          mt-5 mx-auto
          ">
            PT. Palapa Teknologi Indonesia didirikan secara resmi pada 26 September 2005 dan bergerak di bidang
            perdagangan besar piranti lunak serta layanan teknologi informasi dan komunikasi. Sebagai anak
            perusahaan dari PT. Pasopati Nusantara Holding Company, Palapa Teknologi memiliki peran strategis
            dalam menyediakan solusi telekomunikasi yang aman, legal, dan terintegrasi.

          </p>
          <Link href="#stories"
              className="
              bg-[#186CE1] text-white font-normal text-center text-sm
              mt-5 md:mt-0
              px-6 py-3 md:px-8 md:py-3 lg:py-2
              w-fit
              mx-auto
              rounded-xl
              ">
            Get Started
          </Link>
        </div>
        <div className="relative w-full md:h-[400px] hidden lg:block mb-20">
          {/* Image 1 */}
          <div className="absolute bottom-[100%] left-0 w-[200px] h-[300px] lg:w-[240px] md:h-[280px]">
            <Image src={dum} alt="Placeholder Image 1" layout="fill" className="object-cover rounded-xl shadow-lg shadow-gray-400/50" />
          </div>

          {/* Image 2 */}
          <div className="absolute top-2 left-[20%] w-[200px] h-[300px] lg:w-[240px] md:h-[280px]">
            <Image src={dum} alt="Placeholder Image 2" layout="fill" className="object-cover rounded-xl shadow-lg shadow-gray-400/50" />
          </div>

          {/* Image 3 */}
          <div className="absolute bottom-[100%] right-0 w-[200px] h-[300px] lg:w-[240px] md:h-[280px]">
            <Image src={dum} alt="Placeholder Image 3" layout="fill" className="object-cover rounded-xl shadow-lg shadow-gray-400/50" />
          </div>

          {/* Image 4 */}
          <div className="absolute top-2 right-[20%] w-[200px] h-[300px] lg:w-[240px] md:h-[280px]">
            <Image src={dum} alt="Placeholder Image 4" layout="fill" className="object-cover rounded-xl shadow-lg shadow-gray-400/50" />
          </div>
        </div>
      </div>

      <div>
      <hr className="md:hidden border-t border-gray-300 my-14 mx-4" />
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
            font-bold text-[#3D3D3D] text-700 text-xl md:text-3xl
            
            mx-auto">
              Keunggulan Kami
          </h1>
          <div className="
          flex justify-center align-center mt-10 w-full
          ">
            {/* Img */}
            <div className="hidden md:flex w-full lg:w-3/12 mx-10 lg:mx-20 relative">
              <Image 
                src={Stories} 
                alt="Palapa" 
                fill 
                className="rounded-xl shadow-lg object-cover shadow-gray-400/50"
              />
            </div>
            {/* Lists */}
            <div className="space-y-6 max-w-2xl w-6/12 mx-4 md:mr-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-18 h-18 p-2 bg-[#E7F0FD] rounded-full flex items-center justify-center text-center shrink-0">
                  <feature.Icon className="text-blue-500 text-lg md:text-xl" />
                </div>

                <div>
                  <h3 className="font-bold text-2xl text-[#3D3D3D]">{feature.title}</h3>
                  <p className="my-2 md:my-0 font-normal text-base md:text-base text-[#3D3D3D]">{feature.description}</p>
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

          <h3 className="
            w-fit
            mx-auto
            px-6 py-3
            rounded-lg
            bg-[#E7F0FD]
            text-[#639DF7] text-sm font-medium">
              Client Kami
          </h3>

          <h1 className="
            px-3 
            font-bold text-[#3D3D3D] text-700 text-xl md:text-3xl
            
            mx-auto">
              Client Kebanggan Kami
          </h1>
          <div className="flex justify-around gap-5 md:gap-20 mx-auto mt-6">
            <Image src={Client_Kementrian} alt="Logo Kementrian" className="w-36 h-36 md:h-56 md:w-56" />
            <Image src={Client_Lapas} alt="Logo Lapas" className="w-40 h-40 md:h-64 md:w-64"/>
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