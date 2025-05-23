"use client";
import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IkhlasDisplay from "../components/IkhlasMap";

import Image from "next/image";
import About1 from "../assets/ImageUs1.jpg";
import About2 from "../assets/ImageUs2.jpg";

import { RiRocket2Line, RiFocus2Line, RiCheckboxCircleFill } from "react-icons/ri";

const partnerships = [
  {
    title: "Pendirian dan Visi Awal",
    year: 2005,
    description: "PT. Palapa Teknologi Indonesia, berdiri sejak 26 September 2005 dan fokus pada layanan teknologi informasi serta perdagangan perangkat lunak. Perusahaan ini menyediakan solusi telekomunikasi yang aman, legal, dan terintegrasi."
  },
  {
    title: "Penyelenggaraan Wartelsus (Warung Telekomunikasi Khusus)",
    year: 2008,
    description:
      "Petunjuk Pelaksana Direktur Bina Keamanan dan Ketertiban Direktorat Jenderal Pemasyarakatan No : PAS.6.OT.03,01- 12 Tahun 2008 tentang Penyelenggaraan Telekomunikasi Khusus (Wartelsus) Pada Lembaga Pemasyarakatan, Rumah Tahanan Negara dan Cabang Rumah Tahanan Negara di Seluruh Indonesia",
  },
  {
    title: "Peningkatan Teknologi dan Informasi Integrasi Wartelsus (I-wartelsus)",
    year: 2012,
    description:
      "Perjanjian Kerjasama antara Direktorat Bina Keamanan dan Ketertiban Direktorat Jenderal Pemasyarakatan dengan PT. Palapa Teknologi Indonesia, nomor : PAS2.DL.02.02.03-249 dan nomor 001/PTI–DTJENPAS/IV /2012, tanggal 05 September 2012 tentang Peningkatan Teknologi Telekomunikasi dan Informasi Integrated Wartelsus (I-Wartelsus) Pada Kantor Pusat Direktorat Jenderal Pemasyarakatan, Divisi Pemasyarakatan dan Unit Pelaksana Teknis Pemasyarakatan di Seluruh Indonesia.",
  },
  {
    title: "Pembangunan, Penegmbangan dan Pendampingan pemasyarakatan berbasis Teknologi Informasi",
    year: 2016,
    description:
      "Nota Kesepahaman antara Direktorat Jenderal Pemasyarakatan dan PT. Palapa Teknologi Indonesia, nomor PAS-31.HM.05.03 Th 2016 dan nomor PTI-DITJENPAS/MOU/2016/IV-001, tanggal 27 April 2016 tentang Pembangunan, Pengembangan dan Pendampingan Serta Pengaman Sistem Telekomunikasi dalam rangka layanan Pemasyarakatan berbasis Teknologi Informasi.",
  },
  {
    title: "Optimalisasi Iwartelsus dan IMC Pas (Integrated Monitoring Center Pemasyarakatan)",
    year: 2021,
    description:
      "Perjanjian Kerjasama  Antara Direktorat Jenderal Pemasyarakatan Kementrian Hukum dan Hak Asasi Manusia dengan PT. Palapa Teknologi  Indonesia Nomor  PAS-10.HH.05.05 Tahun 2021 dan No 013/PKS-DITJENPAS/IV/2021 tanggal 27 April 2021 tentang Optimalisasi I-Wartelsus dan Pemanfaatan IMC PAS Sebagai Sarana Monitoring dan Deteksi Dini Pemasyarakatan",
  },
];

