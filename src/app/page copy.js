"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Herobg from "./assets/Frame 224.png";
import MbHerobg from "./assets/mobileBG.png"
import Product1 from "./assets/iWartel.png";
import Product2 from "./assets/Imcpas.png";
import Product3 from "./assets/Paypas.png";
import IkhlasDisplay from "./components/IkhlasMap";
import Footer from "./components/Footer";
import Contact from "./components/Contact"
import Logo from "./assets/Logo.png";
import { IoGitBranchOutline } from "react-icons/io5";
import { TbDeviceMobileUp } from "react-icons/tb";
import { LuHeartHandshake } from "react-icons/lu";
import { PiRocketLaunch, PiCheckCircleFill  } from "react-icons/pi";

import { useState } from "react";
import { useEffect } from "react";
import ModalAboutUs from "./components/ModalAboutUs";
import ModalCooperation from "./components/ModalCooperation";
import CardCarousel from "./components/Product";
import ModalProducts from "./components/ModalProducts";
import KitoButtons from "./components/MoveButton";
import DataClient from "./components/DataClient";
import MarqueeButton from "./components/MoveButtons";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

export default function Home() {
  const [activeModal, setActiveModal] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCooperationModalOpen, setIsCooperationModalOpen] = useState(false);  

  const modals = {
    wartelsus: {
      title: "I-Wartelsus",
      imageSrc: Product1,
      description:
        "I-Wartelsus adalah Integrated Warung Telekomunikasi Khusus yaitu fasilitas telekomunikasi berbasis teknologi data yang terintegrasi on line secara nasional dalam sistem komunikasi berbentuk voice call dan video call serta layanan komunikasi dan informasi lainnya, sebagai media komunikasi legal yang terpantau, aman, nyaman dan tidak melanggar ketentuan yang berlaku bagi Warga Binaan Pemasyarakatan pada Unit Pelaksana Teknis  Pemasyarakatan",
    },
    imcPas: {
      title: "IMC PAS",
      imageSrc: Product2,
      description:
        "IMC PAS adalah fasilitas pusat pemantauan berbasis teknologi data yang terintegrasi on line secara nasional sebagai media monitoring dan deteksi dini Pemasyarakatan. Fasilitas ini berbasis teknologi informasi yang terhubung secara online di seluruh wilayah nasional, memungkinkan pemantauan secara terintegrasi. IMC Pas bertujuan untuk meningkatkan efektivitas pengawasan, meminimalkan risiko, serta memastikan pelaksanaan program pembinaan dan pengawasan yang lebih optimal di lingkungan pemasyarakatan. Sebagai media monitoring, IMC Pas berfungsi untuk memberikan data yang real-time dan mendukung pengambilan keputusan yang tepat dalam sistem pemasyarakatan",
    },
    payPas: {
      title: "Pay PAS",
      imageSrc: Product3,
      description:
        "Paypas (Payment Pemasyarakatan) adalah sistem pembayaran elektronik yang memanfaatkan virtual account dan teknologi biometrik untuk memastikan transaksi yang aman, efisien, dan terkontrol di lingkungan pemasyarakatan.",
    },
  };

  useEffect(() => {
    AOS.init({
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', 
    });
  }, []);


  return (
    <div id="heroSection" className="w-full font-inter overflow-hidden">
      <Navbar/>
      {/* HERO SECTION */}
      <div className="flex flex-col 2xl:justify-center 2xl:items-start text-left items-left w-full 2xl:h-screen">
        <Image src={Logo} width={100} height={100} alt="Palapa" className="p-5 md:hidden"/>
        <Image src={Herobg} 
          alt="Hero Background" 
          objectFit="contain" 
          // objectPosition="bottom right" 
          // style={{ height: "55%", width: "45%"}}
          className="absolute top-32 2xl:top-auto 2xl:bottom-0 right-0 opacity-60 w-[45%] md:w-[55%] lg:w-[60%] 2xl:w-[65%] hidden md:flex" 
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"/>
        <div 
        className="flex flex-col w-full justify-center w-full sm:w-full lg:mt-20 xl:mt-0 md:w-3/5 lg:w-1/2 xl:w-1/2 text-[#002453]"
        // data-aos="fade-right"
        // data-aos-offset="200"
        // data-aos-delay="50"
        // data-aos-duration="1000"
        // data-aos-easing="ease-in-out"
        // data-aos-mirror="true"
        // data-aos-once="false"
        // data-aos-anchor-placement="top-bottom">
        >
          <h1 className="pt-10 px-3 md:px-6 lg:px-10 xl:px-10 font-bold text-700 text-xl sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl mt-10 sm:mt-10 md:mt-32 lg:mt-38 xl:mt-48 2xl:mt-auto">
            Sarana Telekomunikasi Legal Pemasyarakatan
          </h1>
          <Image src={MbHerobg}
          alt="Background"
          objectFit="contain"
          className="block md:hidden opacity-70 mt-0"/>
          <p className="font-medium text-xs md:text-sm lg:text-[14px] xl:text-xl px-5 md:px-6 lg:px-10 xl:px-10 mt-5 w-full sm:w-full md:w-[80%] lg:w-[100%] xl:w-[80%] ">
            Palapa Telah Hadir dibidang teknologi komunikasi moderen dan lebih efisien,
            kami siap membantu anda dalam masalah komunikasi
          </p>
          <Link href="#contactSection"
              className="bg-[#5091EC] text-white font-normal text-center py-2 xl:py-3 px-1 xl:px-0 mx-4 md:mx-6 lg:mx-10 xl:mx-10 xl:mx-10 rounded-xl w-[30%] md:w-[25%] lg:w-1/4 xl:w-[20%] mt-5 text-[10px] md:text-[12px] lg:text-md xl:text-[15px]">
            Temukan Kami
          </Link>
        </div>
      </div>

      {/* ABOUT US */}
      <div id="aboutSection" className="flex flex-col mt-10 md:mt-24 lg:mt-40 xl:mt-32 2xl:mt-0 pt-16 px-5 w-full" 
      >
        <h1 className="text-[#002453] flex text-xl md:text-2xl xl:text-3xl font-bold mt-10 md:mt-0 lg:mt-40 xl:mt-40 justify-center" 
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="200"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom">Tentang Kami</h1>
        <div className="flex flex-row gap-8 mt-5 md:mt-8 xl:mt-12 text-lg items-start justify-center md:pl-5">
          <div className="flex-none w-8 md:w-7 lg:w-8 xl:w-10 h-8 md:h-7 lg:h-8 xl:h-10 flex mt-4 lg:mt-3 items-center justify-center rounded-full bg-[#E4EEFF] ring-8 ring-blue-100 backdrop-blur-lg hidden md:flex"
          data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="200"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom">
              <PiRocketLaunch className="text-blue-400 w-5 md:w-4 xl:w-6 h-4 md:h-4 xl:h-5 items-center" />
          </div>


          <div className="w-full sm:w-full md:w-[90%] xl:w-[90%]">
            <p className="text-[#0A2E61] text-xs md:text-[10px] lg:text-[14px] xl:text-xl w-full md:w-[95%] lg:w-[92%] lg:w-[95%] mt-1"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom"><strong>Palapa Teknologi</strong> didirikan secara resmi pada 26 September 2005 dan bergerak di bidang
              perdagangan besar piranti lunak serta layanan teknologi informasi dan komunikasi. Sebagai anak
              perusahaan dari PT. Pasopati Nusantara Holding Company, Palapa Teknologi memiliki peran strategis 
              dalam menyediakan solusi telekomunikasi yang aman, legal, dan terintegrasi.</p>
              <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-500 text-white p-3 xl:p-2 text-[10px] xl:text-[15px] rounded-xl w-[35%] md:w-[15%] lg:w-[13%] xl:w-[13%] mt-5 md:mt-8 lg:mt-10 xl:mt-12 text-center py-1"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
              data-aos-anchor-placement="top-bottom">
            Selengkapnya
              </button>
        <ModalAboutUs isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </div>  
        </div>
        
      </div>

      {/* VISION & MISSION */}
      <div className="px-6 md:px-6 xl:px-10 w-full bg-[#F5F5F5]" 
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom"
    >
        <div className="VISI flex flex-col gap-3 text-[#002453] sm:gap-3 md:gap-10 mt-10 py-10">
          <h1 className="text-xl md:text-2xl xl:text-3xl font-bold ">Visi Kami</h1>
          <p className="text-xs md:text-md lg:text-[15px] xl:text-xl md:w-[80%] lg:w-3/4 xl:w-[65%]"><strong>Palapa Teknologi</strong> memiliki visi untuk menjadi penyedia layanan telekomunikasi dan Informasi handal
          dan terpercaya dengan kinerja prima yang berkelanjutan di Indonesia</p>
        </div>
      </div>

      <div className="px-5 md:px-8 xl:px-10 w-full text-[#0A2E61] md:w-3/5 lg:w-[45%] xl:w-[45%]" 
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom">
        <div className="MISI flex flex-col gap-5 mt-5 md:mt-10 w-full text-xs lg:text-[15px] xl:text-xl">
          <h1 className="text-2xl md:text-2xl xl:text-3xl font-bold">Misi Kami</h1>
          <div className="flex flex-col md:flex-row items-left md:items-center gap-3 mt-4 md:mt-5 xl:mt-5">
            <div className="flex-none w-6 h-6 md:w-7 md:h-7 lg:w-6 lg:h-6 xl:w-8 xl:h-8 flex items-center justify-center mx-2 rounded-full bg-blue-100 ring-4 ring-blue-200 backdrop-blur-lg">
              <IoGitBranchOutline className="text-blue-400 w-4 xl:w-5 h-4 xl:h-5" />
            </div>
            <p className="font-medium">Menjadi solusi teknologi informasi dan komunikasi 
              bagi lingkungan tertutup/terbatas.</p>
          </div>
          <div className="flex flex-col md:flex-row items-left md:items-center gap-3 mt-2">
            <div className="flex-none  w-6 h-6 md:w-7 md:h-7 lg:w-6 lg:h-6 xl:w-8 xl:h-8 flex items-center justify-center mx-2 rounded-full bg-blue-100 ring-4 ring-blue-200 backdrop-blur-lg">
              <TbDeviceMobileUp className="text-blue-400 w-4 xl:w-5 h-4 xl:h-5" />
            </div>
            <p className="font-medium">Menghadirkan teknologi informasi dan komunikasi dengan inovasi yang unggul</p>
          </div>
          <div className="flex flex-col md:flex-row items-left md:items-center gap-3 mt-2">
            <div className="flex-none  w-6 h-6 md:w-7 md:h-7 lg:w-6 lg:h-6 xl:w-8 xl:h-8 flex items-center justify-center mx-2 rounded-full bg-blue-100 ring-4 ring-blue-200 backdrop-blur-lg">
                <LuHeartHandshake className="text-blue-400 w-4 xl:w-5 h-4 xl:h-5" />
            </div>
            <p id="productSection" className="font-medium">Menyajikan sistem terintegrasi dengan pelayanan terbaik</p>
          </div>
        </div>
      </div>

      {/* OUR PRODUCT TABLET & DESKTOP*/}
      <div className="flex flex-col px-14 mt-20 hidden md:flex">
        <h1 className="text-center mt-10 md:mt-5 lg:mt-0 lg:mb-16 text-3xl md:text-2xl xl:text-3xl font-bold">Our Product</h1>

        {/* WARTELSUS */}
        <div className="flex flex-row xl:mt-2"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom">
          <div className="flex flex-col w-[50%] text-gray-500 text-xl">
            <h1 className="text-4xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-700 mt-20 lg:mt-10">I-Wartelsus</h1>
            <h2 className="text-xl md:text-sm lg:text-lg xl:text-2xl font-bold text-gray-700 mt-3">{"(Integrated WarungTelekomunikasi Khusus)"}</h2>

            <p className="mt-5 text-lg md:text-xs lg:text-[15px] xl:text-xl xl:w-[85%]">adalah fasilitas telekomunikasi berbasis teknologi data yang terintegrasi 
              online secara nasional. Sistem komunikasi ini mencakup voice call, video call,
               serta layanan komunikasi dan informasi lainnya....</p>
            <button className="rounded-xl bg-[#4790F5] lg:mt-5 xl:mt-10 text-white w-[40%] lg:w-[35%] xl:w-[30%] py-3 mt-3 lg:text-sm md:text-xs xl:text-lg"
            onClick={() => setActiveModal("wartelsus")}
            >Lihat lebih detail</button>
          </div>

          
          <div className="relative flex justify-center items-center w-[50%] py-0">
            <div className="absolute -z-10 w-3/4 h-3/4 bg-blue-100 opacity-100 blur-3xl rounded-full"></div> {/* Efek Glow */}
            
            <div className="w-[70%] md:w-[90%] h-[60%] md:h-[45%] lg:h-[65%] xl:h-[65%] bg-white/10 backdrop-blur-none 
                            rounded-lg shadow-[30px_0px_50px_rgba(80,110,255,0.3)] 
                            flex justify-center items-center py-0 2xl:py-40">
              <Image src={Product1} objectFit="contain" alt="I-Wartelsus" className="w-[80%] h-auto rounded-xl shadow-[30px_-10px_50px_rgba(80,110,255,0.3)]" />
            </div>
          </div>
        </div>

        {/* IMC PAS */}
        <div className="flex flex-row space-x-10 xl:mt-40" data-aos="fade-left"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom">
          <div className="relative flex justify-center items-center w-[50%] md:mt-16">
            <div className="absolute -z-10 w-3/4 h-3/4 bg-blue-200 opacity-100 blur-3xl rounded-full"></div> {/* Efek Glow */}
            
            <div className="w-[70%] md:w-[90%] h-[60%] md:h-[55%] lg:h-[75%] xl:h-[75%] backdrop-blur-none 
                            rounded-lg shadow-[30px_0px_50px_rgba(80,110,255,0.3)] 
                            flex justify-center items-center 2xl:py-40">
              <Image src={Product2} objectFit="contain" alt="I-Wartelsus" className="w-[80%] h-auto rounded-xl shadow-[30px_-10px_50px_rgba(80,110,255,0.3)]" />
            </div>
          </div>

          <div className="flex flex-col w-[50%]"> 
            <h1 className="text-4xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-700 mt-20">IMC PAS</h1>
            <h2 className="text-xl md:text-[13px] lg:text-lg xl:text-2xl font-bold text-gray-700 mt-3">{"Integrated Monitoring Pemasyarakatan Center"}</h2>

            <p className="mt-5 text-lg md:text-xs lg:text-[15px] xl:text-xl">adalah fasilitas pusat pemantauan berbasis teknologi data yang terintegrasi 
                  on line secara nasional sebagai media monitoring dan deteksi dini Pemasyarakatan...</p>
                  <button 
                  onClick={() => setActiveModal("imcPas")}
                  className="rounded-xl bg-[#4790F5] lg:mt-5 xl:mt-10 text-white w-[40%] lg:w-[35%] xl:w-[30%] py-3 mt-3 lg:text-sm md:text-xs xl:text-lg">Lihat lebih detail</button>
          </div>
        </div>

        {/* PAYPAS */}
        <div className="flex flex-row" 
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom">
          <div className="flex flex-col w-[50%] md:mt-16 xl:mt-40">
          <h1 className="text-4xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-700 mt-20">Paypas</h1>
          <h2 className="text-xl md:text-sm lg:text-lg xl:text-2xl font-bold text-gray-700 mt-3">{"Payment Pemasyarakatan"}</h2>

          <p className="mt-5 text-lg md:text-xs lg:text-[15px] xl:text-xl xl:w-[90%]">Paypas (Payment Pemasyarakatan) adalah sistem pembayaran elektronik yang 
              memanfaatkan virtual account dan teknologi biometrik untuk memastikan transaksi yang aman,
               efisien, dan terkontrol di lingkungan pemasyarakatan ...</p>
               <button 
               onClick={() => setActiveModal("payPas")}
               className="rounded-xl bg-[#4790F5] lg:mt-5 xl:mt-10 text-white w-[40%] lg:w-[35%] xl:w-[30%] py-3 mt-3 lg:text-sm md:text-xs xl:text-lg">Lihat lebih detail</button>
          </div>

          <div className="relative flex justify-center items-center w-[50%] mt-20 xl:mt-40">
            <div className="absolute -z-10 w-3/4 h-3/4 bg-blue-200 opacity-100 blur-3xl rounded-full"></div> {/* Efek Glow */}
            
            <div className="w-[70%] md:w-[90%] h-[60%] md:h-[45%] lg:h-[60%] xl:h-[55%] bg-white/10 backdrop-blur-none 
                            rounded-lg shadow-[30px_0px_50px_rgba(80,110,255,0.3)] 
                            flex justify-center items-center 2xl:py-40">
              <Image src={Product3} objectFit="contain" alt="I-Wartelsus" className="w-[80%] h-auto rounded-xl shadow-[30px_-10px_50px_rgba(80,110,255,0.3)]" />
            </div>
          </div>

        </div>
        
      </div>

      {/* PRODUCT FOR MOBILE */}
      <div className="md:hidden">
        <CardCarousel setActiveModal={setActiveModal} />
      </div>

      {activeModal && (
        <ModalProducts
          isOpen={!!activeModal}
          onClose={() => setActiveModal(null)}
          title={modals[activeModal].title}
          imageSrc={modals[activeModal].imageSrc}
          description={modals[activeModal].description}
        />
        )}

      {/* CLIENT */}
      <div className="flex flex-col mt-0 pt-4 md:pt-0 md:mt-20 gap-0 md:gap-6 items-center bg-gray-100">
        <h1 className="text-center mt-2 md:mt-4 text-lg sm:text-xl md:text-2xl font-bold">Client Kami</h1>

        <div id="slider-container" className="w-full overflow-hidden relative mb-5">
          {/* <DataClient/> */}
          <MarqueeButton/>
          <KitoButtons/>
        </div>
      </div>

      {/* KEUNGGULAN */}
      <div className="flex flex-col items-center px-2 md:px-5 mt-10 md:mt-0 xl:mt-5" data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom">
        <h1 className="mt-6 text-md text-[#002453] md:text-2xl xl:text-3xl font-bold text-center w-3/4 md:w-full">Keunggulan Menggunakan Jasa Kami</h1>
        <div className="bg-gray-100 mt-8 rounded-2xl py-5 px-5 md:px-8 w-full md:w-3/4 lg:w-3/5 xl:w-1/2 text-[#4B5563] text-[11px] md:text-lg lg:text-lg xl:text-xl font-semibold">
          <div className="flex flex-row items-center gap-5">
            <div className="flex-none w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 ring-4 ring-blue-200 backdrop-blur-lg">
              <PiCheckCircleFill className="text-[#002453] w-5 h-5" />
            </div>            
            <p>Legal</p>
          </div>
          <div className="flex flex-row items-center gap-5 mt-8">
            <div className="flex-none w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 ring-4 ring-blue-200 backdrop-blur-lg">
              <PiCheckCircleFill className="text-[#002453] w-5 h-5" />
            </div>
            <p>Pemberdayaan ekonomi Pemasyarakatan</p>
          </div>
          <div className="flex flex-row items-center gap-5 mt-8">
            <div className="flex-none w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 ring-4 ring-blue-200 backdrop-blur-lg">
              <PiCheckCircleFill className="text-[#002453] w-5 h-5" />
            </div>
            <p>Sistem Prabayar</p>
          </div>
          <div className="flex flex-row items-center gap-5 mt-8">
            <div className="flex-none w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 ring-4 ring-blue-200 backdrop-blur-lg">
              <PiCheckCircleFill className="text-[#002453] w-5 h-5" />
            </div>
            <p id="partnerSection">Pemantauan Berjenjang</p>
          </div>
        </div>
      </div>

      {/* KERJASAMA */}
      <div className="flex flex-col justify-center items-center text-center text-lg px-5 mt-10 gap-5 md:gap-10 xl:gap-16 xl:py-5 bg-gray-100">
        <h1 className=" mt-10 text-lg lg:text-2xl xl:text-3xl font-bold"
         data-aos="fade-up"
         data-aos-offset="200"
         data-aos-delay="50"
         data-aos-duration="500"
         data-aos-easing="ease-in-out"
         data-aos-mirror="true"
         data-aos-once="false"
         data-aos-anchor-placement="top-bottom">
          Kerjasama Dan Pengembangan</h1>
        <p className="text-[#4B5563] w-full md:w-[80%] lg:w-3/4 text-xs md:text-xs lg:text-[15px] xl:text-xl text-left md:text-center"
         data-aos="fade-up"
         data-aos-offset="200"
         data-aos-delay="50"
         data-aos-duration="500"
         data-aos-easing="ease-in-out"
         data-aos-mirror="true"
         data-aos-once="false"
         data-aos-anchor-placement="top-bottom"
        >Palapa Teknologi telah menjalin beberapa kerjasama penting dengan Kementerian Hukum dan Hak
           Asasi Manusia Republik Indonesia melalui Direktorat Jenderal Pemasyarakatan, sebagai berikut:</p>
        <button 
        onClick={() => setIsCooperationModalOpen(true)}
        className="rounded-lg bg-blue-500 text-white text-[8px] md:text-[10px] xl:text-lg w-[40%] md:w-1/5 lg:w-[15%] xl:w-[15%] py-0 xl:py-2 mb-10"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom">
          Lihat lebih detail</button>
        <ModalCooperation 
          isOpen={isCooperationModalOpen} 
          onClose={() => setIsCooperationModalOpen(false)} 
        />
      </div>

      {/* NILAI DASAR */}
      <div className="flex flex-col h-screen md:h-full md:pb-24 items-center text-center px-5 xl:px-10 mt-5 md:mt-20 gap-10 text-[#4B5563]">
        <h1 className="mt-10 text-xl md:text-2xl xl:text-3xl font-bold text-blue-500"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
        >Nilai-Nilai Dasar<br/>Perusahaan</h1>
        <p className="w-full md:w-[90%] text-sm font-semibold md:text-[12px] lg:text-[15px] xl:text-xl text-start hidden md:block"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
        >PT Palapa Teknologi Indonesia adalah perusahaan yang berkomitmen untuk menjadi pemimpin
          dalam bidang teknologi informasi dan solusi digital di Indonesia. Dengan mengedepankan nilai-nilai
          IKHLAS dalam setiap aspek operasionalnya, perusahaan ini berusaha untuk menciptakan lingkungan
          kerja yang profesional, inovatif, dan berkelanjutan. Berikut adalah penjabaran nilai IKHLAS yang
          diterapkan oleh PT Palapa Teknologi Indonesia:</p>
        <div className="mt-5 lg:mt-20" 
        >
          <IkhlasDisplay />
        </div>
      </div>
      
      {/* HUBUNGI KAMI */}
      <div id="contactSection" className="bg-blue-100 bg-opacity-40 flex justify-center items-center px-3  md:px-8 xl:px-16 md:py-5 xl:py-12 mt-40 md:mt-1">
        <Contact />
      </div>

      {/* FOOTER */}
      <div>
        <Footer/>
      </div>
    </div>
  );
}
// cake