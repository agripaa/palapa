

"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import React from 'react';
import { RiMapPin2Fill, RiWhatsappLine, RiMailCheckLine, RiPhoneFill } from 'react-icons/ri';
import { RiBuildingFill } from "react-icons/ri";

export default function Contact() {

    return (
      <div id="heroSection" className="w-full font-inter overflow-hidden">
        
        
        <div className="flex flex-col gap-2 md:mt-40 py-12 md:py-20 justify-center ">
        <Navbar/>

        
    {/* content */}
    <section className="w-full max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 min-h-[200px]" id='contact'>
        
    {/* Bagian Kiri - Informasi Kontak */}
    <div className="flex flex-col gap-5 h-full flex-1">
      <h2 className="text-4xl font-semibold text-black text-left">
        Hubungi Kami
      </h2>
      <div className='flex'> 
            <RiBuildingFill className="text-[#3882F5] text-2xl shrink-0 mr-4" />
            <p className="text-gray-700 text-base">GRAHA PASOPATI NUSANTARA</p>
      </div>
      <div className='flex w-full'> 
        <RiMapPin2Fill className="text-[#3882F5] text-2xl shrink-0 mr-4" />
        <span className="flex flex-col tracking-[0.0025em]">
          <p className="text-gray-700 text-base">Jl.Raya Gempol Kavling II</p>
          <p className="text-gray-700 text-base">Gempol Kel, Ceger, Kec. Cipayung,</p>
          <p className="text-gray-700 text-base">Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13820</p>
        </span>
      </div>

      {/* Card Kontak - Dibuat Sejajar */}
      <div className="flex flex-col md:flex-row gap-4 mt-4 h-auto">
        {/* Nomor Telepon */}
        <div className="flex flex-col justify-between bg-white rounded-2xl p-4 w-full md:w-auto border border-[#DAE5EB] gap-4">
          <div className="flex items-center gap-2">
            <div className='flex justify-center bg-[#E7F0FD] p-2 rounded-full mr-2'>
                <RiWhatsappLine className="text-black text-xl" />
            </div>
            <div className='flex flex-col'>
              <h3 className="text-md font-semibold text-black">Nomor Telepon</h3>
              <p className="text-gray-700 text-sm mt-1">+62 812-1234-8615</p>
            </div>
          </div>
          <button className="mt-auto text-black bg-[#E7F0FD] px-4 py-2 rounded-xl w-full">
            Chat Via WhatsApp
          </button>
        </div>

        {/* Email */}
        <div className="flex flex-col bg-white rounded-2xl p-4 w-full md:w-auto border border-[#DAE5EB] gap-4">
          <div className="flex items-center gap-2">
            <div className='flex justify-center bg-[#E7F0FD] p-2 rounded-full mr-2'>
                <RiMailCheckLine className="text-black text-xl" />
            </div>
            <div className='flex flex-col'>
                    <h3 className="text-md font-semibold text-black">Email</h3>
                    <p className="text-gray-700 text-sm mt-1">palapateknologi@gmail.com</p>
                </div>
          </div>
          <button className="mt-auto text-black bg-[#E7F0FD] px-4 py-2 rounded-lg w-full">
            Contact Via Email
          </button>
        </div>
      </div>
    </div>

    {/* Bagian Kanan - Google Maps (Menyesuaikan Tinggi Konten Kiri) */}
    <div className="w-full rounded-lg overflow-hidden shadow-md flex-1 h-full">
      <iframe
        title="Google Maps"
        className="w-full h-full min-h-[100px] rounded-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.6196948688334!2d106.89035037418397!3d-6.31358696178271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69edfe6ea481f9%3A0xd2ded6731b79fb6!2sGRAHA%20PASOPATI%20NUSANTARA!5e0!3m2!1sid!2sid!4v1741107375046!5m2!1sid!2sid"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

  </section>

          {/* foter */}
        </div>
          <Footer/>

      
      </div>
    );
}