export default function AboutUs() {
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".timeline-item");
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
          setVisibleSections(prev => {
            if (!prev.includes(index)) {
              return [...prev, index];
            }
            return prev;
          });
        } else {
          setVisibleSections(prev => prev.filter(i => i !== index));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    return (
      <div className="w-full overflow-hidden">
        <Navbar/>
        {/* Tentang Kami */}
        <div className="mt-4 flex flex-col mx-6 md:mx-10 items-center justify-center">
          <div 
            className="
              flex flex-col 
              justify-center
              gap-3
              mt-0 md:mt-12
              py-0 md:py-12 lg:py-24
              text-[#002453]"
            >

              <h1 className="
              px-3 
              font-bold text-[#3D3D3D] text-700 text-5xl md:text-6xl
              
              mx-auto">
                Tentang Kami
            </h1>
            {/* Content */}
            <div className="flex flex-col md:flex-row items-start justify-center gap-12 mt-10">
              <div className="hidden md:flex relative w-6 h-6 md:w-[300px] lg:w-[465px] md:h-[250px] rounded-xl overflow-hidden shadow-md">
                <Image src={About1} alt="About 1" fill className="object-cover rounded-xl" />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-lg md:text-xl lg:text-2xl w-full md:w-full font-semibold md:font-bold text-[#3D3D3D] border-l-2 border-blue-500 pl-2">
                  Peran Strategis Palapa Teknologi dalam Telekomunikasi Pemasyarakatan
                </h3>
                <p className="mt-2 md:text-base text-[#3D3D3D] text-justify">
                PT. Palapa Teknologi Indonesia didirikan secara resmi pada 26 September 2005 dan bergerak di bidang perdagangan besar piranti lunak serta layanan teknologi informasi dan komunikasi. Sebagai anak perusahaan dari PT. Pasopati Nusantara Holding Company, Palapa Teknologi memiliki peran strategis dalam menyediakan solusi telekomunikasi yang aman, legal, dan terintegrasi.
                </p>
              </div>
            </div>

            {/* Content duaa */}
            <div className="flex flex-col md:flex-row items-start justify-center gap-12 mt-10 md:mt-0">
              <div className="hidden md:flex relative w-full md:w-[300px] lg:w-[465px] h-[320px] rounded-xl overflow-hidden shadow-md">
                <Image src={About2} alt="About 2" fill className="object-cover  rounded-xl" />
              </div>

              <div className="md:w-1/2">
                <h3 className="text-lg md:text-xl lg:text-2xl w-full font-semibold text-[#3D3D3D] border-l-2 border-blue-500 pl-2">
                  Komitmen Terhadap Komunikasi Aman dan Terpantau di Lapas & Rutan
                </h3>
                <p className="mt-2 md:text-base text-[#3D3D3D] text-justify">
                  Palapa Teknologi berfokus pada penyediaan sarana komunikasi yang mendukung kebutuhan Warga Binaan Pemasyarakatan (WBP) di Lembaga Pemasyarakatan (Lapas) dan Rumah Tahanan Negara (Rutan) di seluruh Indonesia. Perusahaan ini berkomitmen untuk mengembangkan layanan berbasis teknologi informasi yang memungkinkan WBP dapat berkomunikasi dengan dunia luar secara sah dan terpantau, sekaligus mendukung keamanan dan pengawasan di lingkungan pemasyarakatan.
                </p>
                <h3 className="text-lg mt-8 md:text-xl lg:text-2xl w-full font-semibold text-[#3D3D3D] border-l-2 border-blue-500 pl-2">
                  Dukungan pencegahan gangguan keamanan dan ketertiban di lingkungan UPT Pemasyarakatan
                </h3>
                <p className="mt-2 md:text-base text-[#3D3D3D] text-justify">
                  Dengan inovasi yang terus berkembang, Palapa Teknologi menjadi mitra penting bagi pemerintah dalam mewujudkan pemasyarakatan yang lebih transparan, aman, dan efisien, serta mendukung tugas pokok Direktorat Jenderal Pemasyarakatan (Ditjenpas) dalam menjaga ketertiban dan mencegah peredaran narkoba dan pelanggaran hukum lainnya.
                </p>
              </div>
            </div>
          </div>
        </div>

                {/* VISI MISII */}
        <div className="py-12 md:px-28 lg:px-40 md:bg-[#F1F6FE] mt-24 flex flex-col justify-center">
          <h1 className="
              font-bold text-[#3D3D3D] text-700 text-5xl md:text-6xl
              mb-10 md:mb-6
              mx-auto">
                Visi & Misi
          </h1>

          {/* Content */}
          {/* Visi & Misi */}
          <div className="space-y-6 bg-[#F1F6FE] py-6 px-6 md:mt-3">
            {/* Visi */}
            <div className="bg-[#FFF] p-6 rounded-xl flex gap-4 w-full lg:w-3/4 justify-left mx-auto">
            <RiRocket2Line className="text-2xl text-[#fff] bg-[#3882F5] rounded-full p-2 w-10 h-10 shrink-0" />
              <div className="flex flex-col gap-2 mb-2">
                <h3 className="text-3xl font-semibold text-[#3D3D3D] mt-3 md:mt-0">Visi</h3>
                <p className="text-lg text-[#3D3D3D]">
                  Menjadi penyedia layanan telekomunikasi dan Informasi handal
                  dan terpercaya dengan kinerja prima yang berkelanjutan di Indonesia
                </p>
              </div>
              
            </div>

            {/* Misi */}
            <div className="bg-[#FFF] p-6 rounded-xl flex gap-4 w-full lg:w-3/4 justify-left mx-auto">
              <RiFocus2Line className="p-2 w-10 h-10 shrink-0 text-[#fff] bg-[#FF4255] rounded-full" />
              <div className="flex flex-col gap-2 mb-2 mt-4 md:mt-1">
                <h3 className="text-3xl font-semibold text-[#3D3D3D]">Misi</h3>
                <ul className="space-y-4 mt-2">
                <li className="flex items-center md:items-start gap-2">
                  <RiCheckboxCircleFill className="text-[#3882F5] bg-[#E7F0FD] rounded-full p-1 w-7 h-7 shrink-0" />
                  <span className="text-lg text-[#3D3D3D] md:mt-1 xl:mt-0">Menjadi solusi teknologi informasi dan komunikasi bagi lingkungan tertutup/terbatas.</span>
                </li>
                <li className="flex items-center md:items-start gap-2">
                  <RiCheckboxCircleFill className="text-[#3882F5] bg-[#E7F0FD] rounded-full p-1 w-7 h-7 shrink-0" />
                  <span className="text-lg text-[#3D3D3D] md:mt-1 xl:mt-0">Mewujudkan sistem terintegrasi dengan pelayanan terbaik</span>
                </li>
                <li className="flex items-center md:items-start gap-2">
                  <RiCheckboxCircleFill className="text-[#3882F5] bg-[#E7F0FD] rounded-full dp-1 w-7 h-7 shrink-0" />
                  <span className="text-lg text-[#3D3D3D] md:mt-1 xl:mt-0">Menghadirkan teknologi informasi dan komunikasi dengan inovasi yang unggul</span>
                </li>
              </ul>
              </div>
              
              </div>
          </div>
        </div>
        
        {/* Hasil dan Kerjaasama */}
        <div className="
            mr-6 md:mx-14 lg:mx-40 mt-24">
          <h1 className="
              font-bold text-[#3D3D3D] text-700 text-5xl md:text-6xl
              flex
              my-6
              mx-auto">
                Kerjasama dan Pengembangan
            </h1>
          {/* Content */}
          <div className="flex gap-6 flex-row-reverse md:flex-row ">
            {/* Text */}
            <div className='mt-12 w-full flex flex-col gap-10 border-l-4 border-[#639DF7] pl-6 relative'>
              {partnerships.map((item, index) => (
                  <div key={index} className={`timeline-item flex flex-col md:flex-row items-start gap-6 opacity-0 transition-opacity duration-700 ease-in-out ${visibleSections.includes(index) ? 'opacity-100' : ''}`}>
                  {/* Bullet Circle */}
                  <div className='absolute left-[-18px] w-8 h-8 bg-[#639DF7] rounded-full'></div>
                  <span className='text-xl font-bold text-[#2B313B]'>{item.year}</span>
                  <div className='flex flex-col md:flex-row items-start gap-6 bg-white shadow-md p-6 rounded-lg w-full border border-gray-200'>

                    <div className='flex flex-col gap-4 xl:gap-6'>
                        <span className='border-l-4 border-[#639DF7] pl-3 py-0 flex flex-col gap-1'>                        
                            <h3 className='font-semibold text-3xl text-[#2B313B]'>{item.title}</h3>
                        </span>
                      <p className='text-neutral-600 text-base md:text-xl font-medium md:w-11/12'>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Company Values */}
        <div className="
            md:mx-14 lg:mx-40 mt-24 flex flex-col gap-6">

          <IkhlasDisplay />
        </div>

        <Footer/>
      </div>
    );
}