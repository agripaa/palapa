"use client";
import Image from "next/image";


import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Stories from "../assets/ImageUnggul.jpg";

import Product1 from "../assets/iWartel.png";
import Product2 from "../assets/Imcpas.png";
import Product3 from "../assets/Paypas.png";

import { FaCheckCircle } from 'react-icons/fa';
import { RiMoneyDollarCircleLine, RiStackshareLine, RiHandCoinLine, RiGroup2Line } from "react-icons/ri";

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


export default function Product() {
   
    return (
      <div id="heroSection" className="w-full font-inter ">
        <Navbar/>
        <div className="flex flex-col mx-6 md:mx-10 mt-20 md:mt-36 items-center">
          <div 
            className="
              flex flex-col 
              justify-center
              gap-6
              text-[#002453]"
            >

              <h1 className="
              px-3 
              font-bold text-[#3D3D3D] text-700 text-4xl
              text-center
              mx-auto">
                Solusi Digital Terdepan Untuk<br/>Komunikasi Efektif 
            </h1>

            {/* OUR PRODUCT TABLET & DESKTOP*/}
                  <div className="flex flex-col md:px-6 lg:px-14 md:flex overflow-visible">
            
                    {/* WARTELSUS */}
                    <div className="flex flex-col-reverse md:flex-row-reverse mt-10 gap-4 md:gap-16"
                    >
                      <div className="flex flex-col md:flex-col w-full md:w-[50%] text-[#3D3D3D] text-xl">
                        <h1 className="text-3xl lg:text-4xl font-semibold text-[#3D3D3D] mt-20 md:mt-10">I-Wartelsus</h1>
                        <p className="mt-5 text-lg">adalah Integrated Warung Telekomunikasi Khusus yaitu fasilitas telekomunikasi
                          berbasis teknologi data yang terintegrasi on line secara nasional dalam sistem komunikasi
                          berbentuk voice call dan video call serta layanan komunikasi dan informasi lainnya, sebagai
                          media komunikasi legal yang terpantau, aman, nyaman dan tidak melanggar ketentuan yang
                          berlaku bagi Warga Binaan Pemasyarakatan pada Unit Pelaksana Teknis Pemasyarakatan.</p>
                       
                      </div>
            
                      
                      <div className="relative flex justify-center items-center w-3/4 mx-auto md:w-[40%] py-0">
                      <div className="absolute -z-10 w-3/4 h-3/4 bg-blue-200 opacity-100 blur-3xl rounded-full"></div> {/* Efek Glow */}
                        <div className="glass-white rounded-xl p-6  shadow-[10px_20px_80px_rgba(80,110,255,0.5)]">
                          <Image src={Product1} objectFit="contain" alt="I-Wartelsus" className="h-auto text-center  rounded-xl  " />
                        </div>
                      </div>
                    </div>
            
                    {/* IMC PAS */}
                    <div className="flex flex-col-reverse md:flex-row mt-20 gap-4 md:gap-16"
                    >
                      <div className="flex flex-col md:w-[50%] text-[#3D3D3D] text-xl">
                        <h1 className="text-3xl lg:text-4xl font-semibold text-[#3D3D3D] mt-20 md:mt-10">IMC Pas (Integrated Monitoring Pemasyarakatan Center)</h1>
                        <p className="mt-5 text-lg">adalah fasilitas pusat pemantauan berbasis teknologi data yang terintegrasi on line
                        secara nasional sebagai media monitoring dan deteksi dini Pemasyarakatan. Fasilitas ini
                        berbasis teknologi informasi yang terhubung secara online di seluruh wilayah nasional,
                        memungkinkan pemantauan secara terintegrasi. IMC Pas bertujuan untuk meningkatkan
                        efektivitas pengawasan, meminimalkan risiko, serta memastikan pelaksanaan program
                        pembinaan dan pengawasan yang lebih optimal di lingkungan pemasyarakatan. Sebagai media
                        monitoring, IMC Pas berfungsi untuk memberikan data yang real-time dan mendukung
                        pengambilan keputusan yang tepat dalam sistem pemasyarakatan.</p>
                      </div>
            
                      
                      <div className="relative flex justify-center items-center w-3/4 md:w-[40%] mx-auto py-0">
                      <div className="absolute -z-10 w-3/4 h-3/4 bg-blue-200 opacity-100 blur-3xl rounded-full"></div> {/* Efek Glow */}
                        <div className="glass-white rounded-xl p-6  shadow-[10px_20px_80px_rgba(80,110,255,0.5)]">
                          <Image src={Product2} objectFit="contain" alt="I-Wartelsus" className="h-auto text-center  rounded-xl  " />
                        </div>
                      </div>
                    </div>
            
                    {/* PAYPAS */}
                    <div className="flex flex-col-reverse md:flex-row-reverse my-20 mt-20 lg:mt-40 gap-4 md:gap-16"
                    >
                      <div className="flex flex-col md:w-[50%] text-[#3D3D3D] text-xl">
                        <h1 className="text-3xl lg:text-4xl font-semibold text-[#3D3D3D] mt-20 md:mt-0 lg:mt-10">Paypas (Payment Pemasyarakatan)</h1>
                        <p className="mt-5 text-lg">Paypas (Payment Pemasyarakatan) adalah sistem pembayaran elektronik yang memanfaatkan
                          virtual account dan teknologi biometrik untuk memastikan transaksi yang aman, efisien, dan
                          terkontrol di lingkungan pemasyarakatan.</p>
                      </div>
            
                      
                      <div className="relative flex justify-center items-center w-3/4 md:w-[40%] mx-auto py-0">
                      <div className="absolute -z-10 w-3/4 h-3/4 bg-blue-200 opacity-100 blur-3xl rounded-full"></div> {/* Efek Glow */}
                        <div className="glass-white rounded-xl p-6  shadow-[10px_20px_80px_rgba(80,110,255,0.5)]">
                          <Image src={Product3} objectFit="contain" alt="I-Wartelsus" className="h-auto text-center  rounded-xl  " />
                        </div>
                      </div>
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
              font-bold text-[#3D3D3D] text-700 text-4xl
              
              mx-auto">
                Keunggulan Kami
            </h1>
            <div className="
            flex justify-center align-start mt-10 w-full
            ">
              <div className="space-y-6 max-w-5xl w-full mx-4 md:mr-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-18 h-18 p-2 bg-[#E7F0FD] rounded-full flex items-center justify-center text-center shrink-0">
                    <feature.Icon className="text-blue-500 text-3xl" />
                  </div>

                  <div className="flex flex-col gap-1">
                    <h3 className="font-bold text-2xl text-[#3D3D3D]">{feature.title}</h3>
                    <p className="my-2 md:my-0 font-normal text-base md:text-lg text-[#3D3D3D]">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            </div>
        </div>
      </div>
        </div>
        <Footer />


        
      </div>
    );
